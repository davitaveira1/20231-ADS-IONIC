import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarAlunoPage } from './cadastrar-aluno.page';

describe('CadastrarAlunoPage', () => {
  let component: CadastrarAlunoPage;
  let fixture: ComponentFixture<CadastrarAlunoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrarAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
