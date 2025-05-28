import React, { useState, useEffect } from 'react';
import GuestHeader from '../components/GuestHeader';
// Mock data untuk produk unggulan
const topProducts = [
  {
    id: 1,
    name: "Nasi Gudeg Jogja",
    price: 25000,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
    rating: 4.8
  },
  {
    id: 2,
    name: "Sate Ayam Madura",
    price: 30000,
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=300&h=200&fit=crop",
    rating: 4.9
  },
  {
    id: 3,
    name: "Rendang Padang",
    price: 35000,
    image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=300&h=200&fit=crop",
    rating: 4.7
  },
  {
    id: 4,
    name: "Bakso Malang",
    price: 20000,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop",
    rating: 4.6
  },
  {
    id: 5,
    name: "Gado-gado Jakarta",
    price: 18000,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=200&fit=crop",
    rating: 4.5
  },
  {
    id: 6,
    name: "Ayam Betutu Bali",
    price: 40000,
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=200&fit=crop",
    rating: 4.8
  }
];

// Mock data untuk testimoni
const testimonials = [
  {
    id: 1,
    name: "Andi Setiawan",
    avatar: "https://avatar-placeholder.iran.liara.run/?username=Andi&background=6366f1&color=fff",
    review: "Aplikasi Sedap benar-benar mengubah cara saya menikmati kuliner! Pilihan makanannya sangat beragam dan semuanya terasa autentik.",
    rating: 5
  },
  {
    id: 2,
    name: "Maya Sari",
    avatar: "https://avatar-placeholder.iran.liara.run/?username=Maya&background=8b5cf6&color=fff",
    review: "Pelayanan cepat dan makanan selalu sampai dalam kondisi hangat. Sangat puas dengan kualitas dan cita rasanya!",
    rating: 5
  },
  {
    id: 3,
    name: "Budi Hartono",
    avatar: "https://avatar-placeholder.iran.liara.run/?username=Budi&background=f59e0b&color=fff",
    review: "Sebagai pecinta kuliner, saya sangat terkesan dengan variasi menu di Sedap. Harga terjangkau dengan kualitas premium.",
    rating: 4
  },
  {
    id: 4,
    name: "Sinta Dewi",
    avatar: "https://avatar-placeholder.iran.liara.run/?username=Sinta&background=ef4444&color=fff",
    review: "Interface yang user-friendly dan proses pemesanan yang mudah. Sangat membantu untuk menemukan makanan favorit!",
    rating: 5
  },
  {
    id: 5,
    name: "Rizki Pratama",
    avatar: "https://avatar-placeholder.iran.liara.run/?username=Rizki&background=10b981&color=fff",
    review: "Kualitas makanan konsisten dan delivery selalu tepat waktu. Sedap memang pilihan terbaik untuk kuliner nusantara!",
    rating: 4
  }
];

const GuestDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
      {/* Header Component */}
      <GuestHeader />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 min-h-screen flex items-center bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-50"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full opacity-30"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-white rounded-full opacity-40"></div>
          <div className="absolute top-1/2 right-20 w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
          <div className="absolute bottom-40 right-40 w-2 h-2 bg-white rounded-full opacity-25"></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Jelajahi, Nikmati, dan Cintai<br />
              Cita Rasa Bersama{' '}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Sedap
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Temukan berbagai menu lezat dari berbagai penjuru nusantara. 
              Apakah kamu ingin memanjakan lidah, mencari makanan favorit, 
              atau sekadar menjelajahi kuliner baru? Semua ada di Sedap!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#products" 
                className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/30 hover:-translate-y-0.5 border border-white/30"
              >
                Coba Gratis
              </a>
              <a 
                href="#about" 
                className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Mulai Sekarang
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg border-2 border-white/30 flex items-center justify-center relative overflow-hidden">
              <div className="text-8xl lg:text-9xl animate-bounce">🍜</div>
              
              {/* Floating Cards */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 animate-pulse">
                <div className="text-white font-semibold text-sm">🍽️ Lezat</div>
              </div>
              <div className="absolute bottom-8 right-2 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 animate-pulse" style={{ animationDelay: '1s' }}>
                <div className="text-white font-semibold text-sm">⚡ Cepat</div>
              </div>
              <div className="absolute top-12 -left-4 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 animate-pulse" style={{ animationDelay: '2s' }}>
                <div className="text-white font-semibold text-sm">🥇 Favorit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Tentang Sedap</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Sedap adalah platform kuliner terdepan yang menghubungkan Anda dengan cita rasa autentik nusantara. 
              Dengan komitmen terhadap kualitas dan kepuasan pelanggan, kami menghadirkan pengalaman kuliner yang tak terlupakan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Menu Beragam</h3>
              <p className="text-gray-600">Lebih dari 1000+ pilihan makanan dari berbagai daerah di Indonesia dengan cita rasa yang autentik.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Pengiriman Cepat</h3>
              <p className="text-gray-600">Sistem delivery yang efisien dengan waktu pengiriman rata-rata 30 menit ke seluruh kota.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Kualitas Terjamin</h3>
              <p className="text-gray-600">Mitra restoran terpilih dengan standar kebersihan dan kualitas tinggi untuk kepuasan Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Produk Unggulan</h2>
            <p className="text-lg text-gray-600">Nikmati pilihan makanan terpopuler yang paling disukai pelanggan</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-600">
                      Rp {product.price.toLocaleString('id-ID')}
                    </span>
                    <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Apa Kata Mereka</h2>
            <p className="text-lg text-gray-600">Testimoni dari pelanggan yang puas dengan layanan Sedap</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <div className="flex text-yellow-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-orange-400 rounded-lg mr-2 flex items-center justify-center text-white font-bold">S</div>
                <span className="text-2xl font-bold">Sedap</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Platform kuliner terdepan yang menghadirkan cita rasa autentik nusantara langsung ke rumah Anda.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors">
                  <span className="text-sm">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <span className="text-sm">📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <span className="text-sm">🐦</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Menu</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Ulasan</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <div className="space-y-2 text-gray-400">
                <p>📧 info@sedap.id</p>
                <p>📱 +62 812-3456-7890</p>
                <p>📍 Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <h3 className="text-lg font-semibold mb-6 text-center">Mitra Pembayaran</h3>
            <div className="flex justify-center items-center space-x-8 opacity-70">
              <div className="bg-white rounded px-3 py-2 text-gray-800 font-bold text-sm">VISA</div>
              <div className="bg-white rounded px-3 py-2 text-gray-800 font-bold text-sm">MasterCard</div>
              <div className="bg-blue-600 rounded px-3 py-2 text-white font-bold text-sm">OVO</div>
              <div className="bg-red-600 rounded px-3 py-2 text-white font-bold text-sm">DANA</div>
              <div className="bg-green-600 rounded px-3 py-2 text-white font-bold text-sm">GoPay</div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sedap. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GuestDashboard;