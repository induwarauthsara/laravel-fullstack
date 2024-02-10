import { CreateContex } from 'react';

const StateContext = CreateContex({
    CurrentUser: null,
    token: null,

});

export default StateContex = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, _setToken] = useState(null);

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }
}

    return (
        <StateContext.Provider value={{

         }}>
            {children}
        </StateContext.Provider>
    );
}
