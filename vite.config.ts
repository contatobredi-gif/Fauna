import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv, type Plugin } from 'vite';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

function homologationMetadata(enabled: boolean): Plugin {
  return {
    name: 'fauna-homologation-metadata',
    transformIndexHtml() {
      return enabled ? [{
        tag: 'meta',
        attrs: { name: 'robots', content: 'noindex, nofollow' },
        injectTo: 'head' as const,
      }] : [];
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, rootDir, '');
  const onVercel = process.env.VERCEL === '1';
  // A variável é opt-in. Na Vercel, só a branch homologacao em Preview pode ativá-la.
  const homologation = env.VITE_APP_ENV === 'homologacao'
    && process.env.VERCEL_ENV !== 'production'
    && (!onVercel || (
      process.env.VERCEL_ENV === 'preview'
      && process.env.VERCEL_GIT_COMMIT_REF === 'homologacao'
    ));

  return {
    plugins: [react(), tailwindcss(), homologationMetadata(homologation)],
    define: {
      'import.meta.env.FAUNA_HOMOLOGATION': JSON.stringify(homologation),
      // Previews não publicam canonical de produção nem adotam hostname presumido.
      'import.meta.env.VITE_PUBLIC_SITE_URL': JSON.stringify(homologation ? '' : (env.VITE_PUBLIC_SITE_URL ?? '')),
    },
    resolve: {
      alias: {
        '@': rootDir,
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    preview: {
      port: 3000,
      host: '0.0.0.0',
    },
    build: {
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              { name: 'gsap', test: /[\\/]node_modules[\\/]gsap[\\/]/ },
              { name: 'react-vendor', test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/ },
              { name: 'router', test: /[\\/]node_modules[\\/]react-router/ },
            ],
          },
        },
      },
    },
  };
});
