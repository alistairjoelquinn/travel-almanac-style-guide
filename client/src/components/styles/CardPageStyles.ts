import styled from 'styled-components';

export const PageStyles = styled.div`
  padding: 0 2rem;
  animation: fade 1.5s ease-in-out;
`;

interface GridProps {
  page: string;
}

export const GridStyles = styled.div<GridProps>`
  display: grid;
  align-items: start;
  grid-template-columns: ${(p) =>
    p.page === 'best-practice'
      ? '1fr'
      : p.page === 'common-words'
      ? 'repeat(auto-fill, minmax(300px, 1fr))'
      : 'repeat(auto-fill, minmax(400px, 1fr))'};
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const GridItemStyles = styled.dl`
  border: 1px solid black;
  border-radius: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin: 2rem 4rem;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  dt {
    align-self: flex-start;
    font-weight: bold;
  }
  div {
    max-width: 80%;
    align-self: flex-end;
  }
  dd {
    align-self: flex-end;
    margin-top: 1rem;
    text-align: left;
    &.paragraphs {
      margin-bottom: 0.5rem;
    }
  }
`;
