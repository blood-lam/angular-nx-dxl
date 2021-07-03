import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceljsTempComponent } from './exceljs-temp.component';

describe('ExceljsTempComponent', () => {
  let component: ExceljsTempComponent;
  let fixture: ComponentFixture<ExceljsTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExceljsTempComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceljsTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
