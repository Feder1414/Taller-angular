import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieComponent } from './serie.component';
import { SerieListarComponent } from './serie-listar/serie-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SerieComponent, SerieListarComponent],
  exports: [SerieListarComponent]
})
export class SerieModule { }
