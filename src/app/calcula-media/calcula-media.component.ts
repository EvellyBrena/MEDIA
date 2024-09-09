// calcula-media.component.ts
import { Component } from '@angular/core';
import { Boletim } from './boletim';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrls: ['./calcula-media.component.css']
})
export class CalculaMediaComponent {
  bim1: number = 0;
  bim2: number = 0;
  bim3: number = 0;
  bim4: number = 0;
  notaAvaliacaoFinal: number = 0;
  mediaParcial: number | null = null;
  mediaFinal: number | null = null;
  situacao: string = '';

  boletim: Boletim = new Boletim();

  calcularMedia(): void {
    this.boletim.registrarNotas(this.bim1, this.bim2, this.bim3, this.bim4);
    this.mediaParcial = this.boletim.getMediaParcial();
    this.situacao = this.boletim.getSituacao();
  }

  calcularMediaFinal(): void {
    this.boletim.registrarNotaAvaliacaoFinal(this.notaAvaliacaoFinal);
    this.mediaFinal = this.boletim.getMediaFinal();
    this.situacao = this.boletim.getSituacao();
  }
}

