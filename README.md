# easycube-inject-static-resources-plugin

一个 EasyCube 专用的 vite 插件，用于在打包时将静态资源注入 index.html

安装：

```bash
$ pnpm i -D easycube-inject-static-resources-plugin
```

使用：
```ts
// vite.config.ts
import injectStaticResourcesPlugin from 'easycube-inject-static-resources-plugin'
import { defineConfig, UserConfig, ConfigEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv): UserConfig => {
  return {
		// ...
    plugins: [injectStaticResourcesPlugin(command === 'build')],
		// ...
  }
})
```

## 更新记录

`0.1.10`: 增加配置项参数；