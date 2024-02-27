import {Component, Input, OnInit} from '@angular/core';
import {WordFacade} from "../../facade/word.facade";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private wordFacade: WordFacade) {}


  dataSource: any = [];

  displayedColumns: string[] = ['id', 'word', 'meaning', 'type'];

  async ngOnInit(): Promise<void> {
    this.dataSource = await this.wordFacade.getAllWords();
    console.log(this.dataSource)
  }
}
