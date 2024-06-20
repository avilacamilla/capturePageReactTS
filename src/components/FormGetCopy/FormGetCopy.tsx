import { Input } from '@mui/material';
import { useUser } from '../../context/UserContext';
import './formGetCopy.css';


export function FormGetCopy() {
    const { user, setUser } = useUser();

    const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value});
    }
   
    return (
        <div className="formGetCopy-container">
            <Input 
                placeholder="Seu nome"
                classes={{ root: 'input-styles' }}
                value={user.name}
                onChange={changeInputValue}
            />
            <Input 
                placeholder="Seu melhor e-mail"
                classes={{ root: 'input-styles' }}
                value={user.email}
                onChange={changeInputValue}
            />
        </div>
    );
};