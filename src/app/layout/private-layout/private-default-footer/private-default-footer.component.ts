import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';

@Component({
  selector: 'app-private-default-footer',
  templateUrl: './private-default-footer.component.html',
  styleUrls: ['./private-default-footer.component.scss']
})
export class PrivateDefaultFooterComponent extends FooterComponent {
  constructor() {
    super();
  }
}
