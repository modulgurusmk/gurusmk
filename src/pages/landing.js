import '../landing.css'

export function renderLanding(root) {
  root.innerHTML = `
    <header class="lp-nav">
      <div class="lp-nav-inner">
        <a href="/" class="lp-logo">GuruSMK</a>
        <a href="#daftar" class="lp-masuk">Masuk</a>
      </div>
    </header>

    <main class="lp-main">
      <section class="lp-hero">
        <h1 class="lp-hero-title">Modul Ajar SMK yang Ngerti Jurusanmu, Siswamu, dan Cara Mengajarmu</h1>
        <p class="lp-hero-sub">Bukan copy-paste dari internet. Dibuat khusus berdasarkan jurusan, fase, dan kondisi nyata kelasmu.</p>
        <a href="#daftar" class="lp-cta">Buat Modul Ajarku</a>
        <p class="lp-hero-note">TP + ATP + Modul Ajar lengkap · Rp15.000 per generate</p>
      </section>

      <section class="lp-how">
        <h2 class="lp-section-title">Cara Kerja</h2>
        <div class="lp-steps">
          <article class="lp-step">
            <span class="lp-step-num" aria-hidden="true">1</span>
            <h3>Ceritakan Kelasmu</h3>
            <p>Isi jurusan, fase, dan kondisi nyata siswamu</p>
          </article>
          <article class="lp-step">
            <span class="lp-step-num" aria-hidden="true">2</span>
            <h3>AI Generate dalam 60 Detik</h3>
            <p>Sistem membaca CP resmi BSKAP 046/2025 dan menyesuaikan dengan konteksmu</p>
          </article>
          <article class="lp-step">
            <span class="lp-step-num" aria-hidden="true">3</span>
            <h3>Download &amp; Tanda Tangan</h3>
            <p>TP, ATP, dan Modul Ajar siap cetak dalam format Word</p>
          </article>
        </div>
      </section>

      <section class="lp-register" id="daftar">
        <h2 class="lp-section-title">Mulai Sekarang</h2>
        <form class="lp-form">
          <label class="lp-field">
            <span>Nama Lengkap</span>
            <input type="text" name="nama" autocomplete="name" required />
          </label>
          <label class="lp-field">
            <span>Email</span>
            <input type="email" name="email" autocomplete="email" required />
          </label>
          <label class="lp-field">
            <span>Password</span>
            <input type="password" name="password" autocomplete="new-password" required />
          </label>
          <label class="lp-field">
            <span>Konfirmasi Password</span>
            <input type="password" name="konfirmasi" autocomplete="new-password" required />
          </label>
          <p class="lp-form-msg" hidden></p>
          <button type="submit" class="lp-submit">Daftar Gratis</button>
        </form>
        <p class="lp-register-note">Sudah punya akun? <a href="#daftar" class="lp-link">Masuk</a></p>
      </section>
    </main>

    <footer class="lp-footer">
      <p>© 2026 GuruSMK.com · Dibuat untuk guru SMK Indonesia</p>
      <a class="lp-ref-link" href="/kurikulum">Referensi Kurikulum →</a>
    </footer>
  `

  const form = root.querySelector('.lp-form')
  const msg = root.querySelector('.lp-form-msg')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const password = form.password.value
    const konfirmasi = form.konfirmasi.value

    if (password !== konfirmasi) {
      msg.className = 'lp-form-msg'
      msg.textContent = 'Password dan konfirmasi password tidak sama.'
      msg.hidden = false
      return
    }

    form.reset()
    msg.className = 'lp-form-msg lp-form-msg--ok'
    msg.textContent = 'Terima kasih! Pendaftaranmu sudah diterima.'
    msg.hidden = false
  })
}
