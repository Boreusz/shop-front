/* eslint-disable import/no-anonymous-default-export */
import image1 from "../images/001.jpg";
import image2 from "../images/002.jpg";
import image3 from "../images/003.jpg";
import image4 from "../images/004.jpg";

export default [
  {
    id: "001",
    name: "Nerve Plant",
    descripiton:
      "The nerve plant, or Fittonia argyroneura, from the Acanthaceae (Acanthus) family, is a tropically found plant" +
      " with striking leaves of green and red. Growing nerve plants is easy and so is nerve plant care.",
    category: "small",
    image: image1,
    stock: 20,
    price: "23.99$",
  },
  {
    id: "002",
    name: "Desert Rose",
    descripiton:
      "The desert rose (Adenium obesum) is a slow-growing plant (gaining less than 12 inches per year)" +
      " that boasts a thick, succulent stem and deep pink flowers. It's best planted in the spring and is deciduous" +
      " in cooler winters, but can be kept in leaf if it receives warm enough temperatures and a bit of water. " +
      "Overall, this varietal is fairly easy to care for and pays off big time with its blooming beauty. ",
    category: "small",
    image: image2,
    stock: 8,
    price: "29.99$",
  },
  {
    id: "003",
    name: "Corkscrew Albuca",
    descripiton:
      "Corkscrew Albuca is a small geophyte, up to 8 inches tall, recognizable by its distincive leaves," +
      " which are narrow and spiral tipped with glandular hairs. The leaves are green and up to 8 inches long." +
      "In late winter to early spring one central flower spike appear, bearing green flower with pale yellow margins",
    category: "small",
    image: image3,
    stock: 0,
    price: "39.99$",
  },
  {
    id: "004",
    name: "Variegated Monstera Deliciosa",
    descripiton:
      "A species of flowering plant native to southern Mexico and Panama, Monstera deliciosa is a hardy and " +
      "easy to care for plant known by many names. The Variegated Monstera requires similar care to that of the solid green " +
      "Monstera deliciosa. The main difference is the white portion of the variegated Monstera leaves cannot absorb light, " +
      "so the plant needs to work twice as hard to photosynthesize. Therefore, low light conditions are not ideal and you should " +
      "keep your variegated Monstera in bright ambient light to make it happy.",
    category: "medium",
    image: image4,
    stock: 4,
    price: "239.99$",
  },
];
