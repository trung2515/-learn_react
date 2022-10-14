import Header from "./Header";


function HeaderOnly({children}) {
    return ( 
        <>
        <Header/>
        <div className="">
         
            <div>{children}</div>
        </div>
        </>
     );
}

export default HeaderOnly;