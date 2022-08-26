import React, {createContext, useContext} from 'react';


export const userContext = createContext({});

const mockUser  ={
    name: "David"
}

export const UserProvider = ({children})=>(
    <userContext.Provider value={mockUser}>
        {children}
    </userContext.Provider>
)


export const useUser = ()=>useContext(userContext);
