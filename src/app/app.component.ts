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
  searchInput: string | undefined;

  constructor(private configService: ConfigService) {}

  title = 'search-giphy';

  showConfig(query:any) {
    this.configService.getConfig(query)
      .subscribe({
        next: (data: any) => this.results = { ...data }, // success path
        error: error => this.error = error, // error path
      });
  }

}
