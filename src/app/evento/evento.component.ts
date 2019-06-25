import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  constructor(private eventoSrv: EventoService) { }
  oficinas : any = [];

  ngOnInit() {
    try {
      this.oficinas = this.eventoSrv.listaEvento();
      console.log(this.oficinas);
    } catch (e) {
      console.error(e);
    }

    try {
      for (let i=0; i < this.oficinas.length; i++){
        this.oficinas[i].dt_inicio = this.oficinas[i].dt_inicio.slice(6,8) + "/" +
                                     this.oficinas[i].dt_inicio.slice(4,6) + "/" +
                                     this.oficinas[i].dt_inicio.slice(0,4) + " " +
                                     this.oficinas[i].dt_inicio.slice(9,11) + ":" +
                                     this.oficinas[i].dt_inicio.slice(12,14);
      }
    } catch (e) {
      console.error(e);
    }
  }

}
