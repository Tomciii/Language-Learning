import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {FlashcardComponent} from "./components/flashcard/flashcard.component";
import {TopicTableComponent} from "./pages/topic-table/topic-table.component";



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'table/:pageName', component: TopicTableComponent },
  { path: 'flashcards', component: FlashcardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
