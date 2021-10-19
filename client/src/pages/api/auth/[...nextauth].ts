import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                console.log('credentials: ', credentials);
                if (
                    credentials.username === process.env.NEXT_AUTH_USERNAME &&
                    credentials.password === process.env.NEXT_AUTH_PASSWORD
                ) {
                    console.log('username, password: ', credentials.username, credentials.password);
                    return {
                        accepted: true,
                        name: 'BobHarris',
                    };
                }
                return null;
            },
        }),
    ],
    debug: true,
});
