import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Navbar } from "./_components/navbar";

const SettingLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-radial-[ellipse_at_top] from-sky-400 to-blue-800">
      <SessionProvider session={session}>
        <Navbar />
        {children}
      </SessionProvider>
    </div>
  );
};

export default SettingLayout;
