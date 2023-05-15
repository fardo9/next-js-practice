import { Typography } from "@mui/material"
import MainContainer from "../containers/MainContainer/MainContainer"

const Error = () => {
  return (
    <MainContainer>
        <Typography variant="h3" sx={{ textAlign: 'center', width: '100%', mt: 4 }}>404 Error Page</Typography>
    </MainContainer>
  )
}

export default Error