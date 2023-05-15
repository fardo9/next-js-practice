import { Box } from "@mui/material"
import Head from "next/head"
import Header from "../../components/HeaderComponent/Header"

const MainContainer = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <Header />

            <Box sx={{ mx: 4, my: 4}}>
                {children}
            </Box>
        </>
    )
}

export default MainContainer