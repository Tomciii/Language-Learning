import {Component} from '@angular/core';
import {Word} from "../../model/Word";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = WORD_DATA;

}


const WORD_DATA: Word[] = [
  {position: 1, word: '', type: 1, meaning: 'H'},
];
