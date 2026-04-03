// ===============================
// 🟦 Project File & Folder Definitions
// ===============================

// package.json
//   - Lists project dependencies, scripts, and metadata.
//   - Controls how the project is run, built, and what packages are installed.

// package-lock.json (or yarn.lock, pnpm-lock.yaml)
//   - Records the exact versions of every installed package.
//   - Ensures consistent installs across all environments.

// vite.config.js (or vite.config.mjs)
//   - Configuration file for Vite (the build tool).
//   - Controls dev server, plugins, build options, etc.

// assets/
//   - Stores static files like images, SVGs, and other resources used in the app.
//   - Usually found inside src/assets or public/assets.

// README.md
//   - Documentation file for your project.
//   - Explains what the project does, how to install, run, and contribute.

// src/
//   - Source code folder. All React components, styles, and logic live here.

// public/
//   - Static files served directly (like index.html, favicon, etc.).
//   - Files here are not processed by Vite/React, but are available at the root URL.

// node_modules/
//   - Contains all installed npm packages and their dependencies.
//   - Managed automatically; you never edit files here directly.

// ===============================
// 🟦 Slide 8: Project Structure
// ===============================

// Outline:
// 1. src/ → main code folder
// 2. main.jsx → entry point for React
// 3. App.jsx → main component
// 4. index.html → root HTML file

// --- 1. src/ folder ---
// This is where all your React code lives.
// All components, styles, and logic are inside src/

// --- 2. main.jsx ---
// This is the entry point of your React app.
// React starts here and renders the App component.

// --- 3. App.jsx ---
// This is your main component. All other components are loaded here.

// --- 4. index.html ---
// This is the root HTML file. It has a <div id="root"></div> where React renders your app.
// You can find this in public/index.html

/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- React will inject your app here -->
  </body>
</html>
*/

// --- Class Explanation ---
// React starts from main.jsx → loads App.jsx → displays UI in index.html

// ===============================
// 🟩 SECTION 3: JSX
// ===============================

// 🟦 Slide 9: What is JSX?

// JSX = JavaScript + HTML
// It lets you write HTML-like code inside JavaScript files.
// Used to build UI in React.

// --- Class Explanation ---
// JSX looks like HTML, but it's actually JavaScript behind the scenes.

// 🟦 Slide 10: JSX Example

// Example:
const name = "Gideon";

// Curly braces {} let you use JavaScript inside HTML

// --- Class Explanation ---
// The {name} inside <h1> is JavaScript. It will show "Hello Gideon".

// 🟦 Slide 11: JSX Rules

// 1. One parent element
//    - Your JSX must return a single parent element.
//    - Example: Wrap everything in a <div> or <></>

// 2. Use className, not class
//    - In JSX, use className for CSS classes (not class).
//    - Example: <div className="container"></div>

// 3. Always close tags
//    - All tags must be closed, even self-closing ones.
//    - Example: <img src="logo.png" /> (not <img src="logo.png">)

// --- Class Explanation ---
// JSX is strict — small mistakes (like missing a closing tag or using class instead of className) can break your app.
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
