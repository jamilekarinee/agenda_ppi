import { TipoContato } from './tipocontato';

export class Contato{
    public nome: string;
    public telefone: string;
    public email: string;
    public aniversario: string;
    public tipo: TipoContato; 
    public favorito: boolean; 

    constructor(nm: string, tel: string, em: string, aniversario: string, tip: TipoContato, fav = false){
        this.nome = nm; 
        this.telefone = tel; 
        this.email = em; 
        this.aniversario = aniversario; 
        this.tipo = tip; 
        this.favorito = fav; 
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
    /* FAVORITO */ 
    obter_fav(){
        return this.favorito; 
    }
}

export { TipoContato };
