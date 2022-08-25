import { render } from "@testing-library/react";
import { Card } from "./card";

const test = {
  link: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f6ddd8c7c020bf07cac7e5f712822fd3ec96af93a4f228e9b105150094a041d0.png",
  name: "Мурлокула",
};

describe("Card", () => {
  it("Карта с ссылкой", () => {
    const card = render(<Card cardImage={test.link} cardName={test.name} />);
    expect(card).toMatchSnapshot();
  });
  it("Карта без ссылки", () => {
    const card = render(<Card cardImage=" " cardName="Карта" />);
    expect(card).toMatchSnapshot();
  });
});
