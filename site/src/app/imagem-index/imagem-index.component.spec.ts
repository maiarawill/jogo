import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemIndexComponent } from './imagem-index.component';

describe('ImagemIndexComponent', () => {
  let component: ImagemIndexComponent;
  let fixture: ComponentFixture<ImagemIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagemIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagemIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
