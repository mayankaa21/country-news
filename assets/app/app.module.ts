import { UserService } from './user.service';
import { RouterModule, Routes } from '@angular/router';


import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { HeadnewsComponent } from './headnews/headnews.component';
import { NavlinkComponent } from './navlink/navlink.component';
import { InitialnewsComponent } from './initialnews/initialnews.component';

const approute: Routes = [
  {path:'', component:InitialnewsComponent,pathMatch:'full'},
  {path:'news/:id', component:HeadnewsComponent},
  {path: '**', redirectTo:''}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadnewsComponent,
    NavlinkComponent,
    InitialnewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(approute,{enableTracing:true})
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
