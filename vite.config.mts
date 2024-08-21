import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { defineConfig, configDefaults } from 'vitest/config';

// https://vitest.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    name: 'x-boilerplate:unit',
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
    exclude: [...configDefaults.exclude, '**/e2e/**'],
    setupFiles: ['./vitest.setup.ts'],
  },
});
