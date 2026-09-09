import { create } from 'zustand';
import api from '../Axios/api';


const useContactStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,

  addEnquiry: async (payload) => {
    set({ isLoading: true, error: null });
    console.log(payload)
    try {
      const response = await api.post('/instaConnect/addEnquiry', payload);
      return response;
    } catch (error) {
      console.log(error);
      set({ error });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

 

}));

export default useContactStore;
