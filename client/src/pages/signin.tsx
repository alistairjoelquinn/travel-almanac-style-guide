import { getServerSideProps } from '@/lib/getSignInProps';
import { Session } from 'next-auth';
import { ClientSafeProvider } from 'next-auth/client';
import styled from 'styled-components';

interface Props {
    session?: Session | null;
    providers?: Record<string, ClientSafeProvider> | null;
}

const LoginStyles = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const signin = ({ session, providers: signInProviders }: Props) => {
    console.log('loggy');
    return (
        <LoginStyles>
            <div>
                <input type="text" name="username" />
                <input type="password" name="password" />
            </div>
        </LoginStyles>
    );
};

signin.getServerSideProps = getServerSideProps;

export default signin;
