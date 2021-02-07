import React, { Component } from 'react'
import '../Css/table.css'


// const jsonObj = JSON.parse(localStorage.getItem('list'));

export default class table extends Component {

  
    render() {
      const books = JSON.parse(localStorage.getItem('list'));

      const book = books.map((b) => {
        return (

          <li class="table-row">
          <div class="col col-1 colors" data-label="Job Id">{b.id}</div>
          <div class="col col-2 colors" data-label="Customer Name">{b.firsName}</div>
          <div class="col col-3 colors" data-label="Amount">{b.Date}</div>
        </li>
        )
     
      })

        return (
            <div>
               <div class="containersss">
  <h2 className="colors">ALL Booking BOOKs <small></small></h2>
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1 colors"> Id</div>
      <div class="col col-2  colors">Book Name</div>
      <div class="col col-3  colors">Date</div>
      
    </li>
    {/* <li class="table-row">
      <div class="col col-1 colors" data-label="Job Id">{jsonObj[0].id}</div>
      <div class="col col-2 colors" data-label="Customer Name">{jsonObj[0].firsName}</div>
      <div class="col col-3 colors" data-label="Amount">{jsonObj[0].Date}</div>
    </li>

    <li class="table-row">
      <div class="col col-1 colors" data-label="Job Id">{jsonObj[1].id}</div>
      <div class="col col-2 colors" data-label="Customer Name">{jsonObj[1].firsName}</div>
      <div class="col col-3 colors" data-label="Amount">{jsonObj[1].Date}</div>
    </li> */}
   {book}
   
  </ul>
</div>

            </div>
        )
    }
}
