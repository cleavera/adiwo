import { Field, Relationship, Schema } from '@skimp/schema';
import { Required, StringType } from '@skimp/validation';
import { OptionSchema } from './option';
import { QuizSchema } from './quiz';

@Schema('question')
@Relationship(OptionSchema)
@Relationship(QuizSchema, 1)
export class QuestionSchema {
    @Required
    @StringType
    @Field()
    public description!: string;
}
