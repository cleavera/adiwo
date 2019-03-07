import { QuestionSchema, QuizSchema } from '@adiwo/domain';
import { Component, Inject, Input } from '@angular/core';
import { $isNull, Maybe } from '@cleavera/utils';
import { Api, Model } from '@skimp/client';
import { ResourceLocation } from '@skimp/core';

@Component({
    selector: 'admin-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
    public quiz: Maybe<QuizSchema> = null;
    public questions: Maybe<Array<QuestionSchema>> = null;

    @Input('quiz')
    public set _quiz(quiz: Maybe<QuizSchema>) {
        this.quiz = quiz;

        const questionLocations: Maybe<Array<ResourceLocation>> = Model.getRelationshipOfType(quiz, QuestionSchema);

        if (!$isNull(questionLocations)) {
            (async(): Promise<void> => {
                this.questions = await Promise.all(questionLocations.map((questionLocation: ResourceLocation) => {
                    return this._api.get(QuestionSchema, questionLocation);
                }));
            })();
        }
    }

    private readonly _api: Api;

    constructor(@Inject(Api) api: Api) {
        this._api = api;
    }
}
