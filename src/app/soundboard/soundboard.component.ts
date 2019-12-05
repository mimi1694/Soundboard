import { Component, Input } from '@angular/core';

@Component({
  selector: 'soundboard',
  templateUrl: './soundboard.component.html',
  styleUrls: ['./soundboard.component.scss']
})
export class SoundboardComponent {
    amen: string = "../../assets/amen.mp3";
    lizzo_amen: string = "../../assets/lizzoAmen.mp3";
    laugh: string = "../../assets/laugh.mp3";

    constructor() {}

}