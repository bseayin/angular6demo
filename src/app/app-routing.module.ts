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
import { ProjectmgComponent } from './projectmg/projectmg.component';
import { FuncdocmgComponent } from './funcdocmg/funcdocmg.component';
import { TaskComponent} from './task/task.component';
import { TasklistComponent} from './tasklist/tasklist.component';
import { Binddemo1Component } from './binddemo1/binddemo1.component';
import { JquerydemoComponent } from './jquerydemo/jquerydemo.component';
import { ConfigComponent } from './config/config.component';
import { Fileuploaddemo1Component } from './fileuploaddemo1/fileuploaddemo1.component';
import { WikimoduleComponent } from './wikimodule/wikimodule.component';
import { TeamwikiComponent } from './teamwiki/teamwiki.component';
import { PersonalwikiComponent } from './personalwiki/personalwiki.component';
import { PersonalsettingComponent } from './personalsetting/personalsetting.component';
import { JqxchartdemoComponent } from './jqxchartdemo/jqxchartdemo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RootAppComponent } from './root-app/root-app.component';
const routes: Routes = [
  // 设置默认跳转路由， full表示与path为空的路由完全匹配
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'rootapp', component: RootAppComponent ,children:[
    { path: '', component: IndexmoduleComponent },
    { path: 'heroes', component: Fileuploaddemo1Component },
    { path: 'indexmodule', component: IndexmoduleComponent },
    { path: 'discussmodule', component: DiscussmoduleComponent },
    { path: 'wikimodule', component: WikimoduleComponent,children:[
      { path: '', component: TeamwikiComponent },
      { path: 'teamwiki', component: TeamwikiComponent },
      { path: 'personalwiki', component: PersonalwikiComponent }
    ]},
    { path: 'funcdocmg', component: FuncdocmgComponent }, 
    { path: 'task', component:TaskComponent,children:[
        {path: 'tasklist',component: TasklistComponent},
        {path: '',component: TasklistComponent},
    ]} ,
    { path: 'setingmodule', component: SetingmoduleComponent,children:[
      { path: '', component: BasicsetComponent },
      { path: 'basicset', component: BasicsetComponent },
      { path: 'projectmg', component: ProjectmgComponent },
      { path: 'teamfilesset', component: TeamfilesComponent },
      { path: 'memberset', component: MembermgComponent },
      { path: 'personsetting', component: PersonalsettingComponent }
    ] },
    { path: 'dashboard', component: CarouselComponent }


  ]},
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {'useHash': true})
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
