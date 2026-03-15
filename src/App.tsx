import { Helmet } from "react-helmet-async";
import Index from "./pages/Index";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Ana Júlia | Advogada em Vale do Paraíba</title>
        <meta
          name="description"
          content="Advogada em Taubaté, Pindamonhangaba, São José dos Campos e região do Vale do Paraíba. Entre em contato para uma consulta."
        />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/* Local SEO */}
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="Vale do Paraíba, São Paulo" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Ana Júlia | Advogada em Vale do Paraíba"
        />
        <meta
          property="og:description"
          content="Advogada em Taubaté, Pindamonhangaba, São José dos Campos e região do Vale do Paraíba."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://anajuliavilelaadvogada.com/" />
      </Helmet>

      <Index />
    </>
  );
}
