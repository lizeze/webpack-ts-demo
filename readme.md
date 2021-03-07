---
# 主题列表：juejin, github, smartblue, cyanosis, channing-cyan, fancy, hydrogen, condensed-night-purple, greenwillow, v-green, vue-pro, healer-readable, mk-cute, jzman, geek-black, awesome-green, qklhk-chocolate
# 贡献主题：https://github.com/xitu/juejin-markdown-themes
theme: smartblue
highlight:
---

使用typescript与webpack搭建开发环境
# 项目初始化

```shell
$ yarn init -y
```
>本文全部使用yarn命令，没有安装的可以执行下面使用npm安装
```shell
$ npm i -g yarn
```

# 安装依赖

 ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/553ede7057384707932032dcbace34ae~tplv-k3u1fbpfcp-watermark.image)
将上面内容拷贝到项目中的`package.json`文件中，执行安装命令
```shell
$ yarn install 
```

# 项目配置
## 初始化tsconfig.json
```shell
$ tsc --init
```
> 如果出现tsc不是正常的命令错误提示 可在命令前面添加`npx` 然后在执行
执行成功之后修改tsconfig,写入以下内容
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/baef113509004fd7b01055bc2038e6cc~tplv-k3u1fbpfcp-watermark.image)

> 更多配置选项可参考[官方文档](https://www.typescriptlang.org/tsconfig)
## webpack.config.js
在项目根目录下增加`webpack.config.js`,内容如下![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc8d0cf662b8493695df250803b77e74~tplv-k3u1fbpfcp-watermark.image)
> 更多配置选项可参考[官方文档](https://webpack.js.org/guides/)
到这里项目的配置项基本已经全部完成了，下面开始写代码
# 增加第一个ts文件

在项目目录增加`src`文件夹，并创建第一个文件`index.ts`,内容如下
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a326ff99e12f43dd86bc0f7e4a5dbdce~tplv-k3u1fbpfcp-watermark.image)

完成之后运行一下项目，验证一下

# 项目启动
项目启动有两种方式，一种是直接在终端中输入`webpack serve`来启动或者使用`yarn`命令启动，我们使用第二种方式。
首先配置`yarn`的启动脚本

在`package.json`中增加以下代码

```json
  "scripts": {
    "start": "webpack serve"
  }
```
下面我们就可以在终端中直接输入`yarn start`来启动项目了，执行之后会看到以下提示
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e1edf42e56b04e0884a1af2ce0569c9b~tplv-k3u1fbpfcp-watermark.image)

项目顺利启动，并在本地启动了一个端口为`8080`的服务,我们可以直接在浏览器中那个访问

`http://localhost:8080/`

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/618beb57a134491facb93d2c0473220d~tplv-k3u1fbpfcp-watermark.image)