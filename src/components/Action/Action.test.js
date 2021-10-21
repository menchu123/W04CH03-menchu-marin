import { render, screen } from "@testing-library/react";
import Context from "../Context/Context";
import Action from "./Action";

describe("Given an Action component", () => {
  describe("When it recieves a 'test' text'", () => {
    test("Then it should display the text", () => {
      // const { call, hang } = useContext(Context);
      const text = "text";
      const className = "hang";
      const isDisabled = true;
      const call = jest.fn();

      const expectedText = "text";

      render(
        <Context.Provider value={{ call }}>
          <Action text={text} className={className} isDisabled={isDisabled} />
        </Context.Provider>
      );
      const textElement = screen.getByText(expectedText);

      expect(textElement).toBeInTheDocument();
    });
  });
});
