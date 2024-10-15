
import { CategoryValues } from '../components/types';
import https from './config'
const category = {
    create: (values: CategoryValues) => https.post("/category/create", values ),
    get: (params: any) => https.get("/category/search", {params}),
    update:  (id: number, values: CategoryValues) => https.patch(`/category/update/${values}`),
    delete: (id: number) => https.delete(`/category/delete/${id}`),
};
export default category 
