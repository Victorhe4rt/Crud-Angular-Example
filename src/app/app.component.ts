import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponentComponent } from '../components/table-component/table-component.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TableComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-learning';
}
