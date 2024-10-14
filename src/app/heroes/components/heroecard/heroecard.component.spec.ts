import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroecardComponent } from './heroecard.component';

describe('HeroecardComponent', () => {
  let component: HeroecardComponent;
  let fixture: ComponentFixture<HeroecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroecardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
