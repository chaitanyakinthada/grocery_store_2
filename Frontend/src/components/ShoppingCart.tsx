import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart, ShoppingCartProvider } from '../context/ShoppingCartContext';
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from '../data/items.json';
import { useNavigate } from "react-router-dom"

type ShoppingCartProps = {
    isOpen: boolean;
}

export function ShoppingCart({ isOpen }: ShoppingCartProps){
    const { closeCart, cartItems }= useShoppingCart()
    const navigate = useNavigate();
    const handleCheckout = () => {
        closeCart(); // Close the cart
        
        navigate("/checkout"); // Redirect to the checkout page
      };
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                    <CartItem key={item.id} {...item}/>))
                    }
                    <div className="ms-auto fw-bold fs-5">
                        Total {" "} 
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(i => i.id === 
                            cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)
                        )}
                    </div>
                </Stack>

            </Offcanvas.Body>
            <div>
            
            <button 
            // variant="primary"
            // size="sm"
            className="button-css"
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                backgroundColor: "#FFA500",
                color: "white",
                padding: "10px 20px",
            }}
            onClick={handleCheckout} // Trigger checkout on click
            >
            Checkout
            </button>
        </div>
        </Offcanvas>
    )
}