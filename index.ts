import type { Plugin } from 'vite'

export default function injectStaticResources(isBuild: boolean): Plugin {
  const resources = `
      <link rel="stylesheet" href="/static/easycube-playground@0.1.4.min.css" />
      <link rel="stylesheet" href="/static/tippy.js@6.3.7.min.css" />
      <script src="/static/dayjs@1.11.10.min.js" defer></script>
      <script src="/static/dayjs@1.11.10-plugin-advancedFormat.js" defer></script>
      <script src="/static/dayjs@1.11.10-plugin-customParseFormat.js" defer></script>
      <script src="/static/dayjs@1.11.10-plugin-localeData.js" defer></script>
      <script src="/static/dayjs@1.11.10-plugin-quarterOfYear.js" defer></script>
      <script src="/static/dayjs@1.11.10-plugin-weekday.js" defer></script>
      <script src="/static/dayjs@1.11.10-plugin-weekOfYear.js" defer></script>
      <script src="/static/dayjs@1.11.10-plugin-weekYear.js" defer></script>
      <script src="/static/dayjs@1.11.10-locale-zh-cn.js" defer></script>
      <script src="/static/lodash@4.17.21.min.js" defer></script>
      <script src="/static/echarts@5.4.3.min.js" defer></script>
      <script src="/static/axios@0.27.2.min.js" defer></script>
      <script src="/static/easycube-request@0.1.1.iife.min.js" defer></script>
      <script src="/static/popper.js@2.11.8.min.js" defer></script>
      <script src="/static/tippy.js@6.3.7.umd.min.js" defer></script>
      <script src="/static/vue@3.3.4.runtime.global.prod.min.js" defer></script>
      <script src="/static/ant-design-vue@3.2.20-with-locales.min.js" defer></script>
      <script src="/static/request@0.1.0.iife.min.js" defer></script>
      <script src="/static/vue-demi@0.14.6.iife.min.js" defer></script>
      <script src="/static/vueuse_shared@10.4.1.iife.min.js" defer></script>
      <script src="/static/vueuse_core@10.4.1.iife.min.js" defer></script>
      <script src="/static/vue-router@4.1.5.global.min.js" defer></script>
      <script src="/static/pinia@2.1.6.iife.min.js" defer></script>
      <script src="/static/sortable@1.15.0.min.js" defer></script>
      <script src="/static/vuedraggable.umd.min.js" defer></script>
      <script src="/static/easycube-playground@0.1.4.iife.min.js" defer></script>
    `
  const plugin: Plugin = {
    name: 'inject-static-resources-plugin',
    transformIndexHtml(html: string) {
      if (isBuild) {
        const newHTML = html.replace(/<head>([\s\S]*?)<\/head>/g, (_, headInnerText) => {
          return `<head>${headInnerText}\n${resources}</head>`
        })
        return newHTML
      } else {
        return html
      }
    },
  }

  return plugin
}
