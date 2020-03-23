import React from "react";
import styled from "styled-components"
import Pagination from '@material-ui/lab/Pagination'

const StyledPagination=styled(Pagination)`
    color: white!important;
`


const PageContoroll =() => {

        
        return (
           <div style={{margin:'auto',width:'50%'}}> 
               <StyledPagination  count={10} color="primary" />
           </div>
        )

}

export default PageContoroll


