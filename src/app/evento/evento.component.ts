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
  }
}
