import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) Should list investiments', () => {
    let investiments = component.investiments;
    expect(investiments.length).toBe(4);
    expect(investiments[0].name).toContain('Itaú');
    expect(investiments[3].name).toContain('Bradesco');
  });
  it('(I) Should list investiment', () => {
    let investiment = fixture.debugElement.nativeElement.querySelectorAll('.list_items');

    expect(investiment.length).toBe(4);
    expect(investiment[0].textContent.trim()).toEqual('Itaú | 100');
    expect(investiment[3].textContent.trim()).toEqual('Bradesco | 369');
  });
});
