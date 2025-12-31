import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-alert-danger',
  standalone: true,
  imports: [],
  templateUrl: './alert-danger.component.html',
  styleUrls: ['./alert-danger.component.css']
})
export class AlertDangerComponent {


  @Input() label: string = '';

}
