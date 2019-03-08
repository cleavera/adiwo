import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'quizzes',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];

export const CoreRoutingModule: ModuleWithProviders = RouterModule.forRoot(ROUTES);
