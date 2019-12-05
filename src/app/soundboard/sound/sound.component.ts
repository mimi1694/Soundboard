import { Component, Input } from '@angular/core';

@Component({
  selector: 'sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss']
})
export class SoundComponent {
    @Input() soundSrc: string;
    @Input() soundText: string;

    constructor() {}

    playSound(audio: HTMLAudioElement) {
      audio.play();
    }
}