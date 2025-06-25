import { create } from "zustand";

interface IAuthState {
  userId: string | null;
  error: string | false;
  loading: boolean;
  setUserId: (userId: string) => void;
  clearUserId: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | false) => void;
}

const useAuthStore = create<IAuthState>((set) => ({
  userId: localStorage.getItem("userId") || null,
  loading: false,
  error: false,

  setUserId: (userId: string) => {
    localStorage.setItem("userId", userId);
    set({ userId, loading: false, error: false });
  },

  clearUserId: () => {
    localStorage.removeItem("userId");
    set({ userId: null, loading: false, error: false });
  },

  setLoading: (loading: boolean) => set({ loading }),

  setError: (error: string | false) => set({ error }),
}));

export default useAuthStore;
