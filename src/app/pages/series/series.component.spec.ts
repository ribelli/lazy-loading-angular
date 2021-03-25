import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SeriesComponent } from './series.component';

describe('SeriesComponent', () => {
  let fixture: ComponentFixture<SeriesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SeriesComponent],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(SeriesComponent);
        });
    })
  );

  it('should create', () => {
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
