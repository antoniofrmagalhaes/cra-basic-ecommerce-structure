import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  > strong {
    text-align: center;
  }
  > ul {
    margin-top: 8px;
    > li {
      text-align: center;
      display: inline-block;
      margin-right: 8px;
      > a {
        > svg {
          color: ${({ theme }) => theme.colors.socialMediaIconsColor};
          font-size: 22px;
        }
      }
      &:nth-child(1) {
        &:hover {
          > a {
            > svg {
              color: ${({ theme }) => theme.colors.facebookColor};
              font-size: 22px;
            }
          }
        }
      }
      &:nth-child(2) {
        &:hover {
          > a {
            > svg {
              color: ${({ theme }) => theme.colors.instagramColor};
              font-size: 22px;
            }
          }
        }
      }
      &:nth-child(3) {
        &:hover {
          > a {
            > svg {
              color: ${({ theme }) => theme.colors.twitterColor};
              font-size: 22px;
            }
          }
        }
      }
      &:nth-child(4) {
        margin-right: 0;
        &:hover {
          > a {
            > svg {
              color: ${({ theme }) => theme.colors.youtubeColor};
              font-size: 22px;
            }
          }
        }
      }
    }
  }
  @media (min-width: 420px) {
    margin-top: 0;
  }
`;
