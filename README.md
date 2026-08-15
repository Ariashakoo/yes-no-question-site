# Historical Figure Personality Quiz

A modern, professional web application that determines which historical figure you most resemble based on your answers to 10 thought-provoking questions.

## ✨ Features

### Modern UI/UX
- **Beautiful gradient design** with dark theme
- **Smooth animations** and transitions
- **Responsive layout** - works on all devices
- **Accessible** - keyboard navigation and screen reader support
- **Progress tracking** with visual progress bar

### Technical Improvements
- **ES6+ JavaScript** with modern design patterns
- **Module Pattern** for encapsulation
- **Observer Pattern** for state management
- **Factory Pattern** for result calculation
- **Clean separation of concerns** (MVC-like architecture)
- **No external dependencies** - pure vanilla JavaScript

### Enhanced Functionality
- **Welcome screen** with instructions
- **Question-by-question navigation** (Previous/Next)
- **Answer validation** before proceeding
- **Result matching** with Hamming distance algorithm for closest matches
- **Share functionality** (Web Share API + clipboard fallback)
- **Toast notifications** for user feedback
- **Keyboard shortcuts** for power users

## 🚀 Quick Start

### Using the New Version (Recommended)

1. Navigate to the `src` folder:
   ```bash
   cd src
   ```

2. Open `index.html` in your browser:
   ```bash
   # On macOS
   open index.html
   
   # On Windows
   start index.html
   
   # On Linux
   xdg-open index.html
   ```

3. Or simply drag and drop `index.html` into your browser.

### Legacy Versions

The repository also contains two legacy implementations:

- **`project_1/`** - Simple JavaScript version (single page)
- **`Project main/`** - PHP version (requires server)

## 📁 Project Structure

```
/workspace/
├── README.md                 # This file
├── src/                      # ✨ NEW: Modern Professional Version
│   ├── index.html           # Main HTML file
│   ├── styles/
│   │   └── main.css         # Complete CSS with variables
│   ├── js/
│   │   └── app.js           # Modern ES6+ JavaScript
│   └── assets/              # For future assets
├── project_1/               # Legacy: Simple JavaScript version
│   ├── index.html
│   ├── script.js
│   └── style.css
└── Project main/            # Legacy: PHP version
    ├── index (1).html
    ├── process.php
    └── style.css
```

## 🎯 How It Works

1. **Answer 10 Questions**: Each "Yes" answer is recorded as `1` and each "No" as `0`, forming a 10-character binary string.

2. **Binary Matching**: Your answer string is matched against our database of historical figures.

3. **Smart Results**: 
   - **Exact match**: Shows the perfect historical figure match
   - **Close match**: Uses Hamming distance algorithm to find the most similar figure
   - **No match**: Displays a friendly message about your unique personality

## 🧠 Quiz Topics

The quiz explores themes such as:
- Racial and religious preferences
- Belief in equality
- Attitudes toward land ownership and cultural expansion
- Lawmaking and tradition
- Learning from past mistakes
- Personal happiness

## 🎨 Design Patterns Used

| Pattern | Implementation | Benefit |
|---------|---------------|---------|
| **Module Pattern** | `QuizApp` IIFE | Encapsulation, clean global namespace |
| **Observer Pattern** | `QuizState` class | Reactive state management |
| **Factory Pattern** | `ResultCalculator` class | Centralized result logic |
| **Singleton Pattern** | State management | Single source of truth |

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` / `H` | Previous question |
| `→` / `L` | Next question |
| `1` / `Y` | Select "Yes" |
| `2` / `N` | Select "No" |
| `Enter` | Confirm/Next |

## 🔧 Technologies Used

### New Version (`src/`)
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, grid, animations
- **Vanilla JavaScript (ES6+)** - Classes, modules, arrow functions
- **Web APIs** - Clipboard API, Web Share API

### Legacy Versions
- **PHP** - Server-side processing (Project main)
- **JavaScript (ES5)** - Client-side logic (project_1)
- **jQuery** - DOM manipulation (Project main)

## 🌐 Browser Support

The new version supports all modern browsers:
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Add more questions or historical figures
3. Improve the UI/UX
4. Add new features (e.g., user accounts, result history)
5. Submit a pull request

### Development Guidelines

- Use ES6+ syntax
- Follow existing code style
- Comment complex logic
- Test on multiple devices
- Ensure accessibility compliance

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Contact

For any questions or suggestions, please open an issue on GitHub or reach out to the repository owner.

---

**Enjoy discovering which historical figure matches your personality!** 🏛️✨
