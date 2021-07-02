import css from 'styled-jsx/css'

export const jsxThumbnail = css`
  a {
    overflow: hidden;
    position: relative;
    border: 1px solid cyan;
  }
  .image-content {
    width: 100%;
    height: 240px;
    /* background-image: url(); */
    background-size: contain;
    background-repeat: no-repeat;
  }
  .text {
    display: inline-block;
    width: calc(100% - 10px);
    top: 0;
    text-align: center;
    padding: 5px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
