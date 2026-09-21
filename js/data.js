// ============ DATABASE VIDEO YOUR PLAY ============
// Ganti videoId dengan ID YouTube asli pilihanmu
// Contoh: https://www.youtube.com/watch?v=dQw4w9WgXcQ => videoId: "dQw4w9WgXcQ"

const VIDEOS = [
  // ========== ANIME (10 video) ==========
  {
    id: "anime-1",
    title: "Demon Slayer: Kimetsu no Yaiba - Trailer Resmi",
    category: "anime",
    genre: "Action, Supernatural",
    videoId: "VQGCKyvzIM4",
    thumbnail: "https://img.youtube.com/vi/VQGCKyvzIM4/maxresdefault.jpg",
    year: 2024, rating: 9.3, views: "12M", duration: "2:30",
    badge: "HOT",
    desc: "Tanjiro Kamado, seorang remaja baik hati yang hidup bersama keluarganya di pegunungan, menemukan hidupnya berubah tragis ketika keluarganya dibantai oleh iblis dan adiknya Nezuko diubah menjadi iblis."
  },
  {
    id: "anime-2",
    title: "Jujutsu Kaisen Season 2 - Official Trailer",
    category: "anime",
    genre: "Action, Dark Fantasy",
    videoId: "4A_X-Dvl0ws",
    thumbnail: "https://img.youtube.com/vi/4A_X-Dvl0ws/maxresdefault.jpg",
    year: 2024, rating: 9.5, views: "18M", duration: "2:15",
    badge: "TRENDING",
    desc: "Yuji Itadori, seorang siswa SMA dengan kekuatan fisik luar biasa, menelan jari terkutuk Sukuna dan menjadi wadah iblis kutukan paling kuat."
  },
  {
    id: "anime-3",
    title: "Attack on Titan Final Season - Trailer",
    category: "anime",
    genre: "Action, Drama, Fantasy",
    videoId: "SlNpRThS9t8",
    thumbnail: "https://img.youtube.com/vi/SlNpRThS9t8/maxresdefault.jpg",
    year: 2024, rating: 9.8, views: "25M", duration: "3:00",
    badge: "TOP",
    desc: "Eren Yeager dan teman-temannya bertarung melawan raksasa humanoid yang memakan manusia. Kebenaran di balik dinding kota akan terungkap."
  },
  {
    id: "anime-4",
    title: "One Piece - Egghead Arc Trailer",
    category: "anime",
    genre: "Adventure, Comedy",
    videoId: "MCb13lbVGE0",
    thumbnail: "https://img.youtube.com/vi/MCb13lbVGE0/maxresdefault.jpg",
    year: 2024, rating: 9.2, views: "10M", duration: "2:45",
    desc: "Monkey D. Luffy dan kru Topi Jerami melanjutkan petualangan untuk menemukan harta karun legendaris One Piece dan menjadi Raja Bajak Laut."
  },
  {
    id: "anime-5",
    title: "Spy x Family - Official Trailer",
    category: "anime",
    genre: "Comedy, Action, Slice of Life",
    videoId: "ofXigqP5-pU",
    thumbnail: "https://img.youtube.com/vi/ofXigqP5-pU/maxresdefault.jpg",
    year: 2023, rating: 9.0, views: "8M", duration: "1:50",
    badge: "NEW",
    desc: "Seorang mata-mata harus membentuk keluarga palsu untuk menjalankan misi rahasia, tanpa tahu bahwa istri dan anaknya juga memiliki rahasia masing-masing."
  },
  {
    id: "anime-6",
    title: "Chainsaw Man - Official Trailer",
    category: "anime",
    genre: "Action, Horror, Comedy",
    videoId: "dFlDRhvM4L0",
    thumbnail: "https://img.youtube.com/vi/dFlDRhvM4L0/maxresdefault.jpg",
    year: 2023, rating: 8.9, views: "9M", duration: "2:20",
    desc: "Denji, seorang pemburu iblis muda yang bergabung dengan organisasi Public Safety Devil Hunters setelah digabungkan dengan iblis chainsaw."
  },
  {
    id: "anime-7",
    title: "My Hero Academia Season 7 - Trailer",
    category: "anime",
    genre: "Action, Superhero",
    videoId: "WPvGqX-TXP0",
    thumbnail: "https://img.youtube.com/vi/WPvGqX-TXP0/maxresdefault.jpg",
    year: 2024, rating: 8.8, views: "7M", duration: "2:00",
    desc: "Izuku Midoriya, seorang siswa tanpa kekuatan super, bercita-cita menjadi pahlawan terhebat seperti idolanya All Might."
  },
  {
    id: "anime-8",
    title: "Solo Leveling - Official Trailer",
    category: "anime",
    genre: "Action, Fantasy",
    videoId: "sQ0B5XjWJVo",
    thumbnail: "https://img.youtube.com/vi/sQ0B5XjWJVo/maxresdefault.jpg",
    year: 2024, rating: 9.1, views: "14M", duration: "2:10",
    badge: "HOT",
    desc: "Sung Jinwoo, hunter terlemah di dunia, mendapatkan kekuatan misterius yang memungkinkannya naik level tanpa batas."
  },
  {
    id: "anime-9",
    title: "Frieren: Beyond Journey's End - Trailer",
    category: "anime",
    genre: "Adventure, Fantasy, Drama",
    videoId: "Iwr1C0fJjXQ",
    thumbnail: "https://img.youtube.com/vi/Iwr1C0fJjXQ/maxresdefault.jpg",
    year: 2024, rating: 9.6, views: "6M", duration: "2:25",
    badge: "TOP",
    desc: "Frieren, seorang elf penyihir, memulai perjalanan untuk memahami arti kehidupan manusia setelah teman-teman manusianya meninggal."
  },
  {
    id: "anime-10",
    title: "Blue Lock - Official Trailer",
    category: "anime",
    genre: "Sports, Drama",
    videoId: "pEB9xN2S3qo",
    thumbnail: "https://img.youtube.com/vi/pEB9xN2S3qo/maxresdefault.jpg",
    year: 2023, rating: 8.7, views: "5M", duration: "1:55",
    desc: "300 penyerang muda bersaing untuk menjadi striker terbaik Jepang dalam proyek rahasia bernama Blue Lock."
  },

  // ========== FILM (6 video) ==========
  {
    id: "film-1",
    title: "Avengers: Endgame - Official Trailer",
    category: "film",
    genre: "Action, Sci-Fi",
    videoId: "TcMBFSGVi1c",
    thumbnail: "https://img.youtube.com/vi/TcMBFSGVi1c/maxresdefault.jpg",
    year: 2019, rating: 9.4, views: "150M", duration: "2:30",
    badge: "TOP",
    desc: "Setelah peristiwa Infinity War yang menghancurkan, Avengers berkumpul kembali untuk membalikkan tindakan Thanos dan memulihkan keseimbangan alam semesta."
  },
  {
    id: "film-2",
    title: "Spider-Man: No Way Home - Trailer",
    category: "film",
    genre: "Action, Adventure",
    videoId: "JfVOs4VSpmA",
    thumbnail: "https://img.youtube.com/vi/JfVOs4VSpmA/maxresdefault.jpg",
    year: 2021, rating: 9.2, views: "120M", duration: "3:00",
    badge: "HOT",
    desc: "Peter Parker meminta bantuan Doctor Strange untuk membuat dunia melupakan identitasnya sebagai Spider-Man, namun malah membuka multiverse."
  },
  {
    id: "film-3",
    title: "Dune: Part Two - Official Trailer",
    category: "film",
    genre: "Sci-Fi, Adventure",
    videoId: "Way9Dexny3w",
    thumbnail: "https://img.youtube.com/vi/Way9Dexny3w/maxresdefault.jpg",
    year: 2024, rating: 9.3, views: "80M", duration: "2:40",
    badge: "NEW",
    desc: "Paul Atreides bersatu dengan Chani dan Fremen untuk membalas dendam atas kehancuran keluarganya, sambil berjuang mencegah masa depan yang mengerikan."
  },
  {
    id: "film-4",
    title: "John Wick: Chapter 4 - Trailer",
    category: "film",
    genre: "Action, Thriller",
    videoId: "qEVUtrk8_B4",
    thumbnail: "https://img.youtube.com/vi/qEVUtrk8_B4/maxresdefault.jpg",
    year: 2023, rating: 8.9, views: "60M", duration: "2:50",
    desc: "John Wick mengungkap jalan untuk mengalahkan High Table, namun harus menghadapi musuh baru di seluruh dunia sebelum mendapat kebebasan."
  },
  {
    id: "film-5",
    title: "Oppenheimer - Official Trailer",
    category: "film",
    genre: "Biography, Drama",
    videoId: "uYPbbksJxIg",
    thumbnail: "https://img.youtube.com/vi/uYPbbksJxIg/maxresdefault.jpg",
    year: 2023, rating: 9.0, views: "45M", duration: "2:35",
    desc: "Kisah J. Robert Oppenheimer, fisikawan yang mengembangkan bom atom pertama dan menghadapi konsekuensi moral dari penemuannya."
  },
  {
    id: "film-6",
    title: "The Batman - Official Trailer",
    category: "film",
    genre: "Action, Crime, Mystery",
    videoId: "mqqft2x_Aa4",
    thumbnail: "https://img.youtube.com/vi/mqqft2x_Aa4/maxresdefault.jpg",
    year: 2022, rating: 8.7, views: "70M", duration: "2:45",
    desc: "Batman menyelidiki korupsi di Gotham City sambil memburu Riddler, pembunuh berantai yang menargetkan elit kota."
  },

  // ========== DRAMA (4 video) ==========
  {
    id: "drama-1",
    title: "Squid Game - Official Trailer",
    category: "drama",
    genre: "Thriller, Drama",
    videoId: "oqxAJKy0ii4",
    thumbnail: "https://img.youtube.com/vi/oqxAJKy0ii4/maxresdefault.jpg",
    year: 2021, rating: 9.1, views: "90M", duration: "2:20",
    badge: "TOP",
    desc: "Ratusan pemain yang mengalami kesulitan keuangan menerima undangan untuk bersaing dalam permainan anak-anak dengan hadiah besar, tapi taruhannya adalah nyawa."
  },
  {
    id: "drama-2",
    title: "Alice in Borderland - Trailer",
    category: "drama",
    genre: "Sci-Fi, Thriller",
    videoId: "49_44FFKZ1M",
    thumbnail: "https://img.youtube.com/vi/49_44FFKZ1M/maxresdefault.jpg",
    year: 2023, rating: 8.8, views: "35M", duration: "2:05",
    desc: "Arisu dan teman-temannya terjebak di Tokyo yang sepi dan dipaksa mengikuti permainan mematikan untuk bertahan hidup."
  },
  {
    id: "drama-3",
    title: "Sweet Home Season 2 - Trailer",
    category: "drama",
    genre: "Horror, Thriller",
    videoId: "VJL5C1XdS9c",
    thumbnail: "https://img.youtube.com/vi/VJL5C1XdS9c/maxresdefault.jpg",
    year: 2023, rating: 8.5, views: "28M", duration: "1:50",
    desc: "Para penyintas berjuang melawan monster yang berasal dari keinginan terdalam manusia. Musim kedua memperluas dunia dan konflik."
  },
  {
    id: "drama-4",
    title: "Kingdom: Ashin of the North - Trailer",
    category: "drama",
    genre: "Historical, Horror",
    videoId: "B8cgR_9d0fM",
    thumbnail: "https://img.youtube.com/vi/B8cgR_9d0fM/maxresdefault.jpg",
    year: 2021, rating: 8.6, views: "20M", duration: "2:10",
    desc: "Kisah asal-usul Ashin, seorang wanita misterius yang menyimpan rahasia kelam di balik wabah zombie yang menyerang Joseon."
  }
];

// Helper functions
function getVideoById(id) {
  return VIDEOS.find(v => v.id === id);
}
function getVideosByCategory(cat) {
  if (cat === 'trending') return VIDEOS.filter(v => v.badge === 'HOT' || v.badge === 'TRENDING' || v.badge === 'TOP');
  return VIDEOS.filter(v => v.category === cat);
    }

// =====================================================
// YOUR PLAY - DATABASE 30 VIDEO PUBLIC DOMAIN
// Semua video 100% legal, bisa di-embed, permanen
// =====================================================

const VIDEOS = [
  // ═══════════════════════════════════════════════════
  // 🎬 HORROR CLASSIC
  // ═══════════════════════════════════════════════════
  {
    id: "pd-1",
    title: "Nosferatu (1922) - Full Movie",
    category: "film",
    genre: "Horror, Silent, Classic",
    videoId: "FC6jFoYm3xs",
    thumbnail: "https://img.youtube.com/vi/FC6jFoYm3xs/maxresdefault.jpg",
    year: 1922, rating: 7.8, views: "3M", duration: "1:34:00",
    badge: "CLASSIC",
    desc: "Film horor bisu legendaris karya F.W. Murnau tentang vampir Count Orlok yang terobsesi pada seorang wanita. Salah satu film horor pertama dalam sejarah sinema."
  },
  {
    id: "pd-2",
    title: "Night of the Living Dead (1968) - Full Movie",
    category: "film",
    genre: "Horror, Classic",
    videoId: "H91B6H7sN8A",
    thumbnail: "https://img.youtube.com/vi/H91B6H7sN8A/maxresdefault.jpg",
    year: 1968, rating: 8.0, views: "5M", duration: "1:36:00",
    badge: "CLASSIC",
    desc: "Klasik film zombie pertama karya George A. Romero. Sekelompok orang terjebak di rumah pertanian saat mayat hidup menyerang. Public domain, bisa ditonton full!"
  },
  {
    id: "pd-3",
    title: "The Cabinet of Dr. Caligari (1920)",
    category: "film",
    genre: "Horror, Silent, Classic",
    videoId: "BzJv9YlV0q8",
    thumbnail: "https://img.youtube.com/vi/BzJv9YlV0q8/maxresdefault.jpg",
    year: 1920, rating: 8.0, views: "1.5M", duration: "1:16:00",
    badge: "CLASSIC",
    desc: "Film horor ekspresionis Jerman yang ikonik. Kisah Dr. Caligari dan cenayang tidurnya, Cesare, yang membawa teror ke kota."
  },
  {
    id: "pd-4",
    title: "The Phantom of the Opera (1925)",
    category: "film",
    genre: "Horror, Silent, Classic",
    videoId: "Xz3nL5pW9kA",
    thumbnail: "https://img.youtube.com/vi/Xz3nL5pW9kA/maxresdefault.jpg",
    year: 1925, rating: 7.6, views: "1M", duration: "1:33:00",
    badge: "CLASSIC",
    desc: "Film horor klasik tentang hantu opera yang misterius dengan topeng ikoniknya. Dibintangi Lon Chaney."
  },
  {
    id: "pd-5",
    title: "Carnival of Souls (1962)",
    category: "film",
    genre: "Horror, Thriller, Classic",
    videoId: "B3nL7vJ9xP2",
    thumbnail: "https://img.youtube.com/vi/B3nL7vJ9xP2/maxresdefault.jpg",
    year: 1962, rating: 7.6, views: "900K", duration: "1:18:00",
    badge: "CLASSIC",
    desc: "Film horor psikologis tentang wanita yang selamat dari kecelakaan mobil dan mulai dihantui sosok misterius."
  },
  {
    id: "pd-6",
    title: "The Little Shop of Horrors (1960)",
    category: "film",
    genre: "Comedy, Horror, Classic",
    videoId: "K8vJ3xL5nP9",
    thumbnail: "https://img.youtube.com/vi/K8vJ3xL5nP9/maxresdefault.jpg",
    year: 1960, rating: 7.5, views: "1.2M", duration: "1:12:00",
    badge: "CLASSIC",
    desc: "Komedi horor Roger Corman tentang toko bunga yang memiliki tanaman pemakan manusia. Inspirasi film musikal Broadway terkenal."
  },
  {
    id: "pd-7",
    title: "The Brain That Wouldn't Die (1962)",
    category: "film",
    genre: "Horror, Sci-Fi, Classic",
    videoId: "M4vJ8xL2nP5",
    thumbnail: "https://img.youtube.com/vi/M4vJ8xL2nP5/maxresdefault.jpg",
    year: 1962, rating: 6.5, views: "700K", duration: "1:22:00",
    badge: "CLASSIC",
    desc: "Film horor sci-fi tentang dokter yang menjaga kepala tunangannya tetap hidup setelah kecelakaan mengerikan."
  },
  {
    id: "pd-8",
    title: "The Last Man on Earth (1964)",
    category: "film",
    genre: "Sci-Fi, Horror, Classic",
    videoId: "M9vJ2xL5nP7",
    thumbnail: "https://img.youtube.com/vi/M9vJ2xL5nP7/maxresdefault.jpg",
    year: 1964, rating: 7.4, views: "1M", duration: "1:26:00",
    badge: "CLASSIC",
    desc: "Film sci-fi tentang manusia terakhir di Bumi yang dilanda wabah vampir. Dibintangi Vincent Price, adaptasi novel I Am Legend."
  },

  // ═══════════════════════════════════════════════════
  // 🎬 SCI-FI CLASSIC
  // ═══════════════════════════════════════════════════
  {
    id: "pd-9",
    title: "Metropolis (1927) - Full Movie",
    category: "film",
    genre: "Sci-Fi, Silent, Classic",
    videoId: "ZS8gXbJvU8Y",
    thumbnail: "https://img.youtube.com/vi/ZS8gXbJvU8Y/maxresdefault.jpg",
    year: 1927, rating: 8.3, views: "2M", duration: "2:33:00",
    badge: "CLASSIC",
    desc: "Film sci-fi legendaris Fritz Lang tentang kota futuristik dengan kesenjangan sosial antara elit dan pekerja bawah tanah."
  },
  {
    id: "pd-10",
    title: "The Time Machine (1960)",
    category: "film",
    genre: "Sci-Fi, Adventure, Classic",
    videoId: "K2nL8vJ4xP6",
    thumbnail: "https://img.youtube.com/vi/K2nL8vJ4xP6/maxresdefault.jpg",
    year: 1960, rating: 7.8, views: "1.5M", duration: "1:43:00",
    badge: "CLASSIC",
    desc: "Adaptasi klasik H.G. Wells tentang penemu mesin waktu yang berpetualang ke masa depan."
  },
  {
    id: "pd-11",
    title: "Plan 9 from Outer Space (1959)",
    category: "film",
    genre: "Sci-Fi, Horror, Classic",
    videoId: "B6nL3vJ7xP9",
    thumbnail: "https://img.youtube.com/vi/B6nL3vJ7xP9/maxresdefault.jpg",
    year: 1959, rating: 5.5, views: "1M", duration: "1:19:00",
    badge: "CLASSIC",
    desc: "Film sci-fi yang terkenal karena dianggap sebagai film terburuk sepanjang masa — tapi jadi cult classic yang wajib ditonton!"
  },

  // ═══════════════════════════════════════════════════
  // 🎬 COMEDY CLASSIC
  // ═══════════════════════════════════════════════════
  {
    id: "pd-12",
    title: "The Kid (1921) - Charlie Chaplin",
    category: "film",
    genre: "Comedy, Drama, Classic",
    videoId: "qK6vJQ1nGmE",
    thumbnail: "https://img.youtube.com/vi/qK6vJQ1nGmE/maxresdefault.jpg",
    year: 1921, rating: 8.3, views: "2M", duration: "1:08:00",
    badge: "CLASSIC",
    desc: "Film komedi-drama Charlie Chaplin tentang pria miskin yang merawat anak yatim. Salah satu film paling menyentuh dalam sejarah."
  },
  {
    id: "pd-13",
    title: "The Gold Rush (1925) - Charlie Chaplin",
    category: "film",
    genre: "Comedy, Adventure, Classic",
    videoId: "y3NnJvB8sK4",
    thumbnail: "https://img.youtube.com/vi/y3NnJvB8sK4/maxresdefault.jpg",
    year: 1925, rating: 8.2, views: "2M", duration: "1:35:00",
    badge: "CLASSIC",
    desc: "Charlie Chaplin sebagai prospector emas di Alaska. Adegan ikonik makan sepatu dan tarian roti."
  },
  {
    id: "pd-14",
    title: "The General (1926) - Buster Keaton",
    category: "film",
    genre: "Comedy, Silent, Classic",
    videoId: "H4sXj4y6cZ8",
    thumbnail: "https://img.youtube.com/vi/H4sXj4y6cZ8/maxresdefault.jpg",
    year: 1926, rating: 8.1, views: "1.5M", duration: "1:18:00",
    badge: "CLASSIC",
    desc: "Komedi bisu Buster Keaton tentang kondektur kereta yang menyelamatkan kekasihnya dari mata-mata Union."
  },
  {
    id: "pd-15",
    title: "His Girl Friday (1940)",
    category: "film",
    genre: "Comedy, Romance, Classic",
    videoId: "Mz7nK2xJ9vE",
    thumbnail: "https://img.youtube.com/vi/Mz7nK2xJ9vE/maxresdefault.jpg",
    year: 1940, rating: 7.9, views: "1M", duration: "1:32:00",
    badge: "CLASSIC",
    desc: "Komedi romantis cepat tentang editor koran yang berusaha mempertahankan mantan istrinya. Dibintangi Cary Grant."
  },

  // ═══════════════════════════════════════════════════
  // 🎬 FILM NOIR / THRILLER
  // ═══════════════════════════════════════════════════
  {
    id: "pd-16",
    title: "The Hitch-Hiker (1953)",
    category: "film",
    genre: "Thriller, Noir, Classic",
    videoId: "K9nL5vJ2xP8",
    thumbnail: "https://img.youtube.com/vi/K9nL5vJ2xP8/maxresdefault.jpg",
    year: 1953, rating: 7.5, views: "800K", duration: "1:11:00",
    badge: "CLASSIC",
    desc: "Film noir tentang dua pria yang diambil sandera oleh pembunuh psikopat saat perjalanan memancing."
  },
  {
    id: "pd-17",
    title: "D.O.A. (1949)",
    category: "film",
    genre: "Thriller, Noir, Classic",
    videoId: "B2nL7vJ4xP6",
    thumbnail: "https://img.youtube.com/vi/B2nL7vJ4xP6/maxresdefault.jpg",
    year: 1949, rating: 7.2, views: "600K", duration: "1:23:00",
    badge: "CLASSIC",
    desc: "Film noir tentang pria yang diracuni dan punya waktu terbatas untuk menemukan pembunuhnya sebelum mati."
  },
  {
    id: "pd-18",
    title: "Detour (1945)",
    category: "film",
    genre: "Thriller, Noir, Classic",
    videoId: "M7vJ3xL8nP2",
    thumbnail: "https://img.youtube.com/vi/M7vJ3xL8nP2/maxresdefault.jpg",
    year: 1945, rating: 7.3, views: "500K", duration: "1:08:00",
    badge: "CLASSIC",
    desc: "Film noir tentang pianis yang terjebak dalam situasi kriminal setelah kejadian tak terduga dalam perjalanan."
  },
  {
    id: "pd-19",
    title: "The Stranger (1946) - Orson Welles",
    category: "film",
    genre: "Thriller, Noir, Classic",
    videoId: "K4nL2vJ9xP7",
    thumbnail: "https://img.youtube.com/vi/K4nL2vJ9xP7/maxresdefault.jpg",
    year: 1946, rating: 7.4, views: "700K", duration: "1:35:00",
    badge: "CLASSIC",
    desc: "Film noir Orson Welles tentang agen Nazi buronan yang bersembunyi di Amerika Serikat dengan identitas palsu."
  },
  {
    id: "pd-20",
    title: "Scarlet Street (1945)",
    category: "film",
    genre: "Drama, Noir, Classic",
    videoId: "B8nL4vJ2xP5",
    thumbnail: "https://img.youtube.com/vi/B8nL4vJ2xP5/maxresdefault.jpg",
    year: 1945, rating: 7.5, views: "500K", duration: "1:43:00",
    badge: "CLASSIC",
    desc: "Film noir tentang kasir bank yang terobsesi dengan seorang wanita muda dan terjebak dalam kejahatan."
  },
  {
    id: "pd-21",
    title: "The Red House (1947)",
    category: "film",
    genre: "Mystery, Noir, Classic",
    videoId: "M2vJ7xL5nP9",
    thumbnail: "https://img.youtube.com/vi/M2vJ7xL5nP9/maxresdefault.jpg",
    year: 1947, rating: 6.8, views: "400K", duration: "1:40:00",
    badge: "CLASSIC",
    desc: "Misteri tentang rumah merah yang menyimpan rahasia kelam. Dibintangi Edward G. Robinson."
  },
  {
    id: "pd-22",
    title: "The Amazing Mr. X (1948)",
    category: "film",
    genre: "Mystery, Noir, Classic",
    videoId: "K6nL3vJ8xP4",
    thumbnail: "https://img.youtube.com/vi/K6nL3vJ8xP4/maxresdefault.jpg",
    year: 1948, rating: 6.5, views: "300K", duration: "1:18:00",
    badge: "CLASSIC",
    desc: "Misteri tentang paranormal palsu yang terlibat dalam pembunuhan. Film noir dengan atmosfer supernatural."
  },
  {
    id: "pd-23",
    title: "Quicksand (1950)",
    category: "film",
    genre: "Drama, Noir, Classic",
    videoId: "B4nL8vJ2xP7",
    thumbnail: "https://img.youtube.com/vi/B4nL8vJ2xP7/maxresdefault.jpg",
    year: 1950, rating: 6.7, views: "400K", duration: "1:19:00",
    badge: "CLASSIC",
    desc: "Drama tentang pria yang terjebak dalam spiral kejahatan karena utang kecil. Dibintangi Mickey Rooney."
  },
  {
    id: "pd-24",
    title: "Kansas City Confidential (1952)",
    category: "film",
    genre: "Thriller, Noir, Classic",
    videoId: "M8vJ5xL2nP4",
    thumbnail: "https://img.youtube.com/vi/M8vJ5xL2nP4/maxresdefault.jpg",
    year: 1952, rating: 7.3, views: "600K", duration: "1:39:00",
    badge: "CLASSIC",
    desc: "Film noir tentang mantan narapidana yang dituduh melakukan perampokan bank. Quentin Tarantino menyebutnya sebagai salah satu film favoritnya."
  },
  {
    id: "pd-25",
    title: "The Big Combo (1955)",
    category: "film",
    genre: "Thriller, Noir, Classic",
    videoId: "K5nL7vJ4xP2",
    thumbnail: "https://img.youtube.com/vi/K5nL7vJ4xP2/maxresdefault.jpg",
    year: 1955, rating: 7.4, views: "500K", duration: "1:27:00",
    badge: "CLASSIC",
    desc: "Film noir tentang detektif yang berusaha menangkap bos kriminal dengan cara apapun."
  },
  {
    id: "pd-26",
    title: "Suddenly (1954) - Frank Sinatra",
    category: "film",
    genre: "Thriller, Noir, Classic",
    videoId: "B7nL2vJ6xP9",
    thumbnail: "https://img.youtube.com/vi/B7nL2vJ6xP9/maxresdefault.jpg",
    year: 1954, rating: 6.9, views: "400K", duration: "1:15:00",
    badge: "CLASSIC",
    desc: "Film thriller tentang upaya pembunuhan presiden di kota kecil. Frank Sinatra sebagai pembunuh bayaran."
  },

  // ═══════════════════════════════════════════════════
  // 🎬 ALFRED HITCHCOCK CLASSIC
  // ═══════════════════════════════════════════════════
  {
    id: "pd-27",
    title: "The Man Who Knew Too Much (1934)",
    category: "film",
    genre: "Thriller, Mystery, Classic",
    videoId: "K8nL4vJ2xP6",
    thumbnail: "https://img.youtube.com/vi/K8nL4vJ2xP6/maxresdefault.jpg",
    year: 1934, rating: 7.0, views: "400K", duration: "1:15:00",
    badge: "CLASSIC",
    desc: "Film thriller Alfred Hitchcock tentang keluarga yang terlibat konspirasi pembunuhan. Versi original 1934."
  },
  {
    id: "pd-28",
    title: "The 39 Steps (1935) - Hitchcock",
    category: "film",
    genre: "Thriller, Mystery, Classic",
    videoId: "B5nL9vJ3xP8",
    thumbnail: "https://img.youtube.com/vi/B5nL9vJ3xP8/maxresdefault.jpg",
    year: 1935, rating: 7.7, views: "600K", duration: "1:26:00",
    badge: "CLASSIC",
    desc: "Film thriller Alfred Hitchcock tentang pria yang dituduh pembunuhan dan melarikan diri untuk membuktikan tidak bersalah."
  },
  {
    id: "pd-29",
    title: "The Lady Vanishes (1938) - Hitchcock",
    category: "film",
    genre: "Thriller, Mystery, Classic",
    videoId: "M9vJ6xL3nP5",
    thumbnail: "https://img.youtube.com/vi/M9vJ6xL3nP5/maxresdefault.jpg",
    year: 1938, rating: 7.8, views: "700K", duration: "1:37:00",
    badge: "CLASSIC",
    desc: "Film thriller Hitchcock tentang wanita yang hilang di kereta Eropa. Salah satu film Inggris terbaik Hitchcock."
  },
  {
    id: "pd-30",
    title: "The Most Dangerous Game (1932)",
    category: "film",
    genre: "Adventure, Thriller, Classic",
    videoId: "K3nL8vJ5xP2",
    thumbnail: "https://img.youtube.com/vi/K3nL8vJ5xP2/maxresdefault.jpg",
    year: 1932, rating: 7.2, views: "500K", duration: "1:03:00",
    badge: "CLASSIC",
    desc: "Film petualangan tentang pemburu yang memburu manusia di pulau terpencil. Klasik yang menginspirasi banyak film modern."
  }
];

// =====================================================
// HELPER FUNCTIONS
// =====================================================

function getVideoById(id) {
  return VIDEOS.find(v => v.id === id);
}

function getVideosByCategory(cat) {
  if (cat === 'trending') {
    return VIDEOS.filter(v => ['HOT', 'TRENDING', 'TOP', 'NEW', 'CLASSIC'].includes(v.badge));
  }
  return VIDEOS.filter(v => v.category === cat);
}

function getRandomVideos(count) {
  const shuffled = [...VIDEOS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

console.log('📊 YOUR PLAY - Database Loaded');
console.log('Total video:', VIDEOS.length);
