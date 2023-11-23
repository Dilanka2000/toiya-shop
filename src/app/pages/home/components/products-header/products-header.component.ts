import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.css',
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desec';
  itemesShowCount = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemesUpdated(count: number): void {
    this.itemesShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void{
    this.columnsCountChange.emit(colsNum);
  }
}