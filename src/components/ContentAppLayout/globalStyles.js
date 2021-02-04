import css from "styled-jsx/css"

export const globalStyles = css.global`
  /* global - styles */
  body {
    margin: 0;
    padding: 0;
  }

  :root {
    --primary-color: #fff;
    --secundary-color: #ccc;
    --text-color: #000;

    --transparent-primary-color: rgba(204, 204, 204, 0.9);
    --special-text-color: #09f;
    --color-button: #fff;
    --text-color-button: #000;
    --bg-color-hover-button: #fff;
  }

  [data-theme="dark"] {
    --primary-color: #04090f;
    --secundary-color: #3774c2;
    --text-color: #fff;

    --transparent-primary-color: rgba(21, 25, 31, 0.9);
    --special-text-color: #09f;
    --color-button: #0012;
    --text-color-button: #000;
    --bg-color-hover-button: #000;
  }

  ::selection {
    background: var(--transparent-primary-color);
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .page {
    color: var(--text-color);
    background: var(--primary-color);
  }

  h1,
  h2,
  h3,
  h4,
  button,
  a {
    font-family: "Montserrat", sans-serif;
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
    font-family: "Open Sans", sans-serif;
    color: var(--text-color);
  }

  button {
    padding: 10px;
    border: 1px solid var(--secundary-color);
    background-color: var(---color-button);
    color: var(--text-color);
    cursor: pointer;
    border-radius: 5px;
  }
  button:hover {
    background-color: var(----bg-color-hover-button);
    color: var(--secundary-color);
  }

  button:focus {
    outline: none;
  }
`
