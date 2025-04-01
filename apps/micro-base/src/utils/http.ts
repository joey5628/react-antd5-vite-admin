import Http from '@toy/http';

const httpClient = Http.getInstance({
    baseUrl: 'https://api.example.com',
    statusHandlers: {
        403: (res) => {
            console.warn('无权限访问', res.headers['x-auth-role']);
            // router.navigate('/login'); // 自动跳转登录
        },
        // 429: (res) => {
        //     // const retryAfter = res.headers['retry-after'] || 5;
        //     // setTimeout(refreshToken, retryAfter * 1000); // 自动重试
        // },
    },
});

httpClient.test();

export default httpClient;
