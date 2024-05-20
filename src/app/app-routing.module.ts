import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompletedPredictionComponent } from './pages/completed-prediction/completed-prediction.component';
import { UpcomingPredictionComponent } from './pages/upcoming-prediction/upcoming-prediction.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "complete-prediction/:id", component: CompletedPredictionComponent },
  { path: "blogs", component: BlogsComponent },
  { path: "upcoming-prediction/:id", component: UpcomingPredictionComponent },
  { path: "single-blog/:id", component: SingleBlogComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
