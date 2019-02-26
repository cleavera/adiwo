import { Field, Relationship, Schema } from '@skimp/schema';
import { StringType } from '@skimp/validation';
import { AnswerSchema } from './answer';
import { SessionSchema } from './session';

@Schema('player')
@Relationship(SessionSchema, 1)
@Relationship(AnswerSchema)
export class PlayerSchema {
    @StringType
    @Field()
    public name!: string;
}
