import { marked } from 'marked'

export function renderMarkdown(markdown: string): string {
  // Render markdown to HTML on the server to avoid client-only bundling issues
  return marked.parse(markdown) as string
}


