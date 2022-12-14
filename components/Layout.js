import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title ? title + "- Amazona" : "title"}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='flex min-h-screen flex-col justify-between'>
                <header>
                    <nav className='flex justify-between items-center px-4 shadow-md h-12'>
                        <Link href='/home'><a className='text-lg font-bold'>Amazona</a></Link>
                        <div className='space-x-4'>
                            <Link href="/cart"><a >Cart</a></Link>
                            <Link href="/cart"><a >Login</a></Link>
                        </div>
                    </nav>
                </header>
                <main className='container m-auto mt-4 px-4'>
                    {children}
                </main>
                <footer className='flex h-10 justify-center items-center shadow-inner'>
                    <p className='font-semibold text-gray-600'>Coppyright 2@22 Amazona</p>
                </footer>
            </div>
        </>
    );
};

export default Layout;