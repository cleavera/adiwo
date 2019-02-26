import { Field, Relationship, Schema } from '@skimp/schema';
import { Required, StringType } from '@skimp/validation';
import { QuestionSchema } from './question';

@Schema('option')
@Relationship(QuestionSchema, 1)
export class OptionSchema {
    @Required
    @StringType
    @Field()
    public description!: string;
}
