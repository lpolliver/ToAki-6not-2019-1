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
        cod_evento: "E001",
        nome_evento: "TechWeek",
        cod_oficina: "001",
        nome_oficina: "Palestra de Angular",
        local_oficina: "Lab. III",
        nome_instrut: "Prof. Fausto",
        dt_inicio: "20190625 16:30",
        dt_fim:"20190625 18:00",
        inter_inicio: "15",
        inter_fim: "15"
      },

      {
        cod_evento: "E001",
        nome_evento: "Techweek",
        cod_oficina: " 0002",
        nome_oficina: "Palestra de Node js",
        local_oficina: "Lab. III",
        nome_instrut: "Prof. Daniel",
        dt_inicio: "20190625 08:30",
        dt_fim:"20190625 12:30",
        inter_inicio: "15",
        inter_fim: "15"
      }
  
    ]
  }
}
