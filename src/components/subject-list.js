import { normalizeItems } from '../utils/normalize.js'

export function renderSubjectList(items, { onSelect } = {}) {
  const list = document.createElement('ul')
  list.className = 'subject-list'

  for (const item of normalizeItems(items)) {
    const meta = [
      item.jenjang,
      item.grade ? `Kelas ${item.grade}` : null,
      item.kurikulum,
    ]
      .filter(Boolean)
      .join(' · ')

    const li = document.createElement('li')
    li.innerHTML = `
      <h3>${item.name}</h3>
      <p class="meta">${meta}</p>
      <p>${item.description}</p>
    `
    if (onSelect) {
      li.classList.add('clickable')
      li.tabIndex = 0
      li.setAttribute('role', 'button')
      li.setAttribute('aria-label', `Lihat detail ${item.name}`)
      li.addEventListener('click', () => onSelect(item))
      li.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect(item)
        }
      })
    }

    list.append(li)
  }

  return list
}
