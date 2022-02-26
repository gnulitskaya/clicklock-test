import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicklockComponent } from './clicklock.component';

describe('ClicklockComponent', () => {
  let component: ClicklockComponent;
  let fixture: ComponentFixture<ClicklockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClicklockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClicklockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
