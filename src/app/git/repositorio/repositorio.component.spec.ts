import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioComponent } from './repositorio.component';

describe('RepositorioComponent', () => {
  let component: RepositorioComponent;
  let fixture: ComponentFixture<RepositorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RepositorioComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
