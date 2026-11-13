
import promptSync from "prompt-sync";
import { Estoque } from "./estoque.ts";

const entrada = promptSync({});
const estoque = new Estoque();

function FazerLogin(): void {
    const usuarioCorreto = "admin";
    const senhaCorreta = "123";
    const senhaCorretaAdmin = "admin";
    const senhaAuditor = "456";

    console.log("usuario: ");
    const usuario = entrada("");

    console.log("senha: ");
    const senha = entrada("");

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        console.log("Login realizado com sucesso!");

        let opcao: number;

        console.log("----ESTOQUE FACIL----");
        console.log("1- listar produto");
        console.log("2- adicionar produto");
        console.log("3- Editar produto");
        console.log("4- remover produto");
        console.log("5- Login do auditor");
        console.log("0- sair");

        console.log("escolha uma opção:");
        opcao = Number(entrada(""));

        while (opcao !== 0) {

            if (opcao === 1) {
                estoque.Listar();
            }

            else if (opcao === 2) {
                console.log("adicione a senha de administrador");
                const senhaAdmin = entrada("");

                if (senhaAdmin === senhaCorretaAdmin) {
                    console.log("qual produto deseja cadastrar?");
                    const produtoCadastrar = entrada("");

                    estoque.Cadastrar(produtoCadastrar);


                    console.log("Produto cadastrado com sucesso!");
                } else {
                    console.log("usuario não autorizado");
                }
            }

            else if (opcao === 3) {
                console.log("adicione a senha de administrador:");
                const senhaAdmin = entrada("");

                if (senhaAdmin === senhaCorretaAdmin) {

                    console.log("qual produto deseja editar?");
                    const produtoEditar = entrada("");

                    estoque.CadastrarLog(produtoEditar);

                    console.log("Digite o novo nome do produto");
                    const novoProduto = entrada("");

                    estoque.Editar(produtoEditar, novoProduto);

                    console.log("Produto editado com sucesso!");
                } else {
                    console.log("usuario não autorizado");
                }
            }

            else if (opcao === 4) {
                console.log("adicione a senha de administrador");
                const senhaAdmin = entrada("");

                if (senhaAdmin === senhaCorretaAdmin) {
                    console.log("qual produto deseja excluir?");
                    const produtoExcluir = entrada("");

                    estoque.CadastrarLog(produtoExcluir);

                    estoque.Excluir(produtoExcluir);


                    console.log("Produto excluído com sucesso!");
                } else {
                    console.log("usuario não autorizado");
                }
            }
            else if (opcao === 5) {
                console.log("Digite a senha do auditor: ");
                const senha = entrada("");

                if (senha === senhaAuditor) {
                    console.log("Acesso autorizado!");
                    estoque.ListarLog();

                } else {
                    console.log("Senha incorreta!");
                }
            }

            else {
                console.log("opção invalida");
            }
            console.log("----ESTOQUE FACIL----");
            console.log("1- listar produto");
            console.log("2- adicionar produto");
            console.log("3- Editar produto");
            console.log("4- remover produto");
            console.log("5- Login do auditor");
            console.log("0- sair");
            console.log("escolha uma opção:");

            opcao = Number(entrada(""));
        }


    }

    else {
        console.log("senha ou usuario incorreto!");

    }
}

FazerLogin();
