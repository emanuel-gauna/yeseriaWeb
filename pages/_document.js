// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import Document from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es-AR">
        <Head>
          {/* Preload de la imagen principal */}
          <link rel="preload" href="/logoyeso.png" as="image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
