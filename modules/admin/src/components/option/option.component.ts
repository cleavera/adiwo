import { OptionSchema, QuestionSchema } from '@adiwo/domain';
import { Component, Input } from '@angular/core';
import { Maybe } from '@cleavera/utils';

@Component({
    selector: 'admin-option',
    templateUrl: './option.component.html',
    styleUrls: ['./option.component.scss']
})
export class OptionComponent {
    @Input()
    public option: Maybe<OptionSchema> = null;

    @Input()
    public question: Maybe<QuestionSchema> = null;

    @Input()
    public quiz: Maybe<QuestionSchema> = null;
}
