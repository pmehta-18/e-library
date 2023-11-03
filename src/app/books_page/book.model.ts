export interface Book {
  id: number;
  title: string;
  author: string;
  cover_image: string;
  link: string;
}

export interface Person {
  name: string;
  birth_year: number | null;
  death_year: number | null;
}

export interface Format {
  [key: string]: string;
}

export interface OriginalBook {
  id: number;
  title: string;
  subjects: string[];
  authors: Person[];
  translators: Person[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  formats: Format;
  download_count: number;
}

export interface BooksResponse {
  count: number;
  next: string | null;
  prev: string | null;
  results: OriginalBook[];
}
