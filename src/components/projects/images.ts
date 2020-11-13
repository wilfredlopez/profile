import { ImageToSlider } from '@components/shared/SliderCard'
import retailmenowImg from '../../img/retailmenow.jpeg'
import vapemusicImg from '../../img/vapemusic-example.jpg'

const ExpenseMangerImages: ImageToSlider[] = [
  {
    label: 'Login Page',
    imgPath:
      'https://res.cloudinary.com/wlopez/image/upload/v1596385412/wilfredlopez-profile-page/expense-manager-login.jpg',
  },
  {
    imgPath:
      'https://res.cloudinary.com/wlopez/image/upload/v1596227499/EXPENSE-MANAGER-SHOWCASE.jpg',
    label: 'Recent Expenses',
  },
  {
    imgPath:
      'https://res.cloudinary.com/wlopez/image/upload/v1596227495/EXPENSE-MANAGER-SHOWCASE_2.jpg',
    label: 'Monthly Summary',
  },
  {
    imgPath:
      'https://res.cloudinary.com/wlopez/image/upload/v1596385392/wilfredlopez-profile-page/expense-manager-register.jpg',
    label: 'Register Page',
  },
]

import vmHpmepage from './vm-homepage.png'
import vapemusicplayer from './vm-player.png'
import vmdark from './vm-dark.png'

const vapeMusicImages: ImageToSlider[] = [
  {
    label: 'VapeMusic HomePage',
    imgPath: vmHpmepage,
  },
  {
    label: 'VapeMusic AudioPlayer',
    imgPath: vapemusicplayer,
  },
  {
    imgPath: vmdark,
    label: 'Dark Mode',
  },
]

const retailMeNowImages: ImageToSlider[] = [
  { label: 'PDP', imgPath: retailmenowImg },
]

const coronaVirusImages: ImageToSlider[] = [
  {
    label: 'Cases Per Country',
    imgPath:
      'https://res.cloudinary.com/wlopez/image/upload/v1596335144/wilfredlopez-profile-page/Corona-countries.jpg',
  },
  {
    label: 'HomePage',
    imgPath:
      'https://res.cloudinary.com/wlopez/image/upload/v1596335173/wilfredlopez-profile-page/corona-home-page.jpg',
  },
]

const TwoDealImages: ImageToSlider[] = [
  {
    imgPath:
      'https://res.cloudinary.com/wlopez/image/upload/v1596505955/wilfredlopez-profile-page/2deal-pagination.jpg',
    label: 'Product Pagination',
  },
  {
    imgPath:
      'https://res.cloudinary.com/wlopez/image/upload/v1596505946/wilfredlopez-profile-page/2-deal-cart.jpg',
    label: 'Products In Cart',
  },
]

const xyMusic: ImageToSlider[] = [
  {
    imgPath:
      'https://res.cloudinary.com/wlopez/image/upload/v1597766596/wilfredlopez-profile-page/XYMUSIC-EXAMPLE-1.jpg',
    label: 'Homepage',
  },
  {
    imgPath:
      'https://res.cloudinary.com/wlopez/image/upload/v1597766648/wilfredlopez-profile-page/XYMUSIC-EXAMPLE-2.jpg',
    label: 'Music Player',
  },
  {
    imgPath:
      'https://res.cloudinary.com/wlopez/image/upload/v1597766563/wilfredlopez-profile-page/XYMUSIC-EXAMPLE-3.jpg',
    label: 'Search Page',
  },
  {
    imgPath:
      'https://res.cloudinary.com/wlopez/image/upload/v1597766563/wilfredlopez-profile-page/XYMUSIC-EXAMPLE-4.jpg',
    label: 'User Library',
  },
]

export const PROJECT_IMAGES = {
  vapeMusic: vapeMusicImages,
  retailMeNow: retailMeNowImages,
  ExpenseManger: ExpenseMangerImages,
  coronaVirus: coronaVirusImages,
  TwoDeal: TwoDealImages,
  xyMusic,
}
