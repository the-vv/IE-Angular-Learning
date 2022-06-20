import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServicepageComponent } from './servicepage/servicepage.component';

const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  {path:'aboutpage',component:AboutpageComponent},
  {path:'servicepage',component:ServicepageComponent},
  {path:'contactpage',component:ContactpageComponent},
  {path:'blogpage',component:BlogpageComponent},
  {path:'',redirectTo:'homepage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
