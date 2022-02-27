import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleTodoComponent } from './simple-todo/simple-todo.component';

const routes: Routes = [
  { path: '**', component: SimpleTodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
