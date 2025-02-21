
 import  React  from "react";
 import "./footer.css";  
 
 const Footer: React.FC = () => {
   return (
     <footer className="footer">
       <div className="footer-content">
            <div className="footer-categories">
                <h4 style={{marginBottom: "10px"}}>Categories</h4>
                <div className="footer-categories">
                    <ul>
                        <li><a href="#">Fruits</a></li>
                        <li><a href="#">Rice & Grains</a></li>
                        <li><a href="#">Oil</a></li>
                        <li><a href="#">Dry Fruits</a></li>
                        <li><a href="#">Sweet Cravings</a></li>
                        <li><a href="#">Frozen Food and Ice creams</a></li>
                        <li><a href="#">Vegetables</a></li>
                    </ul>
                </div>
                </div>
                <div className="footer-categories">
                <h4 style={{marginBottom: "10px"}}> </h4>
                <br />
                <div className="footer-categories2">
                    <ul>
                        
                        <li><a href="/src/components/Category/CategoryDetail.tsx">Dairy, Bread & Eggs</a></li>
                        <li><a href="#">Beverages</a></li>
                        <li><a href="#">Munchies</a></li>
                        <li><a href="#">Meat</a></li>
                        <li><a href="#">Breakfast</a></li>
                        <li><a href="#">Snacks</a></li>
                        <li><a href="#">Sauces</a></li>
             
             
                    </ul>
                </div>
            </div>
            <div className="footer-divider"></div> {/* Vertical Line */}

            <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Delivery Areas</a></li>
                <li><a href="#">Customer Support</a></li>
            </ul>
            </div>
    
            <div className="footer-social">
            <h4>Follow Us</h4>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
            </div>
        </div>
 
       <div className="footer-bottom">
         <p>&copy; 2025 </p>
       </div>
     </footer>
   );
 };
 
 export default Footer;
 