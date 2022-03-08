import Nav from "./Nav";
import Head from "next/head";
import HeadInfo from "./HeadInfo";

const Layout = ({children}) => {
    return(
        <>
            <HeadInfo/>
            <Nav/>
            <div>
                {children}
            </div>
        </>
    )
}
export default Layout;