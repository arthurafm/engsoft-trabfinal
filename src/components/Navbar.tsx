'use client'

import { AppBar, Container, Toolbar, Typography, Box, Button, IconButton, Avatar, Drawer, List, ListItem, ListItemText, ListItemButton, Divider, Menu, MenuItem, Tooltip } from "@mui/material"
import DehazeIcon from '@mui/icons-material/Dehaze';

import Link from "next/link";
import { useState } from "react";

import { Lobster } from "next/font/google";

import OverlayLogin from "./overlayLogin";
import { useUser } from "@/context/UserContext";

const lobster = Lobster({ weight: ['400'], style: ['normal'], subsets: ['latin'] });

const Navbar = () => {

  const pages = [{name: 'Mentorias', path: '/mentorships'}, {name: 'Cursos', path: 'courses'}];
  const settings = [{name: 'Perfil', path: '/profile'}, {name: 'Sair', path: ''}];

  const { cognitoUser, userData, setUserData, setCognitoUser } = useUser()

  const isUserLoggedIn = false; // MUDAR PARA STATUS DE LOGIN DE USUÁRIO

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <AppBar position="static">
      <Container
      maxWidth="x1"
      disableGutters
      sx={{ display: 'flex', background: '#FFBA85' }}>
          <Typography
            variant="h6"
			component={ Link }
			href='/'
            noWrap
            className={lobster.className}
            sx = {{
              alignItems: 'center',
              display: 'flex',
			  width: '200px',
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
              background: '#E35725',
              borderRadius: '0 3rem 3rem 0',
              pl: 2,
              mr: 0,
              fontSize: '2.7rem',
            }}
          >
          GuideMe
          </Typography>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Box
            sx={{ flexGrow:0, display: { xs: 'none', md: 'flex' }}}>
              {pages.map(({ name, path }) => {
                return (
                    <Button
					LinkComponent={Link}
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
                {pages.map(({ name, path}, i) => (
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
                ))}
              </Drawer>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {cognitoUser ? // ALTERAR FOTO PARA FOTO DO USUÁRIO
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
                      {settings.map((setting, i) => (
                        <Link
						  key={i}
                          href={setting.path}
                          style={{
                            textDecoration: 'none',
                            color: 'black',
                          }}>
                          <MenuItem key={setting.name} onClick={() => setToggleDropdown(false)}>
                            <Typography
							  key={i}
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