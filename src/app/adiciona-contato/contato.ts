import { TipoContato } from './tipocontato';

export class Contato{
    private nome: string;
    private telefone: string;
    private email: string;
    private aniversario: string;
    private tipo: TipoContato; 

    constructor(nm: string, tel: string, em: string, aniversario: string, tip: TipoContato){
        this.nome = nm; 
        this.telefone = tel; 
        this.email = em; 
        this.aniversario = aniversario; 
        this.tipo = tip; 
    }
    /* NOME */ 
    alterar_nome(nome: string){
        this.nome = nome; 
    }
    obter_nome(){
        return this.nome; 
    }

    /* TELEFONE */ 
    alterar_telefone(telef: string){
        this.telefone = telef; 
    }
    obter_telefone(){
        return this.telefone; 
    }

    /* EMAIL */ 
    alterar_email(em: string){
        this.email = em; 
    }
    obter_email(){
        return this.email; 
    }

    /* ANIVERSÁRIO */ 
    alterar_aniversario(novo_aniversario: string){
        this.aniversario = novo_aniversario; 
    } 
    obter_aniversario(){
        return this.aniversario; 
    }

    /* TIPO */ 
    alterar_tipo(tipo_contato: TipoContato){
        this.tipo = tipo_contato; 
    } 
    obter_tipo(){
        return this.tipo; 
    }
}