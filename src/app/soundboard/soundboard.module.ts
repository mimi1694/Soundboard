import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SoundComponent } from './sound/sound.component';
import { SoundboardComponent } from './soundboard.component';

@NgModule({
  declarations: [
    SoundComponent,
    SoundboardComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class SoundboardModule { }
