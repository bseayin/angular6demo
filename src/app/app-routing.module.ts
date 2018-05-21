import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  // 设置默认跳转路由， full表示与path为空的路由完全匹配
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: ProductComponent },
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
