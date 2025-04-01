import Mock from 'mockjs';
import loginMock from './login';

Mock.mock(/\/login/, 'post', loginMock.login);
Mock.mock(/\/logout/, 'post', loginMock.logout);

export default Mock;
