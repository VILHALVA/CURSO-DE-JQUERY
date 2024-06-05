# SELETORES HIERÁRQUICOS
Seletores hierárquicos no jQuery permitem selecionar elementos com base em suas relações hierárquicas no DOM. Eles são muito poderosos e úteis para direcionar elementos específicos dentro de um documento HTML. Aqui estão alguns dos seletores hierárquicos mais comuns e como usá-los:

## Seletores Hierárquicos Comuns
1. **Descendant Selector (Selecionador de Descendentes)**
    - Seleciona todos os elementos que são descendentes de um elemento especificado.
    - Sintaxe: `ancestor descendant`
    - Exemplo: `$("div p")` seleciona todos os elementos `<p>` que são descendentes de um `<div>`.

2. **Child Selector (Selecionador de Filhos)**
    - Seleciona todos os elementos que são filhos diretos de um elemento especificado.
    - Sintaxe: `parent > child`
    - Exemplo: `$("ul > li")` seleciona todos os elementos `<li>` que são filhos diretos de um `<ul>`.

3. **Adjacent Sibling Selector (Selecionador de Irmãos Adjacent)**
    - Seleciona o primeiro elemento que é um irmão adjacente imediatamente após um elemento especificado.
    - Sintaxe: `prev + next`
    - Exemplo: `$("h1 + p")` seleciona o primeiro `<p>` que é imediatamente precedido por um `<h1>`.

4. **General Sibling Selector (Selecionador de Irmãos Gerais)**
    - Seleciona todos os elementos que são irmãos de um elemento especificado.
    - Sintaxe: `prev ~ siblings`
    - Exemplo: `$("h1 ~ p")` seleciona todos os elementos `<p>` que são irmãos de um `<h1>`.

## Exemplos Práticos
### 1. Descendant Selector
HTML:

```html
<div>
    <p>Parágrafo dentro de um div.</p>
    <span>Span dentro de um div.</span>
    <p>Outro parágrafo dentro de um div.</p>
</div>
<p>Parágrafo fora de um div.</p>
```

jQuery:

```javascript
$(document).ready(function(){
    $("div p").css("color", "red");
});
```

Resultado: Apenas os parágrafos dentro do `<div>` terão seu texto colorido de vermelho.

### 2. Child Selector
HTML:

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <ol>
        <li>Item 4</li>
    </ol>
</ul>
```

jQuery:

```javascript
$(document).ready(function(){
    $("ul > li").css("color", "blue");
});
```

Resultado: Apenas os `<li>` que são filhos diretos do `<ul>` terão seu texto colorido de azul, excluindo o `<li>` dentro do `<ol>`.

### 3. Adjacent Sibling Selector
HTML:

```html
<h1>Título 1</h1>
<p>Parágrafo 1</p>
<h1>Título 2</h1>
<p>Parágrafo 2</p>
```

jQuery:

```javascript
$(document).ready(function(){
    $("h1 + p").css("background-color", "yellow");
});
```

Resultado: Apenas os parágrafos que imediatamente seguem um `<h1>` terão seu fundo colorido de amarelo.

### 4. General Sibling Selector
HTML:

```html
<h1>Título 1</h1>
<p>Parágrafo 1</p>
<p>Parágrafo 2</p>
<div>Div 1</div>
<h1>Título 2</h1>
<p>Parágrafo 3</p>
<p>Parágrafo 4</p>
```

jQuery:

```javascript
$(document).ready(function(){
    $("h1 ~ p").css("border", "1px solid black");
});
```

Resultado: Todos os parágrafos que são irmãos dos `<h1>` terão uma borda preta.

## Aplicação em um Projeto de Exemplo
Vamos aplicar esses seletores hierárquicos em um projeto de exemplo para manipular um portfólio interativo.

### HTML do Projeto
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio Interativo</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    </header>

    <section id="home">
        <h1>Bem-vindo ao Meu Portfólio</h1>
        <p>Explore meu trabalho e conheça mais sobre mim.</p>
    </section>

    <section id="about">
        <h2>Sobre Mim</h2>
        <p>Sou um desenvolvedor web apaixonado por criar experiências interativas.</p>
        <button id="moreAbout">Mais sobre mim</button>
        <div id="moreAboutContent" style="display: none;">
            <p>Tenho experiência em diversas tecnologias, incluindo HTML, CSS, JavaScript e frameworks como React e Angular.</p>
        </div>
    </section>

    <section id="portfolio">
        <h2>Meu Trabalho</h2>
        <div class="portfolio-item">
            <h3>Projeto 1</h3>
            <p>Descrição do projeto 1.</p>
        </div>
        <div class="portfolio-item">
            <h3>Projeto 2</h3>
            <p>Descrição do projeto 2.</p>
        </div>
    </section>

    <section id="contact">
        <h2>Contato</h2>
        <form id="contactForm">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Mensagem:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Enviar</button>
        </form>
    </section>

    <script src="js/script.js"></script>
</body>
</html>
```

### CSS (`styles.css`)
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    background-color: #333;
    color: white;
    padding: 10px 0;
    text-align: center;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

section {
    padding: 20px;
    margin: 20px 0;
}

#home {
    background-color: #f2f2f2;
}

#about {
    background-color: #e6e6e6;
}

#portfolio {
    background-color: #ccc;
}

#contact {
    background-color: #b3b3b3;
}

.portfolio-item {
    margin-bottom: 20px;
}

button {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

button:hover {
    background-color: #555;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 10px;
}

input, textarea {
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
```

### JavaScript/jQuery (`script.js`)
```javascript
$(document).ready(function(){
    // Navegação suave
    $("nav ul li a").click(function(event){
        event.preventDefault();
        var target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    // Exibir conteúdo adicional
    $("#moreAbout").click(function(){
        $("#moreAboutContent").slideToggle();
    });

    // Manipulação com seletores hierárquicos

    // Seleciona todos os <p> dentro de <section>
    $("section p").css("color", "blue");

    // Seleciona todos os <li> que são filhos diretos de <nav>
    $("nav > ul > li").css("border", "1px solid white");

    // Seleciona o <p> imediatamente após <h1> em #home
    $("#home h1 + p").css("font-weight", "bold");

    // Seleciona todos os <p> que são irmãos de <h1> em #portfolio
    $("#portfolio h2 ~ .portfolio-item p").css("background-color

", "yellow");

    // Simulação de envio de formulário
    $("#contactForm").submit(function(event){
        event.preventDefault();
        
        // Simulação de envio AJAX
        var formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val()
        };

        console.log("Dados do formulário:", formData);
        
        // Simulação de sucesso
        alert("Mensagem enviada com sucesso!");
        $(this).trigger("reset");
    });
});
```

### Explicação do JavaScript
- **Navegação suave**: Usando o `descendant selector` para capturar os links de navegação e rolar suavemente até a seção correspondente.
- **Exibição de conteúdo adicional**: Usando o `descendant selector` para capturar o botão e alternar a exibição do conteúdo.
- **Seletores hierárquicos**:
  - `$("section p").css("color", "blue");` Seleciona todos os `<p>` dentro de `<section>` e muda a cor do texto para azul.
  - `$("nav > ul > li").css("border", "1px solid white");` Adiciona uma borda branca aos `<li>` filhos diretos de `<ul>` dentro de `<nav>`.
  - `$("#home h1 + p").css("font-weight", "bold");` Faz o texto do `<p>` imediatamente após `<h1>` em `#home` ficar em negrito.
  - `$("#portfolio h2 ~ .portfolio-item p").css("background-color", "yellow");` Muda a cor de fundo de todos os `<p>` dentro de `.portfolio-item` que são irmãos de `<h2>` em `#portfolio`.

### Como Executar o Projeto
1. **Crie a Estrutura de Diretórios**:
   - Crie a pasta `portfolio` e as subpastas `css` e `js`.
   - Coloque os arquivos `index.html`, `styles.css`, e `script.js` em seus respectivos locais.

2. **Abra o Arquivo HTML**:
   - Abra `index.html` em um navegador web para ver o site funcionando.

3. **Interação**:
   - Navegue pelas seções usando a barra de navegação.
   - Clique no botão "Mais sobre mim" para ver conteúdo adicional na seção "Sobre".
   - Preencha e envie o formulário de contato para ver a manipulação do formulário em ação.
   - Observe as mudanças de estilo aplicadas pelos seletores hierárquicos.

Este projeto demonstra a aplicação prática de seletores hierárquicos no jQuery, permitindo uma manipulação eficiente e precisa do DOM.