## 关于热加载和编译的命令
```json
"scripts": {
    "start": "supervisor -w ./src -e ts,js -x ts-node ./src/index.ts",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
> 1.typescript的热加载是需要ts-node进行启动的，用node启动是没有效果的。  
>2. 实时监听的功能是supervisor 或者 nodemon 这样的依赖来提供的。  
>3. supervisor 配置参数

        -w watch         要监听的文件
        -e extension     要监听的文件类型
        -x exec          运行的方式以及运行文件   

>4.nodemon 配置参数（与supervisor 类似）

        --watch          要监听的文件
        -e extension     要监听的文件类型
        ---exec          运行的方式以及运行文件   

>5.至于build，则使用typescript的编译规则tsc来生成对应的js文件，具体的配置在tsconfig.json中。