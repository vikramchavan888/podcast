//import LeftSidebar from "@/components/LeftSidebar";
//import MobileNav from "@/components/MobileNav";
//import RightSidebar from "@/components/RightSidebar";
//import Image from "next/image";
//import { Toaster } from "@/components/ui/toaster"
//import PodcastPlayer from "@/components/PodcastPlayer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
       <p>LEFT</p>
        
        <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
          <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden">
              <p>movb</p>
            </div>
            <div className="flex flex-col md:pb-14">
            <p>toster</p>

              {children}
            </div>
          </div>
        </section>

        <p>right</p>
      </main>

      <p>LEFT</p>
    </div>
  );
}
