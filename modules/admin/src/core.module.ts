import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Api } from '@skimp/client';
import { AppComponent } from './components/app/app.component';
import { OptionFormComponent } from './components/option-form/option-form.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { QuestionComponent } from './components/question/question.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { CoreRoutingModule } from './core.routes';
import { IdPipe } from './pipes/id.pipe';

@NgModule({
    declarations: [
        AppComponent,
        IdPipe,
        OptionFormComponent,
        QuestionComponent,
        QuestionFormComponent,
        QuizComponent,
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
