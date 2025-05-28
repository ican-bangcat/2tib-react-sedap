import React, { useState, useEffect } from 'react';
import GuestHeader from '../components/GuestHeader';
// Import JSON data
import membersData from '../data/members.json';
import topProducts from '../data/products.json';
import testimonials from '../data/testimonials.json';




const GuestDashboard = () => {
  const [email, setEmail] = useState('');
  const [memberResult, setMemberResult] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Check membership function
  const checkMembership = () => {
    // Reset previous results
    setEmailError('');
    setMemberResult(null);
    setIsChecking(true);

    // Validation
    if (!email.trim()) {
      setEmailError('Email tidak boleh kosong');
      setIsChecking(false);
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError('Format email tidak valid');
      setIsChecking(false);
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
      const member = membersData.find(m => m.email.toLowerCase() === email.toLowerCase());
      setMemberResult(member);
      setIsChecking(false);
    }, 1000);
  };

  // Get member type styling
  const getMemberStyling = (type) => {
    switch(type) {
      case 'platinum':
        return {
          bg: 'bg-gradient-to-r from-purple-500 to-pink-500',
          icon: '💎',
          textColor: 'text-purple-600'
        };
      case 'gold':
        return {
          bg: 'bg-gradient-to-r from-yellow-500 to-orange-500',
          icon: '🥇',
          textColor: 'text-yellow-600'
        };
      case 'silver':
        return {
          bg: 'bg-gradient-to-r from-gray-500 to-gray-600',
          icon: '🥈',
          textColor: 'text-gray-600'
        };
      default:
        return {
          bg: 'bg-gray-500',
          icon: '👤',
          textColor: 'text-gray-600'
        };
    }
  };

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
                href="#membership" 
                className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/30 hover:-translate-y-0.5 border border-white/30"
              >
                Cek Member
              </a>
              <a 
                href="#products" 
                className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Lihat Menu
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

      {/* Member Check Section */}
      <section id="membership" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Cek Keanggotaan</h2>
            <p className="text-lg text-gray-600">Masukkan email Anda untuk mengecek status keanggotaan di Sedap</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && checkMembership()}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ${
                    emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                  placeholder="contoh@email.com"
                />
                {emailError && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <span className="mr-1">❌</span>
                    {emailError}
                  </p>
                )}
              </div>

              <button
                onClick={checkMembership}
                disabled={isChecking}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isChecking ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Mengecek...
                  </span>
                ) : (
                  'Cek Keanggotaan'
                )}
              </button>

              {/* Result Display */}
              {memberResult !== null && (
                <div className="mt-6 p-6 rounded-xl border-2 animate-fadeIn">
                  {memberResult ? (
                    <div className={`${getMemberStyling(memberResult.tipe_member).bg} p-6 rounded-xl text-white`}>
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-4xl mr-3">{getMemberStyling(memberResult.tipe_member).icon}</span>
                        <div className="text-center">
                          <h3 className="text-2xl font-bold">Selamat datang!</h3>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-lg mb-2">
                          🧾 <strong>{memberResult.nama}</strong>
                        </p>
                        <p className="text-lg">
                          Anda adalah member <strong className="uppercase">{memberResult.tipe_member}</strong>
                        </p>
                        <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-sm">Member ID: {memberResult.member_id}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl text-center">
                      <div className="text-4xl mb-3">❌</div>
                      <h3 className="text-xl font-semibold text-red-700 mb-2">Email Tidak Terdaftar</h3>
                      <p className="text-red-600">Email tidak terdaftar sebagai member.</p>
                      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-700">
                          💡 Ingin bergabung? <a href="#" className="font-semibold underline hover:no-underline">Daftar sekarang</a> dan nikmati berbagai keuntungan member!
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Demo Accounts */}
              <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-700 mb-3">🧪 Demo Accounts (untuk testing):</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <div className="bg-purple-100 p-2 rounded flex items-center">
                    <span className="mr-2">💎</span>
                    <span className="text-purple-700">ahmad.rizki@email.com</span>
                  </div>
                  <div className="bg-yellow-100 p-2 rounded flex items-center">
                    <span className="mr-2">🥇</span>
                    <span className="text-yellow-700">sari.dewi@email.com</span>
                  </div>
                  <div className="bg-gray-100 p-2 rounded flex items-center">
                    <span className="mr-2">🥈</span>
                    <span className="text-gray-700">budi.santoso@email.com</span>
                  </div>
                </div>
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