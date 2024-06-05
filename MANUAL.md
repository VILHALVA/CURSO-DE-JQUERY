# MANUAL
## INSTALAÇÃO:
1. **Download do jQuery:**
   - Você pode baixar o jQuery diretamente do site oficial em [jquery.com](https://jquery.com/download/).
   - Se preferir, pode usar um CDN (Content Delivery Network) para carregar o jQuery em seu projeto. Por exemplo:
     ```html
     <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
     ```

  - Nesse curso iremos usar apenas o metódo CDN.

## CONFIGURAÇÃO:
2. **Inclusão do jQuery no HTML:**
   - Após baixar o arquivo jQuery ou adicionar o CDN em seu projeto, inclua-o em seu arquivo HTML dentro da tag `<head>` ou antes do fechamento da tag `<body>`:
     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Meu Projeto com jQuery</title>
         <!-- Inclusão do jQuery -->
         <script src="caminho/para/o/jquery.min.js"></script>
     </head>
     <body>
         <!-- Conteúdo do seu site aqui -->
     </body>
     </html>
     ```

## PRIMEIRO PROJETO:
3. **Manipulação do DOM:**
   - Vamos começar com um exemplo simples de manipulação do DOM usando jQuery. Suponha que você tenha um botão em seu HTML e quer mudar a cor do texto quando ele for clicado.

   - HTML:
     ```html
     <button id="meuBotao">Clique Aqui</button>
     <p id="meuParagrafo">Olá, Mundo!</p>
     ```

   - JavaScript (jQuery):
     ```javascript
     // Aguarde até que o DOM esteja completamente carregado
     $(document).ready(function(){
         // Adicione um evento de clique ao botão
         $("#meuBotao").click(function(){
             // Altere a cor do texto do parágrafo para vermelho
             $("#meuParagrafo").css("color", "red");
         });
     });
     ```

   - Neste exemplo, usamos o seletor `$("#meuBotao")` para selecionar o botão com o ID "meuBotao" e adicionamos um evento de clique usando `.click()`. Quando o botão é clicado, usamos `$("#meuParagrafo").css("color", "red")` para selecionar o parágrafo com o ID "meuParagrafo" e alterar a cor do texto para vermelho.

4. **Teste:**
   - Salve seus arquivos HTML e JavaScript em um diretório e abra o arquivo HTML em seu navegador. Clique no botão e veja a cor do texto do parágrafo mudar para vermelho!

Este é apenas um exemplo básico para começar a usar jQuery. À medida que você se familiariza mais com a biblioteca, poderá explorar recursos mais avançados e criar interações mais complexas em seu site ou aplicativo web.