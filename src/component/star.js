import React from 'react'
// const Try=()=>{
//     return(
//         <>
//         </>
//     )
// }
const Star = (props) => {
// const s = props.sold
// const ss = props.hart
// if(s===1){
//     return <h1>mehul1</h1>
// }
// else if(ss===2 ){
//     return <h1>hart</h1>
// }

const sale = props.sale;
 const whishlist = props.whishlist;
 if (sale) {
    return <div className="iq-sold">
    <span className="iq-sold-out">{sale}</span>
</div>
  } 
 if (whishlist){
      return <div className="whish-list">
      <span className="iq-whish-out d-flex align-items-center">
          <i className={whishlist}></i>
      </span>
  </div>
  }
if(sale || whishlist ){
    return(
        <>
        <div className="iq-sold">
    <span className="iq-sold-out">{sale}</span>
     </div>
     <div className="whish-list">
      <span className="iq-whish-out d-flex align-items-center">
          <i className={whishlist}></i>
      </span>
  </div>

          
        </>
    )
}


    return (
        <div>
            <Star whishlist={props.whishlist} sale={props.sale}  />
        </div>
    )
}

export default Star
