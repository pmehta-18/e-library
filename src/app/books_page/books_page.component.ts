import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { BooksPageService } from './books_page.service';
import { Book } from './book.model';

@Component({
  selector: 'app-books-page',
  templateUrl: './books_page.component.html',
  styleUrls: ['./books_page.component.css'],
})
export class BooksPageComponent implements OnInit, OnDestroy {
  title = 'fiction';
  page = 1;
  searchQuery = '';
  books: Book[] = [];
  hasMore = true;
  private searchSubject = new Subject<string | null>();

  constructor(
    private route: ActivatedRoute,
    private readonly booksPageService: BooksPageService,
  ) {
    this.title = this.route.snapshot.queryParams['topic'];
  }

  ngOnInit(): void {
    this.loadBooks();
    this.searchSubject.pipe(debounceTime(300)).subscribe((value) => {
      this.searchQuery = value || '';
      this.page = 1;
      this.hasMore = true;
      this.books = [];
      this.loadBooks();
    });
  }

  ngOnDestroy(): void {
    this.searchSubject.complete();
  }

  onSearchChange(search: string | null) {
    this.searchQuery = search || '';
    this.searchSubject.next(search || '');
  }

  loadBooks() {
    if (this.hasMore) {
      this.booksPageService
        .fetchBooks(this.title, this.page, this.searchQuery)
        .subscribe((response) => {
          this.books = [...this.books, ...response.data];
          if (!response.next) {
            this.hasMore = false;
          } else {
            this.hasMore = true;
            this.page += 1;
          }
        });
    }
  }
}
