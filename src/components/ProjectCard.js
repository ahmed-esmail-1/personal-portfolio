import { Col } from "react-bootstrap";

// ProjectCard component takes title, description, and imgUrl as props
export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      {/* Container for project card */}
      <div className="proj-imgbx">
        {/* Project image */}
        <img src={imgUrl} alt={title} />
        
        {/* Project text */}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
