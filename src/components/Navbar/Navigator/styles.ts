import styled from 'styled-components';

export const Container = styled.div`
  order: 1;
  display: flex;
  > ul {
    display: flex;
    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      > button {
        height: 100%;
        display: flex;
        align-items: center;
        border: 0;
        background: 0;
        > p {
          display: none;
          text-align: left;
          margin-left: 5px;
          @media (min-width: 1024px) {
            display: block;
          }
        }
        > svg {
          display: block;
        }
        > div {
          position: relative;
          > span {
            position: absolute;
            width: 14px;
            height: 14px;
            top: -3px;
            right: 1px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 4px 3px 3px;
            color: white;
            border-radius: 50%;
            background: red;
            @supports (-moz-appearance: none) {
              right: 2px;
              padding: 3px 3px 3px;
            }
          }
        }
        @media (min-width: 1024px) {
          width: 60px;
        }
      }
      & + li {
        margin-left: 16px;
      }
      @media (min-width: 1024px) {
        &:first-child {
          display: none;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    order: 2;
    width: initial;
  }
`;
