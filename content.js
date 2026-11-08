/* =====================================================================
   FILE INI ADALAH TEMPAT KAMU MENGEDIT ISI PORTOFOLIO.
   Kamu cukup mengubah tulisan di antara tanda kutip ' ' atau " ".
   Jangan hapus tanda koma (,) dan kurung ({ } [ ]) di akhir baris.
   Setelah diedit -> simpan -> upload ulang ke GitHub -> Vercel otomatis update.
   ===================================================================== */

const PORTFOLIO = {

  /* ---------- DATA DIRI ---------- */
  nama: 'Dinda Febiola Rachmawati',
  panggilan: 'Dinda',
  nama_belakang: 'Febiola Rachmawati',
  peran: 'Software Engineer in the making',
  tagline: 'Membangun aplikasi yang rapi, berguna, dan mudah dipakai.',
  lokasi: 'Nganjuk, Jawa Timur',

  /* ---------- FOTO UTAMA (slide di bagian paling atas) ---------- */
  hero: [
    'assets/hero/hero-1.jpg',
    'assets/hero/hero-2.jpg',
    'assets/hero/hero-3.jpg'
  ],

  /* ---------- KONTAK & LINK ---------- */
  kontak: {
    email: 'dindafebiola@gmail.com',
    whatsapp: '6287785444561',               // format: 62 + nomor tanpa 0
    linkedin: 'https://www.linkedin.com/in/dinda-febi-35b9b1404',
    jobstreet: 'https://id.jobstreet.com/profiles/dindafebiola-rachmawati-294db2d0hs',
    cv: 'assets/CV_Dinda_Febiola_Rachmawati.pdf'   // ganti file ini jika CV diperbarui
  },

  /* ---------- SOSIAL MEDIA (tampil sebagai tombol di bagian Kontak) ---------- */
  sosmed: [
    { nama: 'Instagram', link: 'https://www.instagram.com/dfb_27' },
    { nama: 'TikTok',    link: 'https://www.tiktok.com/@gdismn1s' },
    { nama: 'Threads',   link: 'https://www.threads.com/@dfb_27' },
    { nama: 'X (Twitter)', link: 'https://x.com/DaFeRax_27' },
    { nama: 'Telegram',  link: 'https://t.me/TIF_DINDAFEBIOLA' }
  ],

  /* ---------- TENTANG SAYA ---------- */
  tentang: [
    'Mahasiswa D4 Teknik Informatika semester 3 di Politeknik Negeri Jember dengan minat pada pengembangan perangkat lunak, baik aplikasi web maupun mobile.',
    'Terbiasa bekerja dalam tim pada proyek Project Based Learning: dari merancang, mengimplementasikan, sampai menguji fitur. Aktif di organisasi dan kepanitiaan, dan selalu semangat mempelajari hal baru.'
  ],
  fakta: [
    { angka: '3.60', label: 'IPK saat ini' },
    { angka: '3',    label: 'Proyek PBL' },
    { angka: '3',    label: 'Organisasi & kepanitiaan' },
    { angka: '2',    label: 'Sertifikat pelatihan' }
  ],

  /* ---------- RUNNING TEXT (strip yang bergerak) ---------- */
  marquee: ['D4 Teknik Informatika', 'Politeknik Negeri Jember', 'Flutter', 'PHP', 'MySQL', 'UI/UX', 'Project Based Learning', 'Team Player'],

  /* ---------- KEAHLIAN ---------- */
  keahlian: [
    { kelompok: 'Bahasa & Framework', warna: 'orange', item: ['Flutter', 'Dart', 'PHP', 'JavaScript', 'Java', 'HTML', 'CSS'] },
    { kelompok: 'Database & Tools',   warna: 'teal',   item: ['MySQL', 'Android Studio', 'GitHub', 'Postman', 'Visual Studio Code', 'Trello', 'UI/UX (Figma)'] },
    { kelompok: 'Produktivitas & Desain', warna: 'violet', item: ['Microsoft Office', 'Google Workspace', 'Canva', 'CapCut', 'PicsArt', 'AI Prompting'] },
    { kelompok: 'Soft Skills',        warna: 'pink',   item: ['Komunikasi', 'Kerja Sama Tim', 'Kepemimpinan', 'Berpikir Kritis', 'Pemecahan Masalah', 'Bertanggung Jawab', 'Adaptasi', 'Manajemen Waktu', 'Kemauan Belajar'] },
    { kelompok: 'Bahasa',             warna: 'yellow', item: ['Indonesia (Native)', 'Inggris (Basic)'] }
  ],

  /* ---------- PROYEK (geser kanan-kiri) ----------
     gambar: boleh diisi link gambar atau file di folder assets/proyek/ (contoh: 'assets/proyek/pakto-1.jpg')
     Kalau gambar tidak ada, kartu otomatis memakai warna latar.                             */
  proyek: [
    {
      judul: 'Pak To Barbershop',
      subjudul: 'Sistem Reservasi & Manajemen UMKM Digital',
      semester: 'Semester 1',
      periode: 'Sep 2025 – Des 2025',
      peran: 'Front-End Developer (anggota tim)',
      warna: 'orange',
      ringkasan: 'Sistem informasi berbasis web untuk mendigitalkan operasional UMKM pangkas rambut: dari antrian manual menjadi reservasi online.',
      detail: [
        'Reservasi online dengan nomor antrian otomatis (real-time).',
        'Dashboard admin untuk memantau antrian, data pelanggan, dan status pengerjaan.',
        'Manajemen stok otomatis menggunakan database trigger.',
        'Laporan keuangan harian/bulanan yang dicetak otomatis.',
        'Dikerjakan dalam tim 5 orang dan dipublikasikan di Pameran JTI Politeknik Negeri Jember.'
      ],
      teknologi: ['PHP Native', 'MySQL', 'Bootstrap'],
      link: 'https://pameran-jti.polije.ac.id/product/423/pak-to-barbershop-sistem-reservasi-manajemen-umkm-digital',
      gambar: ['assets/proyek/pakto-1.jpg', 'assets/proyek/pakto-2.jpg', 'assets/proyek/pakto-3.jpg', 'assets/proyek/pakto-4.jpg',
               'https://pameran-jti.polije.ac.id/public/uploads/posters/17/poster_692fee87cb8ad.jpg',
               'https://pameran-jti.polije.ac.id/public/uploads/screenshots/17/screenshot_692fee87e5bb9.jpg',
               'https://pameran-jti.polije.ac.id/public/uploads/screenshots/17/screenshot_692fee87f3744.jpg']
    },
    {
      judul: 'Catering Dapur Bu Mon',
      subjudul: 'Platform Manajemen Kuliner (Mobile Android)',
      semester: 'Semester 2',
      periode: 'Jan 2026 – Apr 2026',
      peran: 'Software Engineer (anggota tim)',
      warna: 'teal',
      ringkasan: 'Platform manajemen kuliner modern untuk membantu proses pemesanan, pengelolaan menu, monitoring transaksi, dan manajemen status pesanan.',
      detail: [
        'Tampilan yang user-friendly dengan fitur monitoring real-time untuk pelaku usaha kuliner.',
        'Mengimplementasikan fungsionalitas sistem sesuai alur kerja yang dibutuhkan.',
        'Bekerja sama dengan tim dalam diskusi, pembagian tugas, dan penyelesaian kendala.',
        'Dikerjakan oleh tim BiyarBiyurTEAM (5 orang) dan dipublikasikan di Pameran JTI Politeknik Negeri Jember.'
      ],
      teknologi: ['Mobile Android'],
      link: 'https://pameran-jti.polije.ac.id/pameran/product/622/catering-dapur-bu-mon',
      gambar: ['assets/proyek/bumon-1.jpg', 'assets/proyek/bumon-2.jpg', 'assets/proyek/bumon-3.jpg', 'assets/proyek/bumon-4.jpg',
               'https://pameran-jti.polije.ac.id/public/uploads/screenshots/22/screenshot_6a1bde7b257bd.jpg',
               'https://pameran-jti.polije.ac.id/public/uploads/screenshots/22/screenshot_6a1bde7b3e663.jpg']
    },
    {
      judul: 'Madrasahku',
      subjudul: 'Proyek PBL yang sedang dikerjakan',
      semester: 'Semester 3',
      periode: 'Sedang berjalan',
      peran: 'Front-End Developer (anggota tim)',
      warna: 'violet',
      status: 'segera',            // hapus baris ini + isi 'link' kalau proyek sudah selesai
      ringkasan: 'Proyek Project Based Learning semester 3 yang sedang kukerjakan. Aku bertanggung jawab di sisi front-end: menyusun tampilan antarmuka agar mudah dipakai.',
      detail: [
        'Peran: Front-End Developer, menyusun antarmuka pengguna.',
        'Detail fitur, teknologi, dan tautan proyek akan ditambahkan setelah proyek rampung.'
      ],
      teknologi: [],
      link: '',
      gambar: ['assets/proyek/madrasahku-1.jpg', 'assets/proyek/madrasahku-2.jpg']
    }
  ],

  /* ---------- PERJALANAN (kartu bertumpuk saat scroll ke bawah) ---------- */
  perjalanan: [
    { waktu: '2022 – 2025', judul: 'SMA Negeri 1 Gondang', jenis: 'Pendidikan', warna: 'yellow',
      isi: 'Paket 2 dengan nilai akhir 86,6. Mata pelajaran utama: Informatika, Kimia, Bahasa Inggris Tingkat Lanjut, Fisika, Ekonomi, Geografi, dan Matematika.' },
    { waktu: 'Agu 2025', judul: 'Mahasiswa D4 Teknik Informatika, Politeknik Negeri Jember', jenis: 'Pendidikan', warna: 'orange',
      isi: 'Memulai perkuliahan dan mengikuti pelatihan PBB pada PKKMB (Wawasan Kebangsaan dan Bela Negara), 12–13 Agustus 2025.' },
    { waktu: 'Sep – Des 2025', judul: 'Front-End Developer, Pak To Barbershop (PBL Semester 1)', jenis: 'Proyek', warna: 'teal',
      isi: 'Berkontribusi dalam pengembangan sistem reservasi dan manajemen UMKM pangkas rambut berbasis web bersama tim.' },
    { waktu: 'Okt 2025', judul: 'Peserta LKMM Pra-TD, HMJ Teknologi Informasi', jenis: 'Pelatihan', warna: 'violet',
      isi: 'Mengikuti Latihan Keterampilan Manajemen Mahasiswa Pra Tingkat Dasar yang mengasah kepemimpinan dan manajemen organisasi.' },
    { waktu: 'Des 2025 – sekarang', judul: 'Anggota Divisi Advokesma, Informatics Community', jenis: 'Organisasi', warna: 'pink',
      isi: 'Berpartisipasi aktif dalam kegiatan dan program kerja kemahasiswaan, serta berkolaborasi dengan anggota dan pengurus.' },
    { waktu: 'Jan – Apr 2026', judul: 'Software Engineer, Catering Dapur Bu Mon (PBL Semester 2)', jenis: 'Proyek', warna: 'orange',
      isi: 'Berkontribusi dalam perancangan, implementasi, dan pengujian platform manajemen kuliner berbasis Android.' },
    { waktu: '26 Agu 2026', judul: 'Panitia Humas, Exhibition Vol. 4.0', jenis: 'Kepanitiaan', warna: 'yellow',
      isi: 'Menjadi penghubung dengan sponsor untuk mendukung pendanaan dan pelaksanaan acara.' },
    { waktu: '16 Okt 2026', judul: 'Panitia Keamanan, Makrab Jilid 4', jenis: 'Kepanitiaan', warna: 'teal',
      isi: 'Membantu mengoordinasikan keamanan dan ketertiban selama pelaksanaan acara.' },
    { waktu: 'Semester 3 – sekarang', judul: 'Front-End Developer, Madrasahku (PBL Semester 3)', jenis: 'Proyek', warna: 'violet',
      isi: 'Sedang mengerjakan antarmuka pengguna untuk proyek Madrasahku bersama tim.' }
  ],

  /* ---------- KEPANITIAAN (geser kanan-kiri + foto) ----------
     Tambah foto: simpan di folder assets/kepanitiaan/ lalu tulis namanya di 'foto'.
     Contoh: foto: ['assets/kepanitiaan/humas-1.jpg', 'assets/kepanitiaan/humas-2.jpg']
     Foto yang belum ada otomatis tampil sebagai kotak "Foto menyusul".                  */
  kepanitiaan: [
    {
      judul: 'Anggota IMUN',
      acara: 'Seluruh anggota',
      tanggal: '',
      organisasi: 'Informatics Community',
      warna: 'violet',
      deskripsi: [
        'Foto bersama seluruh anggota Informatics Community.'
      ],
      foto: ['assets/kepanitiaan/imun-1.jpg', 'assets/kepanitiaan/imun-2.jpg']
    },
    {
      judul: 'Anggota Divisi Advokesma',
      acara: 'Divisi Advokesma',
      tanggal: 'Des 2025 – sekarang',
      organisasi: 'Informatics Community',
      warna: 'pink',
      deskripsi: [
        'Berpartisipasi aktif dalam kegiatan dan program kerja kemahasiswaan Divisi Advokesma.',
        'Berkontribusi dalam perencanaan dan pelaksanaan kegiatan organisasi sesuai tugas divisi.',
        'Berkolaborasi dengan anggota dan pengurus lain untuk mendukung kelancaran kegiatan.'
      ],
      foto: ['assets/kepanitiaan/advokesma-1.jpg', 'assets/kepanitiaan/advokesma-2.jpg']
    },
    {
      judul: 'Panitia Humas',
      acara: 'Exhibition Vol. 4.0',
      tanggal: '26 Agustus 2026',
      organisasi: 'Informatics Community',
      warna: 'orange',
      deskripsi: [
        'Menjalin komunikasi dan menjadi penghubung dengan pihak sponsor untuk mendukung pendanaan dan pelaksanaan acara.',
        'Membantu mencari dan menjangkau calon sponsor serta menyampaikan informasi kegiatan secara profesional.',
        'Berkoordinasi dengan tim kepanitiaan agar kebutuhan sponsor selaras dengan rencana acara.'
      ],
      foto: ['assets/kepanitiaan/humas-1.jpg', 'assets/kepanitiaan/humas-2.jpg', 'assets/kepanitiaan/humas-3.jpg']
    },
    {
      judul: 'Panitia Keamanan',
      acara: 'Makrab Jilid 4',
      tanggal: '16 Oktober 2026',
      organisasi: 'Informatics Community',
      warna: 'teal',
      deskripsi: [
        'Membantu mengoordinasikan keamanan dan ketertiban selama pelaksanaan acara.',
        'Menjaga kelancaran kegiatan dan keselamatan peserta bersama divisi lain.',
        'Menunjukkan tanggung jawab, kewaspadaan, dan kerja sama tim dalam situasi lapangan.'
      ],
      foto: ['assets/kepanitiaan/keamanan-1.jpg', 'assets/kepanitiaan/keamanan-2.jpg', 'assets/kepanitiaan/keamanan-3.jpg']
    }
  ],

  /* ---------- SERTIFIKAT ---------- */
  sertifikat: [
    {
      judul: 'Pelatihan PBB (Wawasan Kebangsaan & Bela Negara)',
      penyelenggara: 'PKKMB Politeknik Negeri Jember',
      tanggal: '12 – 13 Agustus 2025',
      warna: 'yellow',
      gambar: 'assets/sertifikat/pbb.jpg',
      link: 'https://drive.google.com/file/d/1H87DjLH877w8TA7obVGxCt9D9VzCqcE7/view?usp=sharing'
    },
    {
      judul: 'Peserta LKMM Pra-TD',
      penyelenggara: 'HMJ Teknologi Informasi, Politeknik Negeri Jember',
      tanggal: '4, 5 & 11 Oktober 2025',
      warna: 'violet',
      gambar: 'assets/sertifikat/lkmm.jpg',
      link: 'https://drive.google.com/file/d/1XsvQTl1gpADGqKS0x5ikTd3VJ-MaIdQF/view?usp=sharing'
    }
  ]
};
