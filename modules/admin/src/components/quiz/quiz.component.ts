import { QuizSchema } from '@adiwo/domain';
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
    @Input()
    public quiz: Maybe<QuizSchema> = null;

    private readonly _api: Api;

    constructor(@Inject(Api) api: Api) {
        this._api = api;

        this._api;
    }

    public id(): string {
        if (!this.quiz) {
            throw new Error('No quiz');
        }

        const location: Maybe<ResourceLocation> = Model.getLocation(this.quiz);

        if ($isNull(location)) {
            throw new Error('Quiz does not exist');
        }

        return location.toString();
    }
}
