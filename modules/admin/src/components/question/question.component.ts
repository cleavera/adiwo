import { QuestionSchema } from '@adiwo/domain';
import { Component, Input } from '@angular/core';
import { Maybe } from '@cleavera/utils';

@Component({
    selector: 'admin-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
    @Input()
    public question: Maybe<QuestionSchema> = null;

    @Input()
    public quiz: Maybe<QuestionSchema> = null;
}
