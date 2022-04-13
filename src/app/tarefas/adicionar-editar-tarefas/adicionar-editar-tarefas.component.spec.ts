import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarEditarTarefasComponent } from './adicionar-editar-tarefas.component';

describe('AdicionarEditarTarefasComponent', () => {
  let component: AdicionarEditarTarefasComponent;
  let fixture: ComponentFixture<AdicionarEditarTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarEditarTarefasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarEditarTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
