import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) {
    redirect("/sign-in");
  }

  return (
    <main className={"flex font-inter w-full h-screen"}>
      <Sidebar user={loggedIn} />
      <div className={"flex flex-col size-full"}>
        <div className={"root-layout"}>
          <Image src={"/icons/logo.svg"} width={30} height={30} alt={"logo"} />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}