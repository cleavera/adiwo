import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Api } from '@skimp/client';
import { AppComponent } from './components/app/app.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { CoreRoutingModule } from './core.routes';

@NgModule({
    declarations: [
        AppComponent,
        QuizListComponent,
        QuizFormComponent
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
