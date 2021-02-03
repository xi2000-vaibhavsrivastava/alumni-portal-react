import {isWebpSupported} from 'react-image-webp/dist/utils'

import Xact from '../../assets/imgs/newsletter/Xact.png'
import Xebizine from '../../assets/imgs/newsletter/NewsLetter_Spring_Edition_V1-1-1.png'
import Issue1 from '../../assets/imgs/newsletter/issue1.png'
import Issue2 from '../../assets/imgs/newsletter/issue2.png'
import Issue3 from '../../assets/imgs/newsletter/issue3.png'
import Issue4 from '../../assets/imgs/newsletter/issue4.png'
import Issue5 from '../../assets/imgs/newsletter/issue5.png'

import WebpXact from '../../assets/imgs/newsletter/optimized/Xact.webp'
import WebpXebizine from '../../assets/imgs/newsletter/optimized/NewsLetter_Spring_Edition_V1-1-1.webp'
import WebpIssue1 from '../../assets/imgs/newsletter/optimized/issue1.webp'
import WebpIssue2 from '../../assets/imgs/newsletter/optimized/issue2.webp'
import WebpIssue3 from '../../assets/imgs/newsletter/optimized/issue3.webp'
import WebpIssue4 from '../../assets/imgs/newsletter/optimized/issue4.webp'
import WebpIssue5 from '../../assets/imgs/newsletter/optimized/issue5.webp'

const webpSupported = isWebpSupported();

const NewsletterInfo = [
  {title: "XACT", date: ("Spring edition"), url: "https://xebiagroup-my.sharepoint.com/personal/muskan_jain_xebia_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmuskan%5Fjain%5Fxebia%5Fcom%2FDocuments%2FXACT%20Newsletters%2Ezip&parent=%2Fpersonal%2Fmuskan%5Fjain%5Fxebia%5Fcom%2FDocuments&ct=1602840778724&or=OWA-NT&cid=0eae7abb-aa28-6bb9-154e-46771059c022&originalPath=aHR0cHM6Ly94ZWJpYWdyb3VwLW15LnNoYXJlcG9pbnQuY29tLzp1Oi9nL3BlcnNvbmFsL211c2thbl9qYWluX3hlYmlhX2NvbS9FZEw2MHV4cnZzbEZoNTFxNFRmbnVlMEJDd2tDSnBQR25ZRTZnZXpCLXZVM0d3P3J0aW1lPWN5SURlYlp4MkVn", poster: webpSupported ? WebpXact : Xact},
  {title: "Xebizine", date: ("Spring edition"), url: "https://cdn2.hubspot.net/hubfs/697348/%5BM%5D%20Case%20Study%20-%20India/NewsLetter_Spring_Edition_V1.pdf", poster: webpSupported ? WebpXebizine : Xebizine},
  {title: "Xebia Chronicles Issue 1", date: new Date("06/12/2020"), url: "https://f.hubspotusercontent40.net/hubfs/697348/%5BM%5D%20Case%20Study%20-%20India/issue1.pdf", poster: webpSupported ? WebpIssue1 : Issue1},
  {title: "Xebia Chronicles Issue 2", date: new Date("07/01/2020"), url: "https://f.hubspotusercontent40.net/hubfs/697348/%5BM%5D%20Case%20Study%20-%20India/issue2%20(1).pdf", poster: webpSupported ? WebpIssue2 : Issue2},
  {title: "Xebia Chronicles Issue 3", date: new Date("07/15/2020"), url: "https://f.hubspotusercontent40.net/hubfs/697348/%5BM%5D%20Case%20Study%20-%20India/issue3.pdf", poster: webpSupported ? WebpIssue3 : Issue3},
  {title: "Xebia Chronicles Issue 4", date: new Date("07/31/2020"), url: "https://f.hubspotusercontent40.net/hubfs/697348/%5BM%5D%20Case%20Study%20-%20India/issue4.pdf", poster: webpSupported ? WebpIssue4 : Issue4},
  {title: "Xebia Chronicles Issue 5", date: new Date("08/18/2020"), url: "https://f.hubspotusercontent40.net/hubfs/697348/%5BM%5D%20Case%20Study%20-%20India/issue5.pdf", poster: webpSupported ? WebpIssue5 : Issue5},
];

export default NewsletterInfo;