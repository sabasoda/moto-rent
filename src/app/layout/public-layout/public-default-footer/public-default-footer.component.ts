import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';

@Component({
  selector: 'app-public-default-footer',
  templateUrl: './public-default-footer.component.html',
  styleUrls: ['./public-default-footer.component.scss']
})
export class PublicDefaultFooterComponent extends FooterComponent {
  constructor() {
    super();
  }
}
