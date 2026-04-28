// limpeza e validação

const email="   email@gmail.com";
const emailLimpo= email.trim();
console.log(emailLimpo)

if(emailLimpo.includes("@")){
    console.log("Email valido")
}else{ 
    console.log("Email invalido")
}
const tituloArtigo="como aprender JAVA RAIZ";
//metodo upper (maisculo)
const texto1 = tituloArtigo.toLowerCase();
console.log(texto1)

const texto2 = tituloArtigo.split(" ");
console.log(texto2)

const texto3 = texto2.join(" ");
console.log(texto2)

//
const precoProduto = 199.99;
const desconto=0.15;
const precoFinal = precoProduto *(1-desconto);
console.log(precoFinal);
console.log(`R$ ${precoFinal.toFixed(2)}`);

const titulo=document.getElementById("titulo")

titulo.innerText= "O DOM mudou o texto";

titulo.style.color="blue";