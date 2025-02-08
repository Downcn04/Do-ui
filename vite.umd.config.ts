import { resolve } from 'node:path'

import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(),
      },
      // 覆盖插件选项
    }),
    vueDevTools(),
    // umd环境下不需要配置类型文件
    // dts({
    //     tsconfigPath:'./tsconfig.build.json'
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist/umd',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DoUI',
      fileName: 'do-ui',
      formats: ['umd'],

    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
        assetFileNames(chunkInfo) {
          if (chunkInfo.name === 'do-ui.css') {
            return 'index.css'
          }
          return chunkInfo.name as string
        },
      },

    },
  },
})
