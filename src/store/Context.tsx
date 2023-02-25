import { createContext, FC, PropsWithChildren, useContext } from "react";
import { ContextType } from "./ContextType";
import { InicialState } from './InitialState'

const AdminContext = createContext<ContextType>({} as ContextType);
export const AdminConsumer = () => useContext(AdminContext)

const AdminProvider: FC<PropsWithChildren> = ({children}) => (
    <AdminContext.Provider value={InicialState}>
			{children}
		</AdminContext.Provider>
);

export default AdminProvider;
