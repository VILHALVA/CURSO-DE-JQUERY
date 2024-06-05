# EVENTOS DE NAVEGADOR
Vamos abordar esses eventos de navegador e como usar estruturas condicionais (if-else) no jQuery.

## Evento `error`
O evento `error` é disparado quando ocorre um erro ao carregar um recurso, como uma imagem, um script ou um arquivo de estilo.

### Exemplo:
```javascript
$(document).ready(function(){
    $("img").on("error", function(){
        $(this).attr("src", "placeholder.jpg");
    });
});
```

## Evento `resize`
O evento `resize` é disparado quando a janela do navegador é redimensionada. Isso pode ser útil para atualizar a aparência da página em diferentes tamanhos de tela.

### Exemplo:
```javascript
$(window).on("resize", function(){
    if ($(window).width() < 768) {
        $("body").css("background-color", "lightblue");
    } else {
        $("body").css("background-color", "white");
    }
});
```

## Evento `scroll`
O evento `scroll` é disparado quando a janela do navegador é rolada. Isso pode ser útil para adicionar efeitos de paralaxe ou atualizar a interface do usuário com base na posição de rolagem.

### Exemplo:
```javascript
$(window).on("scroll", function(){
    if ($(this).scrollTop() > 100) {
        $("#scrollMessage").fadeIn();
    } else {
        $("#scrollMessage").fadeOut();
    }
});
```

## Estruturas Condicionais (if-else) no jQuery
Você pode usar estruturas condicionais (if-else) no jQuery da mesma forma que no JavaScript puro. Isso é útil para executar diferentes ações com base em condições específicas.

### Exemplo:
```javascript
$(document).ready(function(){
    $("button").click(function(){
        var inputValue = $("#inputValue").val();
        if (inputValue === "open") {
            $("#statusMessage").text("Porta aberta").css("color", "green");
        } else if (inputValue === "closed") {
            $("#statusMessage").text("Porta fechada").css("color", "red");
        } else {
            $("#statusMessage").text("Estado desconhecido").css("color", "gray");
        }
    });
});
```

