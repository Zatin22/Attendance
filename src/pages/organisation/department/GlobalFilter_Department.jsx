import React from "react";

export const GlobalFilter_Department =({ filter, setFilter}) => {
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
                <button className="btnadd" style={{float:"right"}}>ADD</button>
                {/* <button style={{float:"right"}}>ad</button> */}
              </div>
            
        </div>
    )
}