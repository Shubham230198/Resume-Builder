import React from 'react';
import "../../static/images/scss/app.scss";
import EducationForm from '../educationForm';
import { NavLink } from "react-router-dom";

const EducationPage = () => {
    return (    
    
        <div className="container center">
            <div className="sectionForm">
                <div className="sectionLeft">
                    <h1>Education Details</h1>
                    <EducationForm />

                    <div>
                        <NavLink to="/nextPage"  className="btn "><span>Next</span>
                        </NavLink>
                        <NavLink to="/prevPage"  className="btn "><span>Back</span>
                        </NavLink>
                    </div>
                </div>     
                <div className="sectionRight">
                    <h1>Skin-1</h1>
                </div>   
            </div>          
        </div>
    
    );
}
 
export default EducationPage;