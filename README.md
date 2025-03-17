## Dockerfile

不能再Monorepo 单个项目中运行 Dockerfile，此时的Docker 环境仅有当前子目录，导致确认父目录的代码和依赖，运行build时会缺包。

所以可能还是需要把整个monorepo 仓库作为一个整体来构建
