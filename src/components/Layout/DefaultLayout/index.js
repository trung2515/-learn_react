import Header from "./Header";
import Sidebar from "./Sidebar";

function DefaultLayout({children}) {
    return ( 
        <>
        <Header/>
        <div className="">
            <Sidebar/>
            <div>{children}</div>
        </div>
        </>
     );
}

export default DefaultLayout;