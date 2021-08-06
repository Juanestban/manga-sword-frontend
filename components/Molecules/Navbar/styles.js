import css from 'styled-jsx/css'

export const jsxNavbar = css`
  header {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    background-color: var(--primary-color);
    border-bottom: 1px solid var(--transparent-primary-color);
  }

  .title {
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 20px;
    font-weight: normal;
  }

  ul {
    display: flex;
  }

  li a {
    display: block;
    padding: 0.5rem 0.9rem;
    margin: 0 5px;
  }

  a:hover,
  h1:hover {
    color: var(--secundary-color);
  }
`
