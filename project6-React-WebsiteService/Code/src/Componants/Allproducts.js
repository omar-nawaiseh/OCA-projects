import React, { Component } from 'react'
import '../Css/Allproducts.css';
import uuid from "uuid";
import swal from 'sweetalert'

const Roaa =()=>{
    swal({
        title: "Rent Book!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
      })}
export class Allproducts extends Component {
   
    constructor(props) {
        super(props)
    
       this.input=React.createRef()
       this.state={
           list:[],
          }
    }

  
    addTask=(id,name)=>{
    Roaa();
        const Items={
                // id:uuid.v4(),

                id:id,
                firsName:name,
                Date: new Date().toUTCString(),
                

            };

            console.log(id);
    
            if(localStorage.getItem('list')==null){
                const list=[]
                list.push(Items);
                localStorage.setItem("list",JSON.stringify(list))
            }
            else{
                const list=JSON.parse(localStorage.getItem('list'))
                list.push(Items)
                localStorage.setItem("list",JSON.stringify(list))
            }
            this.setState({
                list:JSON.parse(localStorage.getItem('list'))
            });
        }


        // componentDidMount() {
        //     const list = window.localStorage.getItem('list');
        //     const parsedList = JSON.parse(list);
        //     if(list == null){
        //         return false
        //     }
        //     else{
        //         this.setState({
        //             list: parsedList,
        //         })
        //         console.log(this.state.list);
        //     }
        // }
        

    render() {

        const {product} = this.props;
        const theproduct = product.map((pro) =>  {
            return (

             

                <div className="col-md-6">
                       <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
               <strong className="d-inline-block mb-2  namecolors">{pro.name}</strong>
              
               <p className="card-text mb-auto desccolors">{pro.desc}.</p>
               <button className="btn  btn-sm btnbooks"onClick={()=>this.addTask(pro.id,pro.name)}  href="http://www.jquery2dotnet.com/">Booking Book</button>
            </div>
            <img className="card-img-right flex-auto d-none d-lg-block imagesize" alt="Thumbnail [200x250]" src={pro.image} />
            </div>
                </div>
     

           
             
                // <figure classNameName="snip1171">
                // <img src={pro.image} alt="sample71"/>
                //  <div classNameName="price">{pro.price}</div> 
                // <figcaption>
                //     <h3>{pro.name}</h3>
                //     <p>
                //         {pro.name}
                //     {pro.desc}
                    
                //     </p>
                //     <a href="#">Booking Book</a>
                // </figcaption>
                // </figure>





            )
        })

        

        return (
            <div><p className ="titlebook">Our Books</p>
             {/* <div classNameName="containerallproduct"> */}
             <div className="container">
                 <div className="row">
                 {theproduct}
                 </div>  
            </div>
            </div>
           
        )
    }
}

export default Allproducts
