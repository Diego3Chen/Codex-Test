# 个人简历演示网站（从零开始）

这是一个纯前端的个人简历网站模板，开箱即用、易修改，适合：
- 面试时做在线个人展示
- 作为简历链接对外投递
- 快速搭建自己的个人主页

## 1) 本地预览

```bash
python3 -m http.server 4173
```

打开：<http://localhost:4173>

## 2) 如何替换成你的真实信息

所有数据都在 `script.js` 顶部的 `resumeData` 对象里：
- 基本信息：`name`, `title`, `summary`, `about`
- 联系方式：`contact`
- 技能列表：`skills`
- 项目经历：`projects`
- 时间线：`timeline`

你只要改这些字段，就能快速生成你的个人简历站。

## 3) 我想给别人一个公网链接，怎么做？

下面给你两种最常见方案：

### 方案 A（推荐，长期稳定）：部署到 Vercel

> 适合正式对外分享，链接长期可用。

1. 把当前项目推送到你的 GitHub 仓库。
2. 登录 <https://vercel.com>，选择 **Add New Project**。
3. 导入这个 GitHub 仓库。
4. Framework Preset 选择 **Other**（或保持默认）。
5. Build Command 留空，Output Directory 留空（静态站点）。
6. 点击 Deploy，等待完成后会得到一个 `https://xxx.vercel.app` 的公网地址。

#### 绑定自己的域名（可选）

在 Vercel 项目的 **Settings → Domains** 中绑定你的域名，即可使用自定义网址。

### 方案 B（临时演示，最快）：本机隧道转发

> 适合临时给面试官演示，电脑关闭后链接通常会失效。

1. 先在本地启动网站：

```bash
python3 -m http.server 4173
```

2. 使用 Cloudflare Tunnel（需先安装 cloudflared）：

```bash
cloudflared tunnel --url http://localhost:4173
```

3. 终端会输出类似 `https://xxxxx.trycloudflare.com` 的地址，直接发给别人访问。

## 4) 备选部署：GitHub Pages

1. 推送代码到 GitHub。
2. 在仓库里进入 **Settings → Pages**。
3. Source 选择 `Deploy from a branch`，分支选 `main`（或当前分支）+ `/root`。
4. 保存后，几分钟内会生成一个 `https://<你的用户名>.github.io/<仓库名>/` 的公网地址。

## 5) 小建议

- 准备一份 PDF 简历，把 `resumeLink` 改成线上链接。
- 把项目链接换成你真实的 GitHub / 在线演示地址。
- 头像建议使用清晰的职业照片。
