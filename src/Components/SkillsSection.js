import React from 'react';

function SkillsSection({image, skill, progress, width, w='50px'}) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
				<div className="skill-image">
					<img src={image} alt="skill image" style={{width: w}}/>
				</div>

				<div className="skill-title">
          			<h5 className="title">{skill}</h5>
				</div>

                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-pregress" style={{width: width}}></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SkillsSection;
  
