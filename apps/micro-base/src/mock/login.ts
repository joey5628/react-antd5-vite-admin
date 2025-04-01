const userInfo = {
    admin: {
        id: 'admin',
        role: 'admin',
        name: 'Joey',
        avatar: 'https://avatars.githubusercontent.com/u/7664160?v=4&size=64',
        description: '管理员权限',
    },
    guest: {
        id: 'guest',
        role: 'guest',
        name: 'Joey Guest',
        avatar: 'https://avatars.githubusercontent.com/u/7664160?v=4&size=64',
        description: '访客权限',
    },
};

export default {
    login: (params: any) => {
        console.log('params----:', params);
        const { username } = JSON.parse(params.body);
        console.log('username----:', username);
        // @ts-ignore
        const token = userInfo[username as string];
        if (!token) {
            return {
                code: 1,
                message: '用户名或密码错误',
            };
        }
        return {
            code: 0,
            token,
        };
    },

    logout: () => {
        return {
            code: 0,
            message: 'success',
        };
    },
};
