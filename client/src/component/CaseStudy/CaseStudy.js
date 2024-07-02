import React from 'react';

const sectionClasses = "bg-background text-foreground py-12";
const containerClasses = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center";
const headingClasses = "text-3xl font-extrabold text-primary";
const paragraphClasses = "mt-4 text-lg text-muted-foreground";
const gridClasses = "mt-10 flex justify-center gap-6 sm:gap-8 sm:px-6"; // Adjusted for row layout
const imageClasses = "rounded-lg shadow-lg";

const CaseStudies = () => {
  return (
    <div className={sectionClasses}>
      <div className={containerClasses}>
        <h2 className={headingClasses}>Latest Case Studies</h2>
        <p className={paragraphClasses}>
          Imperdiet aliquet est vel nulla <br/>turpis eu consequat ullamcorper a egestas suspendisse <br/>faucibus eu velit, phasellus pulvinar lorem et libero et tortor, sapien nulla.
        </p>
      </div>
      <div className={gridClasses}>
        <div className="flex items-center justify-center space-x-8">
          <CaseStudyImage src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-case-gallery-6.jpg" alt="Microscopic view of cells" />
          <CaseStudyImage src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-case-gallery-1.jpg" alt="Scientist working in a lab" />
          <CaseStudyImage src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-case-gallery-2.jpg" alt="Close-up of a microscope" />
        </div>
      </div>
      <div className={gridClasses}>
        <div className="flex items-center justify-center space-x-8">
          <CaseStudyImage src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-case-gallery-3.jpg" alt="Pipette and test tubes" />
          <CaseStudyImage src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-case-gallery-4.jpg" alt="Scientist using a microscope" />
          <CaseStudyImage src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-case-gallery-5.jpg" alt="Scientist handling a vial" />
        </div>
      </div>
    </div>
  );
};

const CaseStudyImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className={imageClasses} />;
};

export default CaseStudies;
