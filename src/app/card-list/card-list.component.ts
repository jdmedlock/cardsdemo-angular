import { Component } from '@angular/core';
import { cards } from '../cards';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  cards = cards;

  share() {
    window.alert('The product has been shared!');
  }
}