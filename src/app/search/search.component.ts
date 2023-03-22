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

  // showConfig(query:any) {
  //   this.configService.getConfig(query)
  //     .subscribe({
  //       next: (data: any) =>this.results = { ...data }, // success path
  //       error: error => this.error = error, // error path
  //     });
  // }


}