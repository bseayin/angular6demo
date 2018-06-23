import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './/app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SubnavbarComponent } from './subnavbar/subnavbar.component';
import { MembermgComponent } from './membermg/membermg.component';
import { BasicsetComponent } from './basicset/basicset.component';
import { IndexmoduleComponent } from './indexmodule/indexmodule.component';
import { SetingmoduleComponent } from './setingmodule/setingmodule.component';
import { TeamfilesComponent } from './teamfiles/teamfiles.component';
import { DiscussmoduleComponent } from './discussmodule/discussmodule.component';
import { ProjectmgComponent } from './projectmg/projectmg.component';
import { FuncdocmgComponent } from './funcdocmg/funcdocmg.component';
import { ResumeComponent } from './resume/resume.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskComponent } from './task/task.component';
import { Binddemo1Component } from './binddemo1/binddemo1.component';
import { JquerydemoComponent } from './jquerydemo/jquerydemo.component';
import { Httpdemo2Component } from './httpdemo2/httpdemo2.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { Fileuploaddemo1Component } from './fileuploaddemo1/fileuploaddemo1.component';
import { WikimoduleComponent } from './wikimodule/wikimodule.component';
import { TeamwikiComponent } from './teamwiki/teamwiki.component';
import { PersonalwikiComponent } from './personalwiki/personalwiki.component';
import { PersonalsettingComponent } from './personalsetting/personalsetting.component';
import { JqxchartdemoComponent } from './jqxchartdemo/jqxchartdemo.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { LoginComponent } from './login/login.component';
import { RootAppComponent } from './root-app/root-app.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    SidenavComponent,
    SubnavbarComponent,
    MembermgComponent,
    BasicsetComponent,
    IndexmoduleComponent,
    SetingmoduleComponent,
    TeamfilesComponent,
    DiscussmoduleComponent,
    ProjectmgComponent,
    FuncdocmgComponent,
    ResumeComponent,
    TasklistComponent,
    TaskComponent,
    Binddemo1Component,
    JquerydemoComponent,
    Httpdemo2Component,
    ConfigComponent,
    Fileuploaddemo1Component,
    WikimoduleComponent,
    TeamwikiComponent,
    PersonalwikiComponent,
    PersonalsettingComponent,
    JqxchartdemoComponent,
    LoginComponent,
    RootAppComponent,
    RegisterComponent
 
  ],
  imports: [
    BrowserModule,AlertModule.forRoot(), AppRoutingModule,FormsModule,HttpClientModule,CommonModule,FileUploadModule,NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
