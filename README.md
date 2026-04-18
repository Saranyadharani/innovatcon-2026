# InnovateCon 2026 🚀

A modern, AI-assisted event experience web app built for **PromptWars Virtual** by Hack2skill using **Google Antigravity (Firebase Studio)**.

🌐 **Live Demo:** https://innovatecon-2026.netlify.app/

---

## 📌 About the Project

**InnovateCon 2026** is a Physical Event Experience platform that allows attendees to:
- Browse the full 3-day event schedule
- View featured speakers and their profiles
- Register for the event and receive a unique Ticket ID
- Look up their ticket using Ticket ID or email
- Find the venue with Google Maps integration

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React (Vite) | Frontend framework |
| Google Antigravity (Firebase Studio) | AI-assisted development environment |
| Netlify | Deployment and hosting |
| localStorage | Client-side ticket persistence |
| Google Maps Embed | Venue location |

---

## ✨ Features

- 🎟️ **Event Registration** — Fill in your details and get a unique Ticket ID instantly
- 🔍 **Ticket Lookup** — Search by Ticket ID or email, persists across sessions
- 📅 **Interactive Schedule** — Browse sessions across 3 days with color-coded tracks
- 🎤 **Speaker Profiles** — Featured speakers with role and company info
- 🗺️ **Venue and Directions** — Google Maps embed with transport options
- 📱 **Responsive Design** — Works on all screen sizes

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

Clone the repository
git clone https://github.com/YOUR_USERNAME/innovatcon-2026.git

Navigate into the project
cd innovatcon-2026

Install dependencies
npm install

Start development server
npm run dev

### Build for Production
npm run build

---

## 📁 Project Structure

src/
├── App.jsx              # Root component
├── App.css              # Global styles
├── main.jsx             # Entry point
└── components/
    ├── Navbar.jsx       # Sticky navigation bar
    ├── Hero.jsx         # Landing hero section
    ├── Schedule.jsx     # 3-day event schedule
    ├── Speakers.jsx     # Featured speakers grid
    ├── CheckIn.jsx      # Registration and ticket lookup
    ├── Venue.jsx        # Venue info and Google Maps
    └── Footer.jsx       # Footer

---

## 🏆 Built For

**PromptWars Virtual** — Hack2skill x Google for Developers
Challenge: Physical Event Experience
Builder: Saranya M

---

## 📄 License

MIT License — feel free to use and modify!
