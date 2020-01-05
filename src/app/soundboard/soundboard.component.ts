import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

interface SoundData {
    sound: string;
    text: string;
}

@Component({
  selector: 'soundboard',
  templateUrl: './soundboard.component.html',
  styleUrls: ['./soundboard.component.scss']
})
export class SoundboardComponent implements OnInit {
    bytes: SoundData[] = [
      { sound: "../../assets/amen.mp3", text: "Amen!" },
      { sound: "../../assets/lizzoAmen.mp3", text: "Preach" },
      { sound: "../../assets/laugh.mp3", text: "Laugh" }
    ];

    beats: SoundData[] = [
      { sound: "../../assets/funk_city.mp3", text: "Funky" },
      { sound: "../../assets/retro_gamer.mp3", text: "Retro" },
      { sound: "../../assets/slammin.mp3", text: "Slammin" },
      { sound: "../../assets/upstep.mp3", text: "Up Step" }
    ];

    mixers: SoundData[] = [];

    constructor() {}

    ngOnInit(): void {
    }
}