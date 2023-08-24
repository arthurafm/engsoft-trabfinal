'use client'

import { Inter } from 'next/font/google'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Footer from '../components/footer/footer';
import Navbar from '../components/Navbar';

import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from './muiTheme';

import {Amplify, Auth} from 'aws-amplify';
import awsconfig from '@/aws-exports'

import UserContext from '@/context/UserContext';

Amplify.configure({ ...awsconfig, ssr: true })

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/logos/logo.ico'/>
        <title>Guide Me</title>
      </head>
      <body style={{margin: 0}}>
			<ThemeProvider theme={muiTheme}>
				<UserContext>
					<Navbar />
					{children}
					<Footer/>
				</UserContext>
			</ThemeProvider>
      </body>
    </html>
  )
}
