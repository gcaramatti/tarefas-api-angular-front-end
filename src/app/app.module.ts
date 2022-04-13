import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { ListarTarefasComponent } from './tarefas/listar-tarefas/listar-tarefas.component';
import { AdicionarEditarTarefasComponent } from './tarefas/adicionar-editar-tarefas/adicionar-editar-tarefas.component';
import { TarefaApiService } from './tarefa-api.service';
import { CabecalhoNavComponent } from './geral/cabecalho-nav/cabecalho-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    ListarTarefasComponent,
    AdicionarEditarTarefasComponent,
    CabecalhoNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TarefaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
