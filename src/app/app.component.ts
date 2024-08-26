import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {
  MatCell,
  MatTable,
  MatCellDef,
  MatHeaderRow,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRowDef,
  MatHeaderCellDef,
  MatRow, MatRowDef,
} from "@angular/material/table";

interface AudioRecord {
  id: number;
  name: string;
  fileName: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatRow,
    MatCell,
    MatTable,
    MatCellDef,
    MatRowDef,
    RouterOutlet,
    MatColumnDef,
    MatHeaderRow,
    MatHeaderCell,
    MatHeaderRowDef,
    MatHeaderCellDef,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'fileName'];
  dataSource: AudioRecord[] = [
    {id: 1, name: 'Sound 1', fileName: 'sound1.wav'},
    {id: 2, name: 'Sound 2', fileName: 'sound2.wav'},
    {id: 3, name: 'Sound 3', fileName: 'sound3.wav'}
  ];
  selectedAudio: AudioRecord | null = null;

  selectAudio(row: AudioRecord) {
    this.selectedAudio = row;
  }

}
