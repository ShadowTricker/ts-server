## 关于热加载和编译的命令
```json
"scripts": {
    "start": "nodemon --watch ./src -e ts,js --exec ts-node ./src/index.ts",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
> 1. `typescript` 的热加载是需要 `ts-node` 进行启动的，用 `node` 启动是没有效果的。  
> 2. 实时监听的功能是 `nodemon` 这样的依赖来提供的。  
> 3. `nodemon` 配置参数

        --watch          要监听的文件
        -e extension     要监听的文件类型
        --exec           运行的方式以及运行文件   

> 4. 至于 `build`，则使用 `typescript` 的编译规则 `tsc` 来生成对应的js文件，具体的配置在 `tsconfig.json` 中。
