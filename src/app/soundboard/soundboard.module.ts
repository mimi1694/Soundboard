import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SoundComponent } from './sound/sound.component';
import { SoundboardComponent } from './soundboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    SoundComponent,
    SoundboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
})
export class SoundboardModule { }
