import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'img-src',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-src.component.html',
  styleUrl: './img-src.component.css'
})
export class ImgSrcComponent {
  @Input() imageFile!: string;
}
