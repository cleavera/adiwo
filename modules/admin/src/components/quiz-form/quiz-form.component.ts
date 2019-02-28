import { QuizSchema } from '@adiwo/domain';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { $isNull, Maybe } from '@cleavera/utils';
import { Api } from '@skimp/client';
import { ResourceLocation } from '@skimp/core';
import { Uri } from '@skimp/http';

@Component({
    selector: 'admin-quiz-form',
    styleUrls: ['./quiz-form.component.scss'],
    templateUrl: './quiz-form.component.html'
})
export class QuizFormComponent {
    public quiz: Maybe<QuizSchema> = null;
    private _api: Api;

    constructor(@Inject(Api) api: Api, activatedRoute: ActivatedRoute) {
        this._api = api;

        activatedRoute.paramMap.subscribe(async(map: ParamMap) => {
            if (map.get('quizId') === 'new') {
                this.quiz = new QuizSchema();
            } else {
                this.quiz = await this._api.get(QuizSchema, ResourceLocation.fromUrl(new Uri(map.get('quizId') as string)));
            }
        });
    }

    public async onSubmit(e: Event): Promise<void> {
        e.preventDefault();

        if ($isNull(this.quiz)) {
            throw new Error('No quiz');
        }

        await this._api.save(this.quiz);
    }

    public onChangeName(value: string): void {
        if ($isNull(this.quiz)) {
            throw new Error('No quiz');
        }

        this.quiz.name = value;
    }
}
