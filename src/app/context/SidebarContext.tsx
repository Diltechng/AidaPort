"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type ISidebarContext={
    openSidebar: boolean;
    toggleSidebar: () => void;
    stopPropagation: (e:React.MouseEvent) => void
}
export const SidebarContext = createContext<ISidebarContext>({
    openSidebar: false,
    toggleSidebar: () => {},
    stopPropagation: () =>{},
});

export const SidebarProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);

    const toggleSidebar = () =>{ 
        setOpenSidebar((prevState) => !prevState)
    };

    const stopPropagation = (e: React.MouseEvent) =>{
            e.stopPropagation();
        }
    return (
        <SidebarContext.Provider value={{ openSidebar, toggleSidebar, stopPropagation }}>
            {children}
        </SidebarContext.Provider>
    );
}
export const useSidebar = () => useContext(SidebarContext);
