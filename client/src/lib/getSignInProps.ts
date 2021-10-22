import { GetServerSideProps } from 'next';
import { providers, getSession } from 'next-auth/client';

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
        },
    };
};
