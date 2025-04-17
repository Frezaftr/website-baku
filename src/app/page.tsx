// src/app/page.js
'use client'

import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";



export default function Home() {
  useEffect(() => {
    // Optional: Scroll ke hash saat pertama kali load
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <>
      {/* Home Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20 sm:py-32 lg:py-40 bg-white overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
    style={{ backgroundImage: "url('/BAKU.png')" }}
  ></div>

  {/* Overlay untuk efek terang dan kontras teks */}
  <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

  {/* Content */}
  <div className="relative z-10 w-full max-w-5xl flex flex-col-reverse md:flex-row items-center justify-between gap-10">
    
    {/* Text Section with animation */}
    <motion.div 
      className="w-full md:w-1/2 text-center md:text-left"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A6FA5] mb-4 leading-tight">
        Selamat Datang di BAKU!
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
        Tempat belajar asyik dan berkualitas untuk anak-anak sesuai Kurikulum Merdeka. Yuk, kembangkan potensi bersama kami!
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full">
        <a 
          href="#program" 
          className="bg-[#4A6FA5] text-white px-6 py-3 rounded-xl hover:bg-[#7096D1] transition w-full sm:w-auto text-center"
        >
          Lihat Program
        </a>
        <a 
          href="#about" 
          className="text-[#4A6FA5] border border-[#4A6FA5] px-6 py-3 rounded-xl hover:bg-[#F3F8FF] transition w-full sm:w-auto text-center"
        >
          Tentang Kami
        </a>
      </div>
    </motion.div>

    {/* Empty column (karena gambar background) */}
    <div className="w-full md:w-1/2 hidden md:block"></div>
  </div>
</section>


      {/* Program Section */}
      <section id="program" className="min-h-screen bg-[#F3F8FF] px-6 py-20">
        <h2 className="text-3xl font-semibold text-[#4A6FA5] mb-10 text-center">
          Program Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card Bimba */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-md border border-[#DCE6F9] hover:border-[#4A6FA5] hover:border-2 text-center transition-all duration-300"
            whileHover={{ y: -10, scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src="/BIMBA.png" alt="Bimba" className="w-40 h-40 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#4A6FA5] mb-2">Program Bimba</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Belajar membaca, menulis, dan berhitung dengan metode menyenangkan untuk anak usia dini.
            </p>
            <span className="text-[#7096D1] font-medium block mb-4">Usia 3-6 tahun</span>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScQRFmUIWvrAlZZcsrRVZ65ukIbCDqOu1AHY5sFu-GXQxV01g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-4 py-2 rounded-lg bg-[#4A6FA5] text-white font-medium hover:bg-[#3b5a85] transition"
            >
              Daftar Sekarang
            </a>
          </motion.div>

          {/* Card SD */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-md border border-[#DCE6F9] hover:border-[#4A6FA5] hover:border-2 text-center transition-all duration-300"
            whileHover={{ y: -10, scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src="/SD.png" alt="SD" className="w-40 h-40 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#4A6FA5] mb-2">Program SD</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Pembelajaran Matematika, Bahasa, dan IPA untuk mendukung prestasi sekolah.
            </p>
            <span className="text-[#7096D1] font-medium block mb-4">Kelas 1 - 6</span>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScQRFmUIWvrAlZZcsrRVZ65ukIbCDqOu1AHY5sFu-GXQxV01g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-4 py-2 rounded-lg bg-[#4A6FA5] text-white font-medium hover:bg-[#3b5a85] transition"
            >
              Daftar Sekarang
            </a>
          </motion.div>

          {/* Card SMP */}
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-md border border-[#DCE6F9] hover:border-[#4A6FA5] hover:border-2 text-center transition-all duration-300"
            whileHover={{ y: -10, scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src="/SMP.PNG" alt="SMP" className="w-40 h-40 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#4A6FA5] mb-2">Program SMP</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Pendalaman materi dan latihan intensif untuk menghadapi ujian dan masuk SMA unggulan.
            </p>
            <span className="text-[#7096D1] font-medium block mb-4">Kelas 7 - 9</span>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScQRFmUIWvrAlZZcsrRVZ65ukIbCDqOu1AHY5sFu-GXQxV01g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-lg bg-[#4A6FA5] text-white font-semibold hover:bg-[#3b5a85] transition"
            >
              Daftar Sekarang
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
        <section id="about" className="bg-[#F3F8FF] py-16 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
            
            {/* Gambar (kiri di desktop) */}
            <div className="flex-1 flex justify-center">
              <img
                src="/ABOUT.png"
                alt="Ilustrasi Tentang Kami"
                className="w-full max-w-[500px] md:max-w-[500px]"
              />
            </div>

            {/* Teks (kanan di desktop) dengan animasi */}
            <motion.div 
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold text-[#4A6FA5] mb-4">
                Tentang Kami
              </h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">
                BAKU (Belajar,Aktif,Kreatif,Unggul) adalah lembaga bimbingan belajar yang fokus pada
                pembelajaran menyenangkan, personal, dan terstruktur untuk anak-anak dari usia dini hingga SMP.
              </p>
              <p className="text-gray-700 text-base md:text-lg mb-6">
                Dengan guru berpengalaman dan metode yang adaptif, kami percaya bahwa setiap anak bisa belajar dengan gembira dan optimal.
              </p>
              <a
                href="https://wa.me/6289629047028?text=Halo%20BAKU%2C%20saya%20ingin%20konsultasi%20tentang%20program%20bimbel%20anak"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#4A6FA5] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#7096D1] transition"
              >
                Konsultasi Sekarang
              </a>
            </motion.div>
          </div>
        </section>

        {/* Review Section */}
        <section id="review" className="min-h-screen bg-[#F3F8FF] px-6 py-20">
          <h2 className="text-3xl font-semibold text-[#4A6FA5] mb-10 text-center">Testimoni</h2>

          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            pagination={{ clickable: true }}
            autoplay={{ delay: 1500 }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="pb-10 max-w-6xl mx-auto"
          >
            {/* Testimoni 1 */}
            <SwiperSlide>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-[#DCE6F9] h-full flex flex-col items-center text-center">
                <img src="/guru.png" alt="Ibu Ani" className="w-20 h-20 rounded-full mb-4 object-cover" />
                <h3 className="font-semibold text-[#4A6FA5] text-lg">Ibu Ani</h3>
                <p className="text-sm text-[#7096D1] mb-2">Program Bimba</p>
                <p className="text-gray-600 text-sm">“Anak saya sangat semangat belajar di BAKU!”</p>
              </div>
            </SwiperSlide>

            {/* Testimoni 2 */}
            <SwiperSlide>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-[#DCE6F9] h-full flex flex-col items-center text-center">
                <img src="/guru.png" alt="Pak Purnomo" className="w-20 h-20 rounded-full mb-4 object-cover" />
                <h3 className="font-semibold text-[#4A6FA5] text-lg">Pak Budi</h3>
                <p className="text-sm text-[#7096D1] mb-2">Program SD</p>
                <p className="text-gray-600 text-sm">“Guru-gurunya ramah dan metode ajarnya cocok banget buat anak saya.”</p>
              </div>
            </SwiperSlide>

            {/* Testimoni 3 */}
            <SwiperSlide>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-[#DCE6F9] h-full flex flex-col items-center text-center">
                <img src="/guru.png" alt="Ibu Diksa" className="w-20 h-20 rounded-full mb-4 object-cover" />
                <h3 className="font-semibold text-[#4A6FA5] text-lg">Ibu Rina</h3>
                <p className="text-sm text-[#7096D1] mb-2">Program SMP</p>
                <p className="text-gray-600 text-sm">“Anak saya sekarang jadi lebih percaya diri saat ujian!”</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-[#DCE6F9] h-full flex flex-col items-center text-center">
                <img src="/guru.png" alt="Ibu Sasa" className="w-20 h-20 rounded-full mb-4 object-cover" />
                <h3 className="font-semibold text-[#4A6FA5] text-lg">Ibu Ani</h3>
                <p className="text-sm text-[#7096D1] mb-2">Program Bimba</p>
                <p className="text-gray-600 text-sm">“Anak saya sangat semangat belajar di BAKU!”</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-[#DCE6F9] h-full flex flex-col items-center text-center">
                <img src="/guru.png" alt="Ibu Ani" className="w-20 h-20 rounded-full mb-4 object-cover" />
                <h3 className="font-semibold text-[#4A6FA5] text-lg">Ibu Ani</h3>
                <p className="text-sm text-[#7096D1] mb-2">Program Bimba</p>
                <p className="text-gray-600 text-sm">“Anak saya sangat semangat belajar di BAKU!”</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>


      {/* Guru Section */}
    <section id="guru" className="min-h-screen bg-white px-6 py-20">
      <h2 className="text-3xl font-semibold text-[#4A6FA5] mb-6 text-center">Pengajar</h2>
      <p className="text-gray-700 max-w-3xl mx-auto text-center mb-12">
        Tim pengajar kami adalah lulusan terbaik dan berpengalaman dalam pendidikan anak.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      
      {/* Card Guru 1 */}
          <div className="bg-[#F3F8FF] rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300 border border-[#DCE6F9]">
            <img src="/guru.png" alt="Guru 1" className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#4A6FA5] mb-1">Bu Diksa</h3>
            <p className="text-gray-600 text-sm mb-2">Usia: 29 tahun</p>
            <p className="text-gray-700 text-sm italic">Belajar itu menyenangkan, mari tumbuh bersama!</p>
          </div>

          {/* Card Guru 2 */}
          <div className="bg-[#F3F8FF] rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300 border border-[#DCE6F9]">
            <img src="/guru.png" alt="Guru 2" className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#4A6FA5] mb-1">Pak Dedi</h3>
            <p className="text-gray-600 text-sm mb-2">Usia: 32 tahun</p>
            <p className="text-gray-700 text-sm italic">Setiap anak punya potensi hebat yang harus dikembangkan.</p>
          </div>

          {/* Card Guru 3 */}
          <div className="bg-[#F3F8FF] rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300 border border-[#DCE6F9]">
            <img src="/guru.png" alt="Guru 3" className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#4A6FA5] mb-1">Bu Diksa</h3>
            <p className="text-gray-600 text-sm mb-2">Usia: 27 tahun</p>
            <p className="text-gray-700 text-sm italic">Membimbing dengan hati, membentuk masa depan cerah.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
<footer id="kontak"  className="bg-[#4A6FA5] text-white py-12 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Kontak */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Hubungi Kami</h3>
      <p>📞 0812-3456-7890</p>
      <p>✉️ info@baku.com</p>
    </div>

    {/* Alamat & Google Maps */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Alamat</h3>
      <p>Jl. H. Bentol 1 No.18, RT.005/RW.007, Larangan Sel., Kec. Larangan, Kota Tangerang, Banten 15154</p>
      <div className="mt-4 w-full h-40 rounded overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.703016719718!2d106.7198445!3d-6.24833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb0055e53553%3A0xbdc6e73769f5d1e!2sBimba%20dan%20Bimbel%20BAKU!5e0!3m2!1sen!2sid!4v1712748000000!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>

    {/* Sosial Media */}
    <div>
      <h3 className="text-xl font-semibold mb-4">Ikuti Kami</h3>
      <ul className="space-y-2">
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            📸 Instagram
          </a>
        </li>
        <li>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">
            💬 WhatsApp
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            👍 Facebook
          </a>
        </li>
      </ul>
    </div>

  </div>

  {/* Footer bawah */}
  <div className="text-center text-sm mt-10 border-t border-white/20 pt-6">
    © 2025 BAKU. All rights reserved.
  </div>
</footer>

      
    </>
  )
}
