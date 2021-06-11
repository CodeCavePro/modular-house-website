import main1 from "../assets/images/houses/1/main-img.png";
import main2 from "../assets/images/houses/2/main-img.png";
import main3 from "../assets/images/houses/3/main-img.png";
import list1 from "../assets/images/houses/1/list-img.png";
import list2 from "../assets/images/houses/2/list-img.png";
import list3 from "../assets/images/houses/3/list-img.png";
import desc1 from "../assets/images/houses/1/desc-img.png";
import desc2 from "../assets/images/houses/2/desc-img.png";
import desc3 from "../assets/images/houses/3/desc-img.png";

const lang = "RU";
export const houses = [
  {
    id:1,
    name: "SQUARE HOUSE",
    desc:"Мы видим миссию нашей команды в изменении окружающего мира за счет качественной концептуальной архитектуры. ",
    price: `$ 115 764`,
    totalArea: "170 M2",
    effectiveArea: "170 M2",
    baseModuleArea: "97 M2",
    totalAreaText: lang === "RU" ? "Общая площадь дома:" : "Total Area:",
    effectiveAreaText:
      lang === "RU" ? "Полезная площадь дома:" : "Effective Area:",
    baseModuleAreaText:
      lang === "RU" ? "Площадь базового дома:" : "Base Module Area:",
    img: { main: main1, list: list1, desc: desc1 },
  },
  {
    id:2,
    img: { main: main2, list: list2, desc: desc2 },
    name: "ROUND HOUSE",
    desc:"Мы видим миссию нашей команды в изменении окружающего мира за счет качественной концептуальной архитектуры. ",
    price: `$ 124 800`,
    totalArea: "200 M2",
    effectiveArea: "140 M2",
    baseModuleArea: "97 M2",
    totalAreaText: lang === "RU" ? "Общая площадь дома:" : "Total Area:",
    effectiveAreaText:
      lang === "RU" ? "Полезная площадь дома:" : "Effective Area:",
    baseModuleAreaText:
      lang === "RU" ? "Площадь базового дома:" : "Base Module Area:",
  },
  {
    id:3,
    img: { main: main3, list: list3, desc: desc3 },
    name: "MODERN HOUSE",
    desc:"Мы видим миссию нашей команды в изменении окружающего мира за счет качественной концептуальной архитектуры. ",
    price: `$ 164 000`,
    totalArea: "80 M2",
    effectiveArea: "70 M2",
    baseModuleArea: "97 M2",
    totalAreaText: lang === "RU" ? "Общая площадь дома:" : "Total Area:",
    effectiveAreaText:
      lang === "RU" ? "Полезная площадь дома:" : "Effective Area:",
    baseModuleAreaText:
      lang === "RU" ? "Площадь базового дома:" : "Base Module Area:",
  },
];
