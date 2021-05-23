import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "../Card";

let mockData = {
  name: "Nurudeen Yekeen",
  description: "A Frontend Developer With An Eye For Intricate Design",
  link: "https://formplus-task.netlify.app",
};

test("renders template", () => {
  render(<Card data={mockData} />);

  const linkElement = screen.getByText(mockData.name);
  expect(linkElement).toBeInTheDocument();
});
