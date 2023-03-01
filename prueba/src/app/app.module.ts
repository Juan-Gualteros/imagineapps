import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LookingForComponent } from './looking-for/looking-for.component';
import { DiscountComponent } from './discount/discount.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { SpaceComponent } from './space/space.component';
import { NearLocationComponent } from './near-location/near-location.component';
import { IdeasComponent } from './ideas/ideas.component';
import { EmpowerComponent } from './empower/empower.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LookingForComponent,
    DiscountComponent,
    SolutionsComponent,
    SpaceComponent,
    NearLocationComponent,
    IdeasComponent,
    EmpowerComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
