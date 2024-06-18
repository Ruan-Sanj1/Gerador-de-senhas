const numeroSenha = document.querySelector('.parametro-senha-texto');
//Criamos uma constante chamada numeroSenha que vai selecionar o 
//elemento com a classe "parametro-senha-texto, que é o numero 12"
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
//Atualiza o valor assim que entra no site
const botoes = document.querySelectorAll('.parametro-senha-botao');
//Cria a constante botoes e seleciona todos os que tem a classe no
//querySelector.
const campoSenha = document.querySelector('#campo-senha')
//Cria uma constante "campoSenha" que vai conter a informação desse ID
const checkbox = document.querySelectorAll('.checkbox')
//Seleciona todas as checkbox
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//Quais são as letras maiúsculas que serão usadas tem que estar 
//armazenadas em algum lugar
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'
const numeros = '0123456789'
const simbolos = '!@#$%&?'
//Armazenando valores que vão pra senha
const forcaSenha = document.querySelector('.forca');
//Selecionar o elemento que tem a classe "forca"





botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
//Quando clicar no botão, vai executar a função que estádepois do igual
for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
}
//Quando a checkbox é clicada, gera uma nova senha.
geraSenha();
//Executa a função "geraSenha"





function diminuiTamanho() {
    if (tamanhoSenha>1)
        //Só executa o resto se o tamanho for maior que 1
    tamanhoSenha = tamanhoSenha - 1;
    //tamanhoSenha-- também funcionaria, ou o tamanhoSenha-=1
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
    //Quando mudar o número, precisa gerar uma nova senha
}

function aumentaTamanho(){
    if (tamanhoSenha<20)
        //Só executa o resto se o tamanho da senha for menor que 20;
    tamanhoSenha = tamanhoSenha + 1;
    //tamanhoSenha++ também funcionaria, ou o tamanhoSenha+=1
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    //Se a primeira checkbox estiver marcada, ele vai adicionar as 
    //letras maiúsculas no alfabeto que a senha vai usar.

    if (checkbox[1].checked){
        alfabeto += letrasMinusculas;
    }

    if (checkbox[2].checked){
        alfabeto += numeros;
    }

    if (checkbox[3].checked){
        alfabeto += simbolos;
    }

    let senha = '';
    //Variável "senha" sem nada escrito
    for (let i=0; i<tamanhoSenha;i++){
        //Segue repetindo até dar o tamanho da senha
        let numeroAleatorio = Math.random()*alfabeto.length;
        //Sorteia um número dentro da quantia de letras do "letrasMaiusculas"
        numeroAleatorio = Math.floor(numeroAleatorio);
        //Arredonda o número do "numeroAleatorio"
        senha = senha + alfabeto [numeroAleatorio];
        //Soma uma letra baseada no númeroAleatório na Senha
    }
    campoSenha.value = senha;
    //Muda o valor do "campo-senha"
    classificaSenha();
    //Depois de mudar a senha, ele classifica ela
}

function classificaSenha(){
    forcaSenha.classList.remove('fraca','media','forte');
    //Tira qualquer uma das classes que o elemento tiver.
    if (tamanhoSenha > 11){
        forcaSenha.classList.add('forte');
        //Se o tamanho da senha for maior que 11, adiciona a classe forte
    } else if (tamanhoSenha > 5 && tamanhoSenha < 12){
            //Se não, se for maior que 5 e menor que 12.
            forcaSenha.classList.add('media');
    } else if (tamanhoSenha < 6){
        forcaSenha.classList.add('fraca');
    }
}