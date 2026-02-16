/// <reference types="vitest" />

import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import { keycloakify } from 'keycloakify/vite-plugin';
import { themeNames } from './src/kc.gen';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2022'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    angular(),
    keycloakify({
      accountThemeImplementation: 'none',
      keycloakVersionTargets: {
        '22-to-25': 'keycloakify-people-theme.jar',
        'all-other-versions': false,
      },
    }),
  ],
}));
