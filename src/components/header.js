export function renderHeader() {
  const header = document.createElement('header')
  header.className = 'app-header'
  header.innerHTML = `
    <h1><a href="/">GuruSMK</a></h1>
    <p>Panduan kurikulum pendidikan Indonesia</p>
  `
  return header
}
