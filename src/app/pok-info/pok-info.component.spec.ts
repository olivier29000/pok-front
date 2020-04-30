import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokInfoComponent } from './pok-info.component';

describe('PokInfoComponent', () => {
  let component: PokInfoComponent;
  let fixture: ComponentFixture<PokInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
