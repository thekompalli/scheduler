import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayCreatorComponent } from './day-creator/day-creator.component';
import { ContentCreatorComponent } from './content-creator/content-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    DayCreatorComponent,
    ContentCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
