import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MoviesComponent],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(MoviesComponent);
        });
    })
  );

  it('should create', () => {
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
