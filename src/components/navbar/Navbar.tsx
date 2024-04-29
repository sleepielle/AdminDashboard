import "./navbar.scss"

const Navbar =()=> {
    return (
        <div className="navbar">

        <div className="logo">
           <img src="logo.svg" alt="" />
           <span>meche.admin</span>
           </div>

           <div className="icons">
             <img src="/search.svg" alt="" className="icon"/>
             <img src="/app.svg" alt="" className="icon" />
             <img src="expand.svg" alt="" className="icon" />
             <div className="notification">
                <img src="/notifications.svg" alt="" />
                <span>1</span>
             </div>

             <div className="user">
                <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <span>Mercedes</span>
             </div>

             <img src="/settings.svg" alt="" className="icon" />
           </div>
        </div>
    );
}

export default Navbar;