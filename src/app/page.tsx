"use client";
import Image from "next/image";
import Icon from "./logo/logo-transparent-svg.svg";
import { useRouter } from "next/navigation";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Company", href: "#" },
  { name: "FAQ", href: "#" },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-black/[0..96] h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Image src={Icon} height={200} width={200} alt="Product Logo" />
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >

        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <Spotlight  className="-top-40 left-0 md:left-60 md:-top-20" fill="#f02e65"/>
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Wish to know how to host a great event?{" "}
              <a
                href="https://newsletter.oberai.dev/p/hacking-hackathon-organizing-101"
                target="_blank"
                className="font-semibold text-[#f02e65]"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#f02e65] sm:text-6xl">
            Community to the rescue 🚀
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Events are a great way to connect with like-minded people. They
              also provide a great opportunity to learn and network with others
              in your field. Get started with Event-Ally to host or join your
              next event.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                onClick={() => {
                  if (localStorage.getItem("userInfo") != null) {
                    router.push("/landing");
                  } else {
                    router.push("/login");
                  }
                }}
              >
                Get started
              </Button>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-[#f02e65]"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#f02e65] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

