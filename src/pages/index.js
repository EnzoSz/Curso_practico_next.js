import Head from "next/head.js";
import ProductList from "../containers/ProductList.jsx";
export default function Home() {
  return (
    <>
      <Head>
        <title>Reac shop</title>
      </Head>
      <ProductList />
    </>
  );
}
