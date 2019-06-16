import { Injectable } from '@angular/core';
import { Evento } from './evento';

@Injectable({
  providedIn: 'root'
})

export class EventoService {

  constructor() { }

  public getUsuario(): Evento{
    let evento = new Evento()

    evento.cod_evento = " "
    evento.nome_evento = " "

    return evento
  } 

  public listaUsuario(): Evento[]{
    return [
      {
        cod_evento: " ",
        nome_evento: " "
      },
  
    ]
  }
}
