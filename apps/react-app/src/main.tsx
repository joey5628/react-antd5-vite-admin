import '@ant-design/v5-patch-for-react-19';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import 'antd/dist/reset.css';
// import './index.css';
import App from './App.tsx';
// import microApp from '@micro-zoe/micro-app';

// microApp.start({
//     // 'router-mode': 'native',
//     lifeCycles: {
//         created() {
//             console.log('created 全局监听');
//         },
//         beforemount() {
//             console.log('beforemount 全局监听');
//         },
//         mounted() {
//             console.log('mounted 全局监听');
//         },
//         unmount() {
//             console.log('unmount 全局监听');
//         },
//         error() {
//             console.log('error 全局监听');
//         },
//     },
// });

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);

// import { StrictMode } from 'react';
// import { createRoot, Root } from 'react-dom/client';
// import './index.css';
// import App from './App.tsx';
// import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

// // let root: Root;
// // // some code
// // renderWithQiankun({
// //     mount() {
// //         console.log('mount');
// //         root = createRoot(document.getElementById('root')!);
// //         root.render(
// //             <StrictMode>
// //                 <App />
// //             </StrictMode>
// //         );
// //     },
// //     bootstrap() {
// //         console.log('bootstrap');
// //     },
// //     unmount() {
// //         root.unmount();
// //     },
// //     update: function (): void | Promise<void> {
// //         throw new Error('Function not implemented.');
// //     },
// // });

// // // @ts-ignore
// // if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
// //     createRoot(document.getElementById('root')!).render(
// //         <StrictMode>
// //             <App />
// //         </StrictMode>
// //     );
// // }

// // let root: Root;

// // const render = (container?: any) => {
// //     // 如果是在主应用的环境下就挂载主应用的节点，否则挂载到本地
// //     const appDom = container ? container.querySelector('#root') : document.getElementById('root');
// //     root = createRoot(appDom);
// //     root.render(
// //         <StrictMode>
// //             <App />
// //         </StrictMode>
// //     );
// // };

// // renderWithQiankun({
// //     mount(props: any) {
// //         render(props.container);
// //         //  可以通过props读取主应用的参数：msg
// //         // 监听主应用传值
// //         props.onGlobalStateChange((res: any) => {
// //             console.log('onGlobalStateChange---', res);
// //         });
// //     },
// //     bootstrap() {},
// //     unmount() {
// //         root.unmount();
// //     },
// //     update() {},
// // });

// // // 判断当前应用是否在主应用中
// // // @ts-ignore
// // if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
// //     render();
// // }
