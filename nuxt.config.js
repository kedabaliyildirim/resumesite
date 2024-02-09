import {
  type
} from 'os';
import {
  thames
} from './myThemes'
import env from 'dotenv'
export default defineNuxtConfig({
  target: 'static',
  ssr: false,
  security: {
    rateLimiter: {
      tokensPerInterval: 5,
      interval: 'hour'
    }
  },
  axios: {
    baseURL: 'https://klavas35.github.io/resumesite/'
  },
  route: {
    base: '/klavas35.github.io/resumesite/'
  },
  app: {
    baseURL: '/resumesite/'
  },
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@pinia/nuxt',
    'nuxt-security',
    ['nuxt-mail', {
      message: {
        to: process.env.EMAIL_ADDRESS,
        cc: [], // Add CC recipients here if needed
        bcc: [], // Add BCC recipients here if needed
      },
      smtp: {
        host: 'smtp.mailtrap.io',
        port: 465,
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.APP_PASS,
        },
      },
    }],
  ],

  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      theme: {
        themes: {
          Mlight: thames.myLightTheme,
          Mdark: thames.myDarkTheme
        },
        defaultTheme: 'Mlight'
      }
      // Add your Vuetify options here
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,
      /* vite-plugin-vuetify options */
      styles: true, // or 'none', 'expose', 'sass', { configFile: string }
      autoImport: true,
    },
  },
});