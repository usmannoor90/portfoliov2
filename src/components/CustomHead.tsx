"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const getRandomMessage = () => {
  const messages = [
    "I'm feeling lonely :-( ",
    "Don't you love me anymore? :-(",
    "Please come back! :-( ",
    "Hey, where did you go?",
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

function CustomHead() {
  const [pageTitle, setPageTitle] = useState("M Usman Noor Portfolio");

  useEffect(() => {
    const handleVisibilityChange = () => {
      setPageTitle(
        document.hidden ? getRandomMessage() : "M Usman Noor Portfolio"
      );
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
    </div>
  );
}

export default CustomHead;
