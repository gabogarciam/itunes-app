import { SearchEntry } from './search-entry.model';

export interface SearchResults {
  resultCount: number;
  results: SearchEntry[];
}