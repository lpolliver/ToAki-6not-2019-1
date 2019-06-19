import { Injectable } from '@angular/core';
import { Evento } from './evento';

@Injectable({
  providedIn: 'root'
})

export class EventoService {

  constructor() { }

  public getEvento(): Evento{
    let evento = new Evento()

    evento.cod_evento = " "
    evento.nome_evento = " "
    evento.cod_oficina = " "
    evento.nome_oficina = " "
    evento.local_oficina = " "
    evento.nome_instrut = " "
    evento.dt_inicio = " "
    evento.dt_fim = " "
    evento.inter_inicio = " "
    evento.inter_fim = " "

    return evento
  } 

  public listaEvento(): Evento[]{
    return [
      {
        cod_evento: "001",
        nome_evento: "techweek",
        cod_oficina: " 0001",
        nome_oficina: "Palestra de Angular",
        local_oficina: "Lab. III",
        nome_instrut: "Prof. Fausto",
        dt_inicio: "23/05/2019 10:00:00",
        dt_fim:"23/05/2019 11:30:00",
        inter_inicio: "15 min.",
        inter_fim: "15 min."
      },

      {
        cod_evento: "001",
        nome_evento: "techweek",
        cod_oficina: " 0002",
        nome_oficina: "Palestra de Node js",
        local_oficina: "Lab. III",
        nome_instrut: "Prof. Daniel",
        dt_inicio: "23/05/2019 10:00:00",
        dt_fim:"23/05/2019 11:30:00",
        inter_inicio: "15 min.",
        inter_fim: "15 min."
      }
  
    ]
  }
}
