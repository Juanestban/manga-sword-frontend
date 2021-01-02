import css from "styled-jsx/css"

export const globalStyles = css.global`
  /* global - styles */
  * {
    margin: 0;
    padding: 0;
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

  button:focus {
    outline: none;
  }
`
