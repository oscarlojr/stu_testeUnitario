import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investiments/components/list/list.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent, ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getPoupanca(): Valida valor em conta', ()=> {
    expect(component.getPoupanca).toEqual(10);
  });

  it('(U) getCarteira(): Valida valor na carteira', () => {
    expect(component.getCarteira).toEqual(50);
  }); 

  it('(U) setSacar(): Deve transferir de popança para carteira',() => {
    component.setSacar('10');
    fixture.detectChanges();
    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  });

  it(`(U) setSacar(): Não deve transferir para poupança como 
    string (isNaN) ou poupanca < value`, () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('70')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it('(I) setSacar(): Deve transferir de poupança para carteira', () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-sacar').value = '10';
    el.querySelector('#sacar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-carteira').textContent).toEqual('60');
  });

  it('(U) setDepositar(): Deve transferir de carteira para poupança', () => {
    component.setDepositar('20');
    fixture.detectChanges();
    expect(component.getCarteira).toEqual(30);
    expect(component.getPoupanca).toEqual(30);
  });

  it(`(U) setDepositar(): Não deve transferir para carteira como 
    string (isNaN) ou carteira < value`, () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('70')).not.toBeTruthy();
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  });

  it('(I) setDepositar(): Deve transferir de carteira para poupança', () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-poupanca').textContent).toEqual('20');
  });

});

