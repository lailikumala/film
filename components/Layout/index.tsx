import Head from 'next/head'
import { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
interface LayoutProps {
  children: ReactNode,
  pageTitle: String
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>
          Movie | {' '} {pageTitle}
        </title>
        <meta name="description" content="Website Movie" />
      </Head>
      <div className="flex flex-col min-h-screen bg-dark">
        <Header/>
        <div className="flex-1">{children}</div>
        <Footer/>
      </div>
    </>
  )
}
