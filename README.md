基于 Next.js 15 的笔记应用，使用 TypeScript 和 Tailwind CSS。

## 开始使用

### 安装依赖包

```bash
pnpm install
```

### 启动

```bash
pnpm dev
```

在浏览器中打开 http://localhost:3000 查看结果。

## Next.js 15 + React 19 添加 shadcn/ui

- 在package.json中添加

```json
"pnpm": {
  "overrides": {
    "react-is": "19.0.0-rc-66855b96-20241106"
  }
}
```

- 初始化

```bash
npx shadcn@latest init -d
```

- 添加组件 ui 包

```bash
pnpm dlx shadcn@latest add --all
```


## 引用技术

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [pglite](https://pglite.dev/)