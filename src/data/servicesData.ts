export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  category: 'Konektivitas' | 'Jaringan' | 'Keamanan' | 'Cloud' | 'Smartech';
  iconType: 
    | 'internet-dedicated' 
    | 'business-broadband' 
    | 'vpn-sdwan' 
    | 'managed-wifi' 
    | 'security-ddos' 
    | 'cloud-datacenter' 
    | 'smart-city' 
    | 'command-center' 
    | 'internet-satelite' 
    | 'website-hosting';
  description: string;
  features: string[];
  specifications: {
    sla: string;
    ratio: string;
    ipType: string;
    support: string;
  };
  suitableFor: string[];
  flyerPosition: 'left' | 'right';
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'internet-dedicated',
    number: '01',
    name: 'Internet Dedicated',
    subtitle: 'Koneksi Simetris 1:1 CIR 100% untuk Kebutuhan Bisnis Kritis',
    category: 'Konektivitas',
    iconType: 'internet-dedicated',
    description: 'Layanan akses internet pita lebar berkecepatan tinggi dengan rasio bandwidth simetris 1:1 (upload dan download setara) serta Committed Information Rate (CIR) 100%. Jalur koneksi eksklusif tanpa pembagian bandwidth dengan pengguna lain, menjamin performa puncak untuk transmisi data korporat.',
    features: [
      'Bandwidth Simetris 1:1 (Upload & Download seimbang tanpa jeda)',
      'Jaminan CIR 100% dengan Service Level Agreement (SLA) 99.9%',
      'Alokasi IP Public Static IPv4 & IPv6 untuk server & VPN',
      'Direct Peering ke IIX, OpenIXP, Google, Microsoft, & Global Tier-1',
      'Pemantauan Trafik Real-time melalui MRTG & PRTG Portal',
      'Dedicated Fiber Optic Drop Cable langsung ke lokasi klien'
    ],
    specifications: {
      sla: '99.9% Uptime Guarantee',
      ratio: '1:1 Symmetrical (CIR 100%)',
      ipType: '/29 atau /28 Static Public IPv4',
      support: '24/7 Dedicated Account Manager & NOC Team'
    },
    suitableFor: [
      'Gedung Perkantoran & Kantor Pusat Perusahaan',
      'Rumah Sakit & Lembaga Layanan Kesehatan',
      'Hotel Bintang 4 & 5',
      'Universitas & Institusi Pendidikan Tinggi',
      'Lembaga Perbankan, Asuransi, & Finansial'
    ],
    flyerPosition: 'left'
  },
  {
    id: 'business-broadband',
    number: '02',
    name: 'Business Broadband',
    subtitle: 'Akses Internet Cepat & Hemat untuk Produktivitas Operasional UKM & Cabang',
    category: 'Konektivitas',
    iconType: 'business-broadband',
    description: 'Solusi internet bisnis berkecepatan tinggi yang dirancang untuk mendukung operasional ritel, startup, kantor cabang, dan UMKM berkembang. Memberikan konektivitas andal tanpa batasan kuota (Truly Unlimited Tanpa FUP) dengan rasio performa-harga terbaik.',
    features: [
      'Pilihan Kecepatan hingga 500 Mbps via Jaringan Fiber Optik',
      'Truly Unlimited Data Transfer tanpa penurunan FUP bulanan',
      'Router Wi-Fi Enterprise Gigabit Dual-Band performa tinggi',
      'Kemampuan menangani puluhan perangkat simultan secara stabil',
      'Prioritas pemulihan jaringan dibandingkan internet residensial biasa',
      'Proses aktivasi dan instalasi cepat dengan survei awal'
    ],
    specifications: {
      sla: '99.0% Ketersediaan Jaringan',
      ratio: 'High-Density Dynamic Allocation',
      ipType: 'Dynamic Public IP / Opsi Static',
      support: 'Helpdesk 24/7 & Teknisi On-Site Cepat'
    },
    suitableFor: [
      'Kantor Cabang & Gerai Ritel Modern',
      'Kafe, Restoran & Coworking Space',
      'Klinik & Laboratorium Medis Swasta',
      'Studio Kreatif & Kantor Agensi Digital',
      'Sekolah Menengah & Lembaga Kursus'
    ],
    flyerPosition: 'left'
  },
  {
    id: 'vpn-sdwan',
    number: '03',
    name: 'VPN & SD-WAN',
    subtitle: 'Interkoneksi Kantor Multi-Cabang Aman & Cerdas Berbasis Software',
    category: 'Jaringan',
    iconType: 'vpn-sdwan',
    description: 'Solusi Software-Defined Wide Area Network (SD-WAN) dan Virtual Private Network (VPN) enterprise untuk menghubungkan kantor pusat, cabang, pabrik, dan cloud secara aman. Mengoptimalkan rute data otomatis, enkripsi end-to-end berstandar militer, serta penghematan biaya interkoneksi.',
    features: [
      'Enkripsi Data End-to-End dengan protokol IPsec AES-256',
      'Dynamic Path Selection (Otomatis memilih rute latensi terendah)',
      'Pusat Kendali Terpadu (Single Pane of Glass Cloud Orchestrator)',
      'Failover Otomatis tanpa jeda (Multi-WAN Fiber + 4G/LTE Backup)',
      'Prioritisasi Trafik Aplikasi Kritis Bisnis (QoS untuk VoIP & ERP)',
      'Zero-Touch Provisioning untuk penambahan kantor cabang baru'
    ],
    specifications: {
      sla: '99.9% Inter-branch Connectivity',
      ratio: 'Dedicated Tunneling Protocol',
      ipType: 'Private MPLS / Overlay IPSec',
      support: 'SD-WAN Certified Engineers 24/7'
    },
    suitableFor: [
      'Perusahaan Distribusi & Logistik Nasional',
      'Rantai Ritel Multi-Outlet & Minimarket',
      'Jaringan Bank & Lembaga Keuangan Mikro',
      'Pabrik & Gudang Manufaktur Tersebar',
      'Organisasi Pemerintahan Daerah Lintas Instansi'
    ],
    flyerPosition: 'left'
  },
  {
    id: 'managed-wifi',
    number: '04',
    name: 'Managed Services Network & Wi-Fi',
    subtitle: 'Pengelolaan Total Perangkat Jaringan, Wi-Fi Controller, & Pemeliharaan Berkala',
    category: 'Jaringan',
    iconType: 'managed-wifi',
    description: 'Layanan menyeluruh untuk pengadaan, konfigurasi, monitoring, dan pemeliharaan infrastruktur jaringan lokal (LAN) serta sistem Wi-Fi enterprise. Pelanggan dapat fokus pada bisnis utama sementara ahli jaringan kami menjaga kestabilan dan keamanan infrastruktur IT Anda.',
    features: [
      'Penyediaan & Pengelolaan Access Point Wi-Fi 6 Enterprise',
      'Cloud Wi-Fi Controller dengan Captive Portal Kustom & Brand Login',
      'Manajemen Switch, Router, Firewall & Kabel Terstruktur',
      'Bandwidth Management & Isolasi Trafik Tamu vs Karyawan',
      'Preventive Maintenance berkala dan penggantian perangkat rusak (SLA)',
      'Laporan performa jaringan bulanan dan utilisasi pengguna'
    ],
    specifications: {
      sla: 'SLA Penggantian Hardware < 4 Jam',
      ratio: 'Seamless Roaming 802.11k/v/r',
      ipType: 'VLAN Segmentation & 802.1X',
      support: 'Dedicated Network Engineer & NOC 24/7'
    },
    suitableFor: [
      'Hotel, Resort & Industri Perhotelan',
      'Mall, Pusat Perbelanjaan & Hall Ekshibisi',
      'Gedung Apartemen & Komersial',
      'Rumah Sakit & Fasilitas Publik Terbuka',
      'Kawasan Industri Terpadu'
    ],
    flyerPosition: 'left'
  },
  {
    id: 'security-ddos',
    number: '05',
    name: 'Network Security & Anti-DDoS',
    subtitle: 'Perlindungan Siber Berlapis, Mitigasi Serangan Volumetrik & Next-Gen Firewall',
    category: 'Keamanan',
    iconType: 'security-ddos',
    description: 'Sistem pertahanan siber multi-tier yang dirancang untuk melindungi aset digital, server aplikasi, dan jalur internet organisasi dari serangan siber modern, termasuk serangan DDoS skala besar (volumetric & application layer), intrusi malware, dan kebocoran data.',
    features: [
      'Mitigasi DDoS Otomatis Berkapasitas Multi-Gbps (Scrubbing Center)',
      'Next-Generation Firewall (NGFW) dengan Deep Packet Inspection',
      'Web Application Firewall (WAF) Proteksi OWASP Top 10',
      'Intrusion Prevention & Detection System (IPS / IDS)',
      'Penyaringan Konten Berbahaya, Phishing, & Botnet Protection',
      'Laporan Audit Keamanan Jaringan & Analisis Ancaman Real-time'
    ],
    specifications: {
      sla: 'Mitigasi DDoS Deteksi Otomatis < 10 Detik',
      ratio: 'L3, L4, & L7 Protection',
      ipType: 'Clean IP Routing / BGP Anycast',
      support: 'Cyber Security Operations Center (SOC) 24/7'
    },
    suitableFor: [
      'Portal Transaksi & Layanan E-Commerce',
      'Sistem Informasi Akademik & Ujian Online',
      'Aplikasi Perbankan & Gateway Pembayaran',
      'Layanan Publik Digital Pemerintah Daerah',
      'Perusahaan Media & Portal Berita Online'
    ],
    flyerPosition: 'left'
  },
  {
    id: 'cloud-datacenter',
    number: '06',
    name: 'Cloud & Data Center',
    subtitle: 'Infrastruktur Komputasi Awan, Colocation Rack Tier-3 & Disaster Recovery',
    category: 'Cloud',
    iconType: 'cloud-datacenter',
    description: 'Layanan penempatan server (Colocation) dan komputasi awan (Cloud VPS / Private Cloud) di fasilitas Data Center bersertifikasi Tier-3 dengan jaminan redundansi listrik ganda, pendingin presisi, dan koneksi langsung ke tulang punggung internet nasional dan global.',
    features: [
      'Colocation Rack Space (Full Rack, Half Rack, atau Per Unit Ru)',
      'Private Cloud & Virtual Private Server (VPS) berspesifikasi tinggi',
      'Redundansi Daya Listrik N+1 UPS & Generator Cadangan Otomatis',
      'Sistem Pendingin Presisi In-Row & Proteksi Kebakaran Gas Ramah Lingkungan',
      'Automated Disaster Recovery (DR) & Backup Snapshot Terjadwal',
      'Remote Hands Support 24/7 untuk pemeliharaan fisik server'
    ],
    specifications: {
      sla: '99.98% Facility Availability Tier-3',
      ratio: 'Dual Power Feed A+B',
      ipType: 'BGP Multi-Homing Direct Exchange',
      support: 'Data Center NOC & On-Duty Engineers 24/7'
    },
    suitableFor: [
      'Perusahaan Pengembang Perangkat Lunak & SaaS',
      'Instansi Pemerintah Pengelola Data Kependudukan',
      'Industri Fintech & Lembaga Keuangan',
      'Perusahaan Multinasional dengan Kebutuhan DR Center',
      'Penyedia Konten & Media Streaming'
    ],
    flyerPosition: 'right'
  },
  {
    id: 'smart-city',
    number: '07',
    name: 'Smart City & IoT',
    subtitle: 'Ekosistem Kota Cerdas, Sensor Cerdas Lingkungan, & Integrasi Internet of Things',
    category: 'Smartech',
    iconType: 'smart-city',
    description: 'Penyediaan solusi terpadu untuk transformasi kota modern, kawasan industri, dan smart campus. Memadukan sensor Internet of Things (IoT), analitik berbasis kecerdasan buatan, sistem pemantauan lingkungan, dan otomasi infrastruktur publik secara terintegrasi.',
    features: [
      'Sensor Pemantau Banjir, Kualitas Udara (AQI), & Cuaca Terkoneksi',
      'Sistem Penerangan Jalan Umum Cerdas (Smart PJU) Berbasis Sensor & Jadwal',
      'Kamera Pengawas Cerdas dengan AI Video Analytics (Penghitungan Kendaraan/Wajah)',
      'Platform Manajemen Parkir Cerdas (Smart Parking Guidance)',
      'Integrasi Data IoT Terbuka dengan Dashboard Eksekutif',
      'Jaringan Komunikasi Khusus IoT (LoRaWAN & NB-IoT Gateway)'
    ],
    specifications: {
      sla: '99.5% Sensor Data Ingestion Uptime',
      ratio: 'Edge AI + Central Dashboard',
      ipType: 'MQTT, CoAP & REST API Integration',
      support: 'Smart City System Integration Specialists'
    },
    suitableFor: [
      'Pemerintah Kota / Kabupaten & Dinas Terkait',
      'Pengembang Kota Mandiri & Kawasan Real Estate',
      'Pengelola Kawasan Industri Modern (KIK/KIE)',
      'Kampus Universitas & Kawasan Pendidikan Terpadu',
      'Pelabuhan & Terminal Logistik Cerdas'
    ],
    flyerPosition: 'right'
  },
  {
    id: 'command-center',
    number: '08',
    name: 'Command Center',
    subtitle: 'Pusat Operasi Kendali Terpadu, Video Wall Interaktif & Manajemen Tanggap Cepat',
    category: 'Smartech',
    iconType: 'command-center',
    description: 'Perancangan dan pembangunan ruang kendali terpusat (Integrated Command & Operation Center) berstandar internasional. Menggabungkan arsitektur video wall ultra-HD, perangkat lunak konsolidasi data visual, tata suara akustik, hingga konsol operator ergonomis untuk pengambilan keputusan strategis.',
    features: [
      'Display Video Wall Ultra-Narrow Bezel & LED Videotron High-Refresh Rate',
      'Video Processor Multi-Windowing & Matrix Switching Fleksibel',
      'Integrasi Feed Kamera CCTV Kota, Peta Geografis (GIS), & Aplikasi Layanan',
      'Sistem Tata Suara Konferensi & Pengedap Suara Akustik Ruang Profesional',
      'Meja Konsol Operator Modular Ergonomis dengan Cable Management Rapi',
      'Sistem Pengendalian Krisis & Dispatching Petugas Lapangan Terintegrasi'
    ],
    specifications: {
      sla: '24/7 Continuous Mission-Critical Operations',
      ratio: 'Ultra-HD 4K/8K Video Matrix Processing',
      ipType: 'Secure Isolated Command Intranet',
      support: 'Konsultasi Desain, Integrasi & Purna Jual'
    },
    suitableFor: [
      'Dinas Komunikasi & Informatika (Kominfo)',
      'Badan Penanggulangan Bencana Daerah (BPBD)',
      'Kepolisian & Dinas Perhubungan (ATCS)',
      'Pusat Kendali Operasi Korporasi BUMN & Swasta',
      'Kawasan Keamanan Fasilitas Vital Nasional'
    ],
    flyerPosition: 'right'
  },
  {
    id: 'internet-satelite',
    number: '09',
    name: 'Internet Satelite',
    subtitle: 'Akses Satelit VSAT Broadband untuk Daerah Remote, Maritim, & Wilayah 3T',
    category: 'Konektivitas',
    iconType: 'internet-satelite',
    description: 'Solusi konektivitas satelit Very Small Aperture Terminal (VSAT) berkeandalan tinggi untuk menjangkau lokasi-lokasi yang belum terjangkau jaringan fiber optik atau BTS seluler. Menghubungkan pelosok Nusantara, area pertambangan terpencil, perkebunan, hingga kapal maritim.',
    features: [
      'Teknologi VSAT Ku-Band & C-Band High Throughput Satellite (HTS)',
      'Kesiapan Integrasi Satelit Orbit Rendah (LEO) Berlatensi Rendah',
      'Antena Fixed & Auto-Tracking Gyro-Stabilized untuk Kapal Maritim',
      'Ketahanan Ekstrem terhadap Cuaca Hujan Tropis Nusantara',
      'Penyediaan Paket Kuota Fleksibel atau Dedicated Bandwidth',
      'Tim Teknisi Lapangan Berpengalaman untuk Pemasangan di Wilayah Terpencil'
    ],
    specifications: {
      sla: '99.5% Satellite Link Availability',
      ratio: 'Dedicated & Shared Profiles',
      ipType: 'Static IP Over Satellite Routing',
      support: 'Teleport Hub Support 24/7'
    },
    suitableFor: [
      'Area Pertambangan Batubara, Nikel, & Migas Lepas Pantai',
      'Perkebunan Kelapa Sawit & Hutan Tanaman Industri',
      'Armada Kapal Kargo, Tugboat & Pariwisata Bahari',
      'Pos Penjagaan Perbatasan & Kantor Pemerintahan Desa',
      'Proyek Konstruksi Infrastruktur di Pedalaman'
    ],
    flyerPosition: 'right'
  },
  {
    id: 'website-hosting',
    number: '10',
    name: 'Website & Hosting',
    subtitle: 'Hosting Enterprise NVMe Berkecepatan Tinggi, Domain Resmi, & Web Korporat',
    category: 'Cloud',
    iconType: 'website-hosting',
    description: 'Layanan terintegrasi untuk membangun identitas dan eksistensi digital bisnis. Mulai dari pendaftaran domain resmi (.id, .co.id, .com), web hosting berbasis NVMe enterprise berkecepatan tinggi, proteksi keamanan web terpasang, hingga pengembangan situs korporat profesional yang responsif.',
    features: [
      'Penyimpanan Ultra-Cepat Enterprise NVMe SSD Storage',
      'Sertifikat Keamanan SSL Gratis (HTTPS) & Web Application Firewall terpasang',
      'Layanan Email Bisnis Terpercaya (@nama-perusahaan.com) Anti-Spam',
      'Bantuan Pendaftaran & Verifikasi Domain Resmi Indonesia (.co.id, .or.id, .go.id)',
      'Jasa Pembuatan Website Profil Perusahaan & Portal Web Kustom',
      'Backup Otomatis Harian dengan Opsi 1-Click Restore Data'
    ],
    specifications: {
      sla: '99.9% Web Server Uptime',
      ratio: 'LiteSpeed Enterprise Web Server',
      ipType: 'Dedicated IP & Anycast DNS Global',
      support: 'Dukungan Teknis Web & Sysadmin Berpengalaman'
    },
    suitableFor: [
      'Company Profile Perusahaan & Korporasi',
      'Katalog Produk & Toko Online Resmi',
      'Website Lembaga Pemerintahan & Yayasan',
      'Pelaku Usaha Mikro, Kecil & Menengah (UMKM)',
      'Portal Berita & Publikasi Komunitas'
    ],
    flyerPosition: 'right'
  }
];

export const COMPANY_PROFILE = {
  name: 'PT Indofiber Lintas Nusantara',
  brandShort: 'INDOFIBER',
  brandSubtitle: 'LINTAS NUSANTARA',
  tagline: 'CONNECTING NUSANTARA AND SMARTECH',
  badgeText: 'INNOVATION QUALITY IF',
  city: 'Palembang',
  province: 'Sumatera Selatan',
  postalCode: '30137',
  fullAddress: 'Blok E.11, Jl. Anggar No.Kel, Lorok Pakjo, Kec. Ilir Bar. I, Kota Palembang, Sumatera Selatan 30137',
  phone: '+62 711 5732 990',
  whatsappNumber: '6281273908882',
  whatsappDisplay: '+62 812-7390-8882',
  email: 'info@indofiber.co.id',
  nocEmail: 'noc@indofiber.co.id',
  operatingHours: 'Senin - Minggu: 24/7 NOC & Customer Care',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Blok+E.11+Jl+Anggar+Lorok+Pakjo+Kec+Ilir+Barat+I+Kota+Palembang+Sumatera+Selatan+30137',
  foundedYear: '2019',
  stats: [
    { label: 'Uptime SLA Guarantee', value: '99.9%', note: 'Carrier-grade reliability' },
    { label: 'Bandwidth Ratio', value: '1:1', note: 'Simetris CIR 100%' },
    { label: 'Network Operations Center', value: '24/7/365', note: 'Palembang & Nasional' },
    { label: 'Cakupan Layanan', value: '100%', note: 'Nusantara Fiber & Satelit' }
  ]
};
