import React from 'react'
import {isWebpSupported} from 'react-image-webp/dist/utils'

import TNF from '../../assets/imgs/csr/The_Nudge_Foundation.jpg'
import Covid from '../../assets/imgs/csr/covid.jpg'

import WebpCovid from '../../assets/imgs/csr/optimized/covid.webp'
import WebpTNF from '../../assets/imgs/csr/optimized/The_Nudge_Foundation.webp'

const webpSupported = isWebpSupported();

const csrInfo = [
  {id: 1, pubdate: "", title: "Give India Initiative", body: <span>Xebia worked with give India during the COVID-19 pandemic to help fight the tragic imapct that the pandemic has left behind for the poor. Let’s come together and help India fight Coronavirus.&nbsp; <a href="https://xebia.giveindia.org/" target="_blank" rel="noopener noreferrer">click here</a> to donate.</span>, poster: webpSupported ? WebpCovid : Covid},
  
  {id: 2, pubdate: "", title: "Nudge Foundation", body: "Xebia has tied up with Nudge Foundation (The /Nudge). The Nudge Foundation has helped 400+ million people in extreme poverty by giving them education and jobs to sustain themselves.", poster: webpSupported ? WebpTNF : TNF},

];

export default csrInfo;