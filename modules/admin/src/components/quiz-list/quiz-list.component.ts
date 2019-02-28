import { QuizSchema } from '@adiwo/domain';
import { Component, Inject } from '@angular/core';
import { Api } from '@skimp/client';

@Component({
    selector: 'admin-quiz-list',
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent {
    public quizzes: Promise<Array<QuizSchema>>;

    constructor(@Inject(Api) api: Api) {
        this.quizzes = api.list(QuizSchema);
    }
}
