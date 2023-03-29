import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { BestSellingProdcutComponent } from './best-selling-prodcut/best-selling-prodcut.component';
import { CardContentComponent } from './card-content/card-content.component';
import { FlexCardComponent } from './flex-card/flex-card.component';
import { ReviewCardComponent } from './review-card/review-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentDetailsComponent,
    BestSellingProdcutComponent,
    CardContentComponent,
    FlexCardComponent,
    ReviewCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
