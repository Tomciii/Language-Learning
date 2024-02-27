import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {firstValueFrom, Observable} from 'rxjs';
import {Word} from "../model/word.model";


@Injectable({
  providedIn: 'root',
})
export class ArtFacade {
  private getAllArt = 'http://localhost:8085/application/public/api/getAllArt';
  private save = 'http://localhost:8085/application/public/api/save'
  private deleteUrl = 'http://localhost:8085/application/public/api/delete'

  constructor(private http: HttpClient) {}

  getArtList() {
    return firstValueFrom(this.http.get<Word[]>(this.getAllArt));
  }

  saveArt(art: Word){
    return this.http.post<Word>(this.save, art)
  }

  delete(int: number) {
    return this.http.post(this.deleteUrl, int);
  }
};
