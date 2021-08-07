import css from 'styled-jsx/css'

export const jsxNavbar = css`
  header {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    position: relative;
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

  ul li {
    display: flex;
    align-items: center;
  }

  li a {
    display: block;
    padding: 0.5rem 0.9rem;
    margin: 0 5px;
    font-size: var(--font-size-normal);
  }

  a:hover,
  h1:hover {
    color: var(--secundary-color);
  }

  .content-logo {
  }

  .search-container {
    display: flex;
    min-width: 20rem;
    flex: 0 1 728px;
  }
`
