import { renderHeader } from '../components/header.js'
import { renderSearch } from '../components/search.js'
import { renderFilters } from '../components/filters.js'
import { renderSubjectList } from '../components/subject-list.js'
import { renderSubjectDetail } from './detail.js'
import subjects from '../data/subjects.json'

function renderEmptyState() {
  const message = document.createElement('p')
  message.className = 'empty-state'
  message.textContent = 'Tidak ada hasil'
  return message
}

export function renderKurikulum(root) {
  root.innerHTML = ''

  const main = document.createElement('main')
  const filtersContainer = document.createElement('div')
  const listContainer = document.createElement('div')

  // Current filter + search state. searchResults holds the latest
  // Fuse.js output (full list when the query is empty).
  let jenjang = 'Semua'
  let kurikulum = 'Semua'
  let searchResults = subjects

  function renderFiltersInto() {
    filtersContainer.replaceChildren(
      renderFilters({
        jenjang,
        kurikulum,
        onChange: (next) => {
          jenjang = next.jenjang
          kurikulum = next.kurikulum
          renderFiltersInto()
          renderList()
        },
      }),
    )
  }

  function renderList() {
    const filtered = searchResults.filter(
      (subject) =>
        (jenjang === 'Semua' || subject.jenjang === jenjang) &&
        (kurikulum === 'Semua' || subject.kurikulum === kurikulum),
    )
    listContainer.replaceChildren(
      filtered.length > 0
        ? renderSubjectList(filtered, {
            onSelect: (subject) =>
              renderSubjectDetail(root, subject, { onBack: () => renderKurikulum(root) }),
          })
        : renderEmptyState(),
    )
  }

  renderFiltersInto()

  main.append(
    filtersContainer,
    renderSearch(subjects, {
      keys: ['name', 'jenjang', 'kurikulum', 'description'],
      onResults: (results) => {
        searchResults = results
        renderList()
      },
    }),
    listContainer,
  )

  renderList()
  root.append(renderHeader(), main)
}
