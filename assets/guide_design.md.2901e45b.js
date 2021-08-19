import{o as s,c as n,a}from"./app.b2699450.js";const t='{"title":"样式","description":"","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍"},{"level":2,"title":"tailwindcss(2.5.0+)","slug":"tailwindcss-2-5-0"},{"level":2,"title":"windicss(2.5.0 已弃用)","slug":"windicss-2-5-0-已弃用"},{"level":2,"title":"为什么使用 Less","slug":"为什么使用-less"},{"level":2,"title":"开启 scoped","slug":"开启-scoped"},{"level":2,"title":"深度选择器","slug":"深度选择器"},{"level":2,"title":"CSS Modules","slug":"css-modules"},{"level":2,"title":"重复引用问题","slug":"重复引用问题"}],"relativePath":"guide/design.md","lastUpdated":1629389170330}',p={},e=a('<h1 id="样式"><a class="header-anchor" href="#样式" aria-hidden="true">#</a> 样式</h1><h2 id="介绍"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>主要介绍如何在项目中使用和规划样式文件。</p><p>默认使用 less 作为预处理语言，建议在使用前或者遇到疑问时学习一下 <a href="http://lesscss.org/" target="_blank" rel="noopener noreferrer">Less</a> 的相关特性（如果想获取基础的 CSS 知识或查阅属性，请参考 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference" target="_blank" rel="noopener noreferrer">MDN 文档</a>）。</p><p>项目中使用的通用样式，都存放于 <a href="https://github.com/anncwb/vue-vben-admin/tree/main/src/design" target="_blank" rel="noopener noreferrer">src/design/</a> 下面。</p><div class="language-bash"><pre><code><span class="token builtin class-name">.</span>\n├── ant <span class="token comment"># ant design 一些样式覆盖</span>\n├── color.less <span class="token comment"># 颜色</span>\n├── index.less <span class="token comment"># 入口</span>\n├── public.less <span class="token comment"># 公共类</span>\n├── theme.less <span class="token comment"># 主题相关</span>\n├── config.less  <span class="token comment"># 每个组件都会自动引入样式</span>\n├── transition <span class="token comment"># 动画相关</span>\n└── var <span class="token comment"># 变量</span>\n\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">全局注入</p><p>config.less 这个文件会被全局注入到所有文件，所以在页面内可以直接使用变量而不需要手动引入</p></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  // 这里已经隐式注入了 config.less\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="tailwindcss-2-5-0"><a class="header-anchor" href="#tailwindcss-2-5-0" aria-hidden="true">#</a> tailwindcss(2.5.0+)</h2><p>项目中引用到了 <a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">tailwindcss</a>,具体可以见文件使用说明。</p><p>语法如下:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>relative w-full h-full px-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="windicss-2-5-0-已弃用"><a class="header-anchor" href="#windicss-2-5-0-已弃用" aria-hidden="true">#</a> windicss(2.5.0 已弃用)</h2><p>项目中使用了 <a href="https://windicss.org/" target="_blank" rel="noopener noreferrer">windicss</a>，具体参见文件使用说明。</p><p>语法如下:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>relative w-full h-full px-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="danger custom-block"><p class="custom-block-title">注意事项</p><p>windcss 目前会造成本地开发内存溢出，所以后续可能会考虑切换到 TailwindCss，两者基本相同。</p><p>所以尽量少用 Windicss 新增的特性，防止后续切换成本高。</p></div><h2 id="为什么使用-less"><a class="header-anchor" href="#为什么使用-less" aria-hidden="true">#</a> 为什么使用 Less</h2><p>主要是因为 Ant Design 默认使用 less 作为样式语言，使用 Less 可以跟其保持一致。</p><h2 id="开启-scoped"><a class="header-anchor" href="#开启-scoped" aria-hidden="true">#</a> 开启 scoped</h2><p>没有加 <code>scoped</code> 属性，默认会编译成全局样式，可能会造成全局污染</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">温馨提醒</p><p>使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式。</p></div><h2 id="深度选择器"><a class="header-anchor" href="#深度选择器" aria-hidden="true">#</a> 深度选择器</h2><p>有时我们可能想明确地制定一个针对子组件的规则。</p><p>如果你希望 <code>scoped</code> 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 <code>&gt;&gt;&gt;</code> 操作符。有些像 Sass 之类的预处理器无法正确解析 <code>&gt;&gt;&gt;</code>。这种情况下你可以使用 <code>/deep/</code> 或 <code>::v-deep</code> 操作符取而代之——两者都是 <code>&gt;&gt;&gt;</code> 的别名，同样可以正常工作。</p><p>详情可以查看 RFC<a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md" target="_blank" rel="noopener noreferrer">0023-scoped-styles-changes</a>。</p><p>使用 scoped 后，父组件的样式将不会渗透到子组件中，所以可以使用以下方式解决：</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token comment">/* deep selectors */</span>\n  <span class="token selector">::v-deep(.foo)</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">/* shorthand */</span>\n  <span class="token selector">:deep(.foo)</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">/* targeting slot content */</span>\n  <span class="token selector">::v-slotted(.foo)</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">/* shorthand */</span>\n  <span class="token selector">:slotted(.foo)</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">/* one-off global rule */</span>\n  <span class="token selector">::v-global(.foo)</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">/* shorthand */</span>\n  <span class="token selector">:global(.foo)</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="css-modules"><a class="header-anchor" href="#css-modules" aria-hidden="true">#</a> CSS Modules</h2><p>针对样式覆盖问题，还有一种方案是使用 CSS Modules 模块化方案。使用方式如下。</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$style.span1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> useCSSModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> $style <span class="token operator">=</span> <span class="token function">useCSSModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> moduleAStyle <span class="token operator">=</span> <span class="token function">useCSSModule</span><span class="token punctuation">(</span><span class="token string">&#39;moduleA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        $style<span class="token punctuation">,</span>\n        moduleAStyle<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">module</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.span1</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>moduleA<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n  <span class="token selector">.span1</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="重复引用问题"><a class="header-anchor" href="#重复引用问题" aria-hidden="true">#</a> 重复引用问题</h2><p>加上 <strong>reference</strong> 可以解决页面内重复引用导致实际生成的 style 样式表重复的问题。</p><p>这步已经全局引入了。所以<strong>可以不写</strong>，直接使用变量</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>\n  /* 该行代码已全局引用。可以不用单独引入 */\n  @import (reference) &#39;../../design/config.less&#39;;\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',36);p.render=function(a,t,p,o,c,l){return s(),n("div",null,[e])};export default p;export{t as __pageData};
