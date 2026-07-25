export type PaginationParams = {
  page: number;
  limit: number;
};

export type PaginationMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasMore: boolean;
  hasPrev: boolean;
};

/**
 * Calculate SQL OFFSET and LIMIT from page-based params.
 */
export function toOffsetLimit(params: PaginationParams): { offset: number; limit: number } {
  const page = Math.max(1, params.page);
  const limit = Math.min(Math.max(1, params.limit), 100);
  return { offset: (page - 1) * limit, limit };
}

/**
 * Build pagination metadata for a response.
 */
export function buildPaginationMeta(
  params: PaginationParams,
  total: number
): PaginationMeta {
  const page = Math.max(1, params.page);
  const limit = Math.min(Math.max(1, params.limit), 100);
  const totalPages = Math.ceil(total / limit);
  return {
    page,
    limit,
    total,
    totalPages,
    hasMore: page < totalPages,
    hasPrev: page > 1,
  };
}

/**
 * Build a standard list response shape.
 */
export function buildListResponse<T>(
  items: T[],
  total: number,
  params: PaginationParams
): { items: T[]; total: number; page: number; limit: number; hasMore: boolean } {
  const meta = buildPaginationMeta(params, total);
  return {
    items,
    total,
    page: meta.page,
    limit: meta.limit,
    hasMore: meta.hasMore,
  };
}
