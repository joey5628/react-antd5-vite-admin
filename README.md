## Dockerfile

不能再Monorepo 单个项目中运行 Dockerfile，此时的Docker 环境仅有当前子目录，导致确认父目录的代码和依赖，运行build时会缺包。

所以可能还是需要把整个monorepo 仓库作为一个整体来构建

## TODO List

- [ ] 主应用和子应用之间的通信方式
    > 可以在写一个Demo页面，子应用给主应用发消息，通过主应用message展示出来。主应用给子应用发消息，在子应用页面展示。 需要和 zustand 结合起来使用才真实意义。
- [ ] zustand 的使用示例
    > 以一个获取userInfo 为示例
- [ ] Mock能力接入
