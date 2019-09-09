import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Api } from '@skimp/client';
import { AppComponent } from './components/app/app.component';
import { NewSessionComponent } from './components/new-session/new-session.component';
import { SessionListComponent } from './components/session-list/session-list.component';
import { CoreRoutingModule } from './core.routes';
import { IdPipe } from './pipes/id.pipe';

@NgModule({
    declarations: [
        AppComponent,
        NewSessionComponent,
        IdPipe,
        SessionListComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        CoreRoutingModule
    ],
    providers: [
        {
            provide: Api,
            useValue: new Api('http://localhost:1337')
        }
    ],
    bootstrap: [AppComponent]
})
export class CoreModule {
}
