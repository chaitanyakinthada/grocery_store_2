import { Button, Container, Nav, Navbar as Navbarbs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"




import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Logout } from '../pages/Logout';


export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
     const [isOpen, setIsOpen] = useState(false);
    return (
        <Navbarbs sticky="top" className="border-gray-600 text-white shadow-sm" style={{backgroundColor: "#4c4c4c", height: '60px', position:"relative" }}>
            <Container>
                <Nav className="flex items-center">
                    <Nav.Link to = "/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to = "/Store" as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to = "/About" as={NavLink}>
                        About
                    </Nav.Link>
                    
                </Nav>
                <div className="flex-grow mx-6">
                        <input type="text" placeholder="Search..." className="w-full bg-gray-800 text-black placeholder-gray-400 px-4 py-2 rounded-md focus:outline-none" />
                </div>
                <div className="flex items-center gap-4">
                
                
                {/* <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                    <DropdownMenuTrigger className="bg-gray-800 text-black px-4 py-2 rounded-md">
                        selectedProduct
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-gray-800 text-black mt-2">
                        <DropdownMenuItem>Product 1</DropdownMenuItem>
                        <DropdownMenuItem>Product 2</DropdownMenuItem>
                        <DropdownMenuItem>Product 3</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu> */}
                {isLoggedIn ? (
                    <a href="/Logout" className="flex items-center gap-1 text-gray hover:text-white" style={{paddingRight:"10px"}}>
                    <User size={18} /> Logout
                    </a>
                ):(
                    <>
                    <a href="/Login" className="flex items-center gap-1 text-gray hover:text-white" style={{paddingRight:"10px"}}>
                    <User size={18} /> Login
                    </a>
                    <a href="/SignUp" className="flex items-center gap-1 text-gray hover:text-white">
                        <User size={18} />  SignUp
                    
                    </a>
                    </>
                )}
                    </div>
                {cartQuantity > 0 &&
              
            


                 (
                <Button 
                    onClick={openCart}
                    style={ {width: "3rem", height: "3rem", position: "relative"} }
                    variant="outline-primary" 
                    className="rounded-circle"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="currentColor"
                    >
                        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                    </svg>
                    
                    <div 
                        className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
                        style={{ 
                            color: "white", 
                            width:'1.5rem', 
                            height:'1.5rem', 
                            position: "absolute", 
                            bottom: 0, 
                            right: 0,
                            transform: "translate(25%, 25%)" 
                        }}
                    >
                        {cartQuantity}
                    </div>
                </Button>
                )}
            </Container>
        </Navbarbs>
    )
}