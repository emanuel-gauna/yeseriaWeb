import Head from 'next/head';
import NotFoundComponent from '../src/pages/NotFound'; // Asegúrate de que esta sea la ruta correcta

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Página no encontrada</title>
      </Head>
      <NotFoundComponent />
    </>
  );
}
