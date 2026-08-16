import { renderHeader } from '../components/header.js'

function renderField(label, content) {
  const section = document.createElement('section')
  section.className = 'detail-section'

  const heading = document.createElement('h3')
  heading.textContent = label

  const body = document.createElement('p')
  if (content) {
    body.textContent = content
  } else {
    body.className = 'unavailable'
    body.textContent = 'Belum tersedia'
  }

  section.append(heading, body)
  return section
}

export function renderSubjectDetail(root, subject, { onBack }) {
  root.innerHTML = ''

  const main = document.createElement('main')

  const backButton = document.createElement('button')
  backButton.type = 'button'
  backButton.className = 'back-btn'
  backButton.textContent = '← Kembali'
  backButton.addEventListener('click', onBack)

  const article = document.createElement('article')
  article.className = 'detail'

  const title = document.createElement('h2')
  title.textContent = subject.name

  const meta = document.createElement('p')
  meta.className = 'meta'
  meta.textContent = [subject.jenjang, subject.fase, subject.kurikulum].filter(Boolean).join(' · ')

  const description = document.createElement('p')
  description.textContent = subject.description

  article.append(title, meta, description)
  article.append(renderField('Capaian Pembelajaran (CP)', subject.cp))
  article.append(renderField('Alur Tujuan Pembelajaran (ATP)', subject.atp))

  main.append(backButton, article)
  root.append(renderHeader(), main)
}
