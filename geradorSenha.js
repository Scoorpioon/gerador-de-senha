const senha = document.getElementById('password');
const gerar = document.getElementById('gerar');
const campoQuantidade = document.getElementById('quantidade');
const alfabetoMinusculo = 'abcdefghijklmnopqrstuvwxyz';
const alfabetoMaiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numeros = '0123456789';
let quantidade = 7;

const gerarCaractere = (tipo) => {
    let numero = parseInt(Math.random() * 26);

    if(tipo === 'maiusculo') {
        const letraGerada = alfabetoMaiusculo[numero];

        return letraGerada;
    } else if(tipo === 'minusculo') {
        const letraGerada = alfabetoMinusculo[numero];

        return letraGerada;
    } else if(tipo === 'numero') {
        let numero = parseInt(Math.random() * 10);
        const numeroGerado = numeros[numero]

        return numeroGerado;
    }
}

campoQuantidade.addEventListener('change', () => {
    console.log('Quantidade alterada: ' + quantidade);
    quantidade = parseInt(campoQuantidade.value);
    
})

gerar.addEventListener('click', () => {
    const aviso = document.getElementsByTagName('p');
    aviso[0].style.display = 'block';

    const senhaGerada = Array();

    for(let c = 0; c < quantidade; c++) {
        const opcoes = [gerarCaractere('maiusculo'), gerarCaractere('minusculo'), gerarCaractere('numero')];
        let escolherOpcao = parseInt(Math.random() * 3);
        let gerarPosição = parseInt(Math.random * 2);

        if(gerarPosição === 1) {
            senhaGerada.push(opcoes[escolherOpcao])
        } else {
            senhaGerada.unshift(opcoes[escolherOpcao])
        }
    }

    /*for(caractere in senhaGerada) {
        if(caractere > 1) {
            if(senhaGerada[caractere - 2] == senhaGerada[caractere] && senhaGerada[caractere - 1] == senhaGerada[caractere]) {
                console.log('Oops, caractere repetido três vezes. Alterando isso.')

                const opcoesExtras = [gerarCaractere('maiusculo'), gerarCaractere('minusculo'), gerarCaractere('numero')];
                senhaGerada[caractere].replace(`${caractere}`, opcoesExtras[(Math.random) * 3]);
            }
        }
    }*/ // Acionar ação caso um número/letra seja repetido mais de duas vezes.

    let senhaString = senhaGerada.toString();
    senhaString = senhaString.split(',').join(''); // Remove as vírgulas da string
    console.log('A senha gerada foi: ' + senhaString);

    senha.textContent = senhaString;
})
