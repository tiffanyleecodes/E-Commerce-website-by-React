import React from "react";
import bannerAbout from "../asset/banner.png";
import "../style/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="bannerAbout"
        style={{ backgroundImage: `url(${bannerAbout})` }}
      ></div>
      <h1>Our Story</h1>
      <div className="story">
        <p>
          Once upon a time, there was a woman named Lily who had always dreamed
          of opening her own bag shop. She had a passion for fashion and was
          particularly drawn to bags of all shapes and sizes.<br></br>
          <br></br> Lily knew that there was a gap in the market for a women's
          bag shop that offered affordable, stylish bags, so she decided to take
          the leap and start her own business. Lily spent months researching
          suppliers, finding the perfect location, and curating a collection of
          bags that would cater to all tastes. <br></br>
          <br></br>Finally, she opened the doors to her shop, which she named
          "Lily's Bags" and waited with bated breath for customers to arrive. It
          wasn't long before people started trickling in, drawn in by the
          vibrant window displays and the promise of affordable bags.<br></br>
          <br></br>The shop quickly gained a reputation for being a go-to
          destination for women who wanted to update their accessory game
          without breaking the bank.
        </p>
        <p>
          Lily was a natural saleswoman, and she took great pleasure in helping
          her customers find the perfect bag for their needs. She knew that a
          bag could make or break an outfit, and she was always on hand to offer
          her expert advice. As the weeks and months went by, Lily's Bags
          continued to grow in popularity. Word of mouth spread, and soon people
          were coming from all over town to browse the latest collections.{" "}
          <br></br>
          <br></br>Lily was overjoyed at how her dream had come to fruition, and
          she felt fulfilled knowing that she was helping women feel confident
          and stylish with her bags.<br></br>
          <br></br> Years passed, and Lily's Bags continued to thrive. The shop
          became a fixture in the community, and Lily became a respected
          business owner, known for her kindness and her eye for fashion.{" "}
          <br></br>
          <br></br>And through it all, Lily knew that she had found her true
          calling in life.
        </p>
      </div>
    </div>
  );
}

export default About;
