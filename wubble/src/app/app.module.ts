import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RightBlockComponent } from './Components/right-block/right-block.component';
import { MidBlockComponent } from './Components/mid-block/mid-block.component';
import { LeftBlockComponent } from './Components/left-block/left-block.component';
import { SearchComponent } from './Components/search/search.component';
import { LogoComponent } from './Components/logo/logo.component';
import { ApplicationComponent } from './Components/application/application.component';
import { ChangeuserNameComponent } from './Components/changeuser-name/changeuser-name.component';
import { FormsModule } from '@angular/forms';
import { RightComponent } from './Components/Messages/right/right.component';
import { LeftComponent } from './Components/Messages/left/left.component';


@NgModule({
  declarations: [
    AppComponent,
    RightBlockComponent,
    MidBlockComponent,
    LeftBlockComponent,
    SearchComponent,
    LogoComponent,
    ApplicationComponent,
    ChangeuserNameComponent,
    RightComponent,
    LeftComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
