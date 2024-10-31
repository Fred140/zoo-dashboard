import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportvComponent } from './rapportv.component';

describe('RapportvComponent', () => {
  let component: RapportvComponent;
  let fixture: ComponentFixture<RapportvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapportvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
