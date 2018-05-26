import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { MembermgComponent } from './membermg/membermg.component';
import { BasicsetComponent } from './basicset/basicset.component';
import { IndexmoduleComponent } from './indexmodule/indexmodule.component';
import { SetingmoduleComponent } from './setingmodule/setingmodule.component';
import { TeamfilesComponent } from './teamfiles/teamfiles.component';
import { DiscussmoduleComponent } from './discussmodule/discussmodule.component';
const routes: Routes = [
  // 设置默认跳转路由， full表示与path为空的路由完全匹配
  { path: '', redirectTo: '/setingmodule', pathMatch: 'full' },
  { path: 'heroes', component: ProductComponent },


  { path: 'indexmodule', component: IndexmoduleComponent },
  { path: 'discussmodule', component: DiscussmoduleComponent },
  { path: 'setingmodule', component: SetingmoduleComponent,children:[
    { path: '', component: BasicsetComponent },
    { path: 'basicset', component: BasicsetComponent },
    { path: 'teamfilesset', component: TeamfilesComponent },
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
