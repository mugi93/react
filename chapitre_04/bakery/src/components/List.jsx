import React from "react";
class List extends React.Component {
    constructor(props) {
        super(props);
        this.delete=this.delete.bind(this)
        
    }
   delete(){
      (this.props.list).filter(function(elem){
           return this.props.list=[]
       })
   }
//    rendercondi(){
//     if (this.props.list.lenght===0){
//        return (
//             <h1>NO ITEMS ARE AVAILABLE</h1>
//         )
//     }else{ 
//         return(
//             <div>
//                 <div className="border border-primary col-5">
//                 <ul style={{listStyle:"none"}} >
//                 {this.props.list.map((elem) => <li>{elem.name} {elem.price} <button className="btn btn-primary" onClick={this.delete}>supprimer</button></li>)}</ul>
//                 </div>
               
                
                
//             </div>
//         )
//     }
// }
    render(){
        return(
                        <div>
                            <div className="border border-primary col-5">
                            <ul style={{listStyle:"none"}} >
                            {this.props.list.map((elem) => <li>{elem.name} {elem.price} <button className="btn btn-primary" onClick={this.delete}>supprimer</button></li>)}</ul>
                            </div>
                           
                            
                            
                        </div>
                    )



        // const ul=this.props.list.map(function(name,price){
        //     return <li>{name}{price}</li>{this.ul}
        //  })
        //  return(
        //      <div>
        //          {this.rendercondi()}
        //      </div>
        //  )
        
    }

}
export default List