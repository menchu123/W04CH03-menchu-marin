import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given an Info component", () => {
  describe("When it receives a false", () => {
    test("Then it should have 'message off' className", () => {
      const state = false;
      const isCalling = false;

      const expectedClassName = "message off";

      render(<Info state={state} isCalling={isCalling} />);

      const infoElement = screen.getByTestId("info");

      expect(infoElement).toHaveClass(expectedClassName);
    });
  });
});
