import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PaletteComponent, ImgSrcComponent, DropdownComponent } from './components/index'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PaletteComponent, ImgSrcComponent, DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'te taiao';
  subtitleMi = 'Tae o te Whenua - Colours of the Earth ';
  subtitleEng = 'The colours of nature'
  logo = 'assets/nz-palette-logo.png';
}
