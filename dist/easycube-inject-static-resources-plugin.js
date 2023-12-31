const t = [
  { name: "easycube-playground@0.1.4.min.css", type: "style" },
  { name: "dayjs@1.11.10.min.js", type: "script" },
  { name: "dayjs@1.11.10-plugin-advancedFormat.js", type: "script" },
  { name: "dayjs@1.11.10-plugin-customParseFormat.js", type: "script" },
  { name: "dayjs@1.11.10-plugin-localeData.js", type: "script" },
  { name: "dayjs@1.11.10-plugin-quarterOfYear.js", type: "script" },
  { name: "dayjs@1.11.10-plugin-weekday.js", type: "script" },
  { name: "dayjs@1.11.10-plugin-weekOfYear.js", type: "script" },
  { name: "dayjs@1.11.10-plugin-weekYear.js", type: "script" },
  { name: "dayjs@1.11.10-locale-zh-cn.js", type: "script" },
  { name: "lodash@4.17.21.min.js", type: "script" },
  { name: "echarts@5.4.3.min.js", type: "script" },
  { name: "axios@0.27.2.min.js", type: "script" },
  { name: "easycube-request@0.1.1.iife.min.js", type: "script" },
  { name: "popper.js@2.11.8.min.js", type: "script" },
  { name: "tippy.js@6.3.7.umd.min.js", type: "script" },
  { name: "vue@3.3.4.runtime.global.prod.min.js", type: "script" },
  { name: "ant-design-vue@3.2.20-with-locales.min.js", type: "script" },
  { name: "request@0.1.0.iife.min.js", type: "script" },
  { name: "vue-demi@0.14.6.iife.min.js", type: "script" },
  { name: "vueuse_shared@10.4.1.iife.min.js", type: "script" },
  { name: "vueuse_core@10.4.1.iife.min.js", type: "script" },
  { name: "vue-router@4.1.5.global.min.js", type: "script" },
  { name: "pinia@2.1.6.iife.min.js", type: "script" },
  { name: "sortable@1.15.0.min.js", type: "script" },
  { name: "vuedraggable.umd.min.js", type: "script" },
  { name: "easycube-playground@0.1.4.iife.min.js", type: "script" }
], m = {
  prefix: "/static"
};
function o(n, i = m) {
  const { prefix: s } = i, a = t.map((e) => `<link as="${e.type}" ref="preload" href="${s}/${e.name}">`).join(""), r = t.map((e) => e.type === "style" ? `<link rel="stylesheet" href="${s}/${e.name}" />` : `<script src="${s}/${e.name}" defer><\/script>`).join(""), p = `
    ${a}
    ${r}
  `;
  return {
    name: "inject-static-resources-plugin",
    transformIndexHtml(e) {
      return n ? e.replace(/<head>([\s\S]*?)<\/head>/g, (j, c) => `<head>
              ${p}
              ${c}
            </head>`) : e;
    }
  };
}
export {
  o as default,
  m as defaultOptions
};
