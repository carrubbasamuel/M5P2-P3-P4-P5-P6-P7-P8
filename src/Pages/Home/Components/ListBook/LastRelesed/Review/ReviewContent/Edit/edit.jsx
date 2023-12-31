import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Lottie from "react-lottie";
import { useDispatch, useSelector } from "react-redux";
import { fetchReview, updateReview } from "../../../../../../../../redux/reducers/review";
import Rating from "../Rating/rating";
import success from "./success.json";

export default function Edit() {
  const dispatch = useDispatch();
  const review = useSelector((state) => state.root.review.CurrentReview);
  const rating = useSelector((state) => state.root.review.StateRating);
  const asin = useSelector((state) => state.root.book.asin);
  const [isAnimationPlaying, setAnimationPlaying] = useState(false);
  const text = useRef(review.comment || "");

  useEffect(() => {
    text.current.value = review.comment || "";
  }, [review.comment]);

  const handleAnimationClick = () => {
    const newReview = {
      ...review,
      comment: text.current.value,
      rate: rating,
    };

    setAnimationPlaying(true);
    setTimeout(() => {
      dispatch(updateReview(newReview)).then(() => dispatch(fetchReview(asin)));
      setAnimationPlaying(false);
    }, 4000);
  };

  const handleEscape = () => {
    dispatch(fetchReview(asin));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Button onClick={handleEscape} variant="outline-danger" className="mb-3 align-self-end">X</Button>
      <textarea defaultValue={review.comment} ref={text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      <Rating review={review} />
      <hr />
      <div className="d-flex flex-column justify-content-center align-item-center">
        <Button onClick={handleAnimationClick} variant="outline-success" className="success">SAVE</Button>
        {isAnimationPlaying ?
          <Lottie
            options={{
              animationData: success,
              autoplay: isAnimationPlaying,
              loop: false,
            }}
            height={100}
            width={100}
          />
          : null}
      </div>
    </div>
  );
}
