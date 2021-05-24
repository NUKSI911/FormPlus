import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "../Card";

let mockData = {
  name: "Nurudeen Yekeen",
  description: "Front End Engineer with a strong foundation in UX principles. I'm interested in working on interesting and valuable projects.",
  link: "https://formplus-task.netlify.app",
};

test("renders template", () => {
  render(<Card data={mockData} />);

  const linkElement = screen.getByText(mockData.name);
  expect(linkElement).toBeInTheDocument();
});
