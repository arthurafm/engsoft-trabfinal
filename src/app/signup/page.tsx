'use client'

import { Authenticator, Heading, translations, ThemeProvider, Theme, defaultTheme } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Amplify, I18n } from 'aws-amplify';
import awsExports from '../../aws-exports';

Amplify.configure(awsExports);

const formFields = {
  signUp: {
    email: {
      order: 1,
      label: 'Email',
      placeholder: 'Digite seu e-mail',
      isRequired: true,
    },
    name: {
      order: 2,
      label: 'Nome completo',
      placeholder: 'Digite seu nome completo',
      isRequired: true,
    },
    birthdate: {
      order: 3,
      label: 'Data de nascimento',
      isRequired: true,
    },
    phone_number: {
      order: 4,
      label: 'Número de telefone',
      placeholder: 'Digite seu número de telefone',
      isRequired: true,
    },
    password: {
      order: 5,
      label: 'Senha',
      placeholder: 'Digite sua senha',
      isRequired: true,
    },
    confirm_password: {
      order: 6,
      label: 'Confirme sua senha',
      placeholder: 'Confirme sua senha',
      isRequired: true,
    },
  },
  signIn: {
    username: {
      order: 1,
      placeholder: 'Digite seu e-mail',
      label: 'Email'
    },
    password: {
      order: 2,
      label: 'Digite sua senha',
      placeholder: 'Digite sua senha'
    }
  }
}

const components = {

}

I18n.putVocabularies(translations)
I18n.setLanguage('pt-br')
I18n.putVocabularies({
  'pt-br': {
    'Email': 'Email',
    Password: 'Digite sua senha'
  }
})

const { tokens } = defaultTheme;

const theme: Theme = {
  name: 'Auth Theme',
  tokens: {
    colors: {
      brand: {
        primary: {
          '80': '#FF7222',
        }
      }
    }
  }
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Authenticator formFields={formFields} components ={components}>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </ThemeProvider>
    
  );
}