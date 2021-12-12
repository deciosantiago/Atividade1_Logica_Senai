let Data = "2021/12/21"
var DataAtual = new Date();
let Idade = "19"
let Participantes = ["Décio","Geisa","Guilherme","Fernanda"]


if (Data > DataAtual){
    console.log("Data disponivel, continuar com o cadastro")
}else{
    console.log("Data indisponivel")
}
if (Idade > 18) {
    console.log("Idade adequada")    
}else{
    console.log("Idade não permitida no evento")
}
if(Participantes.length<100){
    console.log("Cadastro Efetuado com Sucesso")
}else{
    console.log("Número de máximo de participantes atingido, incrições encerradas")
}


