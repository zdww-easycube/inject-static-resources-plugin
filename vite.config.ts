import { defineConfig, UserConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig((): UserConfig => {
  return {
    plugins: [dts({ rollupTypes: true })],
    build: {
      lib: {
        formats: ['es', 'cjs'],
        entry: resolve(__dirname, './index.ts'),
      },
    },
  }
})
