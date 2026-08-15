
# Yes No Question Site

A personality quiz application that determines which historical figure you most resemble based on your answers to 10 yes/no questions. The project includes two implementations: a PHP version and a JavaScript version.

## How It Works

The quiz presents you with 10 questions that explore your values, beliefs, and preferences. Each "Yes" answer is recorded as `1` and each "No" as `0`, forming a 10-character binary string (e.g., `1101000000`). This string is then matched against a predefined database of historical figures.

The quiz questions touch on themes such as:

- Racial and religious preferences
- Belief in equality
- Attitudes toward land ownership and cultural expansion
- Lawmaking and tradition
- Learning from past mistakes
- Personal happiness

Based on your unique combination of answers, the system reveals which historical figure shares your personality profile—or tells you that you have "NO PERSONALITY" if no match is found.

## Project Structure

The repository contains two separate implementations:

### 1. `Project main/` — PHP Version

| File | Description |
|------|-------------|
| `index (1).html` | The quiz interface with 10 questions |
| `process.php` | Backend logic that processes answers and determines the matching historical figure |
| `style.css` | Styling for the quiz interface |

> Note: This version uses PHP for server-side processing. If you're running it locally, you'll need a PHP environment like XAMPP. However, the PHP file may not run correctly in all XAMPP setups.

### 2. `project_1/` — JavaScript Version

| File | Description |
|------|-------------|
| `index.html` | The quiz interface |
| `script.js` | Client-side JavaScript logic (processing happens in the browser) |
| `style.css` | Styling for the JavaScript version |

> This version runs entirely in the browser, making it easier to test and deploy without a server.

## Live Demo

A live preview of the project is available at:  
[https://astroplus.ir/project/](https://astroplus.ir/project/)

> Note: The live site may be temporarily unavailable.

## Technologies Used

- **HTML5** — Structure and content
- **CSS3** — Styling and responsive design
- **PHP** — Server-side logic (Project main)
- **JavaScript** — Client-side logic (project_1)

## How to Run Locally

### For the JavaScript version (`project_1/`):
1. Clone the repository:
   ```bash
   git clone https://github.com/Ariashakoo/yes-no-question-site.git
   ```
2. Navigate to the `project_1/` folder:
   ```bash
   cd yes-no-question-site/project_1
   ```
3. Open `index.html` in your browser.

### For the PHP version (`Project main/`):
1. Make sure you have XAMPP (or any PHP-enabled server) installed.
2. Place the `Project main/` folder in your server's root directory (e.g., `htdocs/` for XAMPP).
3. Start Apache and MySQL (if required).
4. Access the project via `http://localhost/Project%20main/` in your browser.

> Troubleshooting: If the PHP file doesn't run properly in XAMPP, try using the JavaScript version instead, or deploy to a live server.

## Matching Logic

The PHP version uses the following mapping of binary strings to historical figures:

| Binary String | Historical Figure |
|---------------|-------------------|
| `1101000000` | Adolf Hitler |
| `1000100000` | Xerxes |
| `1000000000` | Sadegh Hedayat |
| `0011100000` | Cyrus the Great / Ferdowsi |
| `0011101000` | Cambyses |
| `0010010000` | Anthony of Rome |
| `0010000000` | Louis the Pious |
| `0000001000` | Joseph Stalin |
| `0000000001` | Osama bin Laden |
| `1111100000` | Julius Caesar |
| `1111111100` | Cleopatra |
| `0101100100` | Joan of Arc |
| `0000100100` | Leonardo da Vinci |
| `0100101000` | William Shakespeare |
| `0100100010` | Amelia Earhart |
| `0100100001` | Albert Einstein |
| `0101000000` | Genghis Khan |

> If your answer string doesn't match any entry, the result will be: "YOU HAVE NO PERSONALITY".

## Contributing

Contributions are welcome! Feel free to:

- Fork the repository
- Add more questions or historical figures
- Improve the UI/UX
- Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, please open an issue on GitHub or reach out to the repository owner.

Enjoy discovering which historical figure matches your personality!

