"use strict";function e(i){const t=`
      <link as="style" rel="/static/easycube-playground@0.1.4.min.css"/>
      <link as="script" rel="/static/dayjs@1.11.10.min.js"/>
      <link as="script" rel="/static/dayjs@1.11.10-plugin-advancedFormat.js"/>
      <link as="script" rel="/static/dayjs@1.11.10-plugin-customParseFormat.js"/>
      <link as="script" rel="/static/dayjs@1.11.10-plugin-localeData.js"/>
      <link as="script" rel="/static/dayjs@1.11.10-plugin-quarterOfYear.js"/>
      <link as="script" rel="/static/dayjs@1.11.10-plugin-weekday.js"/>
      <link as="script" rel="/static/dayjs@1.11.10-plugin-weekOfYear.js"/>
      <link as="script" rel="/static/dayjs@1.11.10-plugin-weekYear.js"/>
      <link as="script" rel="/static/dayjs@1.11.10-locale-zh-cn.js"/>
      <link as="script" rel="/static/lodash@4.17.21.min.js"/>
      <link as="script" rel="/static/echarts@5.4.3.min.js"/>
      <link as="script" rel="/static/axios@0.27.2.min.js"/>
      <link as="script" rel="/static/easycube-request@0.1.1.iife.min.js"/>
      <link as="script" rel="/static/popper.js@2.11.8.min.js"/>
      <link as="script" rel="/static/tippy.js@6.3.7.umd.min.js"/>
      <link as="script" rel="/static/vue@3.3.4.runtime.global.prod.min.js"/>
      <link as="script" rel="/static/ant-design-vue@3.2.20-with-locales.min.js"/>
      <link as="script" rel="/static/request@0.1.0.iife.min.js"/>
      <link as="script" rel="/static/vue-demi@0.14.6.iife.min.js"/>
      <link as="script" rel="/static/vueuse_shared@10.4.1.iife.min.js"/>
      <link as="script" rel="/static/vueuse_core@10.4.1.iife.min.js"/>
      <link as="script" rel="/static/vue-router@4.1.5.global.min.js"/>
      <link as="script" rel="/static/pinia@2.1.6.iife.min.js"/>
      <link as="script" rel="/static/sortable@1.15.0.min.js"/>
      <link as="script" rel="/static/vuedraggable.umd.min.js"/>
      <link as="script" rel="/static/easycube-playground@0.1.4.iife.min.js"/>

      <link rel="stylesheet" href="/static/easycube-playground@0.1.4.min.css" />
      <script src="/static/dayjs@1.11.10.min.js" defer><\/script>
      <script src="/static/dayjs@1.11.10-plugin-advancedFormat.js" defer><\/script>
      <script src="/static/dayjs@1.11.10-plugin-customParseFormat.js" defer><\/script>
      <script src="/static/dayjs@1.11.10-plugin-localeData.js" defer><\/script>
      <script src="/static/dayjs@1.11.10-plugin-quarterOfYear.js" defer><\/script>
      <script src="/static/dayjs@1.11.10-plugin-weekday.js" defer><\/script>
      <script src="/static/dayjs@1.11.10-plugin-weekOfYear.js" defer><\/script>
      <script src="/static/dayjs@1.11.10-plugin-weekYear.js" defer><\/script>
      <script src="/static/dayjs@1.11.10-locale-zh-cn.js" defer><\/script>
      <script src="/static/lodash@4.17.21.min.js" defer><\/script>
      <script src="/static/echarts@5.4.3.min.js" defer><\/script>
      <script src="/static/axios@0.27.2.min.js" defer><\/script>
      <script src="/static/easycube-request@0.1.1.iife.min.js" defer><\/script>
      <script src="/static/popper.js@2.11.8.min.js" defer><\/script>
      <script src="/static/tippy.js@6.3.7.umd.min.js" defer><\/script>
      <script src="/static/vue@3.3.4.runtime.global.prod.min.js" defer><\/script>
      <script src="/static/ant-design-vue@3.2.20-with-locales.min.js" defer><\/script>
      <script src="/static/request@0.1.0.iife.min.js" defer><\/script>
      <script src="/static/vue-demi@0.14.6.iife.min.js" defer><\/script>
      <script src="/static/vueuse_shared@10.4.1.iife.min.js" defer><\/script>
      <script src="/static/vueuse_core@10.4.1.iife.min.js" defer><\/script>
      <script src="/static/vue-router@4.1.5.global.min.js" defer><\/script>
      <script src="/static/pinia@2.1.6.iife.min.js" defer><\/script>
      <script src="/static/sortable@1.15.0.min.js" defer><\/script>
      <script src="/static/vuedraggable.umd.min.js" defer><\/script>
      <script src="/static/easycube-playground@0.1.4.iife.min.js" defer><\/script>
    `;return{name:"inject-static-resources-plugin",transformIndexHtml(s){return i?s.replace(/<head>([\s\S]*?)<\/head>/g,(n,r)=>`<head>
${t}
${r}</head>`):s}}}module.exports=e;
