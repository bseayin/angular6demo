import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { MembermgComponent } from './membermg/membermg.component';
import { BasicsetComponent } from './basicset/basicset.component';
import { IndexmoduleComponent } from './indexmodule/indexmodule.component';
import { SetingmoduleComponent } from './setingmodule/setingmodule.component';
<<<<<<< HEAD
import { TeamfilesComponent } from './teamfiles/teamfiles.component';
import { DiscussmoduleComponent } from './discussmodule/discussmodule.component';
=======
import { ProjectmgComponent } from './projectmg/projectmg.component';
import { FuncdocmgComponent } from './funcdocmg/funcdocmg.component';
>>>>>>> 95bb5eaf9799966d5cb2f2e24d32598a3a041b6b
const routes: Routes = [
  // 设置默认跳转路由， full表示与path为空的路由完全匹配
  { path: '', redirectTo: '/setingmodule', pathMatch: 'full' },
  { path: 'heroes', component: ProductComponent },
  { path: 'indexmodule', component: IndexmoduleComponent },
<<<<<<< HEAD
  { path: 'discussmodule', component: DiscussmoduleComponent },
  { path: 'setingmodule', component: SetingmoduleComponent,children:[
    { path: '', component: BasicsetComponent },
    { path: 'basicset', component: BasicsetComponent },
    { path: 'teamfilesset', component: TeamfilesComponent },
=======
  { path: 'funcdocmg', component: FuncdocmgComponent },  
  { path: 'setingmodule', component: SetingmoduleComponent,children:[
    { path: '', component: BasicsetComponent },
    { path: 'basicset', component: BasicsetComponent },
    { path: 'projectmg', component: ProjectmgComponent },
>>>>>>> 95bb5eaf9799966d5cb2f2e24d32598a3a041b6b
    { path: 'memberset', component: MembermgComponent }
  ] },
  { path: 'dashboard', component: CarouselComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
