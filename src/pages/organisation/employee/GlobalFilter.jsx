import React from "react";

export const GlobalFilter =({ filter, setFilter}) => {
    return(
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
                // border:"2px solid blue"
                }}>
                <button 
                  style={{
                    float:"right",
                    border: "none",
                  
                    // backgroundcolor: "red",
                    margin: "2px",
                    fontsize: "15px",
                    borderradius: "10px",
                    padding: "10px",
                  }}
                className="btnad" >Add</button>
                {/* <button style={{float:"right"}}>ad</button> */}
              </div>
            
        </div>
    )
}