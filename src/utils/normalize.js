const ARRAY_KEYS = ['subjects', 'data', 'items']

/**
 * Coerce loaded data into a plain array.
 * Accepts an array directly, or an object that wraps an array under a
 * known key such as { subjects: [...] }, { data: [...] }, or { items: [...] }.
 *
 * @param {unknown} items
 * @returns {Array<object>}
 */
export function normalizeItems(items) {
  if (Array.isArray(items)) return items
  if (items && typeof items === 'object') {
    for (const key of ARRAY_KEYS) {
      if (Array.isArray(items[key])) return items[key]
    }
  }
  return []
}
