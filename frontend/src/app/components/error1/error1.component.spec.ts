import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error1Component } from './error1.component';

describe('Error1Component', () => {
  let component: Error1Component;
  let fixture: ComponentFixture<Error1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Error1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Error1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
