// import React, { Component} from 'react'
// import './App.css'

// export default class Bhavin extends Component {
//   render() {
//     return (
//       <div>
//           <h1 className="color">hello world</h1>
          
//       </div>

//     )
//   }
// }

// Mehul=()=>{
// const color=  useEffect(() => {
//     const interval = setInterval(() => {
//       console.log('This will run every second!');
//     }, 1000);
  
// }

// import React , {useState} from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.css";



// import { nanoid } from "nanoid";


// const EditTable = () => {
   
//   const [Add, setAdd] = useState(
//       [
//       {
//         "id": 1,
//         "Name": "Gio Metric",
//         "Age": "25",
//         "Company": "Deepends",
//         "Country": "Spain",
//         "City":"Madrid"
//       },
//       {
//         "id": 2,
//         "Name": "Manny Petty",
//         "Age": "45",
//         "Company": "Insectus",
//         "Country": "France",
//         "City":"San Francisco"
//       },
//       {
//         "id": 3,
//         "Name": "Lucy Tania",
//         "Age": "35",
//         "Company": "Isotronic",
//         "Country": "Germany",
//         "City":"Frankfurt am Main"
//       },
//       {
//         "id": 4,
//         "Name": "Anna Mull",
//         "Age": "35",
//         "Company": "Portica",
//         "Country": "USA",
//         "City":"Oregon"
//       }
      
  
//     ])
//     const [addFormData, setAddFormData] = useState({
//         "id":nanoid(),
//         "Name":"Example",
//         "Age":"Example",
//         "Company":"Example",
//         "Country":"Example",
//         "City":"Example",
        
        
//     })
//     const handleAddFormChanges=(event)=>{
//       event.preventDefault();

//       const fieldName = event.target.getAttribute("name");
//       const fieldValue = event.target.value;
  
//       const newFormData = { ...addFormData };
//       newFormData[fieldName] = fieldValue;
  
//       setAddFormData(newFormData);
//         };

//         const handleAddFormSubmit = (event) => {
//           event.preventDefault();
      
//           const newContact = {
//             "id":nanoid(),
//             "Name": addFormData.Name,
//             "Age": addFormData.Age,
//             "Company": addFormData.Company,
//             "Country":addFormData.Country,
//             "City": addFormData.City
//           };
      
//           const newContacts = [...Add, newContact];
//           setAdd(newContacts);

//         };

      
        // const handleDeleteClick = (addId) => {
        //   const newContacts = [...Add];
      
        //   // const index = Add.findIndex((adds) => adds.id === addId);
      
        //   // newContacts.splice(index,1);

        //   const index = Add.filter((adds) => adds.id != addId);

      
        //   setAdd(index);
        // };



        // const handleDeleteClick = (addId) => {
        //   const newContacts = [...Add];
      
        //   const index = Add.findIndex((adds) => adds.id === addId);
      
        //   newContacts.splice(index,1);

        //             // const newdata = newContacts.filter((adds) => adds.id != addId);
         
      
        //   setAdd(newContacts);
        // };

        // const update = (addId) => {
        //   const newContacts = Add;
      
        //   // const index = Add.findIndex((adds) => adds.id === addId);
      
        //   // newContacts.splice(index,1);

        //     const newdata = Add.filter((adds) => adds.id != addId);
         
      
        //   setAdd(newdata);
        // };

        

        



  

// return(
//       <>
//           <div className="container-fluid">
//               <div className="row">
//                   <div className="col-sm-12">
//                       <div className="card">
//                           <div className="card-header">
//                               <div className="card-title">
//                                   <h4 className="card-title">Editable Table</h4>
//                               </div>
//                               <div>
//                                   <i  type="button" data-toggle="collapse" data-target="#edit-1" aria-expanded="false" aria-controls="alert-1">
//                                       <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                                       </svg>
//                                   </i>
//                               </div>
//                           </div>
//                           <div class="card-body">
//                               <div className="collapse" id="edit-1">
//                                   <div className="card"><kbd className="bg-dark"><pre id="editable" className="text-white"><code>
        
//           </code></pre></kbd></div>
//                               </div>
//                               <div id="table" className="table-editable">
//                                   <span className="table-add float-right mb-3 mr-2">
//                                   <button onClick={handleAddFormSubmit} className="btn btn-sm bg-primary"><i
//                                   className="ri-add-fill"><span className="pl-1">Add New</span></i>
//                                   </button>
//                                   </span>
//                                   <table className="table table-bordered table-responsive-md table-striped text-center">
//                                   <thead>
//                                       <tr>
//                                           <th>Name</th>
//                                           <th>Age</th>
//                                           <th>Company Name</th>
//                                           <th>Country</th>
//                                           <th>City</th>
//                                           <th>Sort</th>
//                                           <th>Remove</th>
//                                       </tr>
//                                   </thead>
//                                   <tbody>
                                    
//                                     {Add.map((adds,props) => (
                                        
//                                           <tr key={adds,props}>
//                                           <td  onChange={handleAddFormChanges} name="id">{adds.id}</td>
//                                           <td name="Name" contentEditable={true}  >{adds.Name}</td>
//                                           <td name="Age" contentEditable={true} >{adds.Age}</td>
//                                           <td name="Company" contentEditable={true} >{adds.Company}</td>
//                                           <td name="Country" contentEditable={true} >{adds.Country}</td>
//                                           <td name="City" contentEditable={true} >{adds.City}</td>
//                                           <td>
//                                               <span className="table-up"><a to="#"  className="indigo-text"><i className="fas fa-long-arrow-alt-up" aria-hidden="true"></i></a></span>
//                                               <span className="table-down"><a to="#" className="indigo-text"><i className="fas fa-long-arrow-alt-down" aria-hidden="true"></i></a></span>
//                                           </td>
//                                           <td>
//                                               <span className="table-remove"><button onClick={() => handleDeleteClick(adds.id)} type="button"
//                                               className="btn bg-danger-light btn-rounded btn-sm my-0">Remove</button></span>
//                                           </td>
                                        
//                                       </tr>
                                      
//                                     ))}
//                                   </tbody>
//                                   </table>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </>
//   )
// }


// export default EditTable;