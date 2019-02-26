import { Field, Relationship, Schema } from '@skimp/schema';
import { Required, StringType } from '@skimp/validation';
import { QuestionSchema } from './question';
import { SessionSchema } from './session';

@Schema('quiz')
@Relationship(QuestionSchema)
@Relationship(SessionSchema)
export class QuizSchema {
    @Required
    @StringType
    @Field()
    public name!: string;
}
