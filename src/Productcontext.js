import react, { createContext } from "react";

const productdata = [
  {
    id: 1,

    name: "bag",
    source: "Bag2.jpeg",
    price: 5000,
    category: "new",
    review: 3 / 5,
    mwcategory: "boy",
    status: "stock",
    maincategory: "bag",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },
  
  {
    id: 2,

    name: "shirt",
    source: "Shirtforboy.JPG",
    price: 1000,
    category: "old",
    review: 3 / 5,
    status: "stock",
    mwcategory: "boy",
    maincategory: "shirt",
    description: `It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajf
             jslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsklfjsdlkfjjsdlkfjjsklf
             klsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs
             klsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs
             klsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvns`,
  },
  {
    id: 3,

    name: "jacket",
    source: "Jacketforgirls.jpeg",
    price: 5000,
    category: "new",
    review: 3 / 5,
    status: "stock",
    maincategory: "shoe",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },

  {
    id: 4,

    name: "pant",
    source: "Pant1.jpg",
    price: 5000,
    category: "new",
    mwcategory: "boy",
    review: 3 / 5,
    status: "stock",
    maincategory: "pant",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },

  {
    id: 5,

    name: "pant",
    source: "Pant2.jpg",
    price: 5000,
    category: "old",
    mwcategory: "girl",
    review: 3 / 5,
    status: "stock",
    maincategory: "pant",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },

  {
    id: 6,

    name: "bag",
    source: "Bag1.jpg",
    price: 5000,
    category: "new",
    review: 3 / 5,
    status: "stock",
    mwcategory: "boy",
    maincategory: "bag",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },

 
  {
    id: 7,

    name: "shoe",
    source: "Shoes4.jpg",
    price: 5000,
    category: "old",
    review: 3 / 5,
    status: "stock",
    maincategory: "shoe",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },

  {
    id: 8,

    name: "bag",
    source: "Bag3.jpg",
    price: 5000,
    category: "old",
    review: 3 / 5,
    status: "stock",
    mwcategory: "boy",
    maincategory: "bag",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },

  {
    id: 9,

    name: "shoe",
    source: "Sneakerforboy.jpeg",
    price: 5000,
    category: "new",
    mwcategory: "boy",
    review: 3 / 5,
    status: "stock",
    maincategory: "shoe",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },
  {
    id: 10,

    name: "Sneakers",
    source: "Sneakerforgirl.jpg",
    price: 4000,
    mwcategory: "girl",
    category: "new",
    review: 3 / 5,
    status: "stock",
    maincategory: "shoe",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },

  {
    id: 11,

    name: "cap",
    source: "Capforboys.jpg",
    price: 3000,
    category: "old",
    review: 3 / 5,
    mwcategory: "boy",
    status: "stock",
    maincategory: "cap",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },

  {
    id: 12,

    name: "jeans pant",
    source: "Jeansforman.jpg",
    price: 1000,
    category: "old",
    mwcategory: "boy",
    review: 3 / 5,
    status: "stock",
    maincategory: "pant",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },

  {
    id: 13,

    name: "ladies pant",
    source: "Girlspant.jpg",
    price: 5000,
    mwcategory: "girl",
    category: "new",
    review: 3 / 5,
    status: "stock",
    maincategory: "pant",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },
  {
    id: 14,

    name: "bag",
    source: "Bag.jpg",
    price: 4000,
    mwcategory: "boy",
    category: "new",
    review: 3 / 5,
    status: "stock",
    maincategory: "bag",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },

  {
    id: 15,

    name: "ladies cap",
    source: "Capforgirl.jpg",
    price: 3000,
    category: "old",
    mwcategory: "girl",
    review: 3 / 5,
    status: "stock",
    maincategory: "cap",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },

  {
    id: 16,

    name: "shoe",
    source: "Shoes1.jpeg",
    price: 5000,
    category: "old",
    mwcategory: "boy",
    review: 3 / 5,
    status: "stock",
    maincategory: "shoe",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },

  {
    id: 17,

    name: "shoe",
    source: "Shoes3.jpg",
    price: 5000,
    category: "new",
    mwcategory: "boy",
    review: 3 / 5,
    status: "stock",
    maincategory: "shoe",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },



  {
    id: 18,

    name: "bag",
    source: "Bag4.jpg",
    price: 5000,
    category: "old",
    review: 3 / 5,
    status: "stock",
    mwcategory: "boy",
    maincategory: "bag",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },

  {
    id: 19,

    name: "laptop",
    source: "lone.jpg",
    price: 5000,
    category: "old",
    review: 3 / 5,
    status: "stock",
    mwcategory: "electronics",
    maincategory: "elecronics",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },

  {
  id: 20,

  name: "laptop",
  source: "ltwo.jpeg",
  price: 5000,
  category: "old",
  review: 3 / 5,
  status: "stock",
  mwcategory: "electronics",
  maincategory: "elecronics",
  description:
    "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
},
{
id: 21,

name: "laptop",
source: "lthree.jpg",
price: 5000,
category: "old",
review: 3 / 5,
status: "stock",
mwcategory: "electronics",
maincategory: "elecronics",
description:
  "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
},
{
id: 22,

name: "laptop",
source: "lfour.jpg",
price: 5000,
category: "old",
review: 3 / 5,
status: "stock",
mwcategory: "electronics",
maincategory: "elecronics",
description:
  "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
},

{
  id: 23,
  
  name: "laptop",
  source: "lfive.jpg",
  price: 5000,
  category: "old",
  review: 3 / 5,
  status: "stock",
  mwcategory: "electronics",
  maincategory: "elecronics",
  description:
    "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
  },

  {
    id: 24,
    
    name: "laptop",
    source: "lsix.jpg",
    price: 5000,
    category: "old",
    review: 3 / 5,
    status: "stock",
    mwcategory: "electronics",
    maincategory: "elecronics",
    description:
      "It is the best item for you .You will be dada fjklsjfkljsdklfjslkjflkajfkldsjkfjsdkfjslkjfklsajfkljskdlfjsklfjklsjfklsjfklsjfkljsklfjsdlkfjklsdjfklsjfklsjdfkjscknskjfksjfksldcksdfjsklnskvnskjfksdjfklsjflkjafkljs",
    },


];
export const pcontext = createContext();

const Productcontext = (props) => {
  return (
    <>
      <pcontext.Provider value={productdata}>
        {props.children}
      </pcontext.Provider>
    </>
  );
};

export default Productcontext;
