import Navbar from '@/component/Navbar';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode
}

const layout = ({children}: LayoutProps) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default layout;