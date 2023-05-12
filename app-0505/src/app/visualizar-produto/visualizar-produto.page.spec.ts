import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizarProdutoPage } from './visualizar-produto.page';

describe('VisualizarProdutoPage', () => {
  let component: VisualizarProdutoPage;
  let fixture: ComponentFixture<VisualizarProdutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VisualizarProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
