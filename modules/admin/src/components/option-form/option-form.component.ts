import { OptionSchema, QuestionSchema } from '@adiwo/domain';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { $isNull, Maybe } from '@cleavera/utils';
import { Api, Model } from '@skimp/client';
import { ResourceLocation } from '@skimp/core';
import { Uri } from '@skimp/http';

@Component({
    selector: 'admin-option-form',
    styleUrls: ['./option-form.component.scss'],
    templateUrl: './option-form.component.html'
})
export class OptionFormComponent {
    public option: Maybe<OptionSchema> = null;
    public question: Maybe<QuestionSchema> = null;
    private _api: Api;

    constructor(@Inject(Api) api: Api, activatedRoute: ActivatedRoute) {
        this._api = api;

        activatedRoute.paramMap.subscribe(async(map: ParamMap) => {
            this.question = await this._api.get(QuestionSchema, ResourceLocation.fromUrl(new Uri(map.get('questionId') as string)));

            if (map.get('optionId') === 'new') {
                this.option = new OptionSchema();
                Model.addRelationship(this.option, this.question);
            } else {
                this.option = await this._api.get(OptionSchema, ResourceLocation.fromUrl(new Uri(map.get('optionId') as string)));
            }
        });
    }

    public async onRemove(): Promise<void> {
        if ($isNull(this.option)) {
            throw new Error('No option');
        }

        const location: Maybe<ResourceLocation> = Model.getLocation(this.option);

        if ($isNull(location)) {
            throw new Error('No option');
        }

        await this._api.remove(location);
    }

    public async onSubmit(e: Event): Promise<void> {
        e.preventDefault();

        if ($isNull(this.option)) {
            throw new Error('No option');
        }

        await this._api.save(this.option);
    }

    public onChangeDescription(value: string): void {
        if ($isNull(this.option)) {
            throw new Error('No option');
        }

        this.option.description = value;
    }
}
