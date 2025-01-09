import React, { useState } from "react";
import Layout from "../../components/layout";
import "./style.scss";
import { Container } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
const Course = () => {
  const courseList = [
    {
      "id": 1,
      "name": "All Courses",
      "number": "23",
      "subtitle": "courses you're powering through right now."
    },
    {
      "id": 2,
      "name": "Upcoming Courses",
      "number": "05",
      "subtitle": "exciting new courses waiting to boost your skills."
    },
    {
      "id": 3,
      "name": "Ongoing Courses",
      "number": "10",
      "subtitle": "currently happening—don’t miss out on the action!"
    }
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    // <Layout>
    <>
      <div className="bg-white h-100 course-wrap">
        <Container>
        <div className="py-5">
          <Link to={"/"} className="btn btn-primary d-inline">Go to Task 1</Link>
        </div>
          <div className="d-flex gap-3">
            {courseList.map((course, index) => (
              <div
                key={course.id}
                className={`course-list bg-primary-50 ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}>
                <div className="course-desc">
                  <h2 className="course-name" >{course.name}</h2>
                  <p className="course-subtitle">{course.subtitle}</p>
                </div>
                <h3 className="course-number">{course.number} <sup>+</sup></h3>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
    // </Layout>
  )
}

export default Course