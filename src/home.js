const Home = () => {
    return ( 
        <div className="box">
            <nav className="home">
                <h1>LOGO</h1>
                
            </nav>

               <div className="input">
                   <form action="">
                       <label className="label" htmlFor="">Name:</label><br /><input className="inp" type="name" placeholder="Enter your name"  /><br />
                       <label  className="label"htmlFor="">Password:</label><br /><input className="inp" type="password" placeholder="Enter your password" /><br />
                       <a className="a" href="">Forgot Password?</a><br />
                       <button> <a href="http://localhost:3000/add">log in</a></button>
                   </form>

                   <div className="sideline">

                   </div>

                   <div className="header">
                       <h1>WELCOME</h1>
                   </div>


               </div>


        </div>
     );
}
 
export default Home;