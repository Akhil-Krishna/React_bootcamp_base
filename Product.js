function Product(props){
    return (
        
        <section className="Product">
            <img className="myimg" src={props.image} alt="image"/>
            <h5>{props.name}</h5>
            <p>{props.price}</p>
        </section>
        
    )
}

export default Product