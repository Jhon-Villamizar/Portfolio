import { createElement, useState } from 'react';
// import { CloseRounded, LinkedIn } from '@mui/icons-material';
// import { AppBar, Avatar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
// import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Layout from '../../contents/layout';
import { Avatar } from '@mui/material';
import Header from '../header';
import AboutMe from '../aboutMe';
import Skills from '../skills';
import Proyects from '../proyects';
import Companies from '../companies';
import Contact from '../../pages/contact';
import ReactHtmlParser from 'react-html-parser';

const drawerWidth = 240

enum Pages {
  Header,
  About,
  Skills,
  Proyects,
  Companies,
  Contact
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Navbar = () => {

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const children = () => {
    switch (page) {
      case Pages.Header:
        return < Header />
      case Pages.About:
        return < AboutMe />
      case Pages.Skills:
        return < Skills />
      case Pages.Proyects:
        return < Proyects />
      case Pages.Companies:
        return < Companies />
      case Pages.Contact:
        return < Contact />
      default:
        return < Header />
    }
  }


  return (
    <>
    <Box sx={{
      display: 'flex',
      flexDirection: 'row-reverse',
      width: 60
    }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{ mr: 2, ...(open && { display: 'none' }) }}
      >
        <MenuIcon />
      </IconButton>
    </Box>
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button sx={{
            flexDirection: 'column'
          }}>
            <ListItemIcon>
              <Avatar
                alt="Jhon Villamizar"
                src="img/JV.png"
                sx={{ width: 56, height: 56 }}
              />
            </ListItemIcon>
            <Typography variant="h5" component="h2">
              Jhon Villamizar
            </Typography>
            <Typography variant="body1" component="h2">
              Software Developer
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button  onClick={() => {
            setPage(0);
          }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
          <ListItem button onClick={() => {
            setPage(1);
          }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'About Me'} />
          </ListItem>
          <ListItem button onClick={() => {
            setPage(2);
          }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Skills'} />
          </ListItem>
          <ListItem button onClick={() => {
            setPage(3);
          }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Companies'} />
          </ListItem>
          <ListItem button onClick={() => {
            setPage(4);
          }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Proyects'} />
          </ListItem>
          <ListItem button onClick={() => {
            setPage(5);
          }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={'Contact'} />
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <Layout>
          {children()}
        </Layout>
      </Main>
    </Box>
    </>
)}

export default Navbar;
