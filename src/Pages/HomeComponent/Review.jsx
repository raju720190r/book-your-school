import React from "react";
import Marquee from "react-fast-marquee";
import useReviews from "../../Hooks/useReview";


const Review = () => {
  const [reviews] = useReviews();
  console.log(reviews);
  return (
    <div>
      <Marquee>
        <div className="flex flex-row ">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="card w-96 bg-base-100 shadow-xl flex flex-col"
            >
              <figure className="px-10 pt-10 flex justify-between">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={review.userimg} />
                  </div>
                </div>
                <p>{review.username}</p>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{review.collegeName}</h2>
                <div className="badge badge-outline badge-accent">
                  Rating :{review.ratings}
                </div>

                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Review;
