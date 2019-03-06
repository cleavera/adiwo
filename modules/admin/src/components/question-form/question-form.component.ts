import { QuestionSchema } from '@adiwo/domain';
import { QuizSchema } from '@adiwo/domain/dist';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { $isNull, Maybe } from '@cleavera/utils';
import { Api, Model } from '@skimp/client';
import { MODEL_REGISTER, ResourceLocation } from '@skimp/core';
import { Uri } from '@skimp/http';

@Component({
    selector: 'admin-question-form',
    styleUrls: ['./question-form.component.scss'],
    templateUrl: './question-form.component.html'
})
export class QuestionFormComponent {
    public question: Maybe<QuestionSchema> = null;
    public quiz: Maybe<QuizSchema> = null;
    private _api: Api;

    constructor(@Inject(Api) api: Api, activatedRoute: ActivatedRoute) {
        this._api = api;

        activatedRoute.paramMap.subscribe(async(map: ParamMap) => {
            this.quiz = await this._api.get(QuizSchema, ResourceLocation.fromUrl(new Uri(map.get('quizId') as string)));

            const location: Maybe<ResourceLocation> = Model.getLocation(this.quiz);

            if ($isNull(location)) {
                throw new Error('No location for quiz');
            }

            if (map.get('questionId') === 'new') {
                this.question = new QuestionSchema();
                MODEL_REGISTER.addRelationship(this.question, location);
            } else {
                this.question = await this._api.get(QuestionSchema, ResourceLocation.fromUrl(new Uri(map.get('questionId') as string)));
            }
        });
    }

    public async onSubmit(e: Event): Promise<void> {
        e.preventDefault();

        if ($isNull(this.question)) {
            throw new Error('No question');
        }

        await this._api.save(this.question);
    }

    public onChangeDescription(value: string): void {
        if ($isNull(this.question)) {
            throw new Error('No question');
        }

        this.question.description = value;
    }
}
