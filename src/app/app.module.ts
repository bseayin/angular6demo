import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

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
    ResumeComponent
 
  ],
  imports: [
    BrowserModule,AlertModule.forRoot(), AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
