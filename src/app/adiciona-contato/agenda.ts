import { Tipos, Contato } from "./contato"; 

class Agenda{
    private lista_de_contatos: Contato[]; 

    constructor(lista = []){
        this.lista_de_contatos = lista; 
    } 

    adicionar_contato(contato: Contato){
        this.lista_de_contatos.push(contato); 
    }
    obter_lista_contatos(){
        return this.lista_de_contatos; 
    } 

    /* OBTER CONTATOS */
    obter_lista_por_email(em: string){
        return this.lista_de_contatos.filter(m => m.obter_email() == em)
    }
    obter_lista_por_telefone(tel: string){
        return this.lista_de_contatos.filter(m => m.obter_telefone() == tel)
    }
    obter_lista_pelo_nome(nm: string){
        return this.lista_de_contatos.filter(m => m.obter_nome() == nm)
    }
} 

let agenda = new Agenda(); 

let jamile = new Contato("Jamile", "84553234321", "jamile@gmail.com", Tipos.AMIGO); 
jamile.alterar_nome("Jamile"); 
jamile.alterar_telefone("83112345678"); 
jamile.alterar_email("jamile123@gmail.com"); 
jamile.alterar_aniversario(13, 9, 2005); 
jamile.alterar_tipo(Tipos.FAMILIA); 

let joao = new Contato("João", "84553234123", "joao@gmail.com", Tipos.FAMILIA); 
joao.alterar_aniversario(25, 5, 1977); 

let jamile_karine = new Contato("Jamile", "83112345675", "jk@gmail.com", Tipos.AMIGO); 
jamile_karine.alterar_aniversario(21, 12, 2005); 

// adicionar contato: 
agenda.adicionar_contato(jamile); 
agenda.adicionar_contato(joao); 
agenda.adicionar_contato(jamile_karine); 

console.log(agenda.obter_lista_por_email("jamile123@gmail.com")); 
console.log(agenda.obter_lista_pelo_nome("Jamile")); 
console.log(agenda.obter_lista_por_telefone("84553234123")); 

console.log(agenda.obter_lista_contatos()); 