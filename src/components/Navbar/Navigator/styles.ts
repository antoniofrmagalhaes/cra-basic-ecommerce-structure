import styled from 'styled-components';

export const Container = styled.div`
  order: 1;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > ul {
    display: flex;
    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      > button {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        border: 0;
        background: 0;
        > p {
          display: none;
          text-align: left;
          margin-left: 5px;
          @media (min-width: 769px) {
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
            top: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 4px 3px 3px;
            color: white;
            border-radius: 50%;
            background: red;
            @supports (-moz-appearance: none) {
              right: 12px;
              padding: 3px 3px 3px;
            }
          }
        }
      }
      & + li {
        margin-left: 16px;
      }
      @media (min-width: 769px) {
        &:first-child {
          display: none;
        }
      }
    }
  }
  @media (min-width: 769px) {
    order: 2;
    width: initial;
  }
`;
