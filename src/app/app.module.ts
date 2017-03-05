import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { VideoService } from './service/video.service';
import { PlayerComponent } from './components/player/player.component';
import { SafePipe } from './pipes/safe.pipe';
import { FilterFilmPipe } from './pipes/filter-film.pipe';
import { VideoDetailsComponent } from './components/video-details/video-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    VideoListComponent,
    PlayerComponent,
    SafePipe,
    FilterFilmPipe,
    VideoDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  entryComponents: [PlayerComponent],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
