import { render, screen } from "@testing-library/react";
import Actions from "./Actions";
import Context from "../Context/Context";

describe("Given an Action component", () => {
  describe("When it recieves a true isCalling", () => {
    test("Then it should render the element with the text 'Hang'", () => {
      const text = "Hang";
      const isCalling = true;
      const call = jest.fn();
      const hang = jest.fn();

      render(
        <Context.Provider value={{ hang, call }}>
          <Actions text={text} isCalling={isCalling} isDisabled={false} />
        </Context.Provider>
      );
      const textElement = screen.getByText(text);

      expect(textElement).toBeInTheDocument();
    });
  });

  describe("When it recieves a false isCalling", () => {
    test("Then it should render the element with the text 'Call'", () => {
      const text = "Call";
      const isCalling = false;
      const call = jest.fn();
      const hang = jest.fn();

      render(
        <Context.Provider value={{ hang, call }}>
          <Actions text={text} isCalling={isCalling} isDisabled={false} />
        </Context.Provider>
      );
      const textElement = screen.getByText(text);

      expect(textElement).toBeInTheDocument();
    });
  });
});
