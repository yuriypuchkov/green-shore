import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestBookContainerComponent } from './guest-book-container.component';

describe('ContainerComponent', () => {
  let component: GuestBookContainerComponent;
  let fixture: ComponentFixture<GuestBookContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestBookContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestBookContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
