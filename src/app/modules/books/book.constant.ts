export const bookSearchableFields = ['title', 'author', 'genre'];

export const bookFilterableFields = [
  'searchTerm',
  'title',
  'author',
  'genre',
  'price',
  'publicationDate',
  'categoryId',
];

export const bookRelationalFields: string[] = ['categoryId'];

export const bookRelationalFieldsMapper: { [key: string]: string } = {
  categoryId: 'category',
};
