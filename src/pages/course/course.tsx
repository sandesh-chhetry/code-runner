import React, { useState } from "react";
import Layout from "../../components/layout";
import "./style.scss";
import { Container } from "react-bootstrap";
const Course = () => {
  const courseList = [
    {
      "id": 1,
      "name": "Introduction to Programming",
      "number": "CS101",
      "subtitle": "Learn the basics of programming with Python"
    },
    {
      "id": 2,
      "name": "Web Development",
      "number": "WD201",
      "subtitle": "Build dynamic websites with HTML, CSS, and JavaScript"
    },
    {
      "id": 3,
      "name": "Data Structures and Algorithms",
      "number": "DSA301",
      "subtitle": "Master the fundamental concepts for efficient problem-solving"
    }
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Layout>
      <div className="bg-white h-100 course-wrap">
        <Container>
          <div className="d-flex gap-3">
            {courseList.map((course, index) => (
              <div
                key={course.id}
                className={`course-list ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}>
                <h3>{course.name}</h3>
                <p>{course.number}</p>
                <small>{course.subtitle}</small>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Course