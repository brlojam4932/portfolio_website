export const projects = [
  {
    title: 'DEX & ERC20 Wallet',
    description: "This project involves a decentralized exchange and an ERC20 wallet, where one can input a smart contract address and interact with the token. The DEX can be approved via Metamask, import a token and trade it for another token. It can also listen for events and print transactions from the blockchain. The creation of this DEX was quite a yourney though. I took the Ethereum Smart Contract Programming 201 course with instructor, Filip Martinsson, which invloved learning to write and test smart contracts with Solidity, Truffle, Ganache and Web3 js. Once completed, the challange was to develop a frontend for the DEX so I then took a React Web Development class with Zsolt. Afterwards, I built a trading app as another challenge, learned some more, including Ethers js, Hardat and eventually build the front end.",
    image: '/images/dex/dex_001.png',
    tags: ['Solidity', 'Hardhat', 'Ethers', 'React', 'OpenZeppelin'],
    source: 'https://github.com/brlojam4932/dex2-app.git',
    visit: 'https://ecstatic-brahmagupta-3f9a21.netlify.app/',
    id: 0,
  },
  {
    title: 'Sensei ETH Wallet',
    description: "This Eth Wallet was built following a tutorial, shortly after completing the Falcon app. The tutorial is from JS Mastery. I did not change much but I got my feet wet with Hardhat, Ethers js and as for React, I got to work using Context, since it served as an introduction to Redux. The wallet can send Eth to other addresses, write a message and print events from the Solidity ERC20 smart contract",
    image: '/images/sensei/sending_eth_cropped.png',
    tags: ['Solidity', 'Hardhat', 'Ethers', 'React'],
    source: 'https://github.com/brlojam4932/web3-app.git',
    visit: 'https://bencryptoprojects.com/',
    id: 1,
  },
  {
    title: 'Falcon Exchange App',
    description: "This is my first React project with instructor Zsolt Nagy from Moralis Academy. This app focused mainly on React, Axios and fetching token data from Coin Gecko. The challange was to add a graph, a news page and what ever else so I added the graph, a news page, an exchanges page, my own styling and icons. I also learned a lot from JS Mastery and others. Originally, the JS Master project was a Redux project but I converted it to a regular React app since I as most comfortable with that and it was a chance to learn more React",
    image: '/images/falcon/falcon.png',
    tags: ['React', "Axios", 'Javascript', 'Coin Gecko'],
    source: 'https://github.com/brlojam4932/falcon-app.git',
    visit: 'https://elated-bassi-9cac7a.netlify.app/',
    id: 2,
  },
  {
    title: 'Robo Kitties NFT',
    description: "This Robo Kitties project was my second project with insturctor Filip Martinsson from Moralis Academy. This project was aimed at learning how to write an NFT, using Solidity and OpenZeppelin smart contract, ERC721. We also added our own logic and created our own cats with HTML and CSS. The app contains a Market Place and a random cat generator, where one can generate a kitten, breed it with another kitten and sell it on the Ethereum blockchain.",
    image: '/images/roboKitties/03_breed_cropped.png',
    tags: ['Solidity', 'Hardhat', 'Web3', 'OpenZeppelin'],
    source: 'https://github.com/brlojam4932/myCryptoKitties_master.git',
    visit: 'https://youthful-murdock-e07205.netlify.app/',
    id: 3,
  },
];

export const TimeLineData = [
  {
    year: 2020,
    text: 'JavaScript programming for Blockchain Development',
    image: '/images/certificates/javascript.png',
    link: 'https://www.linkedin.com/posts/ben-lopez-94360a236_javascript-programming-for-blockchain-certificate-activity-6916491809065943041-rcMS?utm_source=linkedin_share&utm_medium=member_desktop_web'
  },
  {
    year: 2021,
    text: 'React Web Development 101',
    image: '/images/certificates/react.png',
    link: 'https://www.linkedin.com/posts/ben-lopez-94360a236_react-web-development-101-certificate-activity-6916446248065458176-BBXC?utm_source=linkedin_share&utm_medium=member_desktop_web'
  },
  {
    year: 2022,
    text: 'Ethereum Dapp Programming',
    image: '/images/certificates/dapps.png',
    link: "https://www.linkedin.com/posts/ben-lopez-94360a236_ethereum-dapp-programming-certificate-activity-6916450323632914432-MykF?utm_source=linkedin_share&utm_medium=member_desktop_web"
  },
  {
    year: 2022,
    text: 'Ethereum Smart Contract Programming 201',
    image: '/images/certificates/ethereum.png',
    link: "https://www.linkedin.com/posts/ben-lopez-94360a236_ethereum-smart-contract-programming-201-certificate-activity-6916444238524100609-ZAqw?utm_source=linkedin_share&utm_medium=member_desktop_web"
  },
];