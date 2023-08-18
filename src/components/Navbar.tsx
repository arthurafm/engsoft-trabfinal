'use client'

import { AppBar, Container, Toolbar, Typography, Box, Button, IconButton, Avatar, Drawer, List, ListItem, ListItemText, ListItemButton, Divider, Menu, MenuItem, Tooltip } from "@mui/material"
import DehazeIcon from '@mui/icons-material/Dehaze';

import Link from "next/link";
import { useState } from "react";

import { Lobster } from "next/font/google";

const lobster = Lobster({ weight: ['400'], style: ['normal'], subsets: ['latin'] });

const Navbar = () => {

  const pages = [{name: 'Mentorias', path: '/mentorships'}, {name: 'Cursos', path: 'courses'}];
  const settings = [{name: 'Perfil', path: '/profile'}, {name: 'Sair', path: ''}];

  const isUserLoggedIn = true; // MUDAR PARA STATUS DE LOGIN DE USUÁRIO

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <AppBar position="static">
      <Container
      maxWidth="x1"
      disableGutters
      sx={{ display: 'flex', background: '#FFBA85' }}>
        <Link href='/'
              style={{
                alignItems: 'center',
                display: 'flex',
                letterSpacing: '.1rem',
                color: 'white',
                textDecoration: 'none',
                background: '#E35725',
                borderRadius: '0 3rem 3rem 0',
        }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            className={lobster.className}
            sx = {{
              pl: 2,
              mr: 4,
              fontSize: '2.7rem',
            }}
          >
          GuideMe
          </Typography>
        </Link>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Box
            sx={{ flexGrow:0, display: { xs: 'none', md: 'flex' }}}>
              {pages.map(({ name, path }) => {
                return (
                  <Link href={path} style={{ textDecoration: 'none' }}>
                    <Button
                    key={name}
                    sx={{ my: 2, color: '#BB2A00', display: 'block', fontSize: '1.2rem', mr: 2, textTransform: 'none', fontWeight: 600,
                          '&:hover': {
                            backgroundColor: 'transparent',
                            textDecoration: 'underline',
                          }}}>
                      {name}
                    </Button>
                  </Link>
                )
              })}
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
                {pages.map(({ name, path}) => (
                  <Box
                    sx={{
                      width: 250,
                    }}
                    role='presentation'
                    onClick={() => setToggleDrawer(false)}
                    onKeyDown={() => setToggleDrawer(false)}>
                      <List>
                        <Link href={path} style={{ textDecoration: 'none' }} >
                          <ListItem key={name} disablePadding>
                            <ListItemButton>
                              <ListItemText primary={name} primaryTypographyProps = {{ color: '#BB2A00', fontSize: '1.2rem', fontWeight: 600 }} />
                            </ListItemButton>
                          </ListItem>
                        </Link>
                      </List>
                      <Divider sx = {{  }} />
                  </Box>
                ))}
              </Drawer>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {
                isUserLoggedIn ? // ALTERAR FOTO PARA FOTO DO USUÁRIO
                (
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton sx={{ p: 0 }} onClick={() => setToggleDropdown(true)}>
                        <Avatar
                        alt="Foto do usuário"
                        src="https://dugout.com/images/publishers/logos/gremio.png"
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
                      {settings.map((setting) => (
                        <Link
                          href={setting.path}
                          style={{
                            textDecoration: 'none',
                            color: 'black',
                          }}>
                          <MenuItem key={setting.name} onClick={() => setToggleDropdown(false)}>
                            <Typography
                              sx={{
                                textAlign: 'right',
                              }}>{setting.name}</Typography>
                          </MenuItem>
                        </Link>
                      ))}
                    </Menu>
                  </Box>
                )
                :
                (
                  <Box sx={{ flexGrow: 0, flexDirection: 'row', alignSelf: 'flex-end'}}>
                    <Link href='\signup'>
                      <Button
                      key="signup"
                      sx={{ my: 2, color: '#BB2A00', fontSize: '1.2rem', background: 'transparent', textTransform: 'none', border: 1, borderColor: 'transparent', fontWeight: 600, 
                            '&:hover': {
                              backgroundColor: 'transparent',
                              textDecoration: 'underline',
                            }}}>
                        Registre-se
                      </Button>
                    </Link>
                    <Button
                    key="login"
                    sx={{ ml: 3, my: 2, color: 'white', fontSize: '1.2rem', background: '#E35725', borderRadius: '1rem', textTransform: 'none', border: 1, borderColor: 'transparent', fontWeight: 600,
                          '&:hover': {
                            backgroundColor: 'white',
                            color: '#E35725',
                            borderColor: '#FF7222',
                          },}}>
                      Entrar
                    </Button>
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