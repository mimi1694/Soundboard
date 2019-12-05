import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SoundComponent } from './sound/sound.component';
import { SoundboardComponent } from './soundboard.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SoundComponent,
    SoundboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
})
export class SoundboardModule { }
