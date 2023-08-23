'use client'

import { AppBar, Container, Toolbar, Typography, Box, Button, IconButton, Avatar, Drawer, List, ListItem, ListItemText, ListItemButton, Divider, Menu, MenuItem, Tooltip } from "@mui/material"
import DehazeIcon from '@mui/icons-material/Dehaze';

import Link from "next/link";
import { useState } from "react";

import { Lobster } from "next/font/google";

import OverlayLogin from "./overlayLogin";
import { useUser } from "@/context/UserContext";
import React from "react";

const lobster = Lobster({ weight: ['400'], style: ['normal'], subsets: ['latin'] });

const Navbar = () => {

  const pagesLoggedIn = [{name: 'Meus Cursos', path: '/mycourses'}, {name: 'Todos os Cursos', path: '/courses'}];
  const pagesLoggedOff = [{name: 'Todos os Cursos', path: 'courses'}]

  const { cognitoUser, userData, setUserData, setCognitoUser, signOutUser } = useUser();

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <AppBar position="static" sx={{minHeight: '8vh'}}>
      <Container
      maxWidth="x1"
      disableGutters
      sx={{ display: 'flex', background: '#FFBA85' }}>
        <Box sx={{
          alignItems: 'center',
          display: 'flex',
          pr: 4,
          letterSpacing: '.1rem',
          background: '#E35725',
          borderRadius: '0 3rem 3rem 0',
        }}>
          <Typography
            variant="h6"
            component={ Link }
            href='/'
            noWrap
            className={lobster.className}
            sx = {{
              textDecoration: 'none',
              color: 'white',
              pl: 2,
              mr: 0,
              fontSize: '2.7rem',
            }}
          >
          GuideMe
          </Typography>
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
                    <Tooltip title="Open settings">
                      <IconButton sx={{ p: 0 }} onClick={() => setToggleDropdown(true)}>
                        <Avatar
                        alt="Foto do usuário"
                        src="/icon-placeholder.png"
                        sx ={{ width: 55, height: 55, }} />
                      </IconButton>
                    </Tooltip>
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
                      onClose={() => setToggleDropdown(false)}
                    >
                        <Link href='/profile' style={{ textDecoration: 'none', color: 'black', }}>
                          <MenuItem onClick={() => setToggleDropdown(false)}>
                            <Typography sx={{ textAlign: 'right', }}>Perfil</Typography>
                          </MenuItem>
                        </Link>
						<MenuItem onClick={() => {setToggleDropdown(false); signOutUser() }}>
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