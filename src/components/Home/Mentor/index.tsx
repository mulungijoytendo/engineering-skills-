"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { MentorData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Mentor = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section style={{ backgroundColor: "#F5F5F5" }} id="mentor">
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1280px",
          paddingLeft: "16px",
          paddingRight: "16px",
          position: "relative",
        }}
      >
        <h2
          style={{
            color: "#333333",
            fontSize: "3rem",
            fontWeight: "600",
            lineHeight: "1.2",
          }}
        >
          Meet with our <br /> mentor.
        </h2>

        <Slider {...settings}>
          {MentorData.map((items, i) => (
            <div key={i}>
              <div
                style={{
                  margin: "12px",
                  paddingTop: "56px",
                  paddingBottom: "56px",
                  textAlign: "center",
                }}
              >
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <Image
                      src={`${getImagePrefix()}${items.imgSrc}`}
                      alt="user-image"
                      width={200}
                      height={200}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      right: "calc(50% - 50px)",
                      bottom: "10px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "50%",
                      padding: "12px",
                    }}
                  >
                    <Image
                      src={`${getImagePrefix()}images/mentor/linkedin.svg`}
                      alt="linkedin-image"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "#333333",
                    }}
                  >
                    {items.name}
                  </h3>
                  <h4
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "400",
                      color: "#333333",
                      paddingTop: "8px",
                      opacity: "0.5",
                    }}
                  >
                    {items.profession}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Mentor;