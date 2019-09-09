import { QuizSchema } from '@adiwo/domain';
import { SessionSchema } from '@adiwo/domain/dist';
import { Component, Inject } from '@angular/core';
import { $isNull, Maybe } from '@cleavera/utils';
import { Api } from '@skimp/client';
import { MODEL_REGISTER, ResourceLocation } from '@skimp/core';
import { Uri } from '@skimp/http';

@Component({
    selector: 'host-new-session',
    templateUrl: './new-session.component.html',
    styleUrls: ['./new-session.component.scss']
})
export class NewSessionComponent {
    public quizzes: Promise<Array<QuizSchema>>;
    public selectedQuiz: Maybe<string> = null;

    private readonly _api: Api;

    constructor(@Inject(Api) api: Api) {
        this.quizzes = api.list(QuizSchema);
        this._api = api;
    }

    public async onSubmit($event: Event): Promise<void> {
        $event.preventDefault();

        if ($isNull(this.selectedQuiz)) {
            throw new Error('No quiz selected');
        }

        const session: SessionSchema = new SessionSchema();
        MODEL_REGISTER.addRelationship(session, ResourceLocation.fromUrl(new Uri(this.selectedQuiz)));

        await this._api.save(session);
    }

    public onChangeQuiz(newQuiz: string): void {
        this.selectedQuiz = newQuiz;
    }
}
