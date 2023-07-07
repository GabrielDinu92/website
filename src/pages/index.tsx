import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@/layout";
import SearchResult from "@/components/SearchResult";

import Hero from "@images/homepage-hero.gif";

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <Link href='/start-here' className="flex justify-center items-center">
          <img src={Hero.src} alt="Hero" />
        </Link>
      </section>
    </>
  );
};

const HomeHandle = () => {
  const router = useRouter();
  const { s } = router.query;

  return (
    <Layout>
      {!s && <HomePage />}
      {s && <SearchResult searchQuery={s as string} />}
    </Layout>
  );
};

export default HomeHandle;