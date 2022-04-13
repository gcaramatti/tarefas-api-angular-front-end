import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefaApiService } from 'src/app/tarefa-api.service';
import { CabecalhoNavComponent } from 'src/app/geral/cabecalho-nav/cabecalho-nav.component';
import { Subscription } from 'rxjs';
import { Data } from '@angular/router';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})

export class ListarTarefasComponent implements OnInit {

  listaTarefas$!:Observable<any>;
  listaDeTipos$!:Observable<any>;
  listaDeTipos:any=[];
  inputIdTarefa:string;

  // Mapper
  listaDeTiposMap:Map<number, string> = new Map();
  subscription: Subscription;

  constructor(private service:TarefaApiService) { }

  ngOnInit(): void {
    this.listaTarefas$ = this.service.listarTarefas();
    this.listaDeTipos$ = this.service.listarTipoTarefas();
    this.atualizarMapTipoTarefas();
  }
  tituloModal:string = '';
  adicionarEditarTarefaComponent:boolean = false;
  tarefa:any;
  

  atualizarMapTipoTarefas(){
    this.service.listarTipoTarefas().subscribe(data => {
      this.listaDeTipos = data;
      for(let i = 0; i < data.length; i++){
        this.listaDeTiposMap.set(this.listaDeTipos[i].id, this.listaDeTipos[i].nome);
      }
    })
  }
  modalAdd(){
    this.tarefa = {
      id:0,
      name:null,
      status:null,
      descricao:null,
      tipoTarefaId: null
    }
    this.tituloModal = "Nova tarefa";
    this.adicionarEditarTarefaComponent = true;
  }
  modalEditar(item:any){
    this.tarefa = item;
    this.tituloModal = "Editar tarefa n° " + item.id;
    this.adicionarEditarTarefaComponent = true;
  }
  apagarTarefa(item:any){
    if(confirm(`Você realmente deseja apagar a tarefa n° ${item.id}?`)){
      this.service.apagarTarefa(item.id).subscribe(res => {
        //msg-sucesso-delete
        var fecharModal = document.getElementById('fechar-modal-add-update');
        if(fecharModal){
          fecharModal.click();
        }
        var msgSucesso = document.getElementById('msg-sucesso-delete');
        if(msgSucesso){
          msgSucesso.style.display = "block";
        }
        setTimeout(function(){
          if(msgSucesso){
            msgSucesso.style.display = "none";
          }
        }, 4000)
      });
    }
  }
  fecharModal(){
    this.adicionarEditarTarefaComponent = false;
    this.listaTarefas$ = this.service.listarTarefas();
  }
  
}
