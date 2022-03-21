import {useContext} from "react"
import githubContext from "../../context/github/GithubContext";

import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

function UserResults(){
    const { users, loading} = useContext(githubContext)

    if(!loading){        
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
                {users.map((user, index) => {
                    return (
                        <UserItem key={user.id} user={user}/>
                    )
                })}
            </div>
        )
    }else{
        return (
            <Spinner />
        )
    }
}

export default UserResults

