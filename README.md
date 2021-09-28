## 基于 TypeScript + Rollup 的类库开发打包工具

## npm script 支持如下

```js
"clean": "rimraf dist",
"build": "rollup -c",
"build:dev": "npm-run-all clean build",
"test": "jest",
"lint:fix": "eslint --fix src --ext .ts --max-warnings=0",
"format": "npx prettier --write ."
```

## Feature

支持 TypeScript + Rollup 打包构建
支持 Eslint + Prettier 实现代码规范与检查
支持 jest 实现单元测试
支持 Changelog 自动生成
支持 Commitlint & git-cz 优化 commit 提交规范实现 Semantic version
## Changlog

## License

MIT