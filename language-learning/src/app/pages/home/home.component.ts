import {Component, OnInit} from '@angular/core';
import {WordFacade} from "../../facade/word.facade";
import {Word} from "../../model/word.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataSource: Word[] = [];

  constructor(private wordFacade: WordFacade) {}

  async ngOnInit(): Promise<void> {
    this.dataSource = await this.wordFacade.getAllWords();
  }

}
