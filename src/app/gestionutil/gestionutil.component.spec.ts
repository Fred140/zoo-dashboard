import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionutilComponent } from './gestionutil.component';

describe('GestionutilComponent', () => {
  let component: GestionutilComponent;
  let fixture: ComponentFixture<GestionutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionutilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
