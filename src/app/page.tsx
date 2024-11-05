import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#121212]">
      <div className="absolute inset-0">
        <Image
          src="/background.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background"
          className="opacity-5"
        />
      </div>
      <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
        <main className="row-start-2 flex flex-col items-center gap-16 sm:items-start">
          <section className="z-10 max-w-5xl space-y-4 text-center">
            <div>
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
                We Are
              </h1>
              <h1 className="bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl xl:text-8xl">
                Muhammadiyah
              </h1>
              <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-7xl">
                Edutech Agency
              </h1>
            </div>
            <p className="text-sm font-normal text-white text-opacity-60 md:text-base">
              Kader Muda Muhammadiyah mengawal transformasi digital untuk
              Muhammadiyah.
            </p>
          </section>
          <section className="mx-auto">
            <a
              className="flex animate-bounce items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-yellow-200 p-0.5 text-lg text-white"
              href="mailto:admin@kmm.or.id"
              rel="noopener noreferrer"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#121212] px-8 py-2">
                <p className="text-lg font-bold text-white">Hubungi Kami</p>
              </div>
            </a>
          </section>
        </main>
        <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
          <a
            className="z-10 flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
            href="https://ppdb.kmm.or.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            ppdb
          </a>
          <a
            className="z-10 flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
            href="https://ai.kmm.or.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            ai
          </a>
        </footer>
      </div>
    </div>
  );
}
