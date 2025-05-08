import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clicks',
  templateUrl: './clicks.component.html',
  styleUrls: ['./clicks.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class ClicksComponent {
  nombreTemp: string = '';
  nombreAnterior: string = '';
  contador: number = 0;

  onNombreChange() {
    if (this.nombreTemp !== this.nombreAnterior) {
      this.contador = 0;
      this.nombreAnterior = this.nombreTemp;
    }
  }

  incrementar() {
    this.contador++;
  }
}
