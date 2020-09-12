import React, { useState } from "react";
import "./Homepage.scss";
import ImageGallery from "react-image-gallery";
import ABCSQuora from "../../media/Game Night w ABCS & Quora.jpg";
import GeneralMeeting from "../../media/General Meeting.jpg";
import GroupPhoto from "../../media/Group Photo.jpg";
import GoogleMeeting from "../../media/Meeting w Google.jpg";
import NetworkingDinner from "../../media/Networking Dinner.jpg";
import StudyNight from "../../media/Study Night.jpg";
import TopGolfFood from "../../media/Top Golf Food Line.jpg";
import TopGolfPlaying from "../../media/Top Golf Playing.jpg";
import TopGolfTalking from "../../media/Top Golf Talking w Google.jpg";

const images = [
  {
    original: ABCSQuora,
    caption: "HACS Game Night w ABCS & Quora",
  },
  {
    original: GeneralMeeting,
    caption: "HACS General Meeting",
  },
  {
    original: GroupPhoto,
    caption: "Group Photo of HACS Members",
  },
  {
    original: GoogleMeeting,
    caption: "General Meeting with Google Employees",
  },
  {
    original: NetworkingDinner,
    caption: "Diversity Networking Dinner with ABCS",
  },
  {
    original: StudyNight,
    caption: "Study Night with HACS Members",
  },
  {
    original: TopGolfFood,
    caption: "Waiting in line for food at TopGolf social",
  },
  {
    original: TopGolfPlaying,
    caption: "Playing gold at TopGolf social",
  },
  {
    original: TopGolfTalking,
    caption: "Talking to Google recruiters at TopGolf social",
  },
];

let handleSlide = (nextIndex) => {
  console.log("switching to slide " + nextIndex);
}

function ImageSlider() {

  const [captionIndex, updateCaptionIndex] = useState(0);

  return (
    <section className="slider">
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
        slideDuration={1000}
        slideInterval={10000}
        onBeforeSlide={updateCaptionIndex}
      />
      <p className="caption">{images[captionIndex].caption}</p>
    </section>
  );
}

export default ImageSlider;
