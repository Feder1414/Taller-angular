import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-listar',
  templateUrl: './serie-listar.component.html',
  styleUrls: ['./serie-listar.component.css']
})
export class SerieListarComponent implements OnInit {
  series: Array<Serie> = [];
  promedio_temporadas: number = 0;
  
  constructor(private serieService: SerieService ) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe(
      (series) => {
        this.series = series;
        series.forEach(serie => {
          this.promedio_temporadas += serie.seasons;
        }
        )
        this.promedio_temporadas = this.promedio_temporadas / series.length; 
      }
    );
  }

  ngOnInit() {
    this.getSeries();
  }

}
