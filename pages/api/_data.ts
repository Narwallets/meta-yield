export const data = [
  {
    id: 0, // key para proyectos en katherine
    slug: "permrock", // unique friendly identifier per project. katherine smart contract would retrieve this field
    name: "PembRock Finance",
    motto: "Leveraged yield farming is NEAR.",
    projectUrl: "https://pembrock.finance/",
    twitter: "https://twitter.com/PembrockFi",
    imageUrl:
      "https://pbs.twimg.com/media/FL0DTPSWUAEE87x?format=jpg&name=4096x4096",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1496155033389391873/d4H_TCLF_400x400.jpg",
    description:
      "Is the first leveraged yield farming application on NEAR Protocol. It is aimed at providing users with larger yields and greater liquidity — all on the NEAR blockchain.",
    verified: true,
    tags: ["Finance", "Infrastructure", "Security", "Vault"],
    campaignHtml: `<b>Supported by Near Foundation</b><br>
    PembRock Finance has been created with the support of the NEAR Foundation, which delivers grants to developers wishing to expand the NEAR ecosystem with new financial tools.<br><br>
    <b>Managed by Community</b><br>
    Our community is in the driver’s seat of PembRock Finance’s development and evolution.<br><br>
    <b>Greater Profits Unlocked</b><br>
    Boost your portfolio — leveraged yield farming gives participants the opportunity to increase their stake with borrowed funds and maximize their profits.<br><br>
    <b>The only leveraged yield farming on NEAR</b>
    <ul>
    <li>NEAR is still in a rapid growth, coupled with increased volumes flowing through Ref. finance.</li>
    <li>The huge buzz around farming on Ethereum, BSC, Terra, and Avalanche brings NEAR a clear opportunity to attract new users and bring greater value to existing ones.</li>
    <li>There is currently no opportunity for users to get loans for farming on NEAR. Yet.</li>
    </ul><br><br>
    <img alt src="https://3621490034-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fop6AI95zTHVsmsuW1IpF%2Fuploads%2F5mai9Nrna8L68ol1Lhnv%2F0?alt=media">`,
    team: [
      {
        id: 1,
        name: "Igor Stadnyk",
        bio: "Founder and CEO with a software development background and a proven track record of launching and leading blockchain projects since 2012. Corgi devotee and Lead Rocker at PembRock.",
        avatarUrl:
          "	https://pembrock.finance/static/Igor_Stadnyk-e3b4eec08e68b0074fd34e2732a6fd38.png",
        handle: "@igor",
      },
      {
        id: 2,
        name: "Vitalii Dmytrenko",
        bio: "CTO and Core Developer with more than 2 decades of experience in software and hardware development, reverse engineering and cybersecurity research. Cypherpunk. Web3 & DeFi advocate.",
        avatarUrl:
          "https://pembrock.finance/static/Vitalii_Dmytrenko-6162eb5af90f048468b5cfe71b3daf89.png",
        handle: "@vitalii",
      },
      {
        id: 3,
        name: "Oleksandr Molotsylo",
        bio: "Front End Lead Developer with over 10 years of experience developing in different programming languages. Blockchain fan for the last 4 years. Mentor, JS and ReactJS teacher.",
        avatarUrl:
          "https://pembrock.finance/static/Oleksandr_Molotsylo-d5fd00dc84fa48eb563b3e0880e78563.png",
        handle: "@Oleksandr",
      },
      {
        id: 4,
        name: "Ivan Skrypachov",
        bio: "Project Manager with 5+ years in Product IT. Guided by gained experience, Ivan smoothly manages teams of up to 30 people and builds processes from scratch. SCRUM guru.",
        avatarUrl:
          "https://pembrock.finance/static/Ivan_Skrypachov-729265f8d7e8a60828d0a45270bb3060.png",
        handle: "@ivan",
      },
    ],
    roadmapImageUrl: 'https://3621490034-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fop6AI95zTHVsmsuW1IpF%2Fuploads%2Fpyt3cN28gXSrgsgPaNrB%2Froadmap.jpg?alt=media&token=4b262c3c-2c47-4e2b-9a93-4974981972c4',
    faq: [{title: 'What is PembRock?', content: 'PembRock is the first leveraged yield farming protocol built on the NEAR blockchain. Users can provide liquidity, farm with leverage, stake, and take governance decisions to secure the future of the platform, all on a fast, secure, cheap, and user-friendly blockchain.'}, 
    {title: 'What is yield farming?', content: `Yield farming is the act of lending your cryptocurrency to the most profitable platforms in order to earn the highest DeFi yields. Rather than the traditional order book model that matches real buyers and sellers of assets, DeFi applications employ the Automated Market Maker (AMM) model. AMMs allow trades to be executed immediately through the use of algorithms and pools of tokens. This is where users come in, helping to provide liquidity to pools in exchange for a percentage return on investment. <br><br>
    The main difference between staking and yield farming is that the latter is defined by its mobility. Yield farming often involves the quick movement of crypto funds — either manually or through automated tools — to chase the highest rate of return, calculated by APY; however this is not a strict rule, and yield farmers who find a great protocol can reap fantastic rewards over a long period of time.`},
  {title:"What is leveraged yield farming?", content:`Leveraged yield farming is simply normal yield farming but supercharged! It is the practice of borrowing external liquidity to farm a larger amount of crypto, thus gaining the ability to get increased returns. <br><br>
  While many DeFi lending platforms still require users to overcollateralize (put up funds of a greater value than those being borrowed), our leveraged yield farming platform undercollateralizes, meaning: <br><br>
  <ul>
    <li>A lower barrier to entry</li>
    <li>Fewer funds laying dormant</li>
    <li>Greater rewards for users.</li></ul>`}, {title:"Why did we build PembRock?", content: `Yield farming is one of the key drivers of the DeFi ecosystem, with the liquidity provided by users helping protocols to innovate, building new features for the benefit of the entire community. Despite this symbiotic relationship, the DeFi sector is still in its experimental stages, meaning that current yield farming projects can be temperamental, hard-to-use, and occasionally, less than secure. It is only through trusted projects that decentralized finance can move into a more mature phase.<br><br>
  We wanted to play our part in this exciting sector, and what better opportunity could we get than building on NEAR, a blockchain which has made huge strides over the past year but is yet to house a leveraged yield farming platform.<br><br>
  Like our developers, NEAR Protocol wishes to accelerate the dream of DeFi as an integral part of Web 3.0 that is accessible to all. NEAR:<br><br>
  <ul>
  <li>AIs a fast, inexpensive and carbon-neutral blockchain.</li>
  <li>Incorporates a user-friendly wallet.</li>
  <li>Operates with the Delegated Proof of Stake (DPoS) consensus mechanism, encouraging greater community participation.</li>
  <li>Has a large dedicated community.</li></ul><br><br>
  One of the most exciting things about NEAR is its promotion of Guilds — teams of developers from the community who are creating innovative apps that are accessible to all users, which is one of the important aspects of continued DeFi growth. PembRock Finance is supported by both INC4 and Minerall Guilds in its development.<br><br>
  The NEAR ecosystem is expanding, with volume on DEXs such as Ref.finance increasing. With the demand for NEAR’s native products and a desire by crypto users to get maximum returns, now is a great time for PembRock Finance’s release. The NEAR Team seems to agree, which is why they provided us with a grant to assist us with the development of PembRock.`},
  {title: "How can I participate in PembRock Finance?", content:`With PembRock’s leveraged yield farming platform, you can participate as a:<br><br>
  <ul>
  <li>Lender - providing funds to individuals who wish to farm with leverage for high returns.</li>
  <li>Farmer - opening a position with leverage of up to 3x for greater rewards.</li>
  <li>Staker - locking up your $PEM token for high returns.</li>
  <li>Governance staker - staking $PEM for xPEM, used to vote on the future direction of the platform!</li></ul>`},
  {title: "Where does my yield come from?", content:`It’s the rule in DeFi that you should always try to understand where your yield comes from.<br><br>
With PembRock, you can earn great yields from both lending and leveraged yield farming.<br><br>
<ul>
<li>As a lender, you will earn from interest paid by borrowers who open leveraged yield farming positions.</li>
<li>As a yield farmer, you will earn money from fees paid by the pool you invest in.</li>
<li>Later we will introduce governance staking, giving users another way to earn with PembRock!</li></ul>`},
  {title: "What is the $PEM token and why should I hold it?", content:`$PEM is PembRock Finance’s native token, used:<br><br>
  <ul>
  <li>To stake within the PembRock Finance ecosystem — with rewards paid out in PEM.</li>
  <li>As a part of our reward mechanism for interacting with our protocol.</li>
  <li>As an additional bonus for those who provide funds to our liquidity pools.</li>
  <li>For DAO participation — users can stake PEM to receive xPEM, our governance token.</li></ul><br>
  The 10% of the borrowing and farming interest profits that we collect from people, as well as the 5% fee that is charged when a position is liquidated, is distributed among the PEM holders who have staked in our protocol!<br><br>
  As leveraged yield farming allows you to profit regardless of market trends, the $PEM token has utility in both bull and bear markets.`},
  {title: "Where can I buy the $PEM token?", content:`First of all, stay tuned for our upcoming IDO on Meta Yield, Boca Chica, SmartPad, and Skyward. Moreover, will have the opportunity to buy the $PEM token on Ref Finance, which will be progressively rolled out to further CEXes and DEXes afterward.`},
  {title: "Can I be liquidated as a lender?", content:`No — only those that farm with leverage can be liquidated, if one or both of the coins in the pair lose a certain amount of value relative to the funds leveraged in the position.`},
  {title: "What’s the fee for using PembRock Finance?", content:`<ul><li>Farmers are charged 10% of their yield farming rewards as a fee, which goes to the protocol.</li>
  <li>Lenders are charged 10% of their borrowing interest profit as a fee, which goes to the protocol.</li>
  <li>A 5% fee is charged every time a position is liquidated, which goes to the protocol.</li></ul>`},  
  {title: "Have your contracts been audited?", content:`Auditing is part of Milestone 5 in our roadmap. Before deploying to the mainnet, you can be guaranteed that PembRock will be thoroughly tested by our expert team and externally audited. We are already conducting negotiations with several companies about this audit.`},  
  {title: "What's the fundamental difference between 2x and 3x leverage?", content:`Leveraged yield farming allows users to receive undercollateralized loans, multiplying the investment they would otherwise be able to lock in. This has the benefit of allowing farmers to get more yield, while also benefiting the DeFi protocol through greater liquidity and fees from profits.<br><br>
  <ul>
  <li>Leverage of 2x means that your initial investment will be matched by the platform > if you have $100 worth of $PEM, you can now farm with $200 worth.
  <li>Leverage of 3x means that your initial investment will be tripled by the platform > if you have $100 worth of $PEM, you can now farm with $300 worth.</li></ul>`},  
  {title: "Why did you build on NEAR Protocol?", content:`We built on NEAR protocol for quite a few reasons:<br><br>
  <ul>
  <li>NEAR’s wallet and Dapps put a focus on user-friendliness. We love this ethos as it will help bring DeFi into the mainstream.</li>
  <li>The <a target="_blank" href="https://near.org/blog/near-climate-neutral-product/#:~:text=NEAR%20Protocol%20has%20been%20awarded,2)%20and%20other%20greenhouse%20gases.">blockchain is carbon neutral</a>, already putting it a step ahead of its competitors.</li>
  <li>It is secure, fast, and cheap.</li>
  <li>The NEAR community is great! Its members are incredibly passionate and really believe in the future of the blockchain.</li>
  <li>NEAR guilds provide great support to developers looking to build innovative Dapps within the ecosystem.</li>
  <li>We will be the first leveraged yield farming protocol on the blockchain, having received a $75,000 grant from the NEAR Foundation!</li></ul>`},
 {title:"How do your reinvest mechanics work?", content: `Reinvesting allows you to receive compound interest; that is, profit on top of profit that has already been generated. Reinvesting is done automatically.<br><br>
 The infographic below shows how reinvesting works with PembRock:<br><br>
 <img alt src="https://3621490034-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fop6AI95zTHVsmsuW1IpF%2Fuploads%2F5mai9Nrna8L68ol1Lhnv%2F0?alt=media">
 `},
 {title:"Which wallets do PembRock Finance support?", content:`At the moment, PembRock Finance supports the NEAR wallet, but other wallets will be integrated once the protocol is up and running.`},
 {title:"Who is the team behind PembRock Finance?", content:`PembRock Finance was created by a team of blockchain experts, led by Igor Stadnyk, CEO of INC4. Everything about our team is transparent, as we understand the importance of trust when engaging with new DeFi projects. You can <a target="_blank" href="https://pembrock.finance/">read about each of our developers here.</a>` }
],
about:`<b>PembRock Introduction</b><br><br><b>What is PembRock?</b><br><br>PembRock is the first leveraged yield farming protocol built on the NEAR blockchain. Users can provide liquidity, farm with leverage, stake, and take governance decisions to secure the future of the platform, all on a fast, secure, cheap, and user-friendly blockchain.
<br><br><b>What is yield farming?</b><br><br>Yield farming is the act of lending your cryptocurrency to the most profitable platforms in order to earn the highest DeFi yields. Rather than the traditional order book model that matches real buyers and sellers of assets, DeFi applications employ the Automated Market Maker (AMM) model. AMMs allow trades to be executed immediately through the use of algorithms and pools of tokens. This is where users come in, helping to provide liquidity to pools in exchange for a percentage return on investment.
<br><br>The main difference between staking and yield farming is that the latter is defined by its mobility. Yield farming often involves the quick movement of crypto funds — either manually or through automated tools — to chase the highest rate of return, calculated by APY; however this is not a strict rule, and yield farmers who find a great protocol can reap fantastic rewards over a long period of time.
<br><br><b>What is leveraged yield farming?</b>Leveraged yield farming is simply normal yield farming but supercharged! It is the practice of borrowing external liquidity to farm a larger amount of crypto, thus gaining the ability to get increased returns.
<br><br>While many DeFi lending platforms still require users to overcollateralize (put up funds of a greater value than those being borrowed), our leveraged yield farming platform undercollateralizes, meaning: <br><br>
<ul><li>A lower barrier to entry</li><li>Fewer funds laying dormant</li><li>Greater rewards for users.</li></ul>
<br><br><b>Why did we build PembRock?</b><br><br>Yield farming is one of the key drivers of the DeFi ecosystem, with the liquidity provided by users helping protocols to innovate, building new features for the benefit of the entire community. Despite this symbiotic relationship, the DeFi sector is still in its experimental stages, meaning that current yield farming projects can be temperamental, hard-to-use, and occasionally, less than secure. It is only through trusted projects that decentralized finance can move into a more mature phase.
<br><br>We wanted to play our part in this exciting sector, and what better opportunity could we get than building on NEAR, a blockchain which has made huge strides over the past year but is yet to house a leveraged yield farming platform.<br><br>Like our developers, NEAR Protocol wishes to accelerate the dream of DeFi as an integral part of Web 3.0 that is accessible to all. NEAR: <br><br>
<ul><li>Is a fast, inexpensive and carbon-neutral blockchain.</li><li>Incorporates a user-friendly wallet.</li><li>Operates with the Delegated Proof of Stake (DPoS) consensus mechanism, encouraging greater community participation.</li><li>Has a large dedicated community.</li></ul>
<br><br>One of the most exciting things about NEAR is its promotion of Guilds — teams of developers from the community who are creating innovative apps that are accessible to all users, which is one of the important aspects of continued DeFi growth. PembRock Finance is supported by both INC4 and Minerall Guilds in its development.
<br><br>The NEAR ecosystem is expanding, with volume on DEXs such as Ref.finance increasing. With the demand for NEAR’s native products and a desire by crypto users to get maximum returns, now is a great time for PembRock Finance’s release. The NEAR Team seems to agree, which is why they provided us with a grant to assist us with the development of PembRock.
<br><br><b>The PembRock protocol</b><img alt src="https://3621490034-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fop6AI95zTHVsmsuW1IpF%2Fuploads%2F5mai9Nrna8L68ol1Lhnv%2F0?alt=media>"
<br><br><b>How does PembRock work?</b><br><br>PembRock couples lenders and yield farmers who are rewarded for providing liquidity within the NEAR ecosystem. On launch, we will support two base assets — NEAR and USDT — and integrate our leveraged farming with Ref Finance.‌
<br><br><b>Lender</b>
<br><br>The lender deposits their NEAR and earns interest from the borrowing fees paid by yield farmers.
<br><br><b>Leveraged Farmer</b>
<br><br>The yield farmer opens a leveraged yield farming position on a trading pair, borrowing NEAR from the vault and joining the farming pool with leverage. The yield farmer gets higher returns due to the larger stake, but pays a 10% premium for the privilege of using borrowed funds.
<br><br><b>Liquidator bot</b>
<br><br>The liquidator bot monitors all yield farming positions, liquidating those that become too risky. If a leveraged yield farming position does get liquidated, 5% of the position’s fee goes to the protocol, and is then distributed among those who have staked the PEM token.


`,
documents:[{title:"Download Pitch Deck", url:"https://drive.google.com/file/d/1oCTRy_9I7pEUv3qyEYWGrGLOUCF4YsMt/view?usp=sharing"}]
  },
  {
    id: 1,
    name: "Bearverse",
    slug: "bearverse",
    motto:
      "Bearverse is a metaverse of exciting games, united by one token, a mighty 3D NFT bear, and one world — a freezing land of mysterious dieselpunk.",
    imageUrl:
      "https://pbs.twimg.com/media/FRaxenvXEAAVu3b?format=png",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1507835850482229259/9acmlIS4_400x400.png",
    description:
      "🐻 The Bearverse is a metaverse of frozen territories where 11 clans of bears fight and extract resources, surviving in a post-apocalyptic dieselpunk world. The main task of these clans is to survive in the world of icy wastelands.",
    verified: true,

    tags: ["Games", "NFTs"],
    campaignHtml: `<b>Supported by Near Foundation</b><br>
    PembRock Finance has been created with the support of the NEAR Foundation, which delivers grants to developers wishing to expand the NEAR ecosystem with new financial tools.<br><br>
    <b>Managed by Community</b><br><br>
    Our community is in the driver’s seat of PembRock Finance’s development and evolution.<br><br>
    <b>Greater Profits Unlocked</b>
    Boost your portfolio — leveraged yield farming gives participants the opportunity to increase their stake with borrowed funds and maximize their profits.<br><br>
    <b>The only leveraged yield farming on NEAR</b>
    <ul>
    <li>NEAR is still in a rapid growth, coupled with increased volumes flowing through Ref. finance.</li>
    <li>The huge buzz around farming on Ethereum, BSC, Terra, and Avalanche brings NEAR a clear opportunity to attract new users and bring greater value to existing ones.</li>
    <li>There is currently no opportunity for users to get loans for farming on NEAR. Yet.</li>
    </ul>`,
    team: [
      {
        id: 1,
        name: "Igor Stadnyk",
        bio: "Founder and CEO with a software development background and a proven track record of launching and leading blockchain projects since 2012. Corgi devotee and Lead Rocker at PembRock.",
        avatarUrl:
          "	https://pembrock.finance/static/Igor_Stadnyk-e3b4eec08e68b0074fd34e2732a6fd38.png",
        handle: "@igor",
      },
      {
        id: 2,
        name: "Vitalii Dmytrenko",
        bio: "CTO and Core Developer with more than 2 decades of experience in software and hardware development, reverse engineering and cybersecurity research. Cypherpunk. Web3 & DeFi advocate.",
        avatarUrl:
          "https://pembrock.finance/static/Vitalii_Dmytrenko-6162eb5af90f048468b5cfe71b3daf89.png",
        handle: "@vitalii",
      },
      {
        id: 3,
        name: "Oleksandr Molotsylo",
        bio: "Front End Lead Developer with over 10 years of experience developing in different programming languages. Blockchain fan for the last 4 years. Mentor, JS and ReactJS teacher.",
        avatarUrl:
          "https://pembrock.finance/static/Oleksandr_Molotsylo-d5fd00dc84fa48eb563b3e0880e78563.png",
        handle: "@Oleksandr",
      },
      {
        id: 4,
        name: "Ivan Skrypachov",
        bio: "Project Manager with 5+ years in Product IT. Guided by gained experience, Ivan smoothly manages teams of up to 30 people and builds processes from scratch. SCRUM guru.",
        avatarUrl:
          "https://pembrock.finance/static/Ivan_Skrypachov-729265f8d7e8a60828d0a45270bb3060.png",
        handle: "@ivan",
      },
    ],
    roadmapImageUrl: 'https://3621490034-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fop6AI95zTHVsmsuW1IpF%2Fuploads%2Fpyt3cN28gXSrgsgPaNrB%2Froadmap.jpg?alt=media&token=4b262c3c-2c47-4e2b-9a93-4974981972c4',
    faq: [{
      title: "test",
      content: "test"
    }]
  },
  {
    id: 2,
    name: "Metamon",
    slug: "metamon",
    motto: "Capture, evolve and battle!",
    imageUrl:
      "https://pbs.twimg.com/profile_banners/1374790074576076805/1643848181/1500x500",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1489485667650449412/8TQTrZDT_400x400.jpg",
    description:
      "Metamon is a world of Sci-Fi and Fantasy where you venture into the stars to discover exciting new worlds and majestic life-forms with immeasurable power. You wield a Gauntlet-like device equipped with a rare Forma Crystal which enables you to capture, evolve and transform yourself into a Metamon.",
    verified: false,

    tags: ["Games", "NFTs"],
    campaignHtml: `<b>Supported by Near Foundation</b><br>
    PembRock Finance has been created with the support of the NEAR Foundation, which delivers grants to developers wishing to expand the NEAR ecosystem with new financial tools.<br><br>
    <b>Managed by Community</b><br><br>
    Our community is in the driver’s seat of PembRock Finance’s development and evolution.<br><br>
    <b>Greater Profits Unlocked</b>
    Boost your portfolio — leveraged yield farming gives participants the opportunity to increase their stake with borrowed funds and maximize their profits.<br><br>
    <b>The only leveraged yield farming on NEAR</b>
    <ul>
    <li>NEAR is still in a rapid growth, coupled with increased volumes flowing through Ref. finance.</li>
    <li>The huge buzz around farming on Ethereum, BSC, Terra, and Avalanche brings NEAR a clear opportunity to attract new users and bring greater value to existing ones.</li>
    <li>There is currently no opportunity for users to get loans for farming on NEAR. Yet.</li>
    </ul>`,
    team: [
      {
        id: 1,
        name: "Igor Stadnyk",
        bio: "Founder and CEO with a software development background and a proven track record of launching and leading blockchain projects since 2012. Corgi devotee and Lead Rocker at PembRock.",
        avatarUrl:
          "	https://pembrock.finance/static/Igor_Stadnyk-e3b4eec08e68b0074fd34e2732a6fd38.png",
        handle: "@igor",
      },
      {
        id: 2,
        name: "Vitalii Dmytrenko",
        bio: "CTO and Core Developer with more than 2 decades of experience in software and hardware development, reverse engineering and cybersecurity research. Cypherpunk. Web3 & DeFi advocate.",
        avatarUrl:
          "https://pembrock.finance/static/Vitalii_Dmytrenko-6162eb5af90f048468b5cfe71b3daf89.png",
        handle: "@vitalii",
      },
      {
        id: 3,
        name: "Oleksandr Molotsylo",
        bio: "Front End Lead Developer with over 10 years of experience developing in different programming languages. Blockchain fan for the last 4 years. Mentor, JS and ReactJS teacher.",
        avatarUrl:
          "https://pembrock.finance/static/Oleksandr_Molotsylo-d5fd00dc84fa48eb563b3e0880e78563.png",
        handle: "@Oleksandr",
      },
      {
        id: 4,
        name: "Ivan Skrypachov",
        bio: "Project Manager with 5+ years in Product IT. Guided by gained experience, Ivan smoothly manages teams of up to 30 people and builds processes from scratch. SCRUM guru.",
        avatarUrl:
          "https://pembrock.finance/static/Ivan_Skrypachov-729265f8d7e8a60828d0a45270bb3060.png",
        handle: "@ivan",
      },
    ],
    roadmapImageUrl: 'https://3621490034-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fop6AI95zTHVsmsuW1IpF%2Fuploads%2Fpyt3cN28gXSrgsgPaNrB%2Froadmap.jpg?alt=media&token=4b262c3c-2c47-4e2b-9a93-4974981972c4'
  },
  {
    id: 3,
    name: "Battlemon",
    slug: "battlemon",
    motto: "Battle NFT PVP third-person shooter P2E Rent2E.",
    imageUrl:
      "https://pbs.twimg.com/profile_banners/1439579297891684355/1645549245/1500x500",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1439672628315398144/LnN33ROA_400x400.jpg",
    description:
      "A competitive 3D third-person shooter (TPS) with a variety of weapons and the ability to hang various combat modules. Each character in the game is unique because it is a separate NFT hero. Exciting battles are waiting for you!.",
    verified: true,

    tags: ["Games", "NFTs"],
    campaignHtml: `<b>Supported by Near Foundation</b><br>
    PembRock Finance has been created with the support of the NEAR Foundation, which delivers grants to developers wishing to expand the NEAR ecosystem with new financial tools.<br><br>
    <b>Managed by Community</b><br><br>
    Our community is in the driver’s seat of PembRock Finance’s development and evolution.<br><br>
    <b>Greater Profits Unlocked</b>
    Boost your portfolio — leveraged yield farming gives participants the opportunity to increase their stake with borrowed funds and maximize their profits.<br><br>
    <b>The only leveraged yield farming on NEAR</b>
    <ul>
    <li>NEAR is still in a rapid growth, coupled with increased volumes flowing through Ref. finance.</li>
    <li>The huge buzz around farming on Ethereum, BSC, Terra, and Avalanche brings NEAR a clear opportunity to attract new users and bring greater value to existing ones.</li>
    <li>There is currently no opportunity for users to get loans for farming on NEAR. Yet.</li>
    </ul>`,
    team: [
      {
        id: 1,
        name: "Igor Stadnyk",
        bio: "Founder and CEO with a software development background and a proven track record of launching and leading blockchain projects since 2012. Corgi devotee and Lead Rocker at PembRock.",
        avatarUrl:
          "	https://pembrock.finance/static/Igor_Stadnyk-e3b4eec08e68b0074fd34e2732a6fd38.png",
        handle: "@igor",
      },
      {
        id: 2,
        name: "Vitalii Dmytrenko",
        bio: "CTO and Core Developer with more than 2 decades of experience in software and hardware development, reverse engineering and cybersecurity research. Cypherpunk. Web3 & DeFi advocate.",
        avatarUrl:
          "https://pembrock.finance/static/Vitalii_Dmytrenko-6162eb5af90f048468b5cfe71b3daf89.png",
        handle: "@vitalii",
      },
      {
        id: 3,
        name: "Oleksandr Molotsylo",
        bio: "Front End Lead Developer with over 10 years of experience developing in different programming languages. Blockchain fan for the last 4 years. Mentor, JS and ReactJS teacher.",
        avatarUrl:
          "https://pembrock.finance/static/Oleksandr_Molotsylo-d5fd00dc84fa48eb563b3e0880e78563.png",
        handle: "@Oleksandr",
      },
      {
        id: 4,
        name: "Ivan Skrypachov",
        bio: "Project Manager with 5+ years in Product IT. Guided by gained experience, Ivan smoothly manages teams of up to 30 people and builds processes from scratch. SCRUM guru.",
        avatarUrl:
          "https://pembrock.finance/static/Ivan_Skrypachov-729265f8d7e8a60828d0a45270bb3060.png",
        handle: "@ivan",
      },
    ],
    roadmapImageUrl: 'https://3621490034-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fop6AI95zTHVsmsuW1IpF%2Fuploads%2Fpyt3cN28gXSrgsgPaNrB%2Froadmap.jpg?alt=media&token=4b262c3c-2c47-4e2b-9a93-4974981972c4'
  },
  {
    id: 4,
    name: "Bearverse",
    slug: "bearverse",
    motto:
      "Bearverse is a metaverse of exciting games, united by one token, a mighty 3D NFT bear, and one world — a freezing land of mysterious dieselpunk.",
    imageUrl:
      "https://pbs.twimg.com/media/FRaxenvXEAAVu3b?format=png&name=900x900",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1507835850482229259/9acmlIS4_400x400.png",
    description:
      "🐻 The Bearverse is a metaverse of frozen territories where 11 clans of bears fight and extract resources, surviving in a post-apocalyptic dieselpunk world. The main task of these clans is to survive in the world of icy wastelands.",
    verified: true,

    tags: ["Games", "NFTs"],
    campaignHtml: `<b>Supported by Near Foundation</b><br>
    PembRock Finance has been created with the support of the NEAR Foundation, which delivers grants to developers wishing to expand the NEAR ecosystem with new financial tools.<br><br>
    <b>Managed by Community</b><br><br>
    Our community is in the driver’s seat of PembRock Finance’s development and evolution.<br><br>
    <b>Greater Profits Unlocked</b>
    Boost your portfolio — leveraged yield farming gives participants the opportunity to increase their stake with borrowed funds and maximize their profits.<br><br>
    <b>The only leveraged yield farming on NEAR</b>
    <ul>
    <li>NEAR is still in a rapid growth, coupled with increased volumes flowing through Ref. finance.</li>
    <li>The huge buzz around farming on Ethereum, BSC, Terra, and Avalanche brings NEAR a clear opportunity to attract new users and bring greater value to existing ones.</li>
    <li>There is currently no opportunity for users to get loans for farming on NEAR. Yet.</li>
    </ul>`,
    team: [
      {
        id: 1,
        name: "Igor Stadnyk",
        bio: "Founder and CEO with a software development background and a proven track record of launching and leading blockchain projects since 2012. Corgi devotee and Lead Rocker at PembRock.",
        avatarUrl:
          "	https://pembrock.finance/static/Igor_Stadnyk-e3b4eec08e68b0074fd34e2732a6fd38.png",
        handle: "@igor",
      },
      {
        id: 2,
        name: "Vitalii Dmytrenko",
        bio: "CTO and Core Developer with more than 2 decades of experience in software and hardware development, reverse engineering and cybersecurity research. Cypherpunk. Web3 & DeFi advocate.",
        avatarUrl:
          "https://pembrock.finance/static/Vitalii_Dmytrenko-6162eb5af90f048468b5cfe71b3daf89.png",
        handle: "@vitalii",
      },
      {
        id: 3,
        name: "Oleksandr Molotsylo",
        bio: "Front End Lead Developer with over 10 years of experience developing in different programming languages. Blockchain fan for the last 4 years. Mentor, JS and ReactJS teacher.",
        avatarUrl:
          "https://pembrock.finance/static/Oleksandr_Molotsylo-d5fd00dc84fa48eb563b3e0880e78563.png",
        handle: "@Oleksandr",
      },
      {
        id: 4,
        name: "Ivan Skrypachov",
        bio: "Project Manager with 5+ years in Product IT. Guided by gained experience, Ivan smoothly manages teams of up to 30 people and builds processes from scratch. SCRUM guru.",
        avatarUrl:
          "https://pembrock.finance/static/Ivan_Skrypachov-729265f8d7e8a60828d0a45270bb3060.png",
        handle: "@ivan",
      },
    ],
    roadmapImageUrl: 'https://3621490034-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fop6AI95zTHVsmsuW1IpF%2Fuploads%2Fpyt3cN28gXSrgsgPaNrB%2Froadmap.jpg?alt=media&token=4b262c3c-2c47-4e2b-9a93-4974981972c4'
  },
  {
    id: 5,
    name: "Bearverse",
    slug: "bearverse",
    motto:
      "Bearverse is a metaverse of exciting games, united by one token, a mighty 3D NFT bear, and one world — a freezing land of mysterious dieselpunk.",
    imageUrl:
      "https://pbs.twimg.com/profile_banners/1428095273579032579/1647855767/1500x500",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1507835850482229259/9acmlIS4_400x400.png",
    description:
      "🐻 The Bearverse is a metaverse of frozen territories where 11 clans of bears fight and extract resources, surviving in a post-apocalyptic dieselpunk world. The main task of these clans is to survive in the world of icy wastelands.",
    verified: true,

    tags: ["Games", "NFTs"],
    campaignHtml: `<b>Supported by Near Foundation</b><br>
    PembRock Finance has been created with the support of the NEAR Foundation, which delivers grants to developers wishing to expand the NEAR ecosystem with new financial tools.<br><br>
    <b>Managed by Community</b><br><br>
    Our community is in the driver’s seat of PembRock Finance’s development and evolution.<br><br>
    <b>Greater Profits Unlocked</b>
    Boost your portfolio — leveraged yield farming gives participants the opportunity to increase their stake with borrowed funds and maximize their profits.<br><br>
    <b>The only leveraged yield farming on NEAR</b>
    <ul>
    <li>NEAR is still in a rapid growth, coupled with increased volumes flowing through Ref. finance.</li>
    <li>The huge buzz around farming on Ethereum, BSC, Terra, and Avalanche brings NEAR a clear opportunity to attract new users and bring greater value to existing ones.</li>
    <li>There is currently no opportunity for users to get loans for farming on NEAR. Yet.</li>
    </ul>`,
    team: [
      {
        id: 1,
        name: "Igor Stadnyk",
        bio: "Founder and CEO with a software development background and a proven track record of launching and leading blockchain projects since 2012. Corgi devotee and Lead Rocker at PembRock.",
        avatarUrl:
          "	https://pembrock.finance/static/Igor_Stadnyk-e3b4eec08e68b0074fd34e2732a6fd38.png",
        handle: "@igor",
      },
      {
        id: 2,
        name: "Vitalii Dmytrenko",
        bio: "CTO and Core Developer with more than 2 decades of experience in software and hardware development, reverse engineering and cybersecurity research. Cypherpunk. Web3 & DeFi advocate.",
        avatarUrl:
          "https://pembrock.finance/static/Vitalii_Dmytrenko-6162eb5af90f048468b5cfe71b3daf89.png",
        handle: "@vitalii",
      },
      {
        id: 3,
        name: "Oleksandr Molotsylo",
        bio: "Front End Lead Developer with over 10 years of experience developing in different programming languages. Blockchain fan for the last 4 years. Mentor, JS and ReactJS teacher.",
        avatarUrl:
          "https://pembrock.finance/static/Oleksandr_Molotsylo-d5fd00dc84fa48eb563b3e0880e78563.png",
        handle: "@Oleksandr",
      },
      {
        id: 4,
        name: "Ivan Skrypachov",
        bio: "Project Manager with 5+ years in Product IT. Guided by gained experience, Ivan smoothly manages teams of up to 30 people and builds processes from scratch. SCRUM guru.",
        avatarUrl:
          "https://pembrock.finance/static/Ivan_Skrypachov-729265f8d7e8a60828d0a45270bb3060.png",
        handle: "@ivan",
      },
    ],
    roadmapImageUrl: 'https://3621490034-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fop6AI95zTHVsmsuW1IpF%2Fuploads%2Fpyt3cN28gXSrgsgPaNrB%2Froadmap.jpg?alt=media&token=4b262c3c-2c47-4e2b-9a93-4974981972c4'
  },
  {
    id: 6,
    name: "Bearverse",
    slug: "bearverse",
    motto:
      "Bearverse is a metaverse of exciting games, united by one token, a mighty 3D NFT bear, and one world — a freezing land of mysterious dieselpunk.",
    imageUrl:
      "https://pbs.twimg.com/profile_banners/1428095273579032579/1647855767/1500x500",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1507835850482229259/9acmlIS4_400x400.png",
    description:
      "🐻 The Bearverse is a metaverse of frozen territories where 11 clans of bears fight and extract resources, surviving in a post-apocalyptic dieselpunk world. The main task of these clans is to survive in the world of icy wastelands.",
    verified: true,

    tags: ["Games", "NFTs"],
    campaignHtml: `<b>Supported by Near Foundation</b><br>
    PembRock Finance has been created with the support of the NEAR Foundation, which delivers grants to developers wishing to expand the NEAR ecosystem with new financial tools.<br><br>
    <b>Managed by Community</b><br><br>
    Our community is in the driver’s seat of PembRock Finance’s development and evolution.<br><br>
    <b>Greater Profits Unlocked</b>
    Boost your portfolio — leveraged yield farming gives participants the opportunity to increase their stake with borrowed funds and maximize their profits.<br><br>
    <b>The only leveraged yield farming on NEAR</b>
    <ul>
    <li>NEAR is still in a rapid growth, coupled with increased volumes flowing through Ref. finance.</li>
    <li>The huge buzz around farming on Ethereum, BSC, Terra, and Avalanche brings NEAR a clear opportunity to attract new users and bring greater value to existing ones.</li>
    <li>There is currently no opportunity for users to get loans for farming on NEAR. Yet.</li>
    </ul>`,
    team: [
      {
        id: 1,
        name: "Igor Stadnyk",
        bio: "Founder and CEO with a software development background and a proven track record of launching and leading blockchain projects since 2012. Corgi devotee and Lead Rocker at PembRock.",
        avatarUrl:
          "	https://pembrock.finance/static/Igor_Stadnyk-e3b4eec08e68b0074fd34e2732a6fd38.png",
        handle: "@igor",
      },
      {
        id: 2,
        name: "Vitalii Dmytrenko",
        bio: "CTO and Core Developer with more than 2 decades of experience in software and hardware development, reverse engineering and cybersecurity research. Cypherpunk. Web3 & DeFi advocate.",
        avatarUrl:
          "https://pembrock.finance/static/Vitalii_Dmytrenko-6162eb5af90f048468b5cfe71b3daf89.png",
        handle: "@vitalii",
      },
      {
        id: 3,
        name: "Oleksandr Molotsylo",
        bio: "Front End Lead Developer with over 10 years of experience developing in different programming languages. Blockchain fan for the last 4 years. Mentor, JS and ReactJS teacher.",
        avatarUrl:
          "https://pembrock.finance/static/Oleksandr_Molotsylo-d5fd00dc84fa48eb563b3e0880e78563.png",
        handle: "@Oleksandr",
      },
      {
        id: 4,
        name: "Ivan Skrypachov",
        bio: "Project Manager with 5+ years in Product IT. Guided by gained experience, Ivan smoothly manages teams of up to 30 people and builds processes from scratch. SCRUM guru.",
        avatarUrl:
          "https://pembrock.finance/static/Ivan_Skrypachov-729265f8d7e8a60828d0a45270bb3060.png",
        handle: "@ivan",
      },
    ],
    roadmapImageUrl: 'https://3621490034-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fop6AI95zTHVsmsuW1IpF%2Fuploads%2Fpyt3cN28gXSrgsgPaNrB%2Froadmap.jpg?alt=media&token=4b262c3c-2c47-4e2b-9a93-4974981972c4'
  },
  {
    id: 7,
    name: "Bearverse",
    slug: "bearverse",
    motto:
      "Bearverse is a metaverse of exciting games, united by one token, a mighty 3D NFT bear, and one world — a freezing land of mysterious dieselpunk.",
    imageUrl:
      "https://pbs.twimg.com/profile_banners/1428095273579032579/1647855767/1500x500",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1507835850482229259/9acmlIS4_400x400.png",
    description:
      "🐻 The Bearverse is a metaverse of frozen territories where 11 clans of bears fight and extract resources, surviving in a post-apocalyptic dieselpunk world. The main task of these clans is to survive in the world of icy wastelands.",
    verified: true,

    tags: ["Games", "NFTs"],
    campaignHtml: `<b>Supported by Near Foundation</b><br>
    PembRock Finance has been created with the support of the NEAR Foundation, which delivers grants to developers wishing to expand the NEAR ecosystem with new financial tools.<br><br>
    <b>Managed by Community</b><br><br>
    Our community is in the driver’s seat of PembRock Finance’s development and evolution.<br><br>
    <b>Greater Profits Unlocked</b>
    Boost your portfolio — leveraged yield farming gives participants the opportunity to increase their stake with borrowed funds and maximize their profits.<br><br>
    <b>The only leveraged yield farming on NEAR</b>
    <ul>
    <li>NEAR is still in a rapid growth, coupled with increased volumes flowing through Ref. finance.</li>
    <li>The huge buzz around farming on Ethereum, BSC, Terra, and Avalanche brings NEAR a clear opportunity to attract new users and bring greater value to existing ones.</li>
    <li>There is currently no opportunity for users to get loans for farming on NEAR. Yet.</li>
    </ul>`,
    team: [
      {
        id: 1,
        name: "Igor Stadnyk",
        bio: "Founder and CEO with a software development background and a proven track record of launching and leading blockchain projects since 2012. Corgi devotee and Lead Rocker at PembRock.",
        avatarUrl:
          "	https://pembrock.finance/static/Igor_Stadnyk-e3b4eec08e68b0074fd34e2732a6fd38.png",
        handle: "@igor",
      },
      {
        id: 2,
        name: "Vitalii Dmytrenko",
        bio: "CTO and Core Developer with more than 2 decades of experience in software and hardware development, reverse engineering and cybersecurity research. Cypherpunk. Web3 & DeFi advocate.",
        avatarUrl:
          "https://pembrock.finance/static/Vitalii_Dmytrenko-6162eb5af90f048468b5cfe71b3daf89.png",
        handle: "@vitalii",
      },
      {
        id: 3,
        name: "Oleksandr Molotsylo",
        bio: "Front End Lead Developer with over 10 years of experience developing in different programming languages. Blockchain fan for the last 4 years. Mentor, JS and ReactJS teacher.",
        avatarUrl:
          "https://pembrock.finance/static/Oleksandr_Molotsylo-d5fd00dc84fa48eb563b3e0880e78563.png",
        handle: "@Oleksandr",
      },
      {
        id: 4,
        name: "Ivan Skrypachov",
        bio: "Project Manager with 5+ years in Product IT. Guided by gained experience, Ivan smoothly manages teams of up to 30 people and builds processes from scratch. SCRUM guru.",
        avatarUrl:
          "https://pembrock.finance/static/Ivan_Skrypachov-729265f8d7e8a60828d0a45270bb3060.png",
        handle: "@ivan",
      },
    ],
  },
  
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Project = ElementType<typeof data>;
