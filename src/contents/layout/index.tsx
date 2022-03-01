import { Button, Drawer } from '@mui/material';
import { ReactNode } from 'react';
import Navbar from '../../components/navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({children}: LayoutProps) => (
  <>
    <div>
      {children}
    </div>
  </>
);

export default Layout;
