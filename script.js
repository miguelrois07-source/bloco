class Produto {

    constructor(nome, cor){
        this.nomeDisplay = document.querySelector('#card-nome');
        this.preview = document.querySelector('#card-preview');
        this.ativo = true; 
        this.atualizarBorda();
    }

    atualizarTexto(novoTexto){
        this.nomeDisplay.innerText = novoTexto.trim() === "" ? "Nome do produto" : novoTexto;
    }

    mudarCor(novaCor){
        this.preview.style.backgroundColor = novaCor;
    }

    alternarStatus(){
        this.ativo = !this.ativo;
        this.atualizarBorda();
    }

    atualizarBorda(){
        if (this.ativo) {
            this.preview.style.border = "4px solid green";
        } else {
            this.preview.style.border = "2px dashed red";
        }
    }
}

const produto = new Produto();

document.querySelector('#in-nome').addEventListener('input', (event) => {
    produto.atualizarTexto(event.target.value);        
});

document.querySelector('#in-cor').addEventListener('input', (event) => {
    produto.mudarCor(event.target.value);        
});

document.querySelector('#card-preview').addEventListener('contextmenu', (event) => {
    event.preventDefault();
    produto.alternarStatus();
});