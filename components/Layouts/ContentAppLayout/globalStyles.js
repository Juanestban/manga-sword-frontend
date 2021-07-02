import css from 'styled-jsx/css'

export const globalStyles = css.global`
  /* global - styles */
  :root {
    --primary-color: #fff;
    --secundary-color: #ccc;
    --text-color: #000;

    --scroll-color: #eee;
    --scroll-rectangle: #888;
    --scroll-hover: #555;

    --transparent-primary-color: rgba(204, 204, 204, 0.9);
    --special-text-color: #09f;
    --color-button: #fff;
    --text-color-button: #000;
    --bg-color-hover-button: #fff;
  }

  [data-theme='dark'] {
    --primary-color: #04090f;
    --secundary-color: #3774c2;
    --text-color: #fff;

    --scroll-color: #000102;

    --border-color: #000102;

    --transparent-primary-color: rgba(21, 25, 31, 0.9);
    --special-text-color: #09f;
    --color-button: #0012;
    --text-color-button: #000;
    --bg-color-hover-button: #000;
  }

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  body {
    margin: 0;
    font-size: 1rem;
  }

  main {
    display: block;
  }

  ::selection {
    background: var(--transparent-primary-color);
  }

  /* width */
  ::-webkit-scrollbar {
    width: 0.7rem;
    background-color: var(--scroll-color);
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--scroll-color);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 20px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  h1,
  h2,
  h3,
  h4,
  button,
  a {
    font-family: 'Montserrat', sans-serif;
    color: var(--text-color);
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  p,
  label {
    font-family: 'Open Sans', sans-serif;
    color: var(--text-color);
  }

  button {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 0.9rem;
    font-family: 'Montserrat', sans-serif;
    border: 0;
    border-radius: 0.5rem;
    background-color: transparent;
    color: var(--text-color);
    cursor: pointer;
    transition-property: background, box-shadow;
    transition-duration: 0ms.35s;
  }
  button:hover {
    background-color: var(----bg-color-hover-button);
    color: var(--secundary-color);
  }

  button:focus {
    box-shadow: 0 0 0 2px var(--border-color);
  }

  button:disabled {
    color: #555455;
    background-color: #302e30;
    cursor: not-allowed;
  }

  figure {
    margin: 0;
  }
`

export const stylesPrincipalLayout = css`
  .page {
    color: var(--text-color);
    background: var(--primary-color);
  }
`
