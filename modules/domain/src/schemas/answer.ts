import { Relationship, Schema } from '@skimp/schema';
import { OptionSchema } from './option';
import { PlayerSchema } from './player';

@Schema('answer')
@Relationship(PlayerSchema, 1)
@Relationship(OptionSchema, 1)
export class AnswerSchema {
}
