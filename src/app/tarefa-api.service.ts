import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaApiService {
  readonly tarefaAPIUrl = "https://localhost:7138/api";
  constructor(private http:HttpClient) { }

  //Métodos das tarefas

  listarTarefas():Observable<any[]>{
    return this.http.get<any>(this.tarefaAPIUrl + '/Tarefa')
  }
  listarTarefaEspecifica(id:number|string):Observable<any[]>{
    console.log(id);
    return this.http.get<any>(this.tarefaAPIUrl + `/Tarefa/${id}`)
  }
  criarTarefa(data:any){
    return this.http.post(this.tarefaAPIUrl + '/Tarefa', data);
  }

  atualizarTarefa(id:number|string, data:any){
    return this.http.put(this.tarefaAPIUrl + `/Tarefa/${id}`, data);
  }

  apagarTarefa(id:number|string){
    return this.http.delete(this.tarefaAPIUrl +  `/Tarefa/${id}`);
  }

  //Métodos dos Tipos das tarefas
  listarTipoTarefas():Observable<any[]>{
    return this.http.get<any>(this.tarefaAPIUrl + '/TipoTarefa')
  }
  
  criarTipoTarefa(data:any){
    return this.http.post(this.tarefaAPIUrl + '/TipoTarefa', data);
  }

  atualizarTipoTarefa(id:number|string, data:any){
    return this.http.put(this.tarefaAPIUrl + `/TipoTarefa/${id}`, data);
  }

  apagarTipoTarefa(id:number|string){
    return this.http.delete(this.tarefaAPIUrl +  `/TipoTarefa/${id}`);
  }

  //Métodos dos status das tarefas
  listarStatusTarefas():Observable<any[]>{
    return this.http.get<any>(this.tarefaAPIUrl + '/Status')
  }
  
  criarStatusTarefa(data:any){
    return this.http.post(this.tarefaAPIUrl + '/Status', data);
  }

  atualizarStatusTarefa(id:number|string, data:any){
    return this.http.put(this.tarefaAPIUrl + `/Status/${id}`, data);
  }

  apagarStatusTarefa(id:number|string){
    return this.http.delete(this.tarefaAPIUrl +  `/Status/${id}`);
  }
}
