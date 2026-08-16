const JENJANG_OPTIONS = ['Semua', 'SD', 'SMP', 'SMA', 'SMK']
const KURIKULUM_OPTIONS = ['Semua', 'Kurikulum Merdeka', 'Pembelajaran Mendalam', 'CP-TP SMK']

function renderGroup({ label, options, value, onSelect }) {
  const fieldset = document.createElement('fieldset')
  fieldset.className = 'filter-group'

  const legend = document.createElement('legend')
  legend.textContent = label
  fieldset.append(legend)

  for (const option of options) {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'filter-btn'
    if (option === value) button.classList.add('active')
    button.textContent = option
    button.setAttribute('aria-pressed', option === value ? 'true' : 'false')
    button.addEventListener('click', () => onSelect(option))
    fieldset.append(button)
  }

  return fieldset
}

/**
 * Renders two filter button groups (Jenjang, Kurikulum).
 *
 * @param {object} state - { jenjang, kurikulum } current selections
 * @param {(next: { jenjang: string, kurikulum: string }) => void} onChange
 * @returns {HTMLElement}
 */
export function renderFilters({ jenjang, kurikulum, onChange }) {
  const container = document.createElement('div')
  container.className = 'filters'

  container.append(
    renderGroup({
      label: 'Jenjang',
      options: JENJANG_OPTIONS,
      value: jenjang,
      onSelect: (next) => onChange({ jenjang: next, kurikulum }),
    }),
    renderGroup({
      label: 'Kurikulum',
      options: KURIKULUM_OPTIONS,
      value: kurikulum,
      onSelect: (next) => onChange({ jenjang, kurikulum: next }),
    }),
  )

  return container
}
