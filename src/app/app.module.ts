import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { DisqusThreadComponent } from './disqus-thread/disqus-thread.component';
import { DetailSharingBlockComponent } from './detail-sharing-block/detail-sharing-block.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';

const appRoutes: Routes = [
  { path: 'detail/:id', component: DetailComponent },
  { path: '', component: ListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ListComponent,
    DetailComponent,
    DisqusThreadComponent,
    DetailSharingBlockComponent,
    DetailArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
