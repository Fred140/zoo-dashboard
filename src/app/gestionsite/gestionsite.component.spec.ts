import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionsiteComponent } from './gestionsite.component';

describe('GestionsiteComponent', () => {
  let component: GestionsiteComponent;
  let fixture: ComponentFixture<GestionsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionsiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
