import { init } from '@skimp/quickstart';
import { AnswerSchema, OptionSchema, PlayerSchema, QuestionSchema, QuizSchema, SessionSchema } from '@adiwo/domain';
import { resolve } from 'path';

(async(): Promise<void> => {
    const portNumber: number = 1337;
    const dataBasePath: string = resolve('../data');

    await init(portNumber, dataBasePath, [AnswerSchema, OptionSchema, PlayerSchema, QuestionSchema, QuizSchema, SessionSchema], true);
})();
