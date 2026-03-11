import { Helmet } from "react-helmet-async";
import Index from "./pages/Index";

export default function App() {
  return (
    <>
      <Helmet>
        <title>Ana Júlia</title>
        <meta name="description" content="Descrição" />
      </Helmet>

      <Index />
    </>
  )
}
