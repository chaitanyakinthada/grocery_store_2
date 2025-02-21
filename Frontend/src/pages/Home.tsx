    import Categories from "../components/Categories.tsx";
import Footer from "../components/Footer/Footer.tsx";


export function Home() {
    return (
        <>
        <body style={{width: "100%", margin:"0"}}>
            <section 
                    className="d-flex align-items-center flex-column align-content-center bonus-badge" 
                    style={{
                        alignContent: "center",
                        backgroundColor: "#ff56aa",
                        // marginTop: '5%'
                        // margin: "5%",
                        // alignItems: "center",
                        // margin: "1rem 0",
                        width: "100%",
                    }}>
                    <h1>Your one-stop app for all your needs.</h1>
                    <a href="/signup" className="bonus-badge"  
                    style={{
                        backgroundColor : "#ffcc00",
                        color: "#07adfe", 
                        padding: "0.5rem 1rem", 
                        borderRadius: "20px", 
                        display: "inline-block", 
                        margin: "1rem 0", 
                        fontWeight : "bold",
                        alignContent: "center",
                    }}>
                        Sign Up
                    </a>
                    <p></p>
                    {/* <a href="#signup" className="cta-button">Apply Now →</a> */}
            </section>
            <div style={{width:"100%" , margin:"0"}}>
                <Categories />
                <Footer />
            </div>
        </body>
            
        
        </>
    )
    
}


