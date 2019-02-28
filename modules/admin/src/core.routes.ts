import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
                component: QuizFormComponent
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
