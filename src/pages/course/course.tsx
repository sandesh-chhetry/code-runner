import { useState } from "react";
import "./courses.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import ReactIcon from '../../assets/images/course-icon/react.png'
import ActionIcon from '../../assets/images/course-icon/action.png'
import VueIcon from '../../assets/images/course-icon/vue.png'
import PenIncon from '../../assets/images/course-icon/pen.png'
import ArrowIcon from '../../assets/images/arrow-icon.png'
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
          <div className="pt-5">
            <Link to={"/"} className="btn btn-primary d-inline">Go to Task 1</Link>
          </div>

          <div className="section-title">
            <h4>Explore our classes and master trending skills!</h4>
            <h2>Dive Into <span className="text-primary">What’s Hot Right Now!</span> 🔥</h2>
          </div>
          <div className="d-flex gap-3">
            {courseList.map((course, index) => (
              <div
                key={course.id}
                className={`course-list bg-secondary-50 ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleClick(index)}>
                <div className="click-me">
                  <p className="mb-0">Click me!</p>
                  <img src={ArrowIcon} alt="react icon" />
                </div>
                <div className="active-show d-none">
                  <Link className="view-all d-block text-end" to={"/"}>View All Courses<IoMdArrowForward /> </Link>

                  <div className="icon-wrap">
                    <div className="icon">
                      <img src={ReactIcon} alt="react icon" />
                    </div>
                    <div className="icon">
                      <img src={ActionIcon} alt="like comment icon" />
                    </div>
                    <div className="icon">
                      <img src={VueIcon} alt="Vue js icon" />
                    </div>
                    <div className="icon">
                      <img src={PenIncon} alt="Color and Pen icon" />
                    </div>
                  </div>

                </div>
                <div className="course-info">
                  <div className="course-desc">
                    <h2 className="course-name" >{course.name}</h2>
                    <p className="course-subtitle">{course.subtitle}</p>
                  </div>
                  <h3 className="course-number">{course.number} <sup>+</sup></h3>
                </div>
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