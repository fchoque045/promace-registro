import { FC } from "react";
import Head from "next/head"
import { Navbar } from '../ui/';
import { height } from "@mui/system";
import { Typography } from '@mui/material';

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children?: React.ReactNode;
}

export const PromaceLayout:FC<Props> = ({children, title, pageDescription, imageFullUrl}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription}/>
                <meta name="og:title" content={title}/>
                <meta name="og:description" content={pageDescription}/>
                {
                    imageFullUrl && (
                        <meta name="og:image" content={imageFullUrl}/>
                    )
                }
            </Head>
            <nav>
                <Navbar />
            </nav>

            {/* TODO: Sidebar */}

            <main style={{
                margin: '100px auto',
                maxWidth: '1440px',
                padding: '0px 30px',
                height: '100vh',
            }}>
                {children}
            </main>

            <footer>
                {/* TOOD: custom footer */}
            </footer>
        </>
    )
}
