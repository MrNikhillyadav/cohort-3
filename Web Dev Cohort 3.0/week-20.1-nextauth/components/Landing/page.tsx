
export  default function LandingPage() {
 return (
        <div className="flex min-h-screen flex-col">
          <div className="flex h-full flex-col items-center justify-center gap-4">
              <h1 className="max-w-2xl py-2 pt-36 text-center text-5xl font-extrabold tracking-tighter md:text-6xl xl:text-7xl">
                <span className="w-fit bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text pr-1.5 text-center text-transparent md:mb-4">
                  100xDevs,
                </span>
                <span className="bg-gradient-to-b from-gray-800 to-gray-500 bg-clip-text py-1 text-transparent">
                  because 10x ain&apos;t enough!
                </span>
              </h1>

              <p className="mx-auto text-center text-lg font-medium tracking-tight text-primary/80 md:text-xl">
                A beginner-friendly platform for mastering programming skills.
              </p>
          </div>
        </div>
)}