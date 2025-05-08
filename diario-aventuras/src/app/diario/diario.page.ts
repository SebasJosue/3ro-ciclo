import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diario',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
})
export class DiarioPage implements OnInit {
  titulo: string = '';
  descripcion: string = '';
  entradas: any[] = [];

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.cargarEntradas();
  }

  async guardarEntrada() {
    const nueva = { titulo: this.titulo, descripcion: this.descripcion };
    this.entradas.push(nueva);
    await this.storage.set('entradas', this.entradas);
    this.titulo = '';
    this.descripcion = '';
  }

  async cargarEntradas() {
    const data = await this.storage.get('entradas');
    this.entradas = data || [];
  }
}
