import css from 'styled-jsx/css'

export const globalStyles = css.global`
  /* global - styles */
  :root {
    /* principal colors */
    --primary-color: #fff;
    --secundary-color: #09f;
    --text-color: #000;

    /* another */
    --scroll-color: #eee;
    --scroll-rectangle: #888;
    --scroll-hover: #555;

    --transparent-primary-color: #ddd;
    --special-text-color: #09f;
    --color-button: #fff;
    --text-color-button: #000;
    --bg-color-hover-button: #fff;

    --border-color-input: #ddd;

    /* colors button Profile */
    --color-border-buttton-profile: rgba(232, 234, 237, 0.08);
  }

  [data-theme='dark'] {
    /* principal colors */
    --primary-color: #04090f;
    --secundary-color: #3774c2;
    --text-color: hsla(0, 100%, 100%, 0.88);

    --scroll-color: #000102;

    /* another */
    --bg-color: #04090f;

    --border-color: #000102;
    --border-color-input: #3c4147;

    --transparent-primary-color: #3c4147;
    --special-text-color: #09f;
    --color-button: #0012;
    --text-color-button: #000;
    --bg-color-hover-button: #000;

    /* colors button Profile */
    --color-border-buttton-profile: rgba(232, 234, 237, 0.08);

    /* font-size */
    --font-size-normal: 0.99rem;
  }

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  body {
    margin: 0;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
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
    font-size: var(--font-size-normal);
    color: var(--text-color);
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
