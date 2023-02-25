import React from "react";

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating, url } = props.item;

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
       {/* <button className="btn free__btn" onclick="location.href='https://www.youtube.com'" type="button">Free</button> */}
        {/* <a href= "https://www.youtube.com" > Free</a> */}
        {/* <a class="btn free__btn" href="https://www.youtube.com">Free</a> */}
        {/* <a href="http://www.stackoverflow.com/">
           <button className="btn free__btn">Free</button>
        </a> */}
        <form>
        <button className="btn free__btn" formaction={url}> View</button>
        </form>
        
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2">
            <i class="ri-booklet-line"></i> {students}
          </span>

          {/* <span className=" d-flex align-items-center gap-2">
            <i class="ri-star-fill"></i> {rating}k
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
