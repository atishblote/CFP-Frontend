import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UpcomingMSliderComponent } from './components/upcoming-mslider/upcoming-mslider.component';
import { HomeComponent } from './pages/home/home.component';
import { MatchCountdownComponent } from './components/match-countdown/match-countdown.component';
import { PreviousMatchComponent } from './components/previous-match/previous-match.component';
import { CricketRankingComponent } from './components/cricket-ranking/cricket-ranking.component';
import { ArchivedBlogsComponent } from './components/archived-blogs/archived-blogs.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompletedPredictionComponent } from './pages/completed-prediction/completed-prediction.component';
import { AsideBuyUpcomingMatchComponent } from './components/aside-buy-upcoming-match/aside-buy-upcoming-match.component';
import { UpcomingPredictionComponent } from './pages/upcoming-prediction/upcoming-prediction.component';
import { TimeStampPipe } from './pipes/time-stamp.pipe';
import { BuyPlanAllComponent } from './components/buy-plan-all/buy-plan-all.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';
import { RelatedPostComponent } from './components/related-post/related-post.component';
import { AsideOnePredictionComponent } from './components/aside-one-prediction/aside-one-prediction.component';
import { ModalComponent } from './components/modal/modal.component';
import { AsideNextPredictionComponent } from './components/aside-next-prediction/aside-next-prediction.component';
import { CardHoverDirective } from './directives/card-hover.directive';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpcomingMSliderComponent,
    HomeComponent,
    MatchCountdownComponent,
    PreviousMatchComponent,
    CricketRankingComponent,
    ArchivedBlogsComponent,
    FooterComponent,
    CompletedPredictionComponent,
    AsideBuyUpcomingMatchComponent,
    UpcomingPredictionComponent,
    TimeStampPipe,
    BuyPlanAllComponent,
    BlogsComponent,
    PageNotFoundComponent,
    SingleBlogComponent,
    RelatedPostComponent,
    AsideOnePredictionComponent,
    ModalComponent,
    AsideNextPredictionComponent,
    CardHoverDirective,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OwlModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
