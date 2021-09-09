window.onload = function(){
    inicioJogo();
}
function inicioJogo(){
    areaJogo.start();
    personagem = componente("#FFFF00", 18, 120, 20, 20);
}

let areaJogo = {
    canvas: document.createElement("canvas"),
    start: function(){
        
       this.context = this.canvas.getContext("2d");

        document.body.insertBefore(this.canvas, document.body.childNodes[0])
    }
}

function componente(cor, x, y, largura, altura){
    this.altura = altura,
    this.largura = largura,
    this.x = x,
    this.y = y,
    contexto = areaJogo.context;
    contexto.fillStyle = cor;
    contexto.fillReact(this.x, this.largura, this.altura)
}