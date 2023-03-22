import { Component } from '@angular/core';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  error: any;
  results: any | undefined;
  searchInput: any | undefined;
  showSidebar: boolean = false;

  constructor(private configService: ConfigService) {}

  title = 'search-giphy';

  onSearch(query:any) {
    this.searchInput = query;
    this.configService.getConfig(query)
      .subscribe({
        next: (data: any) =>this.results = { ...data }, // success path
        error: error => this.error = error, // error path
      });
  }


  toggleSidebar(){
    this.showSidebar = !this.showSidebar;
  }

}
