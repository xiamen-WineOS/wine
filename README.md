# wineos

> 酒业官网

## 编译“饿了么”[Elem](http://element.eleme.io/)样式
```bash
# 初始化全局属性
npm run et -- -i
# 编译css
npm run et
# 实时编译css
npm run et-watch
```

## Build Setup

``` bash
# install dependencies
npm install

# 升级npm到5.x版本
npm version
npm install -g npm
# install dependencies 进入工程路径

# install dependencies 使用淘宝的镜像
npm install --registry=https://registry.npm.taobao.org --chromedriver_cdnurl=http://npm.taobao.org/mirrors/chromedriver --phantomjs_cdnurl=http://npm.taobao.org/mirrors/phantomjs
# 或者更换 npm 源，命令为 
npm config set registry https://registry.npm.taobao.org

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
