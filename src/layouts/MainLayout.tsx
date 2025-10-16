import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
