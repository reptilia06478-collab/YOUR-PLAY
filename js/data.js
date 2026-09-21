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
  }, 
  {
    id: "mi-1",
    title: "Doraemon - Episode 1 (Sub Indo)",
    category: "anime",
    genre: "Comedy, Adventure, Family",
    videoId: "QczGoCmX-pI",
    thumbnail: "https://img.youtube.com/vi/QczGoCmX-pI/maxresdefault.jpg",
    year: 2026, rating: 8.5, views: "5M", duration: "23:00",
    badge: "NEW",
    desc: "Doraemon, robot kucing dari masa depan, membantu Nobita dengan berbagai gadget ajaib. Sub Indo, gratis, legal di Muse ID Wonderland."
  },
  {
    id: "mi-2",
    title: "Doraemon - Episode 2 (Sub Indo)",
    category: "anime",
    genre: "Comedy, Adventure, Family",
    videoId: "0n6lqBxNkxQ",
    thumbnail: "https://img.youtube.com/vi/0n6lqBxNkxQ/maxresdefault.jpg",
    year: 2026, rating: 8.4, views: "4M", duration: "23:00",
    desc: "Petualangan Nobita dan Doraemon berlanjut. Setiap episode update setiap hari jam 17.00 WIB."
  },
  {
    id: "mi-3",
    title: "Attack on Titan - Season 1 Episode 1 (Sub Indo)",
    category: "anime",
    genre: "Action, Drama, Fantasy",
    videoId: "SlNpRThS9t8",
    thumbnail: "https://img.youtube.com/vi/SlNpRThS9t8/maxresdefault.jpg",
    year: 2026, rating: 9.8, views: "10M", duration: "24:00",
    badge: "TOP",
    desc: "Eren Yeager dan teman-temannya bertarung melawan raksasa humanoid. Streaming gratis di Muse Asia dengan sub Indo."
  },
  {
    id: "mi-4",
    title: "Attack on Titan - Season 1 Episode 2 (Sub Indo)",
    category: "anime",
    genre: "Action, Drama, Fantasy",
    videoId: "MCb13lbVGE0",
    thumbnail: "https://img.youtube.com/vi/MCb13lbVGE0/maxresdefault.jpg",
    year: 2026, rating: 9.7, views: "8M", duration: "24:00",
    desc: "Kelanjutan kisah Eren dan Survey Corps dalam melawan Titan."
  },
  {
    id: "mi-5",
    title: "Hunter x Hunter - Episode 1 (Sub Indo)",
    category: "anime",
    genre: "Action, Adventure",
    videoId: "8qP2lYN2P5E",
    thumbnail: "https://img.youtube.com/vi/8qP2lYN2P5E/maxresdefault.jpg",
    year: 2026, rating: 9.0, views: "7M", duration: "23:00",
    badge: "HOT",
    desc: "Gon Freecss memulai perjalanan mencari ayahnya yang seorang Hunter. Sub Indo di Muse Indonesia."
  },
  {
    id: "mi-6",
    title: "Hunter x Hunter - Episode 2 (Sub Indo)",
    category: "anime",
    genre: "Action, Adventure",
    videoId: "K9nM3vC7bL2",
    thumbnail: "https://img.youtube.com/vi/K9nM3vC7bL2/maxresdefault.jpg",
    year: 2026, rating: 8.9, views: "6M", duration: "23:00",
    desc: "Ujian Hunter dimulai. Gon bertemu Kurapika, Leorio, dan Killua."
  },
  {
    id: "mi-7",
    title: "Jujutsu Kaisen - Episode 1 (Sub Indo)",
    category: "anime",
    genre: "Action, Dark Fantasy",
    videoId: "4A_X-Dvl0ws",
    thumbnail: "https://img.youtube.com/vi/4A_X-Dvl0ws/maxresdefault.jpg",
    year: 2026, rating: 9.5, views: "12M", duration: "24:00",
    badge: "TRENDING",
    desc: "Yuji Itadori menelan jari terkutuk Sukuna dan menjadi wadah iblis kutukan. Streaming di Ani-One Indonesia."
  },
  {
    id: "mi-8",
    title: "Jujutsu Kaisen - Episode 2 (Sub Indo)",
    category: "anime",
    genre: "Action, Dark Fantasy",
    videoId: "pEB9xN2S3qo",
    thumbnail: "https://img.youtube.com/vi/pEB9xN2S3qo/maxresdefault.jpg",
    year: 2026, rating: 9.4, views: "10M", duration: "24:00",
    desc: "Yuji bergabung dengan Tokyo Jujutsu High untuk melawan kutukan."
  },
  {
    id: "mi-9",
    title: "Demon Slayer - Episode 1 (Sub Indo)",
    category: "anime",
    genre: "Action, Supernatural",
    videoId: "VQGCKyvzIM4",
    thumbnail: "https://img.youtube.com/vi/VQGCKyvzIM4/maxresdefault.jpg",
    year: 2026, rating: 9.3, views: "11M", duration: "24:00",
    badge: "HOT",
    desc: "Tanjiro Kamado menemukan keluarganya dibantai iblis dan adiknya diubah menjadi iblis."
  },
  {
    id: "mi-10",
    title: "Demon Slayer - Episode 2 (Sub Indo)",
    category: "anime",
    genre: "Action, Supernatural",
    videoId: "Iwr1C0fJjXQ",
    thumbnail: "https://img.youtube.com/vi/Iwr1C0fJjXQ/maxresdefault.jpg",
    year: 2026, rating: 9.2, views: "9M", duration: "24:00",
    desc: "Tanjiro berlatih untuk menjadi pemburu iblis dan menyelamatkan adiknya."
  },
  {
    id: "mi-11",
    title: "Solo Leveling - Episode 1 (Sub Indo)",
    category: "anime",
    genre: "Action, Fantasy",
    videoId: "sQ0B5XjWJVo",
    thumbnail: "https://img.youtube.com/vi/sQ0B5XjWJVo/maxresdefault.jpg",
    year: 2026, rating: 9.1, views: "13M", duration: "24:00",
    badge: "NEW",
    desc: "Sung Jinwoo, hunter terlemah, mendapatkan kekuatan misterius untuk naik level tanpa batas."
  },
  {
    id: "mi-12",
    title: "Frieren: Beyond Journey's End - Ep 1 (Sub Indo)",
    category: "anime",
    genre: "Adventure, Fantasy, Drama",
    videoId: "Iwr1C0fJjXQ",
    thumbnail: "https://img.youtube.com/vi/Iwr1C0fJjXQ/maxresdefault.jpg",
    year: 2026, rating: 9.6, views: "6M", duration: "24:00",
    badge: "TOP",
    desc: "Frieren, elf penyihir, memulai perjalanan memahami arti kehidupan manusia setelah teman manusianya meninggal."
  },
  {
    id: "mi-13",
    title: "Spy x Family - Episode 1 (Sub Indo)",
    category: "anime",
    genre: "Comedy, Action",
    videoId: "ofXigqP5-pU",
    thumbnail: "https://img.youtube.com/vi/ofXigqP5-pU/maxresdefault.jpg",
    year: 2026, rating: 9.0, views: "8M", duration: "24:00",
    desc: "Mata-mata membentuk keluarga palsu, tanpa tahu istri dan anaknya juga punya rahasia."
  },
  {
    id: "mi-14",
    title: "Chainsaw Man - Episode 1 (Sub Indo)",
    category: "anime",
    genre: "Action, Horror, Comedy",
    videoId: "dFlDRhvM4L0",
    thumbnail: "https://img.youtube.com/vi/dFlDRhvM4L0/maxresdefault.jpg",
    year: 2026, rating: 8.9, views: "9M", duration: "24:00",
    desc: "Denji, pemburu iblis muda, bergabung dengan Public Safety Devil Hunters setelah digabungkan dengan iblis chainsaw."
  },
  {
    id: "mi-15",
    title: "Dr. Stone - Episode 1 (Sub Indo)",
    category: "anime",
    genre: "Sci-Fi, Adventure",
    videoId: "wpovEB9hP0Q",
    thumbnail: "https://img.youtube.com/vi/wpovEB9hP0Q/maxresdefault.jpg",
    year: 2026, rating: 8.8, views: "5M", duration: "24:00",
    badge: "HOT",
    desc: "Senku Ishigami, remaja jenius, terbangun 3.700 tahun kemudian dan bertekad membangun peradaban dari nol dengan sains. Tersedia di Ani-One Indonesia."
  },
  {
    id: "mi-16",
    title: "Saga of Tanya the Evil - Episode 1 (Sub Indo)",
    category: "anime",
    genre: "Action, Military, Fantasy",
    videoId: "gncD3zOQ81o",
    thumbnail: "https://img.youtube.com/vi/gncD3zOQ81o/maxresdefault.jpg",
    year: 2026, rating: 8.7, views: "4M", duration: "24:00",
    desc: "Tanya Degurechaff, prajurit kejam dengan wajah loli, meniti karier militer dengan kecerdasan taktisnya. Streaming di Ani-One Indonesia."
  },
  {
    id: "mi-17",
    title: "Akame ga Kill! - Episode 1 (Sub Indo)",
    category: "anime",
    genre: "Action, Dark Fantasy",
    videoId: "JTv9s5T9WYQ",
    thumbnail: "https://img.youtube.com/vi/JTv9s5T9WYQ/maxresdefault.jpg",
    year: 2026, rating: 8.6, views: "6M", duration: "24:00",
    desc: "Tatsumi bergabung dengan Night Raid, kelompok pembunuh bayaran yang melawan kekaisaran. Tersedia di Ani-One Indonesia."
  },
  {
    id: "mi-18",
    title: "A Place Further than the Universe - Ep 1",
    category: "anime",
    genre: "Adventure, Drama, Slice of Life",
    videoId: "lBq6Qzr9sHk",
    thumbnail: "https://img.youtube.com/vi/lBq6Qzr9sHk/maxresdefault.jpg",
    year: 2026, rating: 9.2, views: "3M", duration: "24:00",
    badge: "TOP",
    desc: "Empat gadis SMA berpetualang ke Antartika. Kisah persahabatan yang mengharukan. Tersedia di Ani-One Indonesia."
  },
  {
    id: "mi-19",
    title: "Doraemon - Episode 3 (Sub Indo)",
    category: "anime",
    genre: "Comedy, Adventure, Family",
    videoId: "0n6lqBxNkxQ",
    thumbnail: "https://img.youtube.com/vi/0n6lqBxNkxQ/maxresdefault.jpg",
    year: 2026, rating: 8.3, views: "3M", duration: "23:00",
    desc: "Nobita dan Doraemon kembali dengan petualangan seru. Update setiap hari."
  },
  {
    id: "mi-20",
    title: "Attack on Titan - Season 1 Episode 3 (Sub Indo)",
    category: "anime",
    genre: "Action, Drama, Fantasy",
    videoId: "MCb13lbVGE0",
    thumbnail: "https://img.youtube.com/vi/MCb13lbVGE0/maxresdefault.jpg",
    year: 2026, rating: 9.6, views: "7M", duration: "24:00",
    desc: "Eren dan Survey Corps melanjutkan pertempuran melawan Titan. Streaming di Muse Asia."
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
