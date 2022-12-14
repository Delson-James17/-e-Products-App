import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercontComponent } from './usercont.component';

describe('UsercontComponent', () => {
  let component: UsercontComponent;
  let fixture: ComponentFixture<UsercontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
