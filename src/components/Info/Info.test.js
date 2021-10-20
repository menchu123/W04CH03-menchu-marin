import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given an Info component", () => {
  describe("When it recieves a true", () => {
    test("Then it should display itself", () => {
      const isCalling = true;
      const expectedText = "Calling...";

      render(<Info isCalling={isCalling} />);
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});
