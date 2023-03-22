import { Component, Input } from '@angular/core'; // First, import Input

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() results: any = []; 
}
