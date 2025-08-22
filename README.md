# Tic Tac Toe Game

A modern, responsive Tic Tac Toe game built with React, Vite, and Tailwind CSS.

## Features

- ✨ Clean and modern UI with Tailwind CSS
- 🎮 Interactive gameplay for two players (X and O)
- 🏆 Winner detection and game state management
- 🔄 Reset game functionality
- 📱 Responsive design that works on all devices
- ⚡ Fast development and build process with Vite

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript features

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/balmukund18/TictacToe.git
cd TictacToe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## How to Play

1. The game starts with Player X
2. Click on any empty square to make your move
3. Players alternate turns (X and O)
4. First player to get 3 in a row (horizontally, vertically, or diagonally) wins!
5. If all squares are filled and no winner is found, it's a tie
6. Click "Reset Game" to start a new game

## Game Rules

- The game is played on a 3x3 grid
- Players take turns placing their marks (X or O)
- The first player to get 3 marks in a row wins
- Winning combinations include:
  - Horizontal: rows 1, 2, or 3
  - Vertical: columns 1, 2, or 3
  - Diagonal: top-left to bottom-right or top-right to bottom-left

## Project Structure

```
tictactoe/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── TicTacToe.jsx
│   ├── index.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.cjs
├── postcss.config.cjs
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Balmukund** - [GitHub](https://github.com/balmukund18)

## Acknowledgments

- Built with ❤️ using React and Vite
- Styled with Tailwind CSS
- Inspired by the classic Tic Tac Toe game

---

Enjoy playing! 🎮
