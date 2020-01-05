import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SoundComponent } from './sound/sound.component';
import { SoundboardComponent } from './soundboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    SoundComponent,
    SoundboardComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
})
export class SoundboardModule { }
