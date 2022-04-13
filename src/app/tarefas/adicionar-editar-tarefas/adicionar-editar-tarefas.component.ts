import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefaApiService } from 'src/app/tarefa-api.service';

@Component({
  selector: 'app-adicionar-editar-tarefas',
  templateUrl: './adicionar-editar-tarefas.component.html',
  styleUrls: ['./adicionar-editar-tarefas.component.css']
})
export class AdicionarEditarTarefasComponent implements OnInit {

  listaTarefas$!:Observable<any[]>;
  listaDeTipos$!:Observable<any[]>;
  listaStatus$!:Observable<any[]>;

  constructor(private service:TarefaApiService) { }

  @Input() tarefa:any;
  id: number = 0;
  name: string = "";
  status: string = "";
  descricao: string = "";
  tipoTarefaId!: number;

  ngOnInit(): void {
    this.id = this.tarefa.id;
    this.name = this.tarefa.name;
    this.status = this.tarefa.status;
    this.descricao = this.tarefa.descricao;
    this.tipoTarefaId = this.tarefa.tipoTarefaId;
    this.listaTarefas$ = this.service.listarTarefas();
    this.listaDeTipos$ = this.service.listarTipoTarefas();
    this.listaStatus$ = this.service.listarStatusTarefas();
  }
  //adicionarTarefa atualizarTarefa
  adicionarTarefa(){
    var dadosTarefa = {
      name:this.name,
      status:this.status,
      descricao:this.descricao,
      tipoTarefaId: this.tipoTarefaId
    }
    this.service.criarTarefa(dadosTarefa).subscribe(res =>{
      var fecharModal = document.getElementById('fechar-modal-add-update');
      if(fecharModal){
        fecharModal.click();
      }
      var msgSucesso = document.getElementById('msg-sucesso');
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

  atualizarTarefa(){
    var dadosTarefa = {
      id:this.id,
      name:this.name,
      status:this.status,
      descricao:this.descricao,
      tipoTarefaId: this.tipoTarefaId
    }
    var id:number = this.id;
    this.service.atualizarTarefa(id, dadosTarefa).subscribe(res =>{
      var fecharModal = document.getElementById('fechar-modal-add-update');
      if(fecharModal){
        fecharModal.click();
      }
      var msgSucesso = document.getElementById('msg-sucesso-update');
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
