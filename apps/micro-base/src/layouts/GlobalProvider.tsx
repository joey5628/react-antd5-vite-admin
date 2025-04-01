// src/layouts/GlobalProvider.tsx
import { App } from 'antd';
import { MessageContext } from '@/contexts/messageContext';

export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
    const context = App.useApp();

    return (
        <App>
            <MessageContext.Provider value={context.message}>{children}</MessageContext.Provider>
        </App>
    );
};
