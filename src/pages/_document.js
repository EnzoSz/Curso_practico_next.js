import Document, {Htm, Head,Main, NextScript, Html} from "next/document";

class MyDocument extends Document {
    render(){
        return (
            <Html lang="en">
                <Head>
                    <title>React Shop</title>
                </Head>
                <body>
                    <main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}