import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href={"../../fonts/fonts.css"}/>
                <link rel="preload" as={"font"} href={"../../fonts/SF-Pro.ttf"}/>
            </Head>
            <body className="antialiased">
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
