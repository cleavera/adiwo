import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewSessionComponent } from './components/new-session/new-session.component';
import { SessionListComponent } from './components/session-list/session-list.component';

const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'sessions',
        pathMatch: 'full'
    },
    {
        path: 'sessions',
        children: [
            {
                path: 'new',
                component: NewSessionComponent
            },
            {
                path: '',
                component: SessionListComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/404'
    }
];

export const CoreRoutingModule: ModuleWithProviders = RouterModule.forRoot(ROUTES);
