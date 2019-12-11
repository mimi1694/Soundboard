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
    sounds: SoundData[] = [
        { sound: "../../assets/amen.mp3", text: "Amen!" },
        { sound: "../../assets/lizzoAmen.mp3", text: "Lizzo Preach" },
        { sound: "../../assets/laugh.mp3", text: "Laugh" }
    ];
    mixers: SoundData[] = [];

    constructor() {}

    ngOnInit(): void {
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          copyArrayItem(event.previousContainer.data,
                            event.container.data,
                            event.previousIndex,
                            event.currentIndex);
        }
      }
}