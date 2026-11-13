export class Estoque {
    produtos: string[] = ["monitor", "teclado", "mouse"];
    produtosLog: string[] = [];

    Listar(): void {
        console.log(this.produtos);
    }

    Cadastrar(produtoCadastrar: string): void {
        this.produtos.push(produtoCadastrar);
    }

    Editar(produtoEditar: string, novoProduto: string): void {
        let indice = this.produtos.indexOf(produtoEditar);

        if (indice != -1) {

            this.produtos[indice] = novoProduto;

            console.log(this.produtos);

        } else {
            console.log("Produto não encontrado!");
        }
    }
    Excluir(produtoExcluir: string): void {
        let indice = this.produtos.indexOf(produtoExcluir);

        if (indice != -1) {

            this.produtos.splice(indice, 1);



        } else {
            console.log("Produto não encontrado!")
        }

    }
    ListarAuditor(): void {
        console.log(this.produtosLog);
    }
    CadastrarAuditor(produtoCadastrarLog: string): void {
        this.produtosLog.push(produtoCadastrarLog);
    }

}
