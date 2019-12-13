import React from "react";
import "./OnboardingThree.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import InputTextField from "../InputTextField/InputTextField";
import { Link } from "@storybook/router";
import OnboardingParent from "../OnboardingParent/OnboardingParent";
import Image from "../../assets/images/profile_large.png";
import Button from "../Button/Button";
// Function based React Component
const OnboardingThree = props => {
  // Default Class to apply to Component
  let classList = `OnboardingThree`;

  return (
    <div className={classList}>
      <OnboardingParent>
        <h1 className="OnboardingThree__text">Step Three: Personalize Your Profile (optional) </h1>
        <ProfilePicture className="profile-image" type="medium" to="#" image={Image} />
        <div className="OnboardingThree__spacer"></div>
        <InputTextField type="text" name="age" placeholder="What is your age?" />
        <InputTextField type="destination" placeholder="What is your dream destination(s)?" />
        <Button text="Finish"></Button>
        <Link to={props.link} className="OnboardingThree__link">
          Skip
        </Link>
      </OnboardingParent>
    </div>
  );
};

export default OnboardingThree;