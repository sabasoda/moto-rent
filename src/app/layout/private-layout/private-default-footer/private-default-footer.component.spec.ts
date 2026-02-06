import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDefaultFooterComponent } from './private-default-footer.component';

describe('PrivateDefaultFooterComponent', () => {
  let component: PrivateDefaultFooterComponent;
  let fixture: ComponentFixture<PrivateDefaultFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PrivateDefaultFooterComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDefaultFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
