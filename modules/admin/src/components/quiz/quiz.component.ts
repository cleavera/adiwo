import { QuizSchema } from '@adiwo/domain';
import { Component, Inject, Input } from '@angular/core';
import { Maybe } from '@cleavera/utils';
import { Api } from '@skimp/client';

@Component({
    selector: 'admin-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
    @Input()
    public quiz: Maybe<QuizSchema> = null;

    private _api: Api;

    constructor(@Inject(Api) api: Api) {
        this._api = api;

        this._api;
    }
}
