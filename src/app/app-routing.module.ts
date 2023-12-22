import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListComponent } from "./components/list/list.component";


const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListComponent }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
