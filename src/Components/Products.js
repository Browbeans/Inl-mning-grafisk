import "../style/layout.css"
import shirt1 from "../assets/shirt.jpg"
import shirt2 from "../assets/shirt2.jpg"
import shirt3 from "../assets/shirt3.jpg"

function Products() {
    return (
        <div className="product-container">
        <div className="product">
            <div className="product-image">
                <img src={shirt1} alt="sdas"></img>
            </div>
            <div className="product-info">
                <h3>Stronk tee 499:-</h3>
            </div>
        </div>
        <div className="product">
            <div className="product-image">
                <img src={shirt2} alt="sdad"></img>
            </div>
            <div className="product-info">
                <h3>Trunk tee 399:-</h3>
            </div>
        </div>
        <div className="product">
            <div className="product-image">
            <img src={shirt3} alt="sdad"></img>
            </div>
            <div className="product-info">
                <h3>Print tee 129:-</h3>
            </div>
        </div>
        </div>
    )
}

export default Products