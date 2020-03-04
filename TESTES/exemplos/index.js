let nome = "Patrick";
let idade = 22;
let ocupado = true;
let filhos = ["maluco", "maluquinho", "doido"];
console.log(`Meu nome e ${nome}`);
console.log(`tenho ${idade} anos`);
console.log(`meus filhos sao os ${filhos}`);
class Pessoa {
}
function Somar(a, b) {
    return a + b;
}
function multiplicar(a, b) {
    return a * b;
}
console.log(Somar(2, 3));
console.log(multiplicar("2", 5));
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil[EstadoCivil["casado"] = 0] = "casado";
    EstadoCivil[EstadoCivil["solteiro"] = 1] = "solteiro";
    EstadoCivil[EstadoCivil["uniaoEstavel"] = 2] = "uniaoEstavel";
    EstadoCivil[EstadoCivil["divorciado"] = 3] = "divorciado";
    EstadoCivil[EstadoCivil["viuvo"] = 4] = "viuvo";
})(EstadoCivil || (EstadoCivil = {}));
let estCivil;
estCivil = EstadoCivil.casado;
estCivil = 1;
console.log(estCivil);
