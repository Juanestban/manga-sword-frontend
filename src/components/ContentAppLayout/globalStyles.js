import css from "styled-jsx/css"

const Colors = {
  dark: "#222831",
  lightDark: "#323F4B",
}

export const globalStyles = css.global`
  /* global - styles */
  * {
    margin: 0;
    padding: 0;
    color: #fff;
  }

  body {
    background-color: ${Colors.dark};
  }

  header {
    box-shadow: 5px 0.5px 5px rgba(21, 25, 31, 0.9);
  }

  h1,
  h2,
  h3,
  h4,
  button,
  a {
    font-family: "Montserrat", sans-serif;
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
  }
`
