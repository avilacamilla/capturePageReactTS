import React, { createContext, useState, ReactNode, useContext } from 'react';

interface UserProps {
    name: string;
    email: string;
}

interface UserContextProps {
    user: UserProps;
    setUser: (user: UserProps) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserProps>({ name: '', email: ''});

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}