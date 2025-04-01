import axios, { AxiosInstance, CancelTokenSource, AxiosResponse } from 'axios';

interface HttpClientConfig {
    baseUrl: string;
    timeout?: number;
    statusHandlers?: Record<number, (response: AxiosResponse) => void>;
}

// 定义标准响应格式
interface ApiResponse<T> {
    code: number;
    message: string;
    data: T;
}

class Http {
    private static instance: Http | null;
    private axiosInstance: AxiosInstance;
    private cancelTokenSources: Map<string, CancelTokenSource> = new Map();

    // 私有构造函数实现单例
    private constructor(config: HttpClientConfig) {
        this.axiosInstance = axios.create({
            baseURL: config.baseUrl,
            timeout: config.timeout || 10000,
            headers: { 'Content-Type': 'application/json' },
        });

        this.axiosInstance.interceptors.response.use(
            (response) => {
                const statusCode = response.status;
                // 执行自定义状态码处理
                if (config.statusHandlers?.[statusCode]) {
                    config.statusHandlers[statusCode](response);
                }
                return response.data;
            },
            (error) => {
                const status = error.response?.status;
                // 统一错误处理扩展
                if (status && config.statusHandlers?.[status]) {
                    config.statusHandlers[status](error.response);
                    return Promise.resolve(); // 中断错误传播
                }
                return Promise.reject(error);
            }
        );
    }

    // 获取单例实例
    public static getInstance(config: HttpClientConfig): Http {
        if (!Http.instance) {
            Http.instance = new Http(config);
        }
        return Http.instance;
    }

    // 销毁实例（用于测试环境）
    public static destroy(): void {
        Http.instance = null;
    }

    // GET 请求方法
    /** GET 请求方法
     * TODO 应该把params 拼接在url中
     */
    public async get<T = any>(
        url: string,
        params?: Record<string, unknown>,
        cancelKey?: string // 新增取消令牌标识
    ): Promise<ApiResponse<T>> {
        const source = cancelKey ? this.createCancelToken(cancelKey) : undefined;
        return this.axiosInstance.get(url, {
            ...params,
            cancelToken: source?.token, // 绑定取消令牌
        });
    }

    // POST 请求方法
    public async post<T = any>(
        url: string,
        params?: Record<string, unknown>,
        cancelKey?: string
    ): Promise<ApiResponse<T>> {
        const source = cancelKey ? this.createCancelToken(cancelKey) : undefined;
        return this.axiosInstance.post(url, {
            ...params,
            cancelToken: source?.token,
        });
    }

    // 添加取消令牌
    public createCancelToken(key: string): CancelTokenSource {
        const source = axios.CancelToken.source();
        this.cancelTokenSources.set(key, source);
        return source;
    }

    // 取消指定请求
    public cancelRequest(key: string): void {
        const source = this.cancelTokenSources.get(key);
        if (source) {
            source.cancel('Request canceled by user');
            this.cancelTokenSources.delete(key);
        }
    }

    public test() {
        console.log('http test Hello!');
    }
}

export default Http;
