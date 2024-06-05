## APRESENTAÇÃO E INSTALAÇÃO DA BIBLIOTECA
### O que é jQuery?
jQuery é uma biblioteca JavaScript que simplifica a manipulação de documentos HTML, o gerenciamento de eventos, a criação de animações e a realização de interações AJAX. Ela ajuda a escrever menos código JavaScript para realizar tarefas comuns e é amplamente utilizada devido à sua facilidade de uso e compatibilidade com diferentes navegadores.

### Recursos do jQuery:
- **Seleção e Manipulação de Elementos:** Facilita a seleção e manipulação de elementos do DOM.
- **Eventos:** Simplifica o gerenciamento de eventos.
- **Efeitos e Animações:** Permite criar animações complexas com código simples.
- **AJAX:** Simplifica a realização de requisições AJAX.
- **Plugins:** Possui uma vasta coleção de plugins para estender suas funcionalidades.

### Instalação do jQuery:
Existem várias maneiras de adicionar jQuery ao seu projeto:

1. **Usando um CDN (Content Delivery Network):**

   - Esta é a maneira mais simples e rápida de incluir jQuery em seu projeto. Basta adicionar a seguinte linha de código no seu arquivo HTML dentro da tag `<head>` ou antes do fechamento da tag `<body>`:
     ```html
     <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
     ```
    
    - Nesse curso iremos usar apenas o metódo CDN.

2. **Baixando o jQuery:**

   - Você pode baixar a biblioteca jQuery do site oficial [jquery.com](https://jquery.com/download/). Após o download, salve o arquivo `jquery.min.js` em uma pasta do seu projeto e adicione o seguinte código no seu arquivo HTML:
     ```html
     <script src="caminho/para/o/jquery.min.js"></script>
     ```

3. **Usando Gerenciadores de Pacotes:**

   - Se você estiver usando um gerenciador de pacotes como npm ou yarn, pode instalar o jQuery com os seguintes comandos:
     ```bash
     npm install jquery
     ```
     ```bash
     yarn add jquery
     ```
   - Depois, inclua o jQuery em seu arquivo JavaScript:
     ```javascript
     import $ from 'jquery';
     ```

### Primeiro Projeto com jQuery
Vamos criar um exemplo simples que muda a cor do texto de um parágrafo quando um botão é clicado.

1. **Estrutura HTML:**

   - Crie um arquivo HTML chamado `index.html` com o seguinte conteúdo:
     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Meu Primeiro Projeto com jQuery</title>
         <!-- Inclusão do jQuery via CDN -->
         <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
     </head>
     <body>
         <button id="meuBotao">Clique Aqui</button>
         <p id="meuParagrafo">Olá, Mundo!</p>

         <!-- Seu código JavaScript -->
         <script>
             // Aguarde até que o DOM esteja completamente carregado
             $(document).ready(function(){
                 // Adicione um evento de clique ao botão
                 $("#meuBotao").click(function(){
                     // Altere a cor do texto do parágrafo para vermelho
                     $("#meuParagrafo").css("color", "red");
                 });
             });
         </script>
     </body>
     </html>
     ```

2. **Explicação do Código:**

   - **Inclusão do jQuery:** A biblioteca jQuery é incluída no `<head>` do documento HTML usando um CDN.
   - **Estrutura HTML:** Um botão e um parágrafo são adicionados ao corpo do documento.
   - **Código JavaScript:** Dentro do bloco `<script>`, usamos o método `$(document).ready()` para garantir que o código só será executado após o DOM estar completamente carregado. O evento de clique é adicionado ao botão com o ID `meuBotao`, e quando o botão é clicado, a cor do texto do parágrafo com o ID `meuParagrafo` é alterada para vermelho.

3. **Teste:**

   - Abra o arquivo `index.html` em um navegador web. Clique no botão e observe a mudança na cor do texto do parágrafo.

Este exemplo simples mostra como incluir e usar o jQuery em seu projeto. À medida que você avança, poderá explorar mais funcionalidades e criar interações mais complexas com esta poderosa biblioteca.