import Http from '@/utils/http';

export function login(data: any) {
    return Http.post('/login', data);
}

export function logout(data: any) {
    return Http.post('/logout', data);
}
