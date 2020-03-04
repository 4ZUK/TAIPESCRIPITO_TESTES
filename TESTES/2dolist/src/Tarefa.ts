import { Prioridade } from "./Prioridade"
 export class Tarefa {
    constructor(private descricao: string,
        private prioridade: Prioridade,
        private _concluido: boolean = false) {
    }
    /*private descricao: string;
    private concluido: boolean;
    private prioridade: Prioridade;
    constructor(descricao: string,prioridade: Prioridade,concluido: boolean = false){
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.concluido = concluido;
    }
    */
    public set concluido(concluido: boolean) {
        this._concluido = concluido;
    }
    public get concluido(): boolean{
        return this._concluido;
    }
}