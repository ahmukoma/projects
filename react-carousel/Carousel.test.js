import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

test("it should render on screen", () => {
  render(<Carousel photos={TEST_IMAGES} title="images for testing"/>);
});

it("Should match the snapshot", () => {
  const {asFragment} = render(<Carousel photos={TEST_IMAGES} title="images for testing"/>);
  expect(asFragment()).toMatchSnapshot();
})

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
  
  //it should show the previous image
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);
  
  expect(container.querySelector("img[alt='testing image 2'")).not.toBeInTheDocument();
  expect(container.querySelector("img[alt='testing image 1'")).toBeInTheDocument();
  expect(leftArrow).not.toBeInTheDocument();
  expect(rightArrow).toBeInTheDocument();
});

it("should not show right-arrow when on last image", () => {
  const {container} = render(<Carousel photos={TEST_IMAGES} title="images for testing"/>);
  const rightArrow = container.querySelector(".bi-arrow-right-circle")
  fireEvent.click(rightArrow);
  expect(container.querySelector("img[alt='testing image 2")).toBeInTheDocument();
  fireEvent.click(rightArrow);
  expect(container.querySelector("img[alt='testing image 3")).toBeInTheDocument();
  expect(rightArrow).not.toBeInTheDocument();
});
