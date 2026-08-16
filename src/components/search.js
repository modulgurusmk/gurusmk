import Fuse from 'fuse.js'
import { normalizeItems } from '../utils/normalize.js'

/**
 * Renders a search input backed by fuse.js.
 *
 * @param {Array<object>} items - full list to search over
 * @param {object} options - { keys: string[], onResults: (filtered) => void }
 * @returns {HTMLElement}
 */
export function renderSearch(items, { keys, onResults }) {
  const data = normalizeItems(items)
  const fuse = new Fuse(data, { keys, threshold: 0.4 })

  const container = document.createElement('div')
  container.className = 'search'
  container.innerHTML = `
    <input type="search" placeholder="Cari mata pelajaran…" aria-label="Cari mata pelajaran" />
  `

  const input = container.querySelector('input')
  input.addEventListener('input', () => {
    const query = input.value.trim()
    const results = query ? fuse.search(query).map((result) => result.item) : data
    onResults(results)
  })

  return container
}
