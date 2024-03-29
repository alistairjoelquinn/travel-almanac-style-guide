import { userSearchEnd } from 'components/context/actions';
import { Dispatch, State } from 'components/context/context';
import paths from 'lib/paths';
import { useSession } from 'next-auth/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dispatch as ReactDispatch, SetStateAction } from 'react';
import styled from 'styled-components';

export default function Header({
  setUserInput,
}: {
  setUserInput: ReactDispatch<SetStateAction<string>>;
}) {
  const [session] = useSession();
  const router = useRouter();
  const { searching } = State();
  const dispatch = Dispatch();

  return (
    <>
      <HeaderStyles>
        <h5>THE TRAVEL ALMANAC</h5>
        <p>STYLE GUIDE</p>
      </HeaderStyles>
      {session && (
        <NavStyles className="page-nav" searching={searching}>
          {paths.map((path) => (
            <div
              key={path.name}
              onClick={() => {
                userSearchEnd(dispatch);
                setUserInput('');
              }}
            >
              <Link href={path.path} passHref>
                <button
                  type="button"
                  className={router.pathname === path.path ? 'underline' : ''}
                >
                  {path.name}
                </button>
              </Link>
            </div>
          ))}
        </NavStyles>
      )}
    </>
  );
}

const HeaderStyles = styled.nav`
  height: 22vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f0f0f0;
  position: relative;
  h5 {
    font-family: MinionBold;
    color: black;
    height: 5.3rem;
    font-size: 5rem;
    padding-top: 3px;
    border-top: 1.5px solid black;
    border-bottom: 1.5px solid black;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 2rem;
    font-weight: bold;
  }
  @media (max-width: 600px) {
    h5 {
      height: 3.3rem;
      font-size: 3rem;
    }
  }
  @media (max-width: 1400px) and (max-height: 500px) and (orientation: landscape) {
    height: 40vh;
  }
`;

interface NavProps {
  searching: boolean;
}

const NavStyles = styled.nav<NavProps>`
  width: 95%;
  margin-left: 2.5%;
  display: flex;
  justify-content: space-around;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  div {
    height: 2.5rem;
    margin-top: 0.3rem;
    font-family: MinionBold;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      outline: none;
      border: none;
      color: black;
      cursor: pointer;
      height: 1.6rem;
      padding: 0;
      background: linear-gradient(currentColor 0 0) bottom / var(--d, 0) 2px
        no-repeat;
      transition: 0.5s;
      &.underline {
        --d: ${(p) => (p.searching ? '0' : '100%')};
      }
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
