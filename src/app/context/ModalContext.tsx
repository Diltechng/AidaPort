"use client";
import React, { createContext,ReactNode, useContext, useState } from "react";

interface ModalProps {
 openModal: (content: ReactNode) => void;
 closeModal: () => void;
modalContent: ReactNode | null;
isOpen: boolean;
//children?: ReactNode;
}
const ModalContext =createContext<ModalProps | undefined> (undefined)

export const ModalProvider: React.FC<{children: ReactNode}> = ({children}) =>{
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    const openModal = (content: ReactNode) =>{
        
       setModalContent(content);
        setIsOpen(true);
    }

    const closeModal = () =>{
        setModalContent(null);
        setIsOpen(false);
    }

    const stopPropagation = (e: React.MouseEvent) =>{
        e.stopPropagation();
    }

    return(
        <ModalContext.Provider value={{isOpen, modalContent, openModal, closeModal}}>
            {children}
            {isOpen &&
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm transition-opacity duration-300" onClick={closeModal}>
                    <div className="relative p-2 rounded-lg bg-white shadow-sm" onClick={stopPropagation}>
                        {modalContent}
                        <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
                        <button className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={closeModal} type="button">Close</button>
                    </div>
                    </div>
                   
                </div>
            }
        </ModalContext.Provider>
    )
}
export const useModal = () => {
    const context = useContext(ModalContext);
  if (!context) {
    console.log('error')
}
  return context;
};