import Sidebar from "@/components/UserDashboard/Sidebar";
import { FaBorderAll } from "react-icons/fa";
import { FaJediOrder } from "react-icons/fa";


export const metadata = {
  title: 'Dashboard',
  description: 'This is a log in page',
}

export default function DashboardLayout({ children }) {
  const sidebarlinks = [
    {
      icon: <FaBorderAll />,
      name: "orders",
      links: "/user/orders",
    },
    {
      icon: <FaJediOrder />,
      name: "custom orders",
      links: "/user/make-your-mix",
    },
  ];

  
   


  return (
    <div className="pageLayout px-0 mx-auto">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-[30%] py-8 px-4 md:sticky md:top-[120px] md:h-screen">
            <Sidebar links={sidebarlinks} />
          </div>
          <div className="bg-white py-8 px-4 col-span-2 w-full md:w-[70%]">{children}</div>
        </div>
      </div>
    </div>
  );
}