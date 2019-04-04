import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSampleComponent } from './services-sample.component';

describe('ServicesSampleComponent', () => {
  let component: ServicesSampleComponent;
  let fixture: ComponentFixture<ServicesSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
