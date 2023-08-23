"use client"

import { AppBar, Container, Toolbar, Typography, Box, IconButton, Avatar, Drawer, List, ListItem, ListItemText, ListItemButton, Divider, Menu, MenuItem, Tooltip, Grid } from "@mui/material"

import Button from "@/components/button"

import { useUser } from "@/context/UserContext"
import { Aluno, Professor } from "@/API"
import BuyGP from "@/components/profile/BuyGP"


function loggedInProfile(userData: Aluno | Professor){
  const isProfessor = userData?.__typename == "Professor"

  return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Box sx = {{
          backgroundColor: "#FFE199",
          width: '100%',
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 5,
        }}>
          <Avatar
              alt="Foto do usuário"
              src={'/icon-placeholder.png'}
              sx ={{ width: '7rem', height: '7rem', mb: 2 }} />
          <Typography
          variant="h3"
          sx={{
            fontFamily: 'Roboto',
            fontSize: '3.5rem',
            fontWeight: 700,
            color: '#C73700',
            textJustify: 'center',
          }}>
            {userData?.nome}
          </Typography>
        </Box>
        <Box sx = {{
          pt: 2,
          minHeight: '42vh',
        }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: '1.7553rem',
              color: '#C73700',
            }}>
            Detalhes do {isProfessor ? "professor" : "aluno"}:
          </Typography>
          <Box sx = {{
            mt: 1,
          }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  color: '#C73700',
                  fontWeight: 500,
                  pr: 1,
                }}>
                Email: 
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                }}>
                {userData?.email}
              </Typography>
            </Box>
            <Box sx = {{
                display: 'flex',
              }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: '1.5rem',
                  color: '#C73700',
                  pr: 1,
                }}>
                CPF: 
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                }}>
                {userData?.cpf}
              </Typography>
            </Box>
			{!isProfessor && 
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  color: '#C73700',
                  fontWeight: 500,
                  pr: 1,
                }}>
                Creditos: 
              </Typography>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  pr: 1,
                }}>
                {(userData as Aluno)?.creditos}
              </Typography>
              <BuyGP />
            </Box>}
          </Box>
        </Box>
        <Box sx = {{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Button
            text='Visualize seus cursos'
            style={{
              my: 3,
              width: 'fit-content',
              p: '2 5',
              mr: 5,
            }}
			
            path='/mycourses'
          />
          <Button
            text='Editar seu perfil'
            style={{
              my: 3,
              width: 'fit-content',
              p: '2 5',
              mr: 5,
            }}
            path='/'
          />
          {isProfessor && 
          <Button
            text='Criar curso'
            style={{
              my: 3,
              width: 'fit-content',
              p: '2 5',
            }}
            path='/courses/newcourse'
          />
          }
        </Box>
      </Box>
  )
}

export default function Profile(){
	const { cognitoUser, userData } = useUser()
	if(cognitoUser && userData){
		return loggedInProfile(userData as Aluno | Professor)
	}else{
		return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '82vh',
          backgroundColor: "#FFE199",
        }}>
          <Typography
            variant="h3"
            sx= {{
              color: '#C73700',
              fontFamily: 'Roboto',
              fontWeight: 700,
            }}>Logue-se para acessar a sua página de Perfil</Typography>
        </Box>
      )
	}
}