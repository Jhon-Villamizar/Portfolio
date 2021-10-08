import { ReactNode } from 'react';
import Navbar from '../../components/navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({children}: LayoutProps) => (
  <>
    <Navbar />
    <div>
      {children}
    </div>
  </>
);

export default Layout;
