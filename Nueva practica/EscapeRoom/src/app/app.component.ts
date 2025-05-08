import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ClueModalComponent } from './clue-modal/clue-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, ClueModalComponent],
})
export class AppComponent {
  constructor() {}
}
