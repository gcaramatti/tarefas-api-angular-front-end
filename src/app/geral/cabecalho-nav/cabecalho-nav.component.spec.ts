import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoNavComponent } from './cabecalho-nav.component';

describe('CabecalhoNavComponent', () => {
  let component: CabecalhoNavComponent;
  let fixture: ComponentFixture<CabecalhoNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabecalhoNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
