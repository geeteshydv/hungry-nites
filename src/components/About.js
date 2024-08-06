import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto m-5 p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-4">
        Hello! My name is Geetesh Yadav, a 4th-year B.Tech IT student at KIET
        Group of Institutions, Ghaziabad.
      </p>
      <p className="text-lg mb-4">
        I am a passionate web developer with a keen interest in MERN Full Stack
        Development, Data Structures, and Algorithms. I am familiar with a
        variety of technologies including C, C++, HTML, CSS, JavaScript,
        ReactJS, ExpressJS, NodeJS, and MongoDB.
      </p>
      <p className="text-lg mb-4">
        Currently, I am working on a few exciting projects, including a
        marketing website called Marketing Hub, a Netflix-like website named
        Moodflix using the ChatGPT API, and a Swiggy clone named Hungry Nites.
      </p>
      <p className="text-lg mb-4">
        Additionally, I am a Teaching Assistant at Coding Ninjas, where I help
        students with Data Structures and Algorithms in C++/Java.
      </p>
      <p className="text-lg">
        Feel free to reach out to me at{" "}
        <a
          href="mailto:geeteshyadav12@gmail.com"
          className="text-yellow-300 hover:underline"
        >
          geeteshyadav12@gmail.com
        </a>{" "}
        or visit my portfolio at{" "}
        <a
          href="https://geeteshyadav.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 hover:underline"
        >
          geeteshyadav.tech
        </a>
        .
      </p>
    </div>
  );
};

export default About;
