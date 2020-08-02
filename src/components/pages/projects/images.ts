import { ImageToSlider } from "@components/shared/SliderCard";
import expenseManagerImg from "../../../img/expenses-manager-home.png";
import transPage from "../../../img/expenses-manager-transactions.png";
import retailmenowImg from "../../../img/retailmenow.jpeg";
import vapemusicImg from "../../../img/vapemusic-example.jpg";

const ExpenseMangerImages: ImageToSlider[] = [
  {
    label: "HomePage",
    imgPath: expenseManagerImg,
  },
  {
    imgPath:
      "https://res.cloudinary.com/wlopez/image/upload/v1596227499/EXPENSE-MANAGER-SHOWCASE.jpg",
    label: "Recent Expenses",
  },
  {
    imgPath:
      "https://res.cloudinary.com/wlopez/image/upload/v1596227495/EXPENSE-MANAGER-SHOWCASE_2.jpg",
    label: "Monthly Summary",
  },
  {
    label: "Transactions",
    imgPath: transPage,
  },
];

const vapeMusicImages: ImageToSlider[] = [{
  label: "VapeMusic HomePage",
  imgPath:
    "https://res.cloudinary.com/wlopez/image/upload/v1596223814/VAPEMUSIC_SHOWCASE_1.jpg",
}, {
  label: "VapeMusic Menu",
  imgPath:
    "https://res.cloudinary.com/wlopez/image/upload/v1591918889/vapemusic2/vapemusic-menu.jpg",
}, {
  imgPath:
    "https://res.cloudinary.com/wlopez/image/upload/v1596227508/VAPEMUSIC_DARK_MODE.jpg",
  label: "Dark Mode",
}, {
  label: "Categories",
  imgPath: vapemusicImg,
}];

const retailMeNowImages: ImageToSlider[] = [
  { label: "PDP", imgPath: retailmenowImg },
];

const coronaVirusImages: ImageToSlider[] = [
  {
    label: "HomePage",
    imgPath:
      "https://res.cloudinary.com/wlopez/image/upload/v1596335173/wilfredlopez-profile-page/corona-home-page.jpg",
  },
  {
    label: "Cases Per Country",
    imgPath:
      "https://res.cloudinary.com/wlopez/image/upload/v1596335144/wilfredlopez-profile-page/Corona-countries.jpg",
  },
];

export const PROJECT_IMAGES = {
  vapeMusic: vapeMusicImages,
  retailMeNow: retailMeNowImages,
  ExpenseManger: ExpenseMangerImages,
  coronaVirus: coronaVirusImages,
};
