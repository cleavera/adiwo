import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionFormComponent } from './components/option-form/option-form.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';

const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'quizzes',
        pathMatch: 'full'
    },
    {
        path: 'quizzes',
        children: [
            {
                path: 'manage/:quizId',
                children: [
                    {
                        path: 'question/:questionId',
                        children: [
                            {
                                path: 'option/:optionId',
                                component: OptionFormComponent
                            },
                            {
                                path: '',
                                component: QuestionFormComponent
                            }
                        ]
                    },
                    {
                        path: '',
                        component: QuizFormComponent
                    }
                ]
            },
            {
                path: '',
                component: QuizListComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];

export const CoreRoutingModule: ModuleWithProviders = RouterModule.forRoot(ROUTES);
