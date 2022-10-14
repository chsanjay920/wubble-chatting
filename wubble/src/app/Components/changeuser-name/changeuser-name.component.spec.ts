import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeuserNameComponent } from './changeuser-name.component';

describe('ChangeuserNameComponent', () => {
  let component: ChangeuserNameComponent;
  let fixture: ComponentFixture<ChangeuserNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeuserNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeuserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
