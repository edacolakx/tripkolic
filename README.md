# Tur ve Tatil Platformu

Bu proje, bir iş mülakatı kapsamında, şirketin isteği üzerine geliştirilmiştir. Kullanıcıların çeşitli tur, bilet, araç kiralama ve transfer seçeneklerini filtreleyip inceleyebileceği bir web uygulamasıdır.

## Özellikler

- **Kategoriye göre filtreleme:** Turlar, biletler, kiralama ve transfer seçenekleri.
- **Fiyat, saat, grup büyüklüğü, tema, aktivite, araç ve özelliklere göre filtreleme.**
- **Kullanıcı dostu ve modern arayüz.**
- **Gerçek zamanlı filtreleme ve sonuç gösterimi.**
- **React, Vite, Mantine, TailwindCSS ve React Icons kullanımı.**

## Kullanılan Teknolojiler

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Mantine UI](https://mantine.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Kurulum ve Çalıştırma

1. **Bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**

   ```bash
   npm run dev
   ```

3. **Projeyi derleyin:**
   ```bash
   npm run build
   ```

## Proje Yapısı

- `src/components/` : Uygulama bileşenleri (Card, Modal, Navbar)
- `src/assets/` : Görseller ve örnek veri dosyası (data.json)
- `src/App.jsx` : Ana uygulama dosyası
- `src/main.jsx` : Giriş noktası

## Notlar

- Proje, iş mülakatı için kısa sürede ve temel işlevsellik odaklı hazırlanmıştır.
- Demo veriler `src/assets/data.json` dosyasında yer almaktadır.
- Tasarımda Mantine ve TailwindCSS birlikte kullanılmıştır.
