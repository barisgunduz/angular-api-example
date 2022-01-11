import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleUsageComponent } from './module-usage.component';

describe('ModuleUsageComponent', () => {
  let component: ModuleUsageComponent;
  let fixture: ComponentFixture<ModuleUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleUsageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
