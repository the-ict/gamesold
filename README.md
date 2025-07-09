# 🎮 GameSold

GameSold — O'yin akkauntlarini sotish va xarid qilish uchun qulay platforma.

GameSold — Удобная платформа для покупки и продажи игровых аккаунтов.

---

## Overview

GameSold is a web platform designed to simplify the buying and selling of game accounts. The application provides a secure and user-friendly marketplace where users can list, browse, and purchase game accounts for various games, such as PUBG Mobile and more.

**Platform supports three languages:**
- 🇺🇿 Uzbek (O'zbek)
- 🇷🇺 Russian (Русский)
- 🇬🇧 English

---

## Xususiyatlari (Uzbek)

- **Akkountlar e’lon qilish:** Foydalanuvchilar o‘yin akkauntlarini suratlar, tavsif, narx va videolar bilan e’lon qilishi mumkin.
- **Akkountlarni ko‘rish:** Xaridorlar turli o‘yin akkauntlarini ko‘rib chiqishlari, hudud, o‘yin va narx bo‘yicha filtrlashlari mumkin.
- **Avtorizatsiya:** Google orqali va email yordamida xavfsiz kirish.
- **Xabar almashish:** Xaridor va sotuvchilar uchun ichki chat tizimi.
- **Saqlanganlar:** Foydalanuvchilar akkauntlarni saqlab qo‘yishlari mumkin.
- **Dashboard:** E’lonlarni boshqarish va statusni kuzatish.
- **Media yuklash:** Sotuvchilar akkauntlar uchun rasm va video yuklashi mumkin.

---

## Возможности (Russian)

- **Размещение аккаунтов:** Пользователи могут выставлять игровые аккаунты на продажу с фото, описанием, ценой и видео.
- **Просмотр аккаунтов:** Покупатели могут просматривать ассортимент аккаунтов, фильтровать по региону, игре и цене.
- **Авторизация:** Безопасный вход через Google и email.
- **Сообщения:** Встроенный чат для общения между покупателями и продавцами.
- **Избранное:** Сохранение аккаунтов в избранном.
- **Панель управления:** Управление своими объявлениями и статусами.
- **Загрузка медиа:** Продавцы могут загружать изображения и видео.

---

## Features (English)

- **Account Listings:** Users can add their gaming accounts for sale, including images, descriptions, prices, and video previews.
- **Account Browsing:** Buyers can explore a wide selection of available game accounts, filter by region, game, and price, and view detailed information for each listing.
- **User Authentication:** Supports secure logins via Google OAuth and email/password.
- **Messaging:** Built-in chat/messaging system for buyers and sellers to communicate.
- **Favorites & Saved Items:** Users can save accounts to their favorites for later review.
- **Admin Dashboard:** Manage your listings, check saved items, and monitor account status.
- **Media Upload:** Sellers can upload images and videos to better showcase their accounts.

---

## Tech Stack

- **Frontend:** React, TypeScript
- **Backend:** Node.js, Express, TypeScript
- **Database:** MongoDB
- **Authentication:** Google OAuth, custom auth
- **State Management:** Zustand
- **Real-time:** Socket.io for messaging
- **Styling:** Tailwind CSS

---

## Getting Started

### Prerequisites

- Node.js
- Yarn or npm
- MongoDB

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/the-ict/gamesold.git
   cd gamesold
   ```

2. **Install dependencies for both client and server:**
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env` in both `client` and `server` folders and fill in the required settings.

4. **Run the app:**
   - Start the backend:
     ```bash
     cd server
     npm run dev
     ```
   - Start the frontend:
     ```bash
     cd ../client
     npm run dev
     ```

---

## Usage

- Register or log in using Google or email.
- Browse available game accounts or add your own account for sale.
- Use the dashboard to manage your listings and saved items.
- Communicate with other users via the built-in chat system.
- Use the site in Uzbek, Russian, or English.

---

## Contributing

Pull requests are welcome! For major changes, open an issue first to discuss your proposed changes.

---

## License

This project currently does not have a license.

---

## Contact

- [Project Repository](https://github.com/the-ict/gamesold)
- Author: [the-ict](https://github.com/the-ict)

---
