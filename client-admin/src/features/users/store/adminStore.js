import {create} from 'zustand';
import { getFields as getFieldsRequest } from '../../../shared/apis';

export const useFieldStore = create((set) => ({
    fields: [],
    loading: false,
    error: null,    

    getFields: async () => {
        try {
            set({ loading: true, error: null });
            const { data } = await getFieldsRequest();
            set({ fields: data.fields, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    }
}));