import {Component, OnInit} from '@angular/core';
import {Word} from "../../model/word.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = WORD_DATA;

  ngOnInit(): void {

  }

}

const WORD_DATA: Word[] = [
  {position: 1, word: 'asd', type: 1, meaning: 'H'},
];
