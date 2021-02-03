import {isWebpSupported} from 'react-image-webp/dist/utils'


import core1 from '../../assets/imgs/core/core1.png'
import core2 from '../../assets/imgs/core/core2.png'
import core3 from '../../assets/imgs/core/core3.png'
import core4 from '../../assets/imgs/core/core4.png'


import WebpCore1 from '../../assets/imgs/core/optimized/core1.webp'
import WebpCore2 from '../../assets/imgs/core/optimized/core2.webp'
import WebpCore3 from '../../assets/imgs/core/optimized/core3.webp'
import WebpCore4 from '../../assets/imgs/core/optimized/core4.webp'


const webpSupported = isWebpSupported();

const coreInfo = [
  {id: 1, title: "People First", body: "You grow. We grow. Xebia puts People First, always. With a thrust on personal development Xebia provides a mutual atmosphere of respect, trust, responsibility and accountability that helps foster great ideas and innovation.", poster: webpSupported ? WebpCore1 : core1},
  
  {id: 2, title: "Sharing Knowledge", body: "Xebia believes in Sharing Knowledge. The more you share it, the more it grows. With mandatory bi-weekly sessions of Xebia Knowledge Exchange, Xebia ensures a flow of knowledge from country to country, unit to unit and employee to employee.", poster: webpSupported ? WebpCore2 : core2},

  {id: 1, title: "Customer Intimacy", body: "We don't just create customers, we create relationships through Customer Intimacy. We work on common goals and trust, by being truly interested in the person and adding value pro-actively and consistently.", poster: webpSupported ? WebpCore3 : core3},

  {id: 1, title: "Quality without Compromise", body: "At Xebia Quality Without Compromise is the Mantra. Be it work, be it personal interactions, be it the surroundings or be it the self, at Xebia 100% is the norm. Because enough is just not enough.", poster: webpSupported ? WebpCore4 : core4},

];

export default coreInfo;