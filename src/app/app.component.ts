import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soundboard',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  quote: string;
  quotes: Array<string> = [
    "True story. No glory.",
    "Take a deep breath, time to focus on you.",
    "If I’m shinin’ everybody gonna shine.",
    "Thick thighs save lives.",
    "I am my inspiration.",
    "I’m like chardonnay, I get better over time.",
    "I’ma do my thing, no apologies.",
    "Woke up feelin’ like I just might run for president.",
    "I’m not a snack at all - Look, baby, I’m the whole damn meal.",
    "Got nothing to prove, but I'ma show you how I do.",
    "A me, myself kinda attitude",
    "That's the sound of me not calling you back",
    "Baby how you feelin? Feeling good as hell."
  ];

  constructor() { }

  ngOnInit(): void {
    this.quote = this.getQuote();
  }
 
  private getQuote(): string {
    const randomNumber = Math.floor(Math.random() * this.quotes.length);
    console.warn(randomNumber, this.quotes[randomNumber]);
    return this.quotes[randomNumber];
  }
}
