import{o as n,c as t,a}from"./app.b2699450.js";const s='{"title":"Upload","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Config","slug":"config"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"components/upload.md","lastUpdated":1629389170330}',p={},o=a('<h1 id="upload"><a class="header-anchor" href="#upload" aria-hidden="true">#</a> Upload</h1><p>文件上传组件</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicUpload</span> <span class="token attr-name">:maxSize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:maxNumber</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:api</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uploadApi<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicUpload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Upload&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> uploadApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/api/sys/upload&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> BasicUpload <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        uploadApi<span class="token punctuation">,</span>\n        <span class="token function-variable function">handleChange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">list<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          createMessage<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">已上传文件</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="config"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h2><p><code>.env.development</code> 和 <code>.env.production</code> 配置开发和生产的文件上传地址</p><div class="language-bash"><pre><code><span class="token comment"># .env.development</span>\n\n<span class="token assign-left variable">VITE_PROXY</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;/upload&quot;</span>,<span class="token string">&quot;http://localhost:3001/upload&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\n\n<span class="token comment"># 如果没有跨域问题，则直接使用真实上传地址</span>\n<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>/upload\n\n<span class="token comment"># .env.production</span>\n<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>/upload\n\n</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td><code>string[]</code></td><td>-</td><td>-</td><td>已上传的文件列表，支持v-model</td></tr><tr><td>showPreviewNumber</td><td><code>boolean</code></td><td>true</td><td>-</td><td>是否显示预览数量</td></tr><tr><td>emptyHidePreview</td><td><code>boolean</code></td><td>false</td><td>-</td><td>没有上传文件时是否隐藏预览</td></tr><tr><td>helpText</td><td><code>string</code></td><td>-</td><td>-</td><td>帮助文本</td></tr><tr><td>maxSize</td><td><code>number</code></td><td>2</td><td>-</td><td>单个文件最大体积，单位 M</td></tr><tr><td>maxNumber</td><td><code>number</code></td><td>Infinity</td><td>-</td><td>最大上传数量，Infinity 则不限制</td></tr><tr><td>accept</td><td><code>string[]</code></td><td>-</td><td>-</td><td>限制上传格式 <code>[&#39;.doc,&#39;,&#39;.docx&#39;,&#39;.xlsx&#39;]</code></td></tr><tr><td>multiple</td><td><code>boolean</code></td><td>-</td><td>-</td><td>开启多文件上传</td></tr><tr><td>uploadParams</td><td><code>any</code></td><td>-</td><td>-</td><td>上传携带的参数</td></tr><tr><td>api</td><td><code>Fn</code></td><td>-</td><td>-</td><td>上传接口，为上面配置的接口</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>事件</th><th>回调参数</th><th>返回值</th><th>说明</th><th>版本</th></tr></thead><tbody><tr><td>change</td><td><code>(fileList)=&gt;void</code></td><td></td><td>文件列表内容改变触发事件</td><td></td></tr><tr><td>delete</td><td><code>(record)=&gt;void</code></td><td></td><td>在上传列表中删除文件的事件</td><td></td></tr><tr><td>preview-delete</td><td><code>(url:string)=&gt;void</code></td><td></td><td>在预览列表中删除文件的事件</td><td>2.5.3</td></tr></tbody></table>',11);p.render=function(a,s,p,e,c,d){return n(),t("div",null,[o])};export default p;export{s as __pageData};
