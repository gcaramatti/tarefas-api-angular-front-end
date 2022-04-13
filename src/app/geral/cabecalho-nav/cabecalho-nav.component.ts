import { Component, OnInit, Input  } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListarTarefasComponent } from 'src/app/tarefas/listar-tarefas/listar-tarefas.component';


@Component({
  selector: 'app-cabecalho-nav',
  templateUrl: './cabecalho-nav.component.html',
  styleUrls: ['./cabecalho-nav.component.css']
})
export class CabecalhoNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
