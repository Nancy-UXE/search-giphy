import { Component, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  error: any;
  results: any | undefined;
  searchInput: string = '';
  showSidebar: boolean = false;

  constructor(private configService: ConfigService) {}

  title = 'search-giphy';

  @Output() newSearchEvent = new EventEmitter<string>();

  search(value: string) {
    this.newSearchEvent.emit(value);
  }
}