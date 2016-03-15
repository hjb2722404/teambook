# Teambook前端环境搭建

前端框架使用Yeoman搭建，使用generator-angular生成app基本骨架，使用bower管理依赖，使用gulp进行构建。以上组件全部基于node服务。

## node环境搭建

### 安装nvm－－node版本管理工具

终端输入：

```
# wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
```
激活nvm:

```
# . ~/.nvm/nvm.sh
```

### 安装node

列出远程服务器上可用的node版本：

```
#  nvm list-remote
```

安装需要的版本：（本项目统一使用v4.3.1版本）

```
#  nvm install v4.3.1
```

验证，列出本地可用node版本：

```
#   nvm list
```
如果有多个版本，切换至4.3.1:

```
# nvm use v4.3.1
```

检查当前node版本：

```
# node -v
```
如果控制台输出4.3.1，则说明安装成功。

### 安装必要组件:bower,gulp

```
# npm install --global  bower gulp
```

至此，前端环境搭建完成。

# 安装依赖
```
# npm install
# bower install
```
# 运行
```
# gulp server 
# gulp build
```
