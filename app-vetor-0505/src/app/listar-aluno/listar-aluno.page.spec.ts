import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarAlunoPage } from './listar-aluno.page';

describe('ListarAlunoPage', () => {
  let component: ListarAlunoPage;
  let fixture: ComponentFixture<ListarAlunoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
