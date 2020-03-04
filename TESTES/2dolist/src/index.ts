import "./style.css";
import "material-icons/iconfont/material-icons.css";
import {Tarefa} from "./tarefa";
import {Prioridade} from "./Prioridade";
import { Lista } from "./Lista";
let t1 = new Tarefa("Escovar os dentes", Prioridade.alta);
let t2 = new Tarefa("Almoçar", Prioridade.alta);
let t3 = new Tarefa("Dormir", Prioridade.alta);
let lista = new Lista();
lista.addTarefa(t1,t2,t3);
const form : HTMLFontElement = <HTMLFontElement>document.getElementById("form");
const input : HTMLFontElement = <HTMLFontElement>document.getElementById("tf_2do");
form.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    let t= new Tarefa(input.nodeValue, Prioridade.baixa);
    lista.addTarefa(t);
    console.log(lista);
});