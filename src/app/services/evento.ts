export class Evento {
    public cod_evento: string
    public nome_evento: string
    public cod_oficina: string
    public nome_oficina: string
    public local_oficina: string
    public nome_instrut: string
    public dt_inicio: string
    public dt_fim: string
    public inter_inicio: string
    public inter_fim: string

    constructor(){
        this.cod_evento = ""
        this.nome_evento = ""
        this.cod_oficina = ""
        this.nome_oficina = ""
        this.local_oficina = ""
        this.nome_instrut = ""
        this.dt_inicio = ""
        this.dt_fim = ""
        this.inter_inicio = ""
        this.inter_fim = ""
    }
}
