# NodeTS LeanCloud

基于 [Koa][1]、[TypeScript][2]、[Swagger][3] 和 [LeanCloud][4] 的 **Node.js 后端**项目脚手架

[![NPM Dependency](https://david-dm.org/TechQuery/NodeTS-LeanCloud.svg)][5]
[![CI & CD](https://github.com/TechQuery/NodeTS-LeanCloud/workflows/CI%20&%20CD/badge.svg)][6]

## 主要特性

1. [LeanCloud 手机短信验证码登录](source/controller/Session.ts)
2. [用户管理](source/controller/User.ts)

## 环境变量

|     变量名     |         作用         |
| :------------: | :------------------: |
| `ROOT_ACCOUNT` | 超级管理员（手机号） |

## 本地开发

1. 注册 [LeanCloud][3] 账号

2. 安装 [LeanCloud CLI](https://leancloud.cn/docs/leanengine_cli.html#hash1443149115)

3. 安装 [Node.js](https://nodejs.org/en/download/package-manager/)

4. `git clone https://github.com/TechQuery/NodeTS-LeanCloud.git`

5. 在本项目文件夹执行安装命令，并登录 LeanCloud 账号，再切换到本应用后启动

```shell
npm install

lean login
lean switch
lean up
```

6. 建议安装 [NIM 调试扩展](https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj)

[1]: https://koajs.com/
[2]: https://www.typescriptlang.org/
[3]: https://swagger.io/
[4]: https://leancloud.cn/
[5]: https://david-dm.org/TechQuery/NodeTS-LeanCloud
[6]: https://github.com/TechQuery/NodeTS-LeanCloud/actions
