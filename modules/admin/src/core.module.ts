import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Api } from '@skimp/client';
import { AppComponent } from './components/app/app.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';

@NgModule({
    declarations: [
        AppComponent,
        QuizListComponent
    ],
    imports: [
        BrowserModule
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
