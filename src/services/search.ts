import { MeiliSearch } from 'meilisearch';
import { config } from '../config';

export const meili = new MeiliSearch({
  host: config.meilisearch.host,
  apiKey: config.meilisearch.apiKey,
});

export async function initSearch() {
  const index = meili.index('listings');

  // Configure searchable attributes for Arabic
  await index.updateSearchableAttributes([
    'title',
    'description',
    'city',
    'neighborhood',
  ]);

  await index.updateFilterableAttributes([
    'category_id',
    'city',
    'price',
    'status',
    'user_id',
  ]);

  await index.updateSortableAttributes([
    'created_at',
    'price',
    'views_count',
  ]);

  console.log('Meilisearch index configured');
}

export async function indexListing(listing: any) {
  const index = meili.index('listings');
  await index.addDocuments([listing]);
}

export async function removeListing(id: number) {
  const index = meili.index('listings');
  await index.deleteDocument(id);
}

export async function searchListings(query: string, filters?: {
  category_id?: number;
  city?: string;
  minPrice?: number;
  maxPrice?: number;
}, page = 1, limit = 20) {
  const index = meili.index('listings');

  const filterParts: string[] = ['status = "active"'];

  if (filters?.category_id) {
    filterParts.push(`category_id = ${filters.category_id}`);
  }
  if (filters?.city) {
    filterParts.push(`city = "${filters.city}"`);
  }
  if (filters?.minPrice !== undefined) {
    filterParts.push(`price >= ${filters.minPrice}`);
  }
  if (filters?.maxPrice !== undefined) {
    filterParts.push(`price <= ${filters.maxPrice}`);
  }

  return index.search(query, {
    filter: filterParts.join(' AND '),
    offset: (page - 1) * limit,
    limit,
    sort: ['created_at:desc'],
  });
}
