import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface GlobalState {
    theme: 'dark' | 'light';
}

export const useGlobalStore = create<GlobalState>()(
    devtools(
        persist(
            (set) => ({
                theme: 'dark',
                toggleTheme: () =>
                    set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
            }),
            {
                name: 'global',
            }
        )
    )
);
