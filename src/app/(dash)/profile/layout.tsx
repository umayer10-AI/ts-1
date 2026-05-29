import SideBar from "@/component/SideBar";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode
}

const layout = ({children}: LayoutProps) => {
    return (
        <div className="flex">

                <SideBar></SideBar>

            <div className='w-full'>
                {children}
            </div>
        </div>
    );
};

export default layout;