import axios from "axios"

const GITHUBURL = process.env.REACT_APP_GITHUBURL
const GITHUBTOKEN = process.env.REACT_APP_GITHUBTOKEN

const github = axios.create({
    baseURL: GITHUBURL,
    headers: {Authorization: `token ${GITHUBTOKEN}`}
})

// get user and repos

export const getUserAndRepos = async (login) => {
    const params = new URLSearchParams({
            sort: "created",
            per_page: 10
        })
    
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?${params}`)
    ])

    return {user: user.data, repos: repos.data}
}


// Search for users
export const searchUsers = async (searchQuery) => {
        const params = new URLSearchParams({
            q: searchQuery
        })

        const response = await github.get(`/search/users?${params}`)
        return response.data.items
    }
