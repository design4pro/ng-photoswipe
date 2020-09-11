import { async, TestBed } from '@angular/core/testing';
import { NgPhotoswipeModule } from './ng-photoswipe.module';

describe('NgPhotoswipeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgPhotoswipeModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(NgPhotoswipeModule).toBeDefined();
  });
});
