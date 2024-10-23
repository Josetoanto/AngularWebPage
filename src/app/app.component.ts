import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './component/table/table.component';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, HeaderComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appWebAngular';
}