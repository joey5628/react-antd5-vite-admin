// // src/contexts/messageContext.ts
// import { createContext, useContext } from 'react';
// import type { MessageInstance } from 'antd/es/message/interface';

// export const MessageContext = createContext<MessageInstance | null>(null);

// export const useMessage = () => {
//     const message = useContext(MessageContext);
//     if (!message) throw new Error('请确保组件包裹在 GlobalProvider 中');
//     return message;
// };

// Entry component
import { App } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';
import type { ModalStaticFunctions } from 'antd/es/modal/confirm';
import type { NotificationInstance } from 'antd/es/notification/interface';

let message: MessageInstance;
let notification: NotificationInstance;
let modal: Omit<ModalStaticFunctions, 'warn'>;

export default () => {
    const staticFunction = App.useApp();
    message = staticFunction.message;
    modal = staticFunction.modal;
    notification = staticFunction.notification;
    return null;
};

export { message, notification, modal };
