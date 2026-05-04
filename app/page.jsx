"use client";
import { useSpring, animated } from "@react-spring/web";
import { useRouter } from "next/navigation";
import CatalogPage from "./components/CatalogPage";
import Footer from "./components/Footer";
import Header from './components/header'
import { useSession } from './utils/auth-client'
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter()
  console.log('userSession', session);
  const titleAnim = useSpring({
    from: { y: 60, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 500,
  });

  const imageAnim = useSpring({
    from: { scale: 1.08, opacity: 0 },
    to: { scale: 1, opacity: 1 },
    delay: 800,
  });

  return (
    <>

      <main className="min-h-screen bg-[#FFFAF6] text-[#131313]">
        <Header />

        <section className="grid   items-center gap-12 px-6 py-12 md:grid-cols-2 md:px-12 md:py-20">
          <animated.div style={titleAnim}>
            

            <h1 className="max-w-3xl text-[56px] font-semibold leading-[0.9] tracking-[-3px] md:text-[96px] lg:text-[120px]">
              Your home, your reflection.
            </h1>

            <p className="mt-7 max-w-md text-lg leading-relaxed">
              Premium tiles for modern homes. Durable, beautiful, and perfect for
              walls and floors.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                onClick={() => router.push('/demowork')}
                className="rounded-full cursor-pointer bg-[#131313] px-8 py-3 text-sm tracking-wide text-[#FFFAF6] transition duration-300 hover:bg-[#333]"
              >
                Explore Our Project
              </a>

              <a
                href="#catalog"
                className="text-sm font-medium text-[#131313]/60 transition duration-300 hover:text-[#131313]"
              >
                View Catalog
              </a>
            </div>
          </animated.div>

          <animated.div
            style={imageAnim}
            className="relative h-[420px] overflow-hidden rounded-[28px] md:h-[620px]"
          >
            <Image
              width={500}
              height={500}
              src="/img1.png"
              alt="Luminous Vista tile product"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 rounded-2xl bg-[#FFFAF6]/85 px-6 py-5 backdrop-blur-md">

              <h3 className="mt-1 text-2xl font-semibold">Premium Vibe</h3>
            </div>
          </animated.div>
        </section>


      </main>
      <CatalogPage />
      <Footer />
    </>
  );
}