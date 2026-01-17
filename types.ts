export interface DocumentData {
  id: string;
  title: string;
  author: string;
  type: string;
  source: string;
  date: string;
  content: string;
  imageMarkers?: number[]; // Deprecated in favor of dynamic extraction, kept for backward compat if needed
}

export interface ExtractedFigure {
  id: string;
  label: string;
  caption: string;
  page: number; // Simulated page number
  context: string; // The surrounding text
}

export type NotesMap = Record<string, string>;
