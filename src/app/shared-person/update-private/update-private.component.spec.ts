import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePrivateComponent } from './update-private.component';

describe('UpdatePrivateComponent', () => {
  let component: UpdatePrivateComponent;
  let fixture: ComponentFixture<UpdatePrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePrivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
