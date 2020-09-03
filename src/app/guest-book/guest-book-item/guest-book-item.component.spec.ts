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

  it('[GuestBookItem] shld emit authorSelected wit correct author on selectAuthor', () => {
    const author ={name: 'john', email: 'john@mail.com', website: '', phone: '123321'};
    const entry = {id: 1, message: 'Guest messge', author};
    component.entry = entry;
    spyOn(component.authorSelected, 'emit');

    component.selectAuthor();

    expect(component.authorSelected.emit).toHaveBeenCalledWith(author);
  });
});
