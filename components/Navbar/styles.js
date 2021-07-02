import css from 'styled-jsx/css'

export const jsxNavbar = css`
  header {
    display: flex;
    padding: 10px 10px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--transparent-primary-color);
  }

  .title {
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 20px;
  }

  ul {
    display: flex;
  }

  li a {
    padding: 10px;
    margin: 0 5px;
  }

  a:hover,
  h1:hover {
    color: var(--secundary-color);
  }
`
