import { init } from '@skimp/quickstart';
import { AnswerSchema } from './schemas/answer';
import { OptionSchema } from './schemas/option';
import { PlayerSchema } from './schemas/player';
import { QuestionSchema } from './schemas/question';
import { QuizSchema } from './schemas/quiz';
import { SessionSchema } from './schemas/session';

import { resolve } from 'path';

(async(): Promise<void> => {
    const portNumber: number = 1337;
    const dataBasePath: string = resolve('../data');

    await init(portNumber, dataBasePath, [AnswerSchema, OptionSchema, PlayerSchema, QuestionSchema, QuizSchema, SessionSchema]);
})();
