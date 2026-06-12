# quiz-cli

An interactive command-line quiz game for learning JavaScript.

## Description

**quiz-cli** is a polished terminal-based quiz experience built with Node.js and ES Modules. It lets you choose a category, select how many questions to answer, and play through randomized quizzes with colored output, progress tracking, explanations, and a score summary at the end.

The app uses only Node.js built-ins and has **no runtime dependencies**.

## Features

- Category selection
- Question count selection
- Randomized questions
- Colored terminal output
- Progress bar during the quiz
- Answer explanations
- Final score summary
- Missed-question review
- Replay loop to play again

### Available Categories

- JavaScript Basics
- Node.js Fundamentals
- General Programming

## Installation

### Requirements

- Node.js **>= 18.0.0**

### Setup

```bash
git clone <repository-url>
cd Elita-test
```

No additional runtime packages are required.

## Usage

Start the quiz:

```bash
npm start
```

Run the test suite:

```bash
npm test
```

### How It Works

1. Choose a quiz category
2. Pick how many questions to answer
3. Answer each question by entering the option number
4. Review your score, explanations, and missed questions
5. Choose whether to play again

## Project Structure

```text
index.js              # Application entry point
src/colors.js         # ANSI color helpers for terminal output
src/input.js          # Readline-based input helpers
src/quiz.js           # Quiz logic, scoring, progress, and results
data/questions.json   # Quiz categories and question bank
package.json          # Project metadata and scripts
```

## Customization Notes

If you want to extend the quiz, the main places to update are:

- `data/questions.json` for adding or editing categories and questions
- `src/quiz.js` for changing quiz behavior, scoring, or result display
- `src/colors.js` for adjusting terminal styling
- `src/input.js` for modifying input prompts and selection flow

When adding questions, keep the existing structure consistent:

- `question`
- `options`
- `answer` as the zero-based index of the correct option
- `explanation` for feedback after each answer

## Contributing

Contributions are welcome.

A simple workflow:

1. Fork the repository
2. Create a branch for your changes
3. Make your updates
4. Test with:

```bash
npm test
```

5. Open a pull request

## License

MIT License

## Scripts

- `npm start` — runs `node index.js`
- `npm test` — runs `node --test`

## Technical Details

- Entry point: `index.js`
- Module type: **ES Modules**
- Runtime dependencies: **none**
- Built with Node.js built-ins only