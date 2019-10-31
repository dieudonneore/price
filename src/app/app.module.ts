import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { NewsComponent } from './news/news.component';
import { MediaComponent } from './media/media.component';
import { PollsComponent } from './polls/polls.component';
import { RessourcesComponent } from './ressources/ressources.component';
import {MaterialModule} from "./material/material.module";
import {MatGridListModule} from "@angular/material";
import { SidecontentComponent } from './sidecontent/sidecontent.component';
import { CentercontentComponent } from './centercontent/centercontent.component';
import { RightcontentComponent } from './rightcontent/rightcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutpageComponent,
    NewsComponent,
    MediaComponent,
    PollsComponent,
    RessourcesComponent,
    SidecontentComponent,
    CentercontentComponent,
    RightcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
