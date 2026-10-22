import { marked } from 'marked';

// Renders a markdown string (from a CMS rich-text field) to HTML.
export function md(text: string | undefined): string {
  if (!text) return '';
  return marked.parse(text, { async: false, gfm: true, breaks: false }) as string;
}
