import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NoticeComponent } from './components/notice/notice.component';


const routes: Routes = [
  { path:  '', component: HomeComponent},
  { path :'notice', component :NoticeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
