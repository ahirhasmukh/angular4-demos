import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagePreviewComponent,
    ToggleBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
