import React,{useState} from "react";
import { Field, Formik, Form } from 'formik';
// import React, { useState } from "react";

export const GlobalFilter_Location =({ filter, setFilter}) => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  
  const form = () =>{
    alert("Form Submitted");
    // setModal(!modal);
  }

    return(
      <>
        <div style={{
            // border:"2px solid red",
            display:"flex",
            // padding:"10px"
        }}>
            <div style={{width:"50%" , alignItems:"center",justifyContent:"center",display:"flex"}}>
              <p>Search...</p>
              <input
               style={{
                  background:"#ddd",
                  marginLeft:"4px",
                  border:"none",
                  borderRadius:"5px",
                  outline:"none",
                  height:"20px"
               }}
               value={filter || ''} 
              onChange = {(e) => setFilter(e.target.value)}/>
            </div>
              
              <div style={{
                  width:"50%",  
                  position:"relative",            
                }}>
                  <button className="btnadd btn-modal"  onClick={toggleModal} 
                  style={{
                    float:"right",
                    position:"relative"
                  }}>+ Add Record
                  </button>
              </div>
            
        </div>
        {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
         
          <div
                      // style={{
                      //    position:"absolute",
                      //    border: "2px solid red",
                      //    backgroundColor:"white",
                       
                      // }}
                    >  
                     <button className="close-modal" onClick={toggleModal}>   CLOSE </button>
                       <Formik
                         initialValues={{
                           name: '', 
                           lead: '' ,
                           mail: '',
                           report: '',
                           parent: ''
                          }}
                               onSubmit={(value) =>{
                                  console.log(value);
                               }}
                       >

                     {({ value }) => (
                         <Form 
                         style={{display:"flex", flexDirection:"column",marginTop:"55px"}} 
                         >
                             
                             <div style={{display:"flex", padding:"8px",flexDirection:"column"}}><strong style={{fontSize:"11px"}}>Department Name*</strong><Field style={{borderRadius:"8px",marginTop:"5px",height:"30px",border:"1px solid black"}} name="name" type="text"/></div>
                                

                             <div style={{display:"flex", padding:"8px",flexDirection:"column"}}><strong style={{fontSize:"11px"}}>Department Lead*</strong>
                             <Field style={{borderRadius:"8px",marginTop:"5px",height:"30px",border:"1px solid black"}} name="lead" as="select">
                                               <option value="CEO">option 1</option>
                                               <option value="Manager">option 2</option>
                                               <option value="CO Founder">option 3</option>
                                               <option value="Developers">option 4</option>
                             </Field>
                             </div>
                                    
                             <div style={{display:"flex", padding:"8px",flexDirection:"column"}}><strong style={{fontSize:"11px"}}>Mail Alias*</strong>
                             <Field style={{borderRadius:"8px",marginTop:"5px",height:"30px",border:"1px solid black"}} name="mail" type="text"/>
                             </div>     

                              <div style={{display:"flex", padding:"8px",flexDirection:"column"}}><strong style={{fontSize:"11px"}}>Reporting To*</strong>
                            <Field style={{borderRadius:"8px",marginTop:"5px",height:"30px",border:"1px solid black"}} name="report" type="text"/>
                            </div>
                                   
                            <div style={{display:"flex", padding:"8px",flexDirection:"column"}}><strong style={{fontSize:"11px"}}>Parent Department*</strong>
                            <Field style={{borderRadius:"8px",marginTop:"5px",height:"30px",border:"1px solid black"}} name="parent" as="select">
                                               <option value="CEO">option 1</option>
                                               <option value="Manager">option 2</option>
                                               <option value="CO Founder">option 3</option>
                                               <option value="Developers">option 4</option>
                                           </Field>
                                           </div>               
                            <button className="submithover" onClick={form}
                               style={{
                                width: "fit-content",
                                border:"none",
                                backgroundColor:"#556ee6",
                                padding:"5px",
                                borderRadius:"8px",
                                marginTop:"8px",
                                marginLeft:"4px",
                                
                               }}
                            type="submit">SUBMIT</button>
                         </Form>
                            )}
                       </Formik>
                    </div> 
            
          </div>
        </div>
      )}
        </>
    )
}