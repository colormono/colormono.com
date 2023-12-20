import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/app-footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      <div className="flex flex-1 flex-col px-10">{children}</div>
      <AppFooter />
    </>
  );
}
