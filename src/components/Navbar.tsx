'use client'

import { AppBar, Container, Toolbar, Typography, Box, Button, IconButton, Avatar, Drawer, List, ListItem, ListItemText, ListItemButton, Divider, Menu, MenuItem, Tooltip } from "@mui/material"
import DehazeIcon from '@mui/icons-material/Dehaze';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { Lobster } from "next/font/google";

import OverlayLogin from "./overlayLogin";
import { useUser } from "@/context/UserContext";
import React from "react";
import { Aluno } from "@/API";
import BuyGP from "./BuyGPNavbar";

const lobster = Lobster({ weight: ['400'], style: ['normal'], subsets: ['latin'] });

const Navbar = () => {

  const pagesLoggedIn = [{name: 'Meus Cursos', path: '/mycourses'}, {name: 'Todos os Cursos', path: '/courses'}];
  const pagesLoggedOff = [{name: 'Todos os Cursos', path: 'courses'}]

  const { cognitoUser, userData, setUserData, setCognitoUser, signOutUser } = useUser();

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setToggleDropdown(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setToggleDropdown(false);
  };

  return (
    <AppBar position="static">
      <Container
      maxWidth="x1"
      disableGutters
      sx={{ display: 'flex', background: '#FFBA85', minHeight: '8vh' }}>
        <Box sx={{
          alignItems: 'center',
          display: 'flex',
          pr: 4,
          letterSpacing: '.1rem',
          background: '#E35725',
          borderRadius: '0 3rem 3rem 0',
        }}>
          <Link href='/'>
            <Image src="/logos/logo.png" width={500} height={50} alt="Picture of the author" style={{ marginLeft: '5%', width: 'fit-content', aspectRatio: 905/272 }} />
          </Link>
        </Box>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Box
            sx={{ flexGrow:0, display: { xs: 'none', md: 'flex' }}}>
              {
                cognitoUser?
                  pagesLoggedIn.map(({ name, path }) => {
                    return (
                        <Button
                        component={Link}
                        href={path}
                        key={name}
                        sx={{
                            my: 2,
                            color: '#BB2A00',
                            display: 'block',
                            fontSize: '1.2rem',
                            mr: 2,
                            textTransform: 'none',
                            fontWeight: 600,
                            '&:hover': {
                                backgroundColor: 'transparent',
                                textDecoration: 'underline',
                            }
                        }}>
                          {name}
                        </Button>
                    )
                  })
                :
                pagesLoggedOff.map(({ name, path }) => {
                  return (
                      <Button
                      component={Link}
                      href={path}
                      key={name}
                      sx={{
                          my: 2,
                          color: '#BB2A00',
                          display: 'block',
                          fontSize: '1.2rem',
                          mr: 2,
                          textTransform: 'none',
                          fontWeight: 600,
                          '&:hover': {
                              backgroundColor: 'transparent',
                              textDecoration: 'underline',
                          }
                      }}>
                        {name}
                      </Button>
                  )
                })
              }
            </Box>
            <Box sx={{
              flexGrow: 0,
              display: { xs: 'flex', md: 'none' },
            }}>
              <Button onClick={() => setToggleDrawer(true)} sx={{ pl: 0, width: 24 }}>
                <DehazeIcon sx={{ color: '#E35725' }} />
              </Button>
              <Drawer
                open={toggleDrawer}
                onClose={() => setToggleDrawer(false)}
                PaperProps={{ sx: {
                  backgroundColor: '#FFE199',
                } }}>
                {
                  cognitoUser?
                  pagesLoggedIn.map(({ name, path }, i) => (
                    <Box key={i} sx={{ width: 250 }}
                      role='presentation'
                      onClick={() => setToggleDrawer(false)}
                      onKeyDown={() => setToggleDrawer(false)}>
                        <List key={i}>
                          <Link key={i} href={path} style={{ textDecoration: 'none' }} >
                            <ListItem key={name} disablePadding>
                              <ListItemButton key={i}>
                                <ListItemText key={i} primary={name} primaryTypographyProps = {{ color: '#BB2A00', fontSize: '1.2rem', fontWeight: 600 }} />
                              </ListItemButton>
                            </ListItem>
                          </Link>
                        </List>
                        <Divider/>
                    </Box>
                  ))
                  :
                  pagesLoggedOff.map(({ name, path }, i) => (
                    <Box key={i} sx={{ width: 250 }}
                      role='presentation'
                      onClick={() => setToggleDrawer(false)}
                      onKeyDown={() => setToggleDrawer(false)}>
                        <List key={i}>
                          <Link key={i} href={path} style={{ textDecoration: 'none' }} >
                            <ListItem key={name} disablePadding>
                              <ListItemButton key={i}>
                                <ListItemText key={i} primary={name} primaryTypographyProps = {{ color: '#BB2A00', fontSize: '1.2rem', fontWeight: 600 }} />
                              </ListItemButton>
                            </ListItem>
                          </Link>
                        </List>
                        <Divider/>
                    </Box>
                  ))
                }
              </Drawer>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {cognitoUser ?
                (
                  <Box sx={{ flexGrow: 0 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }} >
                      {userData?.__typename == "Aluno" && 
                        <>
                          <Typography
                          sx={{
                            fontFamily: 'Roboto',
                            fontWeight: '500',
                            color: '#E35725',
                            fontSize: '1.3rem',
                            mr: 1,
                          }}>{(userData as Aluno).creditos} GP</Typography>
                          <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mr: 3,
                          }}>
                            <BuyGP />
                          </Box>
                        </>
                      }
                      <Typography
                        sx={{
                          fontFamily: 'Roboto',
                          fontWeight: '500',
                          color: '#BB2A00',
                          fontSize: '1.3rem',
                          ml: 1.8,
                        }}>{userData?.nome}</Typography>
                      <Tooltip title="Open settings">
                        <IconButton sx={{ p: 0, ml: 1.5, }} onClick={handleClick}>
                          <Avatar
                          alt="Foto do usuário"
                          src="/placeholders/icon-placeholder.png"
                          sx ={{ width: 55, height: 55, }} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Menu
                      sx={{
                        mt: '45px',
                      }}
                      id="menu-appbar"
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={toggleDropdown}
                      onClose={handleClose}
                      onClick={handleClose}
                      anchorEl={anchorEl}
                    >
                      <Link href='/profile' style={{ textDecoration: 'none', color: 'black', }}>
                        <MenuItem onClick={() => setToggleDropdown(false)} key={1}>
                          <Typography sx={{ textAlign: 'right', }}>Perfil</Typography>
                        </MenuItem>
                      </Link>
                      <MenuItem onClick={() => {setToggleDropdown(false); signOutUser() }} key={2}>
                        <Typography sx={{ textAlign: 'right', }}>Sair</Typography>
                      </MenuItem>
                    </Menu>
                  </Box>
                )
                :
                (
                  <Box sx={{ flexGrow: 0, flexDirection: 'row', alignSelf: 'flex-end'}}>
					          <OverlayLogin/>
                  </Box>
                )
              }
            </Box>
          </Toolbar>
      </Container>
    </AppBar>
    
  )
}

export default Navbar