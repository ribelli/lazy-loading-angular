import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MusicComponent } from './music.component';

describe('MusicComponent', () => {
  let fixture: ComponentFixture<MusicComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MusicComponent],
      })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(MusicComponent);
        });
    })
  );

  it('should create', () => {
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
