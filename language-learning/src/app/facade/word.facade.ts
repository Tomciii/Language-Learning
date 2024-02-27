import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {firstValueFrom, Observable} from 'rxjs';
import {Word} from "../model/word.model";


@Injectable({
  providedIn: 'root',
})
export class WordFacade {
  private getAll = 'http://localhost:8085/public/api/getAll';
  private save = 'http://localhost:8085/public/api/save'
  private deleteUrl = 'http://localhost:8085/public/api/delete'

  constructor(private http: HttpClient) {}

  getAllWords() {
    return firstValueFrom(this.http.get<Word[]>(this.getAll));
  }

  saveArt(art: Word){
    return this.http.post<Word>(this.save, art)
  }

  delete(int: number) {
    return this.http.post(this.deleteUrl, int);
  }
};
