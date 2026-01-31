import { create } from 'zustand';

interface AuthState {
    isOpen: boolean;
    openAuth: () => void;
    closeAuth: () => void;
}

export const useAuth = create<AuthState>((set) => ({
    isOpen: false,
    openAuth: () => set({ isOpen: true }),
    closeAuth: () => set({ isOpen: false }),
}));
