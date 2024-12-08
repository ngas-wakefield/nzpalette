import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSrcComponent } from './img-src.component';

describe('ImgSrcComponent', () => {
  let component: ImgSrcComponent;
  let fixture: ComponentFixture<ImgSrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgSrcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgSrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
