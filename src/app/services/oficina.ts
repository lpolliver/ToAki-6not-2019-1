export class Oficina {
    public cod_oficina: string
    public nome_oficina: string
    public local_oficina: string
    public nome_instrut: string
    public dt_inicio: string
    public dt_fim: string
    public inter_inicio: string
    public inter_fim: string

    constructor(){
        this.cod_oficina = " 0001"
        this.nome_oficina = "Palestra de Angular"
        this.local_oficina = "Lab. III"
        this.nome_instrut = "Prof. Fausto"
        this.dt_inicio = "23/05/2019"
        this.dt_fim = "23/05/2019"
        this.inter_inicio = "15 min."
        this.inter_fim = "15 min."
    }
}
