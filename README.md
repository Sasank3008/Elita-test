# Quiz CLI

An interactive command-line quiz game built with Node.js. It lets users pick a quiz category, answer multiple-choice questions, and review their results at the end.

## Features

- Interactive terminal quiz experience
- Multiple quiz categories
- Configurable question count
- Randomized question order
- Immediate feedback with explanations
- Final score summary with performance message
- Colored terminal output using ANSI escape codes

## Project Structure

- `index.js` - Application entry point and main game loop
- `src/quiz.js` - Quiz logic, scoring, progress, and results display
- `src/input.js` - Reusable terminal input helpers
- `src/colors.js` - ANSI color utilities for terminal output
- `data/questions.json` - Quiz questions and categories

## Requirements

- Node.js 18 or later

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

## Usage

Start the quiz with:

```bash
npm start
```

## How to Play

1. Choose a quiz category.
2. Choose how many questions to answer.
3. Enter the number of your answer for each question.
4. Review your score and correct answers.
5. Choose whether to play again.

## Available Categories

- JavaScript Basics
- Node.js Fundamentals
- General Programming

## Scripts

- `npm start` - Run the quiz application
- `npm test` - Run tests with Node's built-in test runner

## Notes

- Questions are loaded from `data/questions.json`.
- The quiz shuffles questions for each run.
- The project uses ES modules (`type: module`).

## License

MIT