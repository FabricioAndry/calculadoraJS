var calculadora = () => {
    const operacao = prompt('Escolha uma opção:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão (/)\n5 - Divisão Inteira (%)\n6 - Potenciação (**)')

    if (!operacao || operacao >= 7) {
        alert('Erro! - Operação invalida')
        calculadora()
    } else {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro! - Parâmetros inválidos')
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOpracao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOpracao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOpracao();
            }
            function divisãoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOpracao();
            }
            function divisãoInteira() {
                resultado = n1 % n2;
                alert(`${n1} % ${n2} = ${resultado}`)
                novaOpracao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a: = ${resultado}`)
                novaOpracao();
            }

            let novaOpracao = () => {
                let opcao = Number(prompt('Deseja fazer outra operação:\n1 - Sim\n2 - Não'))

                if (opcao == 1) {
                    calculadora()
                } else if (opcao == 2) {
                    alert('Até mais!')
                } else {
                    alert('Digite a opção valida!')
                    novaOpracao();
                }
            }

            /*if (operacao == 1) {
                soma();
            } else if (operacao == 2) {
                subtracao();
            } else if (operacao == 3) {
                multiplicacao();
            } else if (operacao == 4) {
                divisãoReal();
            } else if (operacao == 5) {
                divisãoInteira();
            } else if (operacao == 6) {
                potenciacao();
            }*/

            switch (operacao) {
                case 1:
                    soma()
                    break;
                case 2:
                    subtracao()
                    break;
                case 3:
                    multiplicacao()
                    break;
                case 4:
                    divisãoReal()
                    break;
                case 5:
                    divisãoInteira();
                    break;
                case 6:
                    potenciacao()
                    break;
                default:
                    break;
            }
        }  
    }
}

calculadora();