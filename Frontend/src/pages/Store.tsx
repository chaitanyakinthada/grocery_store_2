import { Col, Row } from "react-bootstrap"
import storeItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"
import Categories from "../components/Categories"
import Footer from "../components/Footer/Footer"


export function Store() {
    return (
        <>
            <h1>Store</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
            <Categories />
            
            </Row>
            <Footer/>
        </>
    )
}