import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListComponent } from "./components/list/list.component";
import { DataBidingComponent } from './components/data-biding/data-biding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EventComponent } from './components/event/event.component';
import { HooksComponent } from './components/hooks/hooks.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { OutputComponent } from './components/output/output.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListComponent },
  { path: 'data', component: DataBidingComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'event', component: EventComponent },
  { path: 'hooks', component: HooksComponent },
  { path: 'ifRender', component: IfRenderComponent },
  { path: 'output', component: OutputComponent }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
