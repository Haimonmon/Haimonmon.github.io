/// <reference types="vite/client"/>

interface ImportMetaEnv {
  readonly VITE_APP_MAINTENANCE_MODE: string;
  readonly VITE_CONTACT_MAINTENANCE_MODE: string;
  readonly VITE_ABOUT_ME_MAINTENANCE_MODE: string;
  readonly VITE_PROJECTS_MAINTENANCE_MODE: string;
}

interface ImportMetaEnv {
  readonly env: ImportMetaEnv;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
