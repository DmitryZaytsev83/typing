import {Component} from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput($event): void {
    this.enteredText = $event.target.value;
  }

  compare(letter: string, enteredTextElement: string): string {
    if (enteredTextElement === undefined) {
      return 'gray';
    } else if (letter === enteredTextElement) {
      return 'green';
    } else {
      return 'red';
    }
  }
}
