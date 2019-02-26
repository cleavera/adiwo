import { Relationship, Schema } from '@skimp/schema';
import { PlayerSchema } from './player';
import { QuizSchema } from './quiz';

@Schema('session')
@Relationship(QuizSchema, 1)
@Relationship(PlayerSchema)
export class SessionSchema {
}
