import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarNavbarComponent } from './topbar-navbar.component';

describe('TopbarNavbarComponent', () => {
  let component: TopbarNavbarComponent;
  let fixture: ComponentFixture<TopbarNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
