import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";

export const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker",
      description: "Design & Development",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <div>
              {/* Projects Section Header */}
              <h2>Projects</h2>

              {/* Projects Section Description */}
              <p>
                Translate your software dreams into elegant code.
              </p>

              {/* Tabs for Project Sections */}
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>

                {/* Tab Content */}
                <Tab.Content id="slideInUp">
                  {/* Tab 1 */}
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => (
                        // Display Project Cards
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>

                  {/* Tab 2 */}
                  <Tab.Pane eventKey="second">
                    <p>
                      Coming soon, Stay tuned!
                    </p>
                  </Tab.Pane>

                  {/* Tab 3 */}
                  <Tab.Pane eventKey="third">
                    <p>
                      Coming soon, Stay tuned!
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Background Image */}
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
