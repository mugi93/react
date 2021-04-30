import React from "react";


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "../../public/item.png"
        }
    }
    componentDidMount() {
        fetch("https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/" + this.props.productName)
            .then(res => res.blob())
            .then(image => {
                const pic = URL.createObjectURL(image)
                this.setState({
                    image: pic
                })
            })


    }
    render() {

        return (
            <div>
                <button onClick={()=>this.props.onClick(this.props.price, this.props.productName)}>{this.state.image}</button>




            </div>
        )
    }

}
export default Card