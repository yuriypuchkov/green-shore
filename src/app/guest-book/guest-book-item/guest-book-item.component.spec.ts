import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestBookItemComponent } from './guest-book-item.component';

describe('GuestBookItemComponent', () => {
  let component: GuestBookItemComponent;
  let fixture: ComponentFixture<GuestBookItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestBookItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
