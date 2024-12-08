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

    imgSrcFile = ''; // For img-src
  paletteFile = 'P1070179-Colourful.jpg'; // For palette
  dropdownFiles = [
    'P1070210-Colourful.jpg',
    'P1070210-Bright.jpg',
    'P1070210-Muted.jpg',
    'P1070210-Deep.jpg',
    'P1070210-Dark.jpg'
  ]; // For dropdown
}
