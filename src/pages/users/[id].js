import { Typography } from "@mui/material"
import { useRouter } from "next/router"
import MainContainer from "../../containers/MainContainer/MainContainer"

const User = ({ user }) => {
    console.log('iuse', user)
    const { query } = useRouter()
    return (
        <MainContainer title={`User - ${user.name}`}>
            <Typography variant="h4" my={4}>{user.name} </Typography>
            <div>User id : {query.id} </div>
        </MainContainer>
    )
}

export default User

export const getServerSideProps = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`) 
    const user = await res.json()
    return { 
        props: { user } 
    };
}