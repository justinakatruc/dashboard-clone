import SideBar from "@/app/ui/dashboard/sidebar/SideBar";
import NavBar from "@/app/ui/dashboard/navbar/NavBar";
import Footer from "@/app/ui/dashboard/footer/Footer";

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex min-h-svh">
      <div className="flex-2">
        <SideBar />
      </div>
      <div className="flex-7 p-4 gap-4 flex flex-col">
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;