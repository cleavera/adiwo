import { OptionSchema, QuestionSchema } from '@adiwo/domain';
import { Component, Inject, Input } from '@angular/core';
import { $isNull, Maybe } from '@cleavera/utils';
import { Api, Model } from '@skimp/client';
import { ResourceLocation } from '@skimp/core';

@Component({
    selector: 'admin-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
    public question: Maybe<QuestionSchema> = null;
    public options: Maybe<Array<OptionSchema>> = null;

    @Input()
    public quiz: Maybe<QuestionSchema> = null;

    @Input('question')
    public set _question(question: QuestionSchema) {
        this.question = question;

        const optionLocations: Maybe<Array<ResourceLocation>> = Model.getRelationshipOfType(question, OptionSchema);

        if (!$isNull(optionLocations)) {
            (async(): Promise<void> => {
                this.options = await Promise.all(optionLocations.map((optionLocation: ResourceLocation) => {
                    return this._api.get(OptionSchema, optionLocation);
                }));
            })();
        }
    }

    private readonly _api: Api;

    constructor(@Inject(Api) api: Api) {
        this._api = api;
    }
}
