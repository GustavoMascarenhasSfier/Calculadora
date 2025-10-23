# Calculadora 
Este é um projeto de uma calculadora simples e funcional, desenvolvida com as tecnologias fundamentais da web: HTML, CSS e JavaScript. O objetivo principal é demonstrar as habilidades básicas de desenvolvimento front-end, focando na lógica de operação e na interatividade visual.

[![Visitar minha página](https://img.shields.io/badge/🌐_Visitar%20minha%20página-4CAF50?style=for-the-badge)](https://gustavomascarenhassfier.github.io/Calculadora/)


## 🌟 Recursos e Funcionalidades

A calculadora inclui as seguintes operações e recursos:

* **Operações Aritméticas Básicas**:
    * Adição (`+`)
    * Subtração (`-`)
    * Multiplicação (`*` / `X`)
    * Divisão (`/`)
* **Cálculo de Porcentagem** (`%`): Adiciona o símbolo de porcentagem à expressão no visor. A função `calcular()` trata essa expressão substituindo `N%` por `(N/100)` antes de avaliar.
* **Limpar Visor** (`AC`): Limpa o visor, redefinindo o valor para "0" e zerando o estado da operação.
* **Apagar Último Caractere** (`<`): Remove o último caractere do visor.
* **Entrada Decimal**: Suporta números decimais com o botão `.`.
* **Cálculo de Resultado** (`=`): Avalia a expressão completa no visor.
* **Design Centralizado**: O componente da calculadora está centralizado na tela (vertical e horizontalmente) utilizando `transform: translate(-50%, -50%)` em conjunto com `top: 50%` e `left: 50%`.
* **Interatividade**: Efeito de `hover` em todos os botões, mudando o fundo para preto e a cor do texto para branco, com exceção do botão `AC`, `<` e `%` que apenas mudam para preto.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **HTML5** | Estrutura da página e marcação da calculadora. |
| **CSS3** | Estilização (`style.css`), centralização e efeitos visuais. |
| **JavaScript (Puro)** | Lógica de inserção, limpeza, operações e cálculo final (`eval`). |

##  Como Executar o Projeto

Como este projeto é puramente front-end, a execução é extremamente simples.

1.  **Baixar os Arquivos**: Faça o download dos arquivos `index.html`, `style.css`, e `script.js`.
2.  **Abrir o `index.html`**: Abra o arquivo `index.html` diretamente em seu navegador web (Chrome, Firefox, Edge, etc.).

## 📝 Detalhes da Implementação (JavaScript)

O arquivo `script.js` gerencia toda a lógica da calculadora:

* **`inserir(num)`**: Adiciona números ao visor, substituindo o `0` inicial ou quando um operador foi pressionado e está aguardando o segundo número.
* **`adicionarOperador(op)`**: Adiciona um operador (`+`, `-`, `*`, `/`) ao visor. Se o último caractere já for um operador, ele é substituído pelo novo.
* **`clean()`**: Limpa o visor para "0" e redefine as variáveis de estado (`primeiroNumero`, `operadorAtual`, `aguardandoSegundoNumero`).
* **`back()`**: Remove o último caractere do visor, garantindo que ele não fique vazio, mas sim em "0".
* **`calcular()`**: Esta é a função central. Ela:
    1.  Obtém a expressão do visor.
    2.  Substitui todas as ocorrências de números seguidos por `%` por sua forma de divisão, ex: `50%` se torna `(50/100)`.
    3.  Usa a função nativa `eval(exp)` do JavaScript para calcular o resultado.
    4.  Exibe um alerta de "Expressão inválida!" em caso de erro no cálculo.

##  Estrutura Visual (CSS)

* **Visor (`#resultado`)**: Possui uma sombra interna (`box-shadow: inset 0 2px 6px rgba(0,0,0,0.3)`) e alinhamento de texto à direita.
* **Botões de Operador (`#operador`)**: Têm a cor de fundo laranja (Orange).
* **Botões de Limpeza/Função**: `AC` (`#limpa`), `<` (`#apaga`) e `%` (`#porcento`) têm a cor de fundo cinza claro (`#ccc`).
* **Botões de Número e Decimal (`#teclas`)**: Possuem a cor de fundo cinza escuro semi-transparente (`#727272cc`).



## ⚖️ Licença

Este projeto é de código aberto e está disponível sob a licença **MIT** (recomendada).
