import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AsyncPipe, NgIf],
  template: `<app-header></app-header><main><router-outlet></router-outlet></main><div class="spinner" *ngIf="loading.isLoading$ | async">Loading...</div>`
})
export class AppComponent { loading = inject(LoadingService); }
