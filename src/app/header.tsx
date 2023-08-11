import { AppBar, Container, Toolbar, Typography, Box, Button, IconButton, Avatar } from "@mui/material"

const Navbar = () => {

  const pages = ['Mentorias', 'Cursos'];
  const isUserLoggedIn = true; // MUDAR PARA STATUS DE LOGIN DE USUÁRIO

  return (
    <AppBar position="static">
      <Container
      maxWidth="x1"
      disableGutters
      sx={{ display: 'flex', background: '#FFBA85' }}>
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              pl: 2,
              pr: 7,
              mr: 4,
              alignItems: 'center',
              display: 'flex',
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: 43,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
              background: '#E35725',
              borderRadius: '0 3rem 3rem 0',
            }}
          >
          Guide Me
          </Typography>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Box
            sx={{ flexGrow:0, display: { xs: 'none', md: 'flex' }}}>
              {pages.map((page) => {
                return (
                  <Button
                  key={page}
                  sx={{ my: 2, color: '#BB2A00', display: 'block', fontSize: '1.2vw', mr: 2, textTransform: 'none', fontWeight: 600,
                        '&:hover': {
                          backgroundColor: 'transparent',
                          textDecoration: 'underline',
                        }}}>
                    {page}
                  </Button>
                )
              })}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              {
                isUserLoggedIn ? // ALTERAR FOTO PARA FOTO DO USUÁRIO
                (
                  <IconButton sx={{ p: 0}}>
                    <Avatar
                    alt="Foto do usuário"
                    src="https://dugout.com/images/publishers/logos/gremio.png"
                    sx ={{ width: 55, height: 55, }} />
                  </IconButton>
                )
                :
                (
                  <Box sx={{ flexGrow: 0, flexDirection: 'row', alignSelf: 'flex-end'}}>
                    <Button
                    key="signup"
                    href="\signup"
                    sx={{ my: 2, color: '#BB2A00', fontSize: '1.2vw', background: 'transparent', textTransform: 'none', border: 1, borderColor: 'transparent', fontWeight: 600, 
                          '&:hover': {
                            backgroundColor: 'transparent',
                            textDecoration: 'underline',
                          }}}>
                      Registre-se
                    </Button>
                    <Button
                    key="login"
                    sx={{ ml: 3, my: 2, color: 'white', fontSize: '1.2vw', background: '#E35725', borderRadius: '1rem', textTransform: 'none', border: 1, borderColor: 'transparent', fontWeight: 600,
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