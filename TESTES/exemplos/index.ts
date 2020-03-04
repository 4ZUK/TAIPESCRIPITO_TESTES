let nome: string = "Patrick";
let idade: number = 22;
let ocupado: boolean = true;
let filhos: string[] = ["maluco", "maluquinho", "doido"];

console.log(`Meu nome e ${nome}`);
console.log(`tenho ${idade} anos`);
console.log(`meus filhos sao os ${filhos}`);


function Somar(a: number, b: number): number {
return a+b;
}

function multiplicar(a , b){
    return a*b;
}

console.log(Somar(2 , 3));

console.log(multiplicar("2",5));

enum EstadoCivil{
    casado,
    solteiro,
    uniaoEstavel,
    divorciado,
    viuvo
}

let estCivil: EstadoCivil;

estCivil = EstadoCivil.casado;
estCivil = 1;

console.log(estCivil);
