import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
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

  it('(U) setDepositar(): Deve transferir de carteira para poupança', () => {
    component.setDepositar('20');
    fixture.detectChanges();
    expect(component.getCarteira).toEqual(30);
    expect(component.getPoupanca).toEqual(30);
  });

});

