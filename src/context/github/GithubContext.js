import { createContext, useReducer } from "react";
import GithubReducer from "./GitHubReducers";

const githubContext = createContext()

export function GithubContextProvider({children}){
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)
    
    return (
        <githubContext.Provider value={{
            ...state,
            dispatch,
        }}>
            {children}
        </githubContext.Provider>
    )
}

export default githubContext