import { Component, Input } from '@angular/core';

@Component({
  selector: 'dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() imageFiles: string[] = []; // Array of images passed from parent
  selectedImage?: string;

  onFilterChange(selected: string) {
    this.selectedImage = selected; // Update the displayed image
  }
}
