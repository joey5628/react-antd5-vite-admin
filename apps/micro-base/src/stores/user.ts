import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserInfo = Record<string, any> | null;

interface UserState {
    userInfo: UserInfo;
    setUserInfo: (userInfo: UserInfo) => void;
}

const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            userInfo: null,
            setUserInfo: (userInfo: UserInfo) => set({ userInfo }),
        }),
        {
            name: 'userInfo',
        }
    )
);

export default useUserStore;
