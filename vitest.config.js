import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

// vite.configファイルに以下の設定を追加している

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
        globals: true,
        include: ['./test/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
        root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)