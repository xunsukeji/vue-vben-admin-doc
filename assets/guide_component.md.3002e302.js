import{o as n,c as s,a}from"./app.b2699450.js";const t='{"title":"组件注册","description":"","frontmatter":{},"headers":[{"level":2,"title":"按需引入","slug":"按需引入"},{"level":3,"title":"tsx 文件注册","slug":"tsx-文件注册"},{"level":2,"title":"全局注册","slug":"全局注册"},{"level":3,"title":"全局按需注册","slug":"全局按需注册"},{"level":3,"title":"全量注册","slug":"全量注册"}],"relativePath":"guide/component.md","lastUpdated":1629389170330}',p={},o=a('<h1 id="组件注册"><a class="header-anchor" href="#组件注册" aria-hidden="true">#</a> 组件注册</h1><h2 id="按需引入"><a class="header-anchor" href="#按需引入" aria-hidden="true">#</a> 按需引入</h2><p>项目目前的组件注册机制是按需注册，是在需要用到的页面才引入。</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubMenu</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SubMenu</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Menu</span><span class="token punctuation">&gt;</span></span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menu</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sub-menu</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sub-menu</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menu</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    Menu<span class="token operator">:</span> Menu<span class="token punctuation">,</span>\n    SubMenu<span class="token operator">:</span> Menu<span class="token punctuation">.</span>SubMenu\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="tsx-文件注册"><a class="header-anchor" href="#tsx-文件注册" aria-hidden="true">#</a> tsx 文件注册</h3><p><strong>tsx 文件内不能使用全局注册组件</strong></p><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Menu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.SubMenu</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.SubMenu</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="全局注册"><a class="header-anchor" href="#全局注册" aria-hidden="true">#</a> 全局注册</h2><p>如果不习惯按需引入方式，可以进行全局注册。全局注册也分两种方式</p><h3 id="全局按需注册"><a class="header-anchor" href="#全局按需注册" aria-hidden="true">#</a> 全局按需注册</h3><p>只注册需要的组件</p><p>代码地址：<a href="https://github.com/anncwb/vue-vben-admin/tree/main/src/components/registerGlobComp.ts" target="_blank" rel="noopener noreferrer">src/components/registerGlobComp.ts</a></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Need</span>\n  Button <span class="token keyword">as</span> AntButton<span class="token punctuation">,</span>\n  Optional\n  Select<span class="token punctuation">,</span>\n  Alert<span class="token punctuation">,</span>\n  Checkbox<span class="token punctuation">,</span>\n  DatePicker<span class="token punctuation">,</span>\n  Radio<span class="token punctuation">,</span>\n  Switch<span class="token punctuation">,</span>\n  Card<span class="token punctuation">,</span>\n  List<span class="token punctuation">,</span>\n  Tabs<span class="token punctuation">,</span>\n  Descriptions<span class="token punctuation">,</span>\n  Tree<span class="token punctuation">,</span>\n  Table<span class="token punctuation">,</span>\n  Divider<span class="token punctuation">,</span>\n  Modal<span class="token punctuation">,</span>\n  Drawer<span class="token punctuation">,</span>\n  Dropdown<span class="token punctuation">,</span>\n  Tag<span class="token punctuation">,</span>\n  Tooltip<span class="token punctuation">,</span>\n  Badge<span class="token punctuation">,</span>\n  Popover<span class="token punctuation">,</span>\n  Upload<span class="token punctuation">,</span>\n  Transfer<span class="token punctuation">,</span>\n  Steps<span class="token punctuation">,</span>\n  PageHeader<span class="token punctuation">,</span>\n  Result<span class="token punctuation">,</span>\n  Empty<span class="token punctuation">,</span>\n  Avatar<span class="token punctuation">,</span>\n  Menu<span class="token punctuation">,</span>\n  Breadcrumb<span class="token punctuation">,</span>\n  Form<span class="token punctuation">,</span>\n  Input<span class="token punctuation">,</span>\n  Row<span class="token punctuation">,</span>\n  Col<span class="token punctuation">,</span>\n  Spin<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">registerGlobComp</span><span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  app\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Select<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Alert<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Breadcrumb<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Checkbox<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>DatePicker<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Radio<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Switch<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Card<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>List<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Descriptions<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Tree<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Table<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Divider<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Modal<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Drawer<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Dropdown<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Tag<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Tooltip<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Badge<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Popover<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Upload<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Transfer<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Steps<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>PageHeader<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Result<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Empty<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Avatar<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Menu<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Tabs<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Form<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Input<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Row<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Col<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Spin<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="全量注册"><a class="header-anchor" href="#全量注册" aria-hidden="true">#</a> 全量注册</h3><ul><li>在<code>main.ts</code>内</li></ul><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Antd <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;ant-design-vue/dist/antd.less&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Antd<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li>删除以下代码</li></ul><div class="language-ts"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DEV</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;ant-design-vue/dist/antd.less&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',18);p.render=function(a,t,p,c,e,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
