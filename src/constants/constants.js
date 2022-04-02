export const projects = [
  {
    title: 'DEX & ERC20 Wallet',
    description: "This project involves a decentralized exchange and an ERC20 wallet, where one can input a smart contract address and interact with the token. The DEX can be approved via Metamask, import a token and trade it for another token. It can also listen for events and print transactions from the blockchain. The creation of this DEX was quite a yourney though. I took the Ethereum Smart Contract Programming 201 course with instructor, Filip Martinsson, which invloved learning to write and test smart contracts with Solidity, Truffle, Ganache and Web3 js. Once completed, the challange was to develop a frontend for the DEX so I then took a React Web Development class with Zsolt. Afterwards, I built a trading app as another challenge, learned some more, including Ethers js, Hardat and eventually build the front end.",
    image: '/images/dex/dex_001.png',
    tags: ['Solidity', 'Hardhat', 'Ethers', 'React'],
    source: 'https://github.com/brlojam4932/dex2-app.git',
    visit: 'https://ecstatic-brahmagupta-3f9a21.netlify.app/',
    id: 0,
  },
  {
    title: 'Sensei ETH Wallet',
    description: "This Eth Wallet was built following a tutorial, shortly after completing the Falcon app. The tutorial is from JS Mastery. I did not change much but I got my feet wet with Hardhat, Ethers js and as for React, I got to work using Context, since it served as an introduction to Redux. The wallet can send Eth to other addresses, write a message and print events from the Solidity ERC20 smart contract",
    image: '/images/sensei/sending_eth.png',
    tags: ['Solidity', 'Hardhat', 'Ethers', 'React'],
    source: 'https://github.com/brlojam4932/web3-app.git',
    visit: 'https://bencryptoprojects.com/',
    id: 1,
  },
  {
    title: 'Falcon Exchange App',
    description: "This is my first React project with instructor Zsolt Nagy from Moralis Academy. This app focused mainly on React, Axios and fetching token data from Coin Gecko. The challange was to add a graph, a news page and what ever else so I added the graph, a news page, an exchanges page, my own styling and icons. I also learned a lot from JS Mastery and others. Originally, the JS Master project was a Redux project but I converted it to a regular React app since I as most comfortable with that and it was a chance to learn more React",
    image: '/images/falcon/falconTrades_balance.png',
    tags: ['React', "Axios", 'Javascript'],
    source: 'https://github.com/brlojam4932/falcon-app.git',
    visit: 'https://elated-bassi-9cac7a.netlify.app/',
    id: 2,
  },
  {
    title: 'Robo Kitties NFT',
    description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: '/images/roboKitties/03_cryptokitties_ropsten_breed.png',
    tags: ['Solidity', 'Hardhat', 'Web3', 'JQuery'],
    source: 'https://github.com/brlojam4932/myCryptoKitties_master.git',
    visit: 'https://youthful-murdock-e07205.netlify.app/',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];