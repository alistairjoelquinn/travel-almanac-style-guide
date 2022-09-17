import { GetServerSideProps } from 'next';
import { Session } from 'next-auth';
import { csrfToken, getSession, providers } from 'next-auth/client';
import styled from 'styled-components';

interface Props {
  session?: Session;
  csrfToken?: string;
}

export default function Signin({ csrfToken: csrf }: Props) {
  return (
    <LoginStyles>
      <div>
        <form method="POST" action="/api/auth/callback/credentials">
          <input type="hidden" name="csrfToken" defaultValue={csrf} />
          <InputField type="text" name="username" placeholder="Username" />
          <InputField type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </LoginStyles>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (res && session?.accessToken) {
    res
      .writeHead(302, {
        Location: '/',
      })
      .end();
  }

  return {
    props: {
      session: null,
      providers: await providers(),
      csrfToken: await csrfToken(context),
    },
  };
};

const LoginStyles = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    button {
      background-color: #fff;
      border-radius: 1rem;
      border: 1px solid black;
      height: 3rem;
      width: 6rem;
      &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

const InputField = styled.input`
  width: 25vw;
  padding: 1rem;
  height: 4rem;
  line-height: 2rem;
  font-size: 2rem;
  vertical-align: middle;
  border-radius: 1rem;
  border: 1px solid black;
  &:-webkit-input-placeholder,
  &:-ms-input-placeholder {
    line-height: 2rem;
    font-size: 2rem;
    vertical-align: middle;
  }
  @media (max-width: 1000px) {
    width: 40vw;
  }
  @media (max-width: 600px) {
    width: 60vw;
  }
`;
