import { getServerSideProps } from '@/lib/getSignInProps';
import { Session } from 'next-auth';
import { ClientSafeProvider } from 'next-auth/client';
import styled from 'styled-components';

interface Props {
    session?: Session;
    providers?: Record<string, ClientSafeProvider>;
    csrfToken?: string;
}

const LoginStyles = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const signin = ({ session, providers: signInProviders, csrfToken }: Props) => {
    console.log('loggy');
    return (
        <LoginStyles>
            <div>
                <form method="POST" action="/api/auth/signin/credentials">
                    <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
                    <input type="text" name="username" />
                    <input type="password" name="password" />
                </form>
            </div>
        </LoginStyles>
    );
};

signin.getServerSideProps = getServerSideProps;

export default signin;
