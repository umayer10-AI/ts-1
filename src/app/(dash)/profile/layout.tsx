import SideBar from "@/component/SideBar";

const layout = ({children}) => {
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