import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDefaultFooterComponent } from './public-default-footer.component';

describe('DefaultFooterComponent', () => {
  let component: PublicDefaultFooterComponent;
  let fixture: ComponentFixture<PublicDefaultFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PublicDefaultFooterComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDefaultFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
