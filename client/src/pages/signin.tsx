import { Session } from 'next-auth';
import { GetServerSideProps } from 'next';
import { providers, getSession, csrfToken } from 'next-auth/client';
import styled from 'styled-components';

interface Props {
    session?: Session;
    csrfToken?: string;
}

const LoginStyles = styled.section`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

const signin = ({ csrfToken: csrf }: Props) => {
    console.log('loggy');
    return (
        <LoginStyles>
            <div>
                <form method="POST" action="/api/auth/signin/credentials">
                    <input type="hidden" name="csrfToken" defaultValue={csrf} />
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </LoginStyles>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { req, res } = context;
    const session = await getSession({ req });

    if (res && session?.accessToken) {
        res.writeHead(302, {
            Location: '/',
        }).end();
    }
    return {
        props: {
            session: null,
            providers: await providers(),
            csrfToken: await csrfToken(context),
        },
    };
};

export default signin;
