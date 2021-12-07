export interface Page {
  pageNumber?: number,
  pageSize?: number,
  orderBy?: string
}

export interface Book extends Page{
  keyword: string,
  label?: string,
  author?: string,
}

export interface BookCategory extends Page {
  bookType: string
}

