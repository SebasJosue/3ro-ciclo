import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular/standalone';

@Component({
  selector: 'app-clue-modal',
  templateUrl: './clue-modal.component.html',
  styleUrls: ['./clue-modal.component.scss'],
  imports: [ModalController]
})
export class ClueModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
