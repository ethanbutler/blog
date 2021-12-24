declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SANITY_API_TOKEN: string
      SANITY_PROJECT_ID: string
    }
  }
}

export {}