"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type FilebarProps={
    openFileBar : boolean;
    toggleFileBar: () => void
}
export const FilebarContext = createContext<FilebarProps>({
    openFileBar: true,
    toggleFileBar: () => {}
});

export const FilebarProvider: React.FC<{children: ReactNode}> = ({children}) =>{
    const [openFileBar, setOpenFilebar] = useState<boolean>(true);

    const toggleFileBar =  () =>{
        setOpenFilebar((prevState) => !prevState);
    }

    return(
        <FilebarContext.Provider value={{openFileBar, toggleFileBar}}>{children}</FilebarContext.Provider>
    )
}

export const useFilebar = () => useContext(FilebarContext);