import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { OriginalBook } from './book.model';

const API_BASE_URL = 'https://gutendex.com'; // 'http://skunkworks.ignitesol.com:8000'; // used this since the URL mentioned in exercise is of http://

@Injectable({
  providedIn: 'root',
})
export class BooksPageService {
  constructor(private httpClient: HttpClient) {}

  fetchBooks(topic: string, page: number, search: string) {
    let url = `${API_BASE_URL}/books?=topic=${encodeURIComponent(
      topic,
    )}&page=${page}&mime_type=${encodeURIComponent('image/')}`;
    if (search.trim()) {
      url += `&search=${encodeURIComponent(search)}`;
    }
    return this.httpClient.get(url).pipe(
      map((response: any) => {
        const data = response.results.map((row: OriginalBook) => {
          let link = '';
          if (row.formats['text/html']) {
            link = row.formats['text/html'];
          } else if (row.formats['application/pdf']) {
            link = row.formats['application/pdf'];
          } else if (row.formats['text/plain']) {
            link = row.formats['text/plain'];
          }
          return {
            id: row.id,
            cover_image: row.formats['image/jpeg'] || '',
            title: row.title,
            link: link,
            author: row.authors.map((author) => author.name).join(', '),
          };
        });
        return { data, next: response.next };
      }),
      catchError((err) => {
        return Promise.reject(err);
      }),
    );
  }
}
