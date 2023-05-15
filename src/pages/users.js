import { Box, Typography } from "@mui/material"
import Link from "next/link"
import MainContainer from "../containers/MainContainer/MainContainer"

const Users = ({ users }) => {
    return (
      <MainContainer title={'User'}>
        <Typography variant="h5" mb={3}>Users List</Typography>
        <Box flexDirection={'column'} display='flex'>
            {users.map((user, idx) => (
                <Link key={idx} href={`/users/${user.id}`} style={{ marginBottom: '8px', textDecoration: 'none'}}>{user.name}</Link>
            ))}
        </Box>
      </MainContainer>
    )
}

export default Users
  

export const getServerSideProps = async ({ params }) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users') 
    const users = await res.json()
    return { props: { users } };
}

