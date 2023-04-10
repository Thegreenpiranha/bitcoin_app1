import { Link }  from 'react-router-dom';
   
   const Navbar = () => {
        return ( 
            <nav className="navbar">

                <h1>Bitcoin</h1>
                <h2>∞/21 million</h2>

                <div className="links">
                    
                    <Link to="/"style={{
                        color: "white",
                        backgroundColor: '#FF8C00',
                        borderRadius: '5px'

                    }}>Home</ Link>

                    <Link to="/bitcoin" style={{
                        color: "white",
                        backgroundColor: '#FF8C00',
                        borderRadius: '5px',

                    }}>Bitcoin</ Link>

                    <Link to="/bitcoinadvanced" style={{
                        color: "white",
                        backgroundColor: '#FF8C00',
                        borderRadius: '5px',
                        
                    }}>Bitcoin Advanced</ Link>
                    
                </div>
            </nav>
            
        );
    }
    
    export default Navbar;