"use client";
import Image from "next/image";

const images = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  src: `/tile${index + 1}.png`,
  title: `Tiles CODE ${index + 1}`,
}));
 

export default function Tiles() {
  return (
    <main className="min-h-screen bg-[#FFFAF6] px-4 py-10 text-[#131313] md:px-10">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 border-b border-black/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-black/40">
              Tiles Preview
            </p>

            <h1 className="max-w-3xl text-[44px] font-semibold leading-[0.95] tracking-[-2px] md:text-[72px]">
              Product gallery
            </h1>
          </div>

          <p className="max-w-md text-sm leading-7 text-black/55">
            A clean preview gallery for showing tile design, interior views, and
            final product visuals to your client.
          </p>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <section
              key={image.id}
              onClick={() => imageShow(image)}
              className={`group relative overflow-hidden rounded-[28px] bg-black ${
                index === 0 || index === 7 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <Image
                width={300}
                height={400}
                src={image.src}
                alt={image.title}
                className="h-full cursor-pointer w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition group-hover:opacity-90" />

              <div className="absolute left-5 top-5 rounded-full bg-[#FFFAF6]/90 px-4 py-2 text-xs font-medium text-[#131313] backdrop-blur">
                0{image.id}
              </div>

              <div className="absolute bottom-5 left-5 right-5 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-[#FFFAF6]">
                  {image.title}
                </h3>

                <p className="mt-2 text-sm text-white/65">
                  Premium tile For Your Home
                </p>
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
