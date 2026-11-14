import { getCollection, type CollectionEntry } from 'astro:content';
import type { Section } from '../config';

type Entry = CollectionEntry<'projects'>;

export async function getEntries(collection: Section['collection']): Promise<Entry[]> {
  const all = (await getCollection(collection)) as unknown as Entry[];
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

const fmt = (d: Date, o: Intl.DateTimeFormatOptions) =>
  d.toLocaleDateString('en-US', { timeZone: 'UTC', ...o });

export function dateLabel(data: Entry['data'], range: boolean): string {
  if (!range) return fmt(data.date, { month: 'short', year: 'numeric' });
  const start = fmt(data.date, { year: 'numeric' });
  const end = data.current || !data.endDate ? 'Present' : fmt(data.endDate, { year: 'numeric' });
  return start === end ? start : `${start} – ${end}`;
}

export const entryHref = (s: Section, id: string) => `/${s.key}/${id}`;
