import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserComponent } from './components/browser/browser.component';
import { ViewerComponent } from './components/viewer/viewer.component';


const routes: Routes = [
  {path:'browser',component:BrowserComponent},
  {path:'',redirectTo:'view',pathMatch:'full'},
  {path:'view/:id',component:ViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
