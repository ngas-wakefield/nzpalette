import { Component, Input } from '@angular/core';

@Component({
  selector: 'palette',
  standalone: true,
  imports: [],
  templateUrl: './palette.component.html',
  styleUrl: './palette.component.css'
})
export class PaletteComponent {
  @Input() paletteFile!: string;
}
