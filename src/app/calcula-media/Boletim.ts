// boletim.ts
export class Boletim {
    private bim1: number;
    private bim2: number;
    private bim3: number;
    private bim4: number;
    private mediaParcial: number | null;
    private notaAvaliacaoFinal: number | null;
    private mediaFinal: number | null;
    private situacao: string;
  
    constructor() {
      this.bim1 = 0;
      this.bim2 = 0;
      this.bim3 = 0;
      this.bim4 = 0;
      this.mediaParcial = null;
      this.notaAvaliacaoFinal = null;
      this.mediaFinal = null;
      this.situacao = 'Cursando';
    }
  
    calcularMediaParcial(): void {
      this.mediaParcial = (this.bim1 * 2 + this.bim2 * 2 + this.bim3 * 3 + this.bim4 * 3) / 10;
      this.definirSituacao();
    }
  
    private definirSituacao(): void {
      if (this.mediaParcial === null) {
        this.situacao = 'Cursando';
      } else if (this.mediaParcial >= 60) {
        this.situacao = 'Aprovado(a)';
      } else if (this.mediaParcial >= 10) {
        this.situacao = 'Avaliação final';
      } else {
        this.situacao = 'Reprovado(a)';
      }
    }
  
    public registrarNotas(bim1: number, bim2: number, bim3: number, bim4: number): void {
      this.bim1 = bim1;
      this.bim2 = bim2;
      this.bim3 = bim3;
      this.bim4 = bim4;
      this.calcularMediaParcial();
    }
  
    public registrarNotaAvaliacaoFinal(naf: number): void {
      if (this.situacao === 'Avaliação final') {
        this.notaAvaliacaoFinal = naf;
        this.mediaFinal = (this.mediaParcial! + naf) / 2;
        this.situacao = this.mediaFinal >= 60 ? 'Aprovado(a)' : 'Reprovado(a)';
      }
    }
  
    public getSituacao(): string {
      return this.situacao;
    }
  
    public getMediaParcial(): number | null {
      return this.mediaParcial;
    }
  
    public getMediaFinal(): number | null {
      return this.mediaFinal;
    }
  
    public getNotas(): { bim1: number, bim2: number, bim3: number, bim4: number, notaAvaliacaoFinal: number | null } {
      return { bim1: this.bim1, bim2: this.bim2, bim3: this.bim3, bim4: this.bim4, notaAvaliacaoFinal: this.notaAvaliacaoFinal };
    }
  }
  