import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirDadosComponent } from './exibir-dados.component';

describe('ExibirDadosComponent', () => {
  let component: ExibirDadosComponent;
  let fixture: ComponentFixture<ExibirDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibirDadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibirDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
