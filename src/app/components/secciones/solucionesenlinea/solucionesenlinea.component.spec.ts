import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucionesenlineaComponent } from './solucionesenlinea.component';

describe('SolucionesenlineaComponent', () => {
  let component: SolucionesenlineaComponent;
  let fixture: ComponentFixture<SolucionesenlineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolucionesenlineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolucionesenlineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
