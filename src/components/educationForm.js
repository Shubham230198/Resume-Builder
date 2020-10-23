import React from 'react';

const EducationForm = () => {
    return (       
        <div> 
            <form className="left">
                <label>College Name
                <input id = "collegeName" type="text"></input>
                </label>

                <label>Degree
                <input id = "degree" type="text"></input>
                </label>

                <label>CGPA
                <input id = "CGPA" type="number"></input>
                </label>

                <label>City/State
                <input id = "city" type="text"></input>
                </label>

                <label>Graduation Month
                <input id = "graduationMonth" type="text"></input>
                </label>

                <label>Graduation Year
                <input id = "graduationYear" type="text"></input>
                </label>

            </form>
            
        </div>
    );
}
 
export default EducationForm;