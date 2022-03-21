import {useState, useContext} from "react"
import githubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"
import {searchUsers} from "../../context/github/GithubActions"

function UserSearch(){
    const {users, dispatch} = useContext(githubContext)
    const {setAlert} = useContext(AlertContext)
    const [searchText, setSearchText] = useState("")
    
    const handleOnChange = (e)=>{
        setSearchText(e.target.value)
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()

        if(searchText === ""){
            setAlert("Please enter something", "error")
        }else{
            dispatch({type: "SET_LOADING"})
            const users = await searchUsers(searchText)
            dispatch({
                type:"GET_USERS", 
                payload: users
            }) 
            setSearchText("")
        }
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleOnSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input  type="text" 
                                    className="w-full pr-40 bg-gray-200 input input-lg text-black"
                                    placeholder="Search"
                                    value={searchText}
                                    onChange={handleOnChange}    
                            />
                            <button type="submit"
                                    className="absolute top-0 right-0 rounded-l-none btn btn-lg">Go</button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <div>
                    <button className="btn btn-ghost btn-lg" onClick={() => dispatch({type:"CLEAR_USERS"})}>Clear</button>
                </div>
            )}
        </div>
    )
};

export default UserSearch