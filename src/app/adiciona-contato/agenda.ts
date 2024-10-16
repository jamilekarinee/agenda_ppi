import { Contato } from "./contato"; 

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

