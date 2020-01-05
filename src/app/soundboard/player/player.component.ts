import { Component, Input } from '@angular/core';

interface PlayerData {
  src: string;
  time: string;
}

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
    @Input() sounds: Array<PlayerData>;

    constructor() {}

    playSound(audio: HTMLAudioElement) {
      audio.play();
    }
}