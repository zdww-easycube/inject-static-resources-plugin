import type { Plugin } from 'vite'

const resources = [
  { name: 'easycube-playground@0.1.4.min.css', type: 'style' },
  { name: 'dayjs@1.11.10.min.js', type: 'script' },
  { name: 'dayjs@1.11.10-plugin-advancedFormat.js', type: 'script' },
  { name: 'dayjs@1.11.10-plugin-customParseFormat.js', type: 'script' },
  { name: 'dayjs@1.11.10-plugin-localeData.js', type: 'script' },
  { name: 'dayjs@1.11.10-plugin-quarterOfYear.js', type: 'script' },
  { name: 'dayjs@1.11.10-plugin-weekday.js', type: 'script' },
  { name: 'dayjs@1.11.10-plugin-weekOfYear.js', type: 'script' },
  { name: 'dayjs@1.11.10-plugin-weekYear.js', type: 'script' },
  { name: 'dayjs@1.11.10-locale-zh-cn.js', type: 'script' },
  { name: 'lodash@4.17.21.min.js', type: 'script' },
  { name: 'echarts@5.4.3.min.js', type: 'script' },
  { name: 'axios@0.27.2.min.js', type: 'script' },
  { name: 'easycube-request@0.1.1.iife.min.js', type: 'script' },
  { name: 'popper.js@2.11.8.min.js', type: 'script' },
  { name: 'tippy.js@6.3.7.umd.min.js', type: 'script' },
  { name: 'vue@3.3.4.runtime.global.prod.min.js', type: 'script' },
  { name: 'ant-design-vue@3.2.20-with-locales.min.js', type: 'script' },
  { name: 'request@0.1.0.iife.min.js', type: 'script' },
  { name: 'vue-demi@0.14.6.iife.min.js', type: 'script' },
  { name: 'vueuse_shared@10.4.1.iife.min.js', type: 'script' },
  { name: 'vueuse_core@10.4.1.iife.min.js', type: 'script' },
  { name: 'vue-router@4.1.5.global.min.js', type: 'script' },
  { name: 'pinia@2.1.6.iife.min.js', type: 'script' },
  { name: 'sortable@1.15.0.min.js', type: 'script' },
  { name: 'vuedraggable.umd.min.js', type: 'script' },
  { name: 'easycube-playground@0.1.4.iife.min.js', type: 'script' },
]

const preloadResource = resources
  .map(item => `<link as="${item.type}" ref="preload" href="/static/${item.name}">`)
  .join('')

const reloadResource = resources
  .map(item => {
    if (item.type === 'style') {
      return `<link rel="stylesheet" href="/static/${item.name}" />`
    } else {
      return `<script src="/static/${item.name}" preload></script>`
    }
  })
  .join('')

const rawResource = `
  ${preloadResource}
  ${reloadResource}
`

export default function injectStaticResources(isBuild: boolean): Plugin {
  const plugin: Plugin = {
    name: 'inject-static-resources-plugin',
    transformIndexHtml(html: string) {
      if (isBuild) {
        const newHTML = html.replace(/<head>([\s\S]*?)<\/head>/g, (_, headInnerText) => {
          return `<head>
              ${rawResource}
              ${headInnerText}
            </head>`
        })
        return newHTML
      } else {
        return html
      }
    },
  }

  return plugin
}
