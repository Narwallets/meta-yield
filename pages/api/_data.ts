export const data = [
  {
    id: 0, // key para proyectos en katherine
    slug: "permrock", // unique friendly identifier per project. katherine smart contract would retrieve this field
    name: "PembRock Finance",
    motto: "Leveraged yield farming is NEAR.",
    projectUrl: "https://pembrock.finance/",
    twitter: "https://twitter.com/PembrockFi",
    imageUrl:
      "https://res.cloudinary.com/metayield/image/upload/v1652446802/Pembrock/Pembrock_Cover_2_ccvd3n.png",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1496155033389391873/d4H_TCLF_400x400.jpg",
    description:
      "Is the first leveraged yield farming application on NEAR Protocol. It is aimed at providing users with larger yields and greater liquidity — all on the NEAR blockchain.",
    verified: true,
    tags: ["Finance", "Infrastructure", "Security", "Vault"],
    campaignHtml: `PembRock Finance is the first leveraged yield farming project on NEAR! Founded by NEAR guild masters and having secured a $75,000 grant from the NEAR Foundation, PembRock will provide new tools to reach a wider usership, attracting more investment and expanding the NEAR ecosystem.<br><br>
      Lenders earn passive income by depositing their crypto into the vaults which fund liquidity pools, while yield farmers can maximize their profits by opening a leveraged position. <br><br>
      The financial ecosystem of PembRock finance will be supported by native and versative <b>PEM Token</b>. It is used: <br><br>
      <ul><li>To stake within the PembRock Finance ecosystem — with rewards paid out in PEM.</li>
      <li>As a part of our reward mechanism for interacting with our protocol.</li>
      <li>As an additional bonus for those who provide funds to our liquidity pools.</li>
      <li>For DAO participation — users can stake PEM to receive xPEM, our governance token.</li></ul> <br><br>
      All fees are collected as profit and are distributed among PEM holders who have staked in our protocol! <br><br>
      <b>How the protocol collects fees</b>
      <ul><li>Farmers are charged 10% of their yield farming rewards.</li>
      <li>Lenders are charged 10% of their borrowing profit.</li>
      <li>Every time a position is liquidated, 5% of the position’s value is paid as a fee.</li></ul>  <br>
      Detailed Tokenomics - <a target="_blank" href="https://docs.pembrock.finance/tokenomics">https://docs.pembrock.finance/tokenomics </a>`,
    team: [
      {
        name: "Igor Stadnyk",
        bio: "Founder and CEO with a software development background and a proven track record of launching and leading blockchain projects since 2012. Lead Rocker at PembRock.",
      },
      {
        name: "Vitalii Dmytrenko",
        bio: "CTO with more than 2 decades of experience in software and hardware development, reverse engineering, and cybersecurity research. Cypherpunk.",
      },
      {
        name: "Ivan Skrypachov",
        bio: "Project Driver with 5+ years in Product IT. Guided by gained experience, Ivan smoothly manages teams of up to 30 people and builds processes from scratch. SCRUM guru.",
      },
      {
        name: "Sofia Pidturkina",
        bio: "Public Relations Specialist backed by versatile project experiences in Marketing and Communications for over 4 years. NEAR hodler.",
      },
      {
        name: "Oleksandr Molotsylo",
        bio: "Lead Web Developer with over 10 years of experience developing in different programming languages. Blockchain fan for 4 years. Mentor, JS, and ReactJS teacher.",
      },
      {
        name: "Vladyslav Kindra",
        bio: "Interface Creator driven by more than 6 years of experience in Product Design, and focusing on blockchain projects for the last 3 years. User-friendly interface ninja.",
      },
      {
        name: "Oleksii Kuznietsov",
        bio: "Blockchain Engineer with 5 years of development experience. Blockchain addicted and Rust enthusiast. Founder of his university's Rust club.",
      },
      {
        name: "Volodymyr Udovychenko",
        bio: "Web Developer with development expertise of 2 years in blockchain and performance marketing industries. JS, React, and Node.js wizard.",
      },
    ],
    roadmap: {
      imageUrl:
        "https://res.cloudinary.com/metayield/image/upload/v1652215642/Pembrock/Roadmap_rw4qd8.png",
      linkUrl: "https://docs.pembrock.finance/roadmap",
    },
    faq: [
      {
        title: "What is PembRock?",
        content:
          "PembRock is the first leveraged yield farming protocol built on the NEAR blockchain. Users can provide liquidity, farm with leverage, stake, and take governance decisions to secure the future of the platform, all on a fast, secure, cheap, and user-friendly blockchain.",
      },
      {
        title: "What is yield farming?",
        content: `Yield farming is the act of lending your cryptocurrency to the most profitable platforms in order to earn the highest DeFi yields. Rather than the traditional order book model that matches real buyers and sellers of assets, DeFi applications employ the Automated Market Maker (AMM) model. AMMs allow trades to be executed immediately through the use of algorithms and pools of tokens. This is where users come in, helping to provide liquidity to pools in exchange for a percentage return on investment. <br><br>
    The main difference between staking and yield farming is that the latter is defined by its mobility. Yield farming often involves the quick movement of crypto funds — either manually or through automated tools — to chase the highest rate of return, calculated by APY; however this is not a strict rule, and yield farmers who find a great protocol can reap fantastic rewards over a long period of time.`,
      },
      {
        title: "What is leveraged yield farming?",
        content: `Leveraged yield farming is simply normal yield farming but supercharged! It is the practice of borrowing external liquidity to farm a larger amount of crypto, thus gaining the ability to get increased returns. <br><br>
    While many DeFi lending platforms still require users to overcollateralize (put up funds of a greater value than those being borrowed), our leveraged yield farming platform undercollateralizes, meaning: <br><br>
    <ul>
      <li>A lower barrier to entry</li>
      <li>Fewer funds laying dormant</li>
      <li>Greater rewards for users.</li></ul>`,
      },
      {
        title: "Why did we build PembRock?",
        content: `Yield farming is one of the key drivers of the DeFi ecosystem, with the liquidity provided by users helping protocols to innovate, building new features for the benefit of the entire community. Despite this symbiotic relationship, the DeFi sector is still in its experimental stages, meaning that current yield farming projects can be temperamental, hard-to-use, and occasionally, less than secure. It is only through trusted projects that decentralized finance can move into a more mature phase.<br><br>
      We wanted to play our part in this exciting sector, and what better opportunity could we get than building on NEAR, a blockchain which has made huge strides over the past year but is yet to house a leveraged yield farming platform.<br><br>
      Like our developers, NEAR Protocol wishes to accelerate the dream of DeFi as an integral part of Web 3.0 that is accessible to all. NEAR:<br><br>
      <ul>
      <li>AIs a fast, inexpensive and carbon-neutral blockchain.</li>
      <li>Incorporates a user-friendly wallet.</li>
      <li>Operates with the Delegated Proof of Stake (DPoS) consensus mechanism, encouraging greater community participation.</li>
      <li>Has a large dedicated community.</li></ul><br><br>
      One of the most exciting things about NEAR is its promotion of Guilds — teams of developers from the community who are creating innovative apps that are accessible to all users, which is one of the important aspects of continued DeFi growth. PembRock Finance is supported by both INC4 and Minerall Guilds in its development.<br><br>
      The NEAR ecosystem is expanding, with volume on DEXs such as Ref.finance increasing. With the demand for NEAR’s native products and a desire by crypto users to get maximum returns, now is a great time for PembRock Finance’s release. The NEAR Team seems to agree, which is why they provided us with a grant to assist us with the development of PembRock.`,
      },
      {
        title: "How can I participate in PembRock Finance?",
        content: `With PembRock’s leveraged yield farming platform, you can participate as a:<br><br>
      <ul>
      <li>Lender - providing funds to individuals who wish to farm with leverage for high returns.</li>
      <li>Farmer - opening a position with leverage of up to 3x for greater rewards.</li>
      <li>Staker - locking up your $PEM token for high returns.</li>
      <li>Governance staker - staking $PEM for xPEM, used to vote on the future direction of the platform!</li></ul>`,
      },
      {
        title: "Where does my yield come from?",
        content: `It’s the rule in DeFi that you should always try to understand where your yield comes from.<br><br>
    With PembRock, you can earn great yields from both lending and leveraged yield farming.<br><br>
    <ul>
    <li>As a lender, you will earn from interest paid by borrowers who open leveraged yield farming positions.</li>
    <li>As a yield farmer, you will earn money from fees paid by the pool you invest in.</li>
    <li>Later we will introduce governance staking, giving users another way to earn with PembRock!</li></ul>`,
      },
      {
        title: "What is the $PEM token and why should I hold it?",
        content: `$PEM is PembRock Finance’s native token, used:<br><br>
      <ul>
      <li>To stake within the PembRock Finance ecosystem — with rewards paid out in PEM.</li>
      <li>As a part of our reward mechanism for interacting with our protocol.</li>
      <li>As an additional bonus for those who provide funds to our liquidity pools.</li>
      <li>For DAO participation — users can stake PEM to receive xPEM, our governance token.</li></ul> <br>
      The 10% of the borrowing and farming interest profits that we collect from people, as well as the 5% fee that is charged when a position is liquidated, is distributed among the PEM holders who have staked in our protocol!<br><br>
      As leveraged yield farming allows you to profit regardless of market trends, the $PEM token has utility in both bull and bear markets.`,
      },
      {
        title: "Where can I buy the $PEM token?",
        content: `First of all, stay tuned for our upcoming IDO on Meta Yield, Boca Chica, SmartPad, and Skyward. Moreover, will have the opportunity to buy the $PEM token on Ref Finance, which will be progressively rolled out to further CEXes and DEXes afterward.`,
      },
      {
        title: "Can I be liquidated as a lender?",
        content: `No — only those that farm with leverage can be liquidated, if one or both of the coins in the pair lose a certain amount of value relative to the funds leveraged in the position.`,
      },
      {
        title: "What’s the fee for using PembRock Finance?",
        content: `<ul><li>Farmers are charged 10% of their yield farming rewards as a fee, which goes to the protocol.</li>
      <li>Lenders are charged 10% of their borrowing interest profit as a fee, which goes to the protocol.</li>
      <li>A 5% fee is charged every time a position is liquidated, which goes to the protocol.</li></ul>`,
      },
      {
        title: "Have your contracts been audited?",
        content: `Auditing is part of Milestone 5 in our roadmap. Before deploying to the mainnet, you can be guaranteed that PembRock will be thoroughly tested by our expert team and externally audited. We are already conducting negotiations with several companies about this audit.`,
      },
      {
        title: "What's the fundamental difference between 2x and 3x leverage?",
        content: `Leveraged yield farming allows users to receive undercollateralized loans, multiplying the investment they would otherwise be able to lock in. This has the benefit of allowing farmers to get more yield, while also benefiting the DeFi protocol through greater liquidity and fees from profits.<br><br>
      <ul>
      <li>Leverage of 2x means that your initial investment will be matched by the platform > if you have $100 worth of $PEM, you can now farm with $200 worth.
      <li>Leverage of 3x means that your initial investment will be tripled by the platform > if you have $100 worth of $PEM, you can now farm with $300 worth.</li></ul>`,
      },
      {
        title: "Why did you build on NEAR Protocol?",
        content: `We built on NEAR protocol for quite a few reasons:<br><br>
      <ul>
      <li>NEAR’s wallet and Dapps put a focus on user-friendliness. We love this ethos as it will help bring DeFi into the mainstream.</li>
      <li>The <a target="_blank" href="https://near.org/blog/near-climate-neutral-product/#:~:text=NEAR%20Protocol%20has%20been%20awarded,2)%20and%20other%20greenhouse%20gases.">blockchain is carbon neutral</a>, already putting it a step ahead of its competitors.</li>
      <li>It is secure, fast, and cheap.</li>
      <li>The NEAR community is great! Its members are incredibly passionate and really believe in the future of the blockchain.</li>
      <li>NEAR guilds provide great support to developers looking to build innovative Dapps within the ecosystem.</li>
      <li>We will be the first leveraged yield farming protocol on the blockchain, having received a $75,000 grant from the NEAR Foundation!</li></ul>`,
      },
      {
        title: "How do your reinvest mechanics work?",
        content: `Reinvesting allows you to receive compound interest; that is, profit on top of profit that has already been generated. Reinvesting is done automatically.<br><br>
    The infographic below shows how reinvesting works with PembRock:<br><br>
    <img alt src="https://res.cloudinary.com/metayield/image/upload/v1652215639/Pembrock/How_It_Works_omx6dw.png">
  `,
      },
      {
        title: "Which wallets do PembRock Finance support?",
        content: `At the moment, PembRock Finance supports the NEAR wallet, but other wallets will be integrated once the protocol is up and running.`,
      },
      {
        title: "Who is the team behind PembRock Finance?",
        content: `PembRock Finance was created by a team of blockchain experts, led by Igor Stadnyk, CEO of INC4. Everything about our team is transparent, as we understand the importance of trust when engaging with new DeFi projects. You can <a target="_blank" href="https://pembrock.finance/">read about each of our developers here.</a>`,
      },
    ],
    about: `PembRock couples lenders and yield farmers who are rewarded for providing liquidity within the NEAR ecosystem. On launch, we will support two base assets — NEAR and USDT — and integrate our leveraged farming with Ref Finance.‌ <br><br>
  <br><br>The lender deposits their NEAR and earns interest from the borrowing fees paid by yield farmers.
  <br><br><b>Leveraged Farmer</b>
  <br><br>The yield farmer opens a leveraged yield farming position on a trading pair, borrowing NEAR from the vault and joining the farming pool with leverage. The yield farmer gets higher returns due to the larger stake, but pays a 10% premium for the privilege of using borrowed funds.
  <br><br><b>Liquidator bot</b>
  <br><br>The liquidator bot monitors all yield farming positions, liquidating those that become too risky. If a leveraged yield farming position does get liquidated, 5% of the position’s fee goes to the protocol, and is then distributed among those who have staked the PEM token.
  <br><br> 
  <img alt src="https://res.cloudinary.com/metayield/image/upload/v1652215639/Pembrock/How_It_Works_omx6dw.png">
  `,
    documents: [
      { title: "Tokenomics", url: "https://docs.pembrock.finance/tokenomics " },
      { title: "Roadmap", url: "https://docs.pembrock.finance/roadmap" },
      { title: "Team", url: "https://pembrock.finance/team" },
    ],
  },
  {
    id: 1, // key para proyectos en katherine
    slug: "daorecords", // unique friendly identifier per project. katherine smart contract would retrieve this field
    name: "DAOrecords",
    motto: "Reinventing The Record Label",
    projectUrl: "https://www.daorecords.org/",
    twitter: "https://twitter.com/DAOrecords_",
    imageUrl: "/projects/daorecords/cover.png",
    avatarUrl: "/projects/daorecords/logo.png",
    description: `SoundSplash is the official launch of the DAOrecords Alpha. Through a 12 week Metaverse Music Event Series we will host 12 Audio NFT drops, each on individual “Splash” pages using our FonoRoot NFT system, showcasing some amazing talents from across the globe.
        To power the SoundSplash micro-economy we have created $SPLASH, a token available only to event participants, Splash Pass holders and through our Meta Yield Fundraiser.
        `,
    verified: true,
    tags: [
      "SoundSplash",
      "FonoRoot",
      "MusicNFTs",
      "AudioNFTs",
      "Decentralizing",
      "Music Industry",
    ],
    campaignHtml: `<p><strong>About DAOrecords SoundSplash?</strong></p><br/>
      <p><span style="font-weight: 400;">SoundSplash is the official launch of the DAOrecords Alpha. Through a 12 week Metaverse Music Event Series we will host 12 Audio NFT drops, each on individual &ldquo;Splash&rdquo; pages using our FonoRoot NFT system, showcasing some amazing talents from across the globe.</span></p>
      <p><span style="font-weight: 400;">To power the SoundSplash micro-economy we have created $SPLASH, a token available only to event participants, Splash Pass holders and through our Meta Yield Fundraiser.</span></p>
      <p>&nbsp;</p>
      <p><strong>How does SoundSplash work?</strong></p><br/>
      <img alt src="/projects/daorecords/howitwork.jpg"><br/>
      <p><strong>About $SPLASH token</strong></p><br/>
      <p><span style="font-weight: 400;">$SPLASH token will be used to fuel the SoundSplash micro-economy</span></p> 
      <ul style="margin-left: 20px">
      <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Token Account ID: ft.soundsplash.near (tbc)</span></li>
      <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Total Supply: 1,000,000 $SPLASH</span></li>
      <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Precision: 8</span></li>
      <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Current circulating supply: 0</span></li>
      </ul>
      <p><span style="font-weight: 400;"><br /><br /></span></p>
      <p><strong>What is $SPLASH, the token allocation and future allocation?</strong></p><br/>
      <p><span style="font-weight: 400;">$SPLASH is a NEP-141 token created by DAOrecords for the SoundSplash event series micro-economy. $SPLASH will be allocated to the Team (20%), Artists (12%), Splash Pass holders (12%), NFT Staking (10%), Meta Yield Staking (25%), Liquidity (5%) and the remaining 16% held in the DAO for contests and airdrops.</span></p>
      <p><span style="font-weight: 400;">Holders of $SPLASH can redeem tokens for NFTs, tips artists, swap for future DAOrecords tokens, use in DeFI on Ref Finance, exchange for $NEAR and earn through NFT Staking and other social activities.</span></p>
      <p>&nbsp;</p>
      <p><strong>Token Allocation</strong></p>
      <p><span style="font-weight: 400;">&nbsp;</span></p>
      <table>
      <tbody>
      <tr>
      <td>
      <p><strong><em>For</em></strong></p>
      </td>
      <td>
      <p><strong><em>Allocation</em></strong></p>
      </td>
      <td>
      <p><strong><em>Details</em></strong></p>
      </td>
      </tr>
      <tr>
      <td>
      <p><span style="font-weight: 400;">Team</span></p>
      </td>
      <td>
      <p><span style="font-weight: 400;">20%</span></p>
      </td>
      <td>
      <p><span style="font-weight: 400;">Distributed according to the contribution of Team members over the course of their commitment to SoundSplash.</span></p>
      </td>
      </tr>
      <tr>
      <td>
      <p><span style="font-weight: 400;">DAO</span></p>
      </td>
      <td>
      <p><span style="font-weight: 400;">16%</span></p>
      </td>
      <td>
      <p><span style="font-weight: 400;">Used for community airdrops, sponsor allocation &amp; more.</span></p>
      </td>
      </tr>
      <tr>
      <td>
      <p><span style="font-weight: 400;">Artists</span></p>
      </td>
      <td>
      <p><span style="font-weight: 400;">12%</span></p>
      </td>
      <td>
      <p><span style="font-weight: 400;">Artists will receive a % of the tokens for their participation in SoundSplash.</span></p>
      <br />
      <p><span style="font-weight: 400;">50% to be paid out in advance, the remainder upon completion of SoundSplash (Aug 2022)</span></p>
      </td>
      </tr>
      <tr>
      <td>
      <p><span style="font-weight: 400;">Splash Pass Rewards</span></p>
      </td>
      <td>
      <p><span style="font-weight: 400;">12%</span></p>
      </td>
      <td>
      <p><span style="font-weight: 400;">Purchasers of our Splash Pass NFTs will receive rewards in $SPLASH tokens upon purchase.</span></p>
      </td>
      </tr>
      <tr>
      <td>
      <p><span style="font-weight: 400;">NFT Staking</span></p>
      </td>
      <td>
      <p><span style="font-weight: 400;">10%</span></p>
      </td>
      <td>
      <p><span style="font-weight: 400;">NFT Staking will go live in August 2022 after SoundSplash is complete.</span></p>
      </td>
      </tr>
      <tr>
      <td>
      <p><span style="font-weight: 400;">Liquidity</span></p>
      </td>
      <td>
      <p><span style="font-weight: 400;">5%</span></p>
      </td>
      <td>
      <p><span style="font-weight: 400;">These tokens will be used for setting up the liquidity pool on Ref Finance</span></p>
      </td>
      </tr>
      <tr>
      <td>
      <p><span style="font-weight: 400;">Meta Yield</span></p>
      </td>
      <td>
      <p><span style="font-weight: 400;">25%</span></p>
      </td>
      <td>
      <p><span style="font-weight: 400;">Stake on our project and earn 25% of our token supply</span></p>
      </td>
      </tr>
      </tbody>
      </table>
      <p><span style="font-weight: 400;">&nbsp;</span></p>
      <h3><strong>What makes SoundSplash unique?</strong></h3><br/>
      <ul style="margin-left: 20px">
      <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">SoundSplash is one of the only Metaverse music event series that blend the showcase of Artists and DJs with an Audio NFT drop</span></li>
      <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">It represents the launch of the DAOrecords Alpha, where we showcase the NFT system we are developing. We call it FonoRoot</span></li>
      <li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">It takes place in 2 virtual worlds - Cryptovoxels &amp; 2DVerse</span></li>
      </ul>
      <p><span style="font-weight: 400;">More information on our $SPLASH Tokenomics page -</span><a href="https://medium.com/@daorecords/making-a-splash-4016cba13380"><span style="font-weight: 400;">https://medium.com/@daorecords/making-a-splash-4016cba13380</span></a><span style="font-weight: 400;">.</span></p>
      <p>&nbsp;</p>
      <p><strong>How are the funds of the liquid launchpad going to be used?</strong></p><br/>
      <p><span style="font-weight: 400;">The funds we raise from the liquid launchpad will go toward our development needs to help us get to our Private Beta in time</span></p>`,
    team: [
      {
        name: "Vandal",
        bio: "Founder of DAOrecords and innovator in the Audio NFT space with over 5 years of experience in Crypto & Blockchain. Vandal is also a musician and community leader.",
      },
      {
        name: "Paul Crans",
        bio: "Project Manager for DAOrecords experienced in managing DAOs in the NEAR ecosystem with over a year of hands-on experience. Paul is also a music producer.",
      },
      {
        name: "Masia One",
        bio: "A&R for DAOrecords and a music industry veteran, Masia has travelled the world and worked with the likes of Pharrel and runs her own independent record label",
      },
      {
        name: "Sleezy Moss",
        bio: "Community Manager for DAOrecords and underground Hip Hop artist, Sleezy Moss manages the Discord community and contributes to the team in a variety of ways.",
      },
      {
        name: "Tech1",
        bio: "Social Media Manager for DAOrecords and EMD DJ & Producer, Tech1 provides the designs and manages the keys posts across the socials.",
      },
      {
        name: "Lelen",
        bio: "Product Designer for DAOrecords based in NYC, Lelen has a keen sense of style and an eye for catchy design that can be seen on our website and minting pages.",
      },
      {
        name: "Peter",
        bio: "Developer for DAOrecords, Peter has a few years under his belt and is diving into the NEAR ecosystem developing the Smart Contracts for our FonoRoot system.",
      },
      {
        name: "Vaibhav",
        bio: "Developer for DAOrecords, Vaibhav has around 8 years experience and is focused on deploying the $Splash token and assisting with other needs from the team.",
      },
    ],
    roadmap: {
      imageUrl: "/projects/daorecords/roadmap.png",
      linkUrl: "/projects/daorecords/roadmap.png",
    },
    faq: [
      {
        title: "Have any questions?",
        content: `Please join our very active Discord and Telegram communities. Additionally we are having AMA every Monday.
        <a href="https://discord.com/invite/Zp8KPJB">Discord</a>         <a href="https://t.me/DAOrecords_Community">Telegram</a> `,
      },
    ],
    about: `<p><span style="font-weight: 400;">Please join our very active Discord and Telegram communities. Additionally we are having AMA every Monday.</span></p>
  <p>&nbsp;</p>
  <p><strong>Discord</strong><span style="font-weight: 400;">: </span><a href="https://discord.com/invite/Zp8KPJB"><span style="font-weight: 400;">https://discord.com/invite/Zp8KPJB</span></a></p>
  <p><strong>Telegram: </strong><a href="https://t.me/DAOrecords_Community"><span style="font-weight: 400;">https://t.me/DAOrecords_Community</span></a></p>
  `,
    documents: [{ title: "DAOrecords", url: "https://medium.com/@daorecords" }],
  },
  {
    id: 3, // key para proyectos en katherine
    slug: "cheddar-proto", // unique friendly identifier per project. katherine smart contract would retrieve this field
    name: "Cheddar",
    motto: "Loyalty is Rewarding!",
    projectDisabled: {
      disabled: false,
      bodyHtml: ` <p>We found a mouse in the cheese</p>
      <p>Please be patient a little more!</p>`,
      title: "Project paused",
    },
    projectUrl: "https://cheddar.farm/",
    twitter: "https://twitter.com/CheddarFi",
    imageUrl: "/projects/cheddar/cover.jpg",
    avatarUrl: "/projects/cheddar/logo.svg",
    description: `Cheddar is a loyalty protocol on NEAR that provides fun and low risk ways to learn NEAR, crypto, and DEFI. Cheddar rewards loyal users with Cheddar and other tokens through its partners, farm, and games.`,
    verified: true,
    tags: ["Loyalty Rewards", "Yield Farming", "Games", "NFT"],
    campaignHtml: `
    <h3 style="font-weight: 900; font-size: 20px; margin: 10px 0 10px 0">How does Cheddar work?</h3>
    <p>New and Loyal users to the NEAR ecosystem receive Cheddar by holding partner tokens, participating in games, farms and partner integrations. Cheddar creates stickiness for projects and the NEAR ecosystem by creating deeper holder value with rewards for their loyalty.</p>
    <p>&nbsp;</p>
    <p><br></p>
    <p>&nbsp;</p>
    <h3 style="font-weight: 900; font-size: 20px; margin: 10px 0 10px 0">Cheddar&rsquo;s Unique Value Proposition</h3>
    <p>A&nbsp;Drop Zone&nbsp;for new users to crypto:</p>
    <ul>
        <li>
            <p>Learning crypto is hard and can be costly for new users.</p>
        </li>
        <li>
            <p>Cheddar aims to educate users on NEAR, crypto and DEFI</p>
        </li>
        <li>
            <p>Our NO impermanent loss pools limits losses for new users</p>
        </li>
    </ul>
    <p><br></p>
    <p>Loyalty rewards for&nbsp;Loyal NEAR&nbsp;users:</p>
    <ul>
        <li>
            <p>Partnership pools to leverage partner tokens without impermanant loss</p>
        </li>
        <li>
            <p>Fun games, NFT&rsquo;s and PowerUps to play with Cheddar</p>
        </li>
        <li>
            <p>Discounts, VIP Access and Whitelists for HODLers</p>
        </li>
    </ul>
    <p><br></p>
    <p><br></p>
    <h3 style="font-weight: 900; font-size: 20px; margin: 10px 0 10px 0">About the $token</h3>
    <p>$Cheddar is a NEP-141 loyalty token that rewards loyal users on NEAR with Cheddar. Although Cheddar has an unlimited supply, ift&rsquo;s governed by the Cheddar DAO who oversees emissions, partnerships and grants.</p>
    <ul>
        <li>
            <p>Token Account ID: token.cheddar.near</p>
        </li>
        <li>
            <p>Total Supply:&nbsp;Unlimited</p>
        </li>
        <li>
            <p>Precision: 24 digits</p>
        </li>
        <li>
            <p>Current circulating supply: 7.1 million</p>
        </li>
    </ul>
    <p><br></p>
    <p>The $Cheddar token gives hodlers the ability to participate in non-impermanet loss farms, play games and buy NFT&rsquo;s. Additional features include partner discounts, VIP access and NFT whitelists.</p>
    <p>&nbsp;</p>
    <h3 style="font-weight: 900; font-size: 20px; margin: 10px 0 10px 0">Token Allocation</h3>
    <p>Unlimited Supply emissions voted on by Cheddar DAO. Current circulating supply distribution:</p>
    <p><br></p>
    <p>&nbsp;</p>
    <ul>
        <li>
            <p>Token Sale: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3M&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;49.40%</p>
        </li>
        <li>
            <p>DAO Treasury: &nbsp; &nbsp; &nbsp;59K &nbsp; &nbsp;5.85%</p>
        </li>
        <li>
            <p>Dev Fund:&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; 300K &nbsp; 2.96%</p>
        </li>
        <li>
            <p>Farms &amp; Games: &nbsp;341K &nbsp; 3.37%</p>
        </li>
        <li>
            <p>Contributors&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; 90K &nbsp; &nbsp; 0.89%</p>
        </li>
        <li>
            <p>Community:&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; 3,60M 15.79%</p>
        </li>
        <li>
            <p>Team&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1.2M &nbsp; 11.86%</p>
        </li>
        <li>
            <p>Ref LP&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1M&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; 9.88%</p>
        </li>
    </ul>
    <br/>
    <h3 style="font-weight: 900; font-size: 20px; margin: 10px 0 10px 0">Campaign Goals and Use of Proceeds</h3>
    <p>Cheddar is a &ldquo;common good&rdquo; focused on educating and rewarding loyal users of the NEAR ecosystem. The goals of this funding campaign are:</p>
    <p><br></p>
    <ul>
        <li>
            <p>Marketing campaigns to raise awareness about the mission of Cheddar</p>
        </li>
        <li>
            <p>Further development of the Cheddar protocol</p>
        </li>
        <li>
            <p>Loyalty Programs to reward loyal users on NEAR</p>
        </li>
    </ul>`,
    team: [
      {
        name: "Blaze (NEARGEN 0)",
        avatar: "/projects/cheddar/avatar/blaze.png",
        bio: "Product Manager and Biz Dev.",
      },
      {
        name: "Chee (NEARGEN 0)",
        avatar: "/projects/cheddar/avatar/chee.png",
        bio: "Experienced Senior Rust Dev working across NEAR and Cosmos."
      },
      {
        name: "Goudam (NEARGEN 0)",
        avatar: "/projects/cheddar/avatar/goudam.png",
        bio: "Experienced Senior Rust Developer working across NEAR and Solana."
      },
      {
        name:"Fotojenic",
        avatar: "/projects/cheddar/avatar/fotojenic.png",
        bio:"Marketing and Promotion."
      },
      {
        name: "SilkKing",
        avatar: "/projects/cheddar/avatar/silkking.png",
        bio: "Front dev with experience in Javascript, React and Typescript."
      },
      {
        name:"Rmsnlk",
        avatar: "/projects/cheddar/avatar/rmlsnk.png",
        bio:"Experienced Backend Rust Developer."
      }
    ],
    roadmap: {
      imageUrl: "/projects/cheddar/roadmap.png",
      linkUrl: "/projects/cheddar/roadmap.png",
    },
    faq: [
      {
        title: "What is Cheddar?",
        content: `Cheddar is a loyalty token that rewards loyal users of the NEAR ecosystem. Our vision is to help create a thriving ecosystem on NEAR and DeFi through strategic partnerships that promote the use of NEAR while rewarding users`,
      },
      {
        title: "Is Cheddar available on other Blockchains?",
        content: `Cheddar only exists on NEAR, we may also launch on Aurora and Octopus at some point.`,
      },
      {
        title: "What happens to my staked tokens in the pools?",
        content: `It is solely for the purpose of farming. We don't transfer, leverage or lock your tokens.`,
      },
      {
        title: "Is there a Liquidity Pool (LP)?",
        content: `Yes, you can find Cheddar on Ref Finance.`,
      },
      {
        title: "Max supply is unlimited will there be a burn mechanism",
        content: `Cheddar is inflationary as it provides utility to dApps throughout the NEARVerse. Cheddar emissions / creation are however managed by the Cheddar DAO.`,
      },
      {
        title: "How does the boosting mechanism work in Cheddar?",
        content: `Boosts will be NFT's or Special Cheddar tokens that can be earned or purchased with Cheddar. They will be honored in the Cheddar Farm and by partners to give you additional yields, discounts, or special access.`,
      },
      {
        title: "What utility does the normal Cheddar token hold?",
        content: `The Cheddar token will be used in farming, discounts, and purchases.  PowerUps will give a boost to what you are doing in certain instances.`,
      },
      {
        title: "Has the contract been audited?",
        content: `Yes, one audit has been performed to date.`,
      },
    ],
    about: `Cheddar is a loyalty protocol on NEAR that provides fun and low risk ways to learn NEAR, crypto, and DEFI. Cheddar rewards loyal users with Cheddar and other tokens through its partners, farm, and games.`,
    documents: [
      {
        title: "Gitbook",
        url: "https://cheddarfarm.gitbook.io/docs/",
      },
      {
        title: "Source code",
        url: "https://github.com/alpha-fi",
      },
    ],
  },
];

export const dataToVote = [
  {
    id: 5, // key para proyectos en katherine
    slug: "amber", // unique friendly identifier per project. katherine smart contract would retrieve this field
    name: "Amber Metaverse",
    motto: "Compete, socialize, and create your own NFT assets. Free2play 3D game",
    projectUrl: "https://ambergame.top/",
    twitter: "https://twitter.com/AMBER_metaverse",
    imageUrl:"/projects/amber/cover.png",
    avatarUrl:
      "/projects/amber/icon.jpeg",
    description:
      "Web3 Game based on blockchain NEAR with various of battle modes and FREE 2 PLAY (PLAY 2 OWN) mechanics. Our main mission is mass adoption of web2 user to web3 in the form of an interactive multiplayer game. At the heart of the economic model is the OWNERSHIP OF DIGITAL ASSETS. These assets are gaming NFT. It allows users to get a virtual experience traveling through themed spaces playing games, using microservices, chasing communities, and visiting events",
    verified: true,
    tags: ["Gaming"],
    campaignHtml: `<h1 dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:20pt;margin-bottom:0pt;padding:0pt 0pt 6pt 0pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Project Description</span></h1>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;">&nbsp;</p>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">AMBER is a Web3 Game based on blockchain NEAR with various of battle modes and FREE 2 PLAY (PLAY 2 OWN) mechanics. Our main mission is mass adoption of web2 user to web3 in the form of an interactive multiplayer game. At the heart of the economic model is the OWNERSHIP OF DIGITAL ASSETS. These assets are gaming NFT. It allows users to get a virtual experience traveling through themed spaces playing games, using microservices, chasing communities, and visiting events.</span></p>
    <h2 dir="ltr" style="line-height:1.38;margin-top:18pt;margin-bottom:6pt;"><span style="font-size:16pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Gameplay</span></h2>
    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/1OQlsDkzJK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <br>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/e5c6GyNpNC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h2 dir="ltr" style="line-height:1.38;margin-top:18pt;margin-bottom:6pt;"><span style="font-size:16pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Technology</span></h2>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">At the moment we have assembled our MVP, which works and can showcase our ideas and technologies quite easily.</span></p>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">-&gt;&nbsp;</span><a href="https://ambergame.top/" style="text-decoration:none;"><span style="font-size:11pt;font-family:Arial;color:#1155cc;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">https://ambergame.top/</span></a><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp; - Game and NFT mint page (Mac and chrome are best)</span></p>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;">&nbsp;</p>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">We have the technology to &quot;stream&quot; 3D NFT into UNITY. Technology for creating game worlds in the form of NFT. Our group is sufficiently staffed to create a full-fledged game project on blockchain.&nbsp;</span></p>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;">&nbsp;</p>
    <h1 dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:20pt 0pt 6pt 0pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Use of Proceeds</span></h1>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">We are currently in the VIP/SEED phase and are looking for &quot;angels&quot; and a lead fund to launch the next iteration of development and marketing. Legal registration of our structure.&nbsp;</span></p>
    <p><br></p>
    <h1 dir="ltr" style="line-height:1.38;margin-top:20pt;margin-bottom:6pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Rewards for Backers</span></h1>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">We are extremely interested in getting backers to invest in our NFTs as they have amazing utilities.&nbsp;</span></p>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;">&nbsp;</p>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The Smart NFT Avatar is a collection of 8888 unique PFP NFT avatars with a playable 3D model that could be used in games and AR/VR spaces.</span></p>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">This is the only collection that will allow you to become a member of DAO.&nbsp;</span></p>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;">&nbsp;</p>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Only rare and semi-rare NFTs will have token stream possibilities.&nbsp;</span></p>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;">&nbsp;</p>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">All NFTs are randomly generated and have a rarity system that will determine the price on the secondary market: humans - 8799, reptiles - 80, cyborgs - 8, elf -1. All clothing is branded with partner company logos.</span></p>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;">&nbsp;</p>
    <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">But we are also interested in finding early investors for AMBER token.</span></p>`,
    team: [
      {
        name: "Valentin/INFINITY",
        bio: "Product Owner",
      },
      {
        name: "Melody",
        bio: "Influencer"
      },
      {
        name: "Andreas Kobal",
        bio: "CTO",
      },
      {
        name: "Dennis Lee",
        bio: "Back-end Dev",
      },
      {
        name: "Animem",
        bio: "Artist"
      },
      {
        name: "Kornelius Petrus",
        bio: "Product Manager"
      },
      {
        name: "Louis Egan",
        bio: "Front-end Dev"
      },
      {
        name: "Anna Voevodina",
        bio: "Legal Advisor"
      },
      {
        name: "Eldar Yakub",
        bio: "Model Engineer"
      },
      {
        name: "Semion Adam",
        bio: "Smart contract Dev"
      },
      {
        name: "Vitaly Ivolgin",
        bio: "Game Developer"
      },
      {
        name: "Derrick",
        bio: "Designer"
      },
      {
        name: "Lonchi",
        bio: "Tiktok influencer"
      },
      {
        name: "Edgar Osipov",
        bio: "Community Builder"
      },
      {
        name: "Vasilly Ponomariov",
        bio: "Legal advisor"
      },
    ],
    about: "AMBER metaverse is a free-to-play blockchain game & a platform for virtual worlds with various game modes and play 2 own economy. Our mission is blockchain mass adoption and creating a seamless transition for web2 users to web3. <br> The entire economy is based on using an AMBER token to buy a game pass, which gives you the opportunity to earn rewards in the form of virtual property.",
    roadmap:{
      imageUrl: 'projects/amber/roadmap.png'
    },
  documents:[
    {title: "Gameplay video #1", url: "https://youtu.be/1OQlsDkzJK0" },
    {title: "Gameplay video #2", url: "https://youtu.be/e5c6GyNpNC4"},
    {title: "Pitch Deck", url: "https://drive.google.com/file/d/1mkR_eBKTkdh-SzlyZid3NfxbezbS1Jof"},
    {title: "Whitepaper", url: "https://docs.google.com/document/d/1UQjLMeIZ7HT4L2wSPsJr3cBKSPbzXf_0QaRQ_ulcNLU"},
    {title: "Tokenomics", url: "https://docs.google.com/spreadsheets/d/1L06fjXUF1DTCBOR-_VrE9Tl-4rQtSUQUHgmOmWo9cGw"}
  ]
    },
    {
      id: 6, // key para proyectos en katherine
      slug: "landtoempire", // unique friendly identifier per project. katherine smart contract would retrieve this field
      name: "Land to Empire",
      motto: "It is a play-to-earn mobile strategy game on Near Protocol. In this game you are a landlord of your own land.",
      projectUrl: "https://www.landtoempire.com/",
      twitter: "https://twitter.com/LandToEmpire",
      imageUrl:"/projects/landtoempire/cover.png",
      avatarUrl:"/projects/landtoempire/icon.jpeg",
      description:
        `It is a play-to-earn mobile strategy game on Near Protocol. In this game you are a landlord of your own land.`,
      verified: true,
      tags: ["Gaming"],
      campaignHtml: `<h1 dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:20pt;margin-bottom:0pt;padding:0pt 0pt 6pt 0pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Project Description</span></h1>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">It is a play-to-earn mobile strategy game on Near Protocol. In this game you are a landlord of your own land.&nbsp;</span></p>
      <p><br></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Players need to build their own village, army and defense infrastructure.</span></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Using the resources gained from buildings and attacks on other players, you can make a powerful settlement.</span></p>
      <p><br></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Players can conjoin to create clans, participate in Clan Wars together, donate and receive troops, and chat with each other</span></p>
      <h2 dir="ltr" style="line-height:1.38;margin-top:18pt;margin-bottom:6pt;"><span style="font-size:16pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Gameplay</span></h2>
      <p><br></p>

      <iframe src="https://drive.google.com/file/d/1GHgbd3MssFydDIGI6ADfAHQNnFVrt4mR/preview" width="640" height="480" allow="autoplay"></iframe>
      <p><br></p>

      <h2 dir="ltr" style="line-height:1.38;margin-top:18pt;margin-bottom:6pt;"><span style="font-size:16pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Resources</span></h2>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Resources are the currencies used to purchase and upgrade assets. To attack, players train different types of troops using resources.</span></p>
      <p><br></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">There are 3 main resources in Land to Empire: Gold, Elixir and Gems. These resources have buildings that are used for storing and generating them.</span></p>
      <p><br></p>
      <h2 dir="ltr" style="line-height:1.38;margin-top:18pt;margin-bottom:6pt;"><span style="font-size:16pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Play-to-earn in Land to Empire</span></h2>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The gamer can take all in-game items to the marketplace in order to earn money from their NFT sale. All buildings and resources in the game are NFT&rsquo;s.&nbsp;</span></p>
      <p><br></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The buyer can enter the purchased asset into the game and continue to use its properties, as well as to pump levels.</span></p>
      <p><br></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">You can easily improve your settlement or find necessary resources by trading with other players using in-game marketplace or secondary markets.</span></p>
      <p><br></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Use of Proceeds</span></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The game generates 8% royalty income from p2p nft sales. Sales are growing, but we would like to grow faster. That&apos;s why we are ready to share future revenue in return for supporting the game now.</span></p>
      <p><br></p>
      <p><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Rewards for Backers</span></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">In gratitude for the support we are ready to provide additional bonuses:</span></p>
      <ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
          <li>
              <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Free Lands,</span></p>
          </li>
          <li>
              <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">premium tokens,</span></p>
          </li>
          <li>
              <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">and additional workers in the game.</span></p>
          </li>
      </ul>`,
      team: [
        {
          name: "The core of the team consists of two classmates with strong experience in development and startups",
          bio: "To be announced later at the NearConWeek",
        }
      ],
      documents:[
        {title:"Gameplay",
        url:"https://drive.google.com/file/d/1OQ9PwPr5FX-94R1Pte7aqWr9fcFm6eA7/view?usp=sharing"}
      
      ]
  },
  {
    id: 7, // key para proyectos en katherine
    slug: "metamon", // unique friendly identifier per project. katherine smart contract would retrieve this field
    name: "Metamon",
    motto: "Battle-and-earn Royale",
    projectUrl: "https://www.metamon.gg/",
    twitter: "https://www.twitter.com/metamonapp",
    imageUrl:"/projects/metamon/cover.png",
    avatarUrl:"/projects/metamon/icon.jpeg",
    description:
      `Metamon is a world of Sci-Fi and Fantasy where you venture into the stars to discover exciting new worlds and majestic life-forms with immeasurable power.`,
    verified: true,
    tags: ["Gaming"],
    campaignHtml: `<h1 dir="ltr" style="line-height:1.3800000000000001;margin-top:20pt;margin-bottom:6pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Project Description</span></h1>
    <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Metamon is a world of Sci-Fi and Fantasy where you venture into the stars to discover exciting new worlds and majestic life-forms with immeasurable power.&nbsp;</span></p>
    <p><br></p>
    <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">You wield a Gauntlet-like device equipped with a rare Forma Crystal which enables you to capture, evolve and transform yourself into a Metamon. You travel across space and time to hunt for more power and resources, to become the very best Metamon warrior.&nbsp;</span></p>
    <p><br></p>
    <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">With the power of your Forma Gauntlet, you join an epic battle for the supremacy of your Faction in the Galactic Federation. Your actions will determine the future of this universe.&nbsp;</span></p>
    <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Metamon is a blockchain-powered gaming franchise starting with an online PvP Battle Royale game coupled with novel Play-to-Earn mechanics and with the goal of expanding into more gaming experiences. Metamon Games are built in Unreal Engine.</span></p>
    <p><br></p>
    <p><br></p>
    <h2>Gameplay</h2>
    <p><br></p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/hWzat5c5D3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <p><br></p>
    <h2 dir="ltr" style="line-height:1.3800000000000001;margin-top:18pt;margin-bottom:6pt;"><span style="font-size:16pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Metamon Battle Royale</span></h2>
    <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The Metamon Battle Royale game pits players against each other on an alien world. You land on this new world with only your Gauntlet and your 3 most reliable Metamon forms. Players must battle each other, collect valuable resources and win the game to earn. A novel format for Battle Royale, which opens up new game dynamics for players.&nbsp;</span></p>
    <p><br></p>
    <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Available on Windows at launch. To be released for Mac, Web and Mobile.</span></p>
    <h1 dir="ltr" style="line-height:1.3800000000000001;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:20pt 0pt 11pt 0pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Use of Proceeds</span></h1>
    <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Funds will be allocated towards the project development, which include game &amp; art development, marketing, and other critical activities.</span></p>
    <p><br></p>
    <h1 dir="ltr" style="line-height:1.3800000000000001;margin-top:20pt;margin-bottom:6pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Rewards for Backers</span></h1>
    <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">In-game NFTs for a minimum contribution. NFTs and parameters to be determined and updated. NFTs will have utility in-game.</span></p>`,
    team: [
      {
        name: "Team",
        bio: "The Metamon Company is a multi-channel entertainment venture focused on developing immersive and interactive content through games, story, art, and more",
      }
    ],
    documents:[
      {title:"Gameplay",
      url:"https://www.youtube.com/watch?v=hWzat5c5D3o "},
      {title:"White Paper", url:"https://metamon.gitbook.io/metamon-whitepaper/metamon-battle-royale"},
      {title: "Coincu Article", url:"https://news.coincu.com/83525-what-is-metamon/" }
    ]
},
{
  id: 8, // key para proyectos en katherine
  slug: "pokerspace", // unique friendly identifier per project. katherine smart contract would retrieve this field
  name: "Poker Space",
  motto: "Innovative free-to-play poker room build on P2E with unique NFT collection.",
  projectUrl: "http://pokerspace.io/",
  twitter: "https://twitter.com/Poker__Space",
  imageUrl:"/projects/pokerspace/cover.png",
  avatarUrl:"/projects/pokerspace/icon.jpeg",
  description:
    ``,
  verified: true,
  tags: ["Gaming"],
  campaignHtml: `<h1 dir="ltr" style="line-height:1.3800000000000001;margin-top:20pt;margin-bottom:6pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Project Description</span></h1>
  <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;Poker Space is a galaxy Free-to-Play platform based on Play-to-Earn, Social-to-Earn and Work-to-Earn model, with a traditional WEB 2.0 gaming mobile app with a WEB 3.0 overlay build on NEAR Protocol. In our platform anyone can play poker and, even more importantly, try themselves as the founder of a community: unite your friends and acquaintances around a common hobby, set new trends, and unlimited use of classic and caste games.</span></p>
  <p><br></p>
  <br>
  <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Poker Space Consists of:</span></p>
  <ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
      <li >
          <p dir="ltr" style="line-height:1.3800000000000001;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Poker Space Feed, where creators of exciting topics can participate in the Reward Pool</span></p>
      </li>
      <li>
          <p dir="ltr" style="line-height:1.3800000000000001;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">NFT and in-game marketplace</span></p>
      </li>
      <li>
          <p dir="ltr" style="line-height:1.3800000000000001;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Crowdfunding for players based on internal statistics</span></p>
      </li>
      <li>
          <p dir="ltr" style="line-height:1.3800000000000001;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Online and offline tournaments</span></p>
      </li>
      <li>
          <p dir="ltr" style="line-height:1.3800000000000001;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">International poker academy</span></p>
      </li>
      <li>
          <p dir="ltr" style="line-height:1.3800000000000001;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Twitch guild</span></p>
      </li>
      <li>
          <p dir="ltr" style="line-height:1.3800000000000001;background-color:#ffffff;margin-top:0pt;margin-bottom:11pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Cash tournaments around the world</span></p>
      </li>
  </ul>
  <p><br></p>
  <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Poker Space Offers:</span></p>
  <ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
      <li >
          <p dir="ltr" style="line-height:1.3800000000000001;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Safety and transparency of the gaming process</span></p>
      </li>
      <li>
          <p dir="ltr" style="line-height:1.3800000000000001;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Healthy and sporty business environment</span></p>
      </li>
      <li>
          <p dir="ltr" style="line-height:1.3800000000000001;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">AI tips for self-development of players</span></p>
      </li>
      <li>
          <p dir="ltr" style="line-height:1.3800000000000001;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Infrastructure for blogging, investing, agents and talent development</span></p>
      </li>
      <li>
          <p dir="ltr" style="line-height:1.3800000000000001;background-color:#ffffff;margin-top:0pt;margin-bottom:11pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Club chips in the form of cryptocurrency</span></p>
      </li>
  </ul>
  <h2 dir="ltr" style="line-height:1.3800000000000001;margin-top:18pt;margin-bottom:6pt;"><span style="font-size:16pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">What&apos;s special about our NFT?</span></h2>
  <ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
  <li><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The poker clubs will be NFTs, and the ownership of the club will be assigned to the owner of the NFT.</span></li>
  <li><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">VIP membership in our network, which gives every NFT owner rakeback, creation of clubs, alliances, and access to tournaments.</span></li>
  <li><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Opportunity to bet on any of your NFTs and get exclusive remuneration by the DAO, depending on the rank of your NFT.</span></li>
  </ul>
  <h2 dir="ltr" style="line-height:1.3800000000000001;margin-top:18pt;margin-bottom:6pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Use of Proceeds</span></h2>
  <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Keep developing, more listing contracts, marketing campaigns.&nbsp;</span></p>
  <h1 dir="ltr" style="line-height:1.3800000000000001;margin-top:20pt;margin-bottom:6pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Rewards for Backers</span></h1>
  <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">That&rsquo;s a different kind of reward for every side being in and at the project. What we give to our backers - &nbsp;tokens.&nbsp;</span></p>
  <p><br></p>
  <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">NFT&rsquo;s are for sale in 2step rounds.&nbsp;</span></p>
  <p><br></p>
  <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">But exclusively &nbsp;we think that we can give some equity too, but it&rsquo;s not a fund story, that&rsquo;s more for investor. Which can give to us not only money, or taking allocation, that&rsquo;s something more. Like support on different sides : poker, crypto, international legal entity support and etc.</span></p>
  <p dir="ltr" style="line-height:1.3800000000000001;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ns.</span></p>
  <p><br></p>
  <h2 dir="ltr" style="line-height:1.3800000000000001;margin-top:18pt;margin-bottom:6pt;"><span style="font-size:16pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Gameplay</span></h2>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/VS9uwYtGKbI" title="Poker Space Game Play" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  team: [
    {
      name: "VASILY SINYUGIN",
      bio: "CEO, CO-FOUNDER",
    },
    { name: "ASHOT KIRAKOSYAN", 
     bio: "TECHNICAL DIRECTOR" },
     {
       name: "ARMEN AMBARTSUMYAN",
       bio: 'CREATIVE DIRECTOR, CO-FOUNDER'
     },
     {bio: "HEAD OF ANALYTICS", name: "DARKHAN NURAKHMETOV"},
     {bio:"SOCIAL MEDIA SPECIALIST", name:"DANIL LEGKOSTUP"},
     {bio: "ADVISOR",name:"ALEXANDR SALOMATOV"}
  ],
  roadmap:{
    imageUrl: '/projects/pokerspace/roadmap.png',
    linkUrl: 'https://drive.google.com/file/d/1xahzngGeKjR0P9vPa5qPrKnAg3qG8iNH/view'
  },
  documents: [
    {
      title: 'Light Paper', url: 'https://drive.google.com/file/d/1NKoNuviKn-uqXlfDIgILmHp_G-cqGqDZ/view'
    },
    {title: 'Roadmap', url: 'https://drive.google.com/file/d/1xahzngGeKjR0P9vPa5qPrKnAg3qG8iNH/view'}
  ]

},
{
  id: 9, // key para proyectos en katherine
  slug: "waka", // unique friendly identifier per project. katherine smart contract would retrieve this field
  name: "Waka",
  motto: "The digital sandbox for finding friends and dates",
  projectUrl: "https://web.waka.cool/",
  twitter: "https://twitter.com/waka_cool_app",
  imageUrl:"/projects/waka/cover.png",
  avatarUrl:
    "/projects/waka/icon.jpeg",
  description:
    "Waka is on the way to making socializing with new people more fun than ever before.",
  verified: true,
  tags: ["Gaming"],
  campaignHtml: `<h1>Project Description</h1>
  <p>Waka is on the way to making socializing with new people more fun than ever before. Our plan is to invest resources in features that increase interaction between users and make meeting new people as smooth as playing a casual game.</p>
  <p><br></p>
  <p>1. You get matched with a perfect stranger the way you choose (by swiping memes, by holding the same NFTs, by having the same personality or interests )</p>
  <p>2. We help to spark the conversation through our icebreakers, which are tied to the matching algorithm you chose.</p>
  <p>3. By equipping your chat with mini-games, we make sure the fire of your conversation will never fade away. Increase your bonding level with your new friend and unlock more fun activities within your chat.&nbsp;</p>
  <p>4. Talking to new people, going through waka-rooms, and creating your own fun test allows you to enrich your digital identity and level up and earn waka-tokens, which opens up possibilities for matching with presion and far more often. (edited)</p>
  <br>
  <h2>Gameplay</h2>
  <iframe src="https://drive.google.com/file/d/1aZPDR_4MHazMyB3huGatlx3j_yed5gVc/preview" width="640" height="480" allow="autoplay"></iframe>
  <br>
  <h2>Stats</h2>
  <p>- 70 000 registered users</p>
  <p>- $2.07 CPA-purchase (that&rsquo;s 50 times less than the market average)</p>
  <p>- 0.22$ average CPR (that&rsquo;s 10 times less than the market average)</p>
  <p>- 42% 30 day retention rate which is above industry standards</p>
  <p>- 80% of our users are looking for friendship</p>
  <h2>Story</h2>
  <p>Waka was born more than a year ago as a response to increased loneliness and lack of social bonding opportunities in the digital world.&nbsp;</p>
  <p><br></p>
  <p>It has incorporated gamification techniques to take away the burden of breaking the ice and finding &lsquo;friends and dates&rsquo;. we have assembled the Bonding DAO from 7 projects and 150 researchers and industry professionals to find the solution to the problem of loneliness and build a metaverse of Socialization projects on the NEAR Blockchain.&nbsp;</p>
  <p><br></p>
  <p>Today waka has 70.000+ registered users and 180.000$ of funding from 6 angel investors.</p>`,
  team: [
    {
      name: "CEO Dzmitry Leukavets",
      bio: "With the 6-year of experience in the blockchain industry, leading marketing campaigns for blockchain startups and publishing research cited by Yahoo, Binance & investing.com.",
    },
    {
      name: "CPO Stanislav Gogaev",
      bio: "Has 4-years of experience building social gaming startups and leading Software and Game development teams."
    },
    {
      name: "CTO Ilyia Savchuk",
      bio: "And the rest of our development team have more than 20 years of software development experience and experience leading development teams at EPAM, EVA Studio, and RocketDAO.",
    }
  ],
  roadmap:{
    imageUrl: '/projects/waka/roadmap.jpeg'
  },
documents:[
  {title:"Gameplay",
  url:"https://drive.google.com/file/d/1aZPDR_4MHazMyB3huGatlx3j_yed5gVc/view"},
]
},
{
  id: 10, // key para proyectos en katherine
  slug: "wota", // unique friendly identifier per project. katherine smart contract would retrieve this field
  name: "World of the Abyss (WOTA)",
  motto: "A true hardcore mobile MMORPG with a free2play core & Web3-component",
  projectUrl: "http://mewota.com/",
  twitter: "https://twitter.com/wotaverse",
  imageUrl:"/projects/wota/cover.jpeg",
  avatarUrl:
    "/projects/wota/icon.jpeg",
  description:
    "World of the Abyss (WOTA) is a true hardcore mobile MMORPG with a focus on real-time player interaction.",
  verified: true,
  tags: ["Gaming"],
  campaignHtml: `<h1>Project Description</h1>
  <p>World of the Abyss (WOTA) is a true hardcore mobile MMORPG with a focus on real-time player interaction. WOTA has a classic free-to-play core as well as a Web3-component based on NEAR protocol (Play &amp; Earn, minting, owning and trading NFT-items (gear, loot boxes, etc), NFT Marketplace, DAO Clan governance, etc).</p>
  <h2>How does WOTA work?*</h2>
  <p>Description:&nbsp;</p>
  <ul>
      <li>
          <p>Open world, a fantastic medieval multi-level Abyss with magic and horrible monsters</p>
      </li>
      <li>
          <p>The Abyss is divided into floors (vertically) and levels (horizontally)</p>
      </li>
      <li>
          <p>Player&rsquo;s goal is &nbsp;to progress to their neverending maximum by looting, crafting and combating</p>
      </li>
      <li>
          <p>There are dungeons, forts, castles, and the marketplace.&nbsp;</p>
      </li>
      <li>
          <p>Players can play solo or create/join clans and even clan alliances to capture forts/castles and fight other players and mobs. &nbsp;</p>
      </li>
      <li>
          <p>P2E part of the game is powered by Near protocol and includes: NFT - chests (loot boxes), - weapons, - armors, - jewelry and other NFT-items that are initially being sold at pre-sales before Global Launch (Dec 22) and then will be freely traded on an in-game marketplace (powered by Vorto 2.0 platform) or outside the game on Paras.id and similar markets.</p>
      </li>
      <li>
          <p>$SHIC is an in-game stablecoin linked to USD and &nbsp;can only be obtained by selling NFT-items on in-game NFT-marketplace.&nbsp;</p>
      </li>
      <li>
          <p>WOTA Token ($WOTA). $WOTA can only be purchased at external crypto exchanges at the present rate of exchange.&nbsp;</p>
      </li>
      <li>
          <p>It is going to be a two way traffic, meaning that P2E players can monetise their in-game earnings by selling their NFT-items on the in-game marketplace. They can also exchange $SHIC for $WOTA to either hold them or exchange for other currencies.&nbsp;</p>
      </li>
      <li>
          <p>We are also working on development of other blockchain and game mechanics to increase the P2E component of the game.</p>
      </li>
  </ul>
  <p><br></p>
  <h2>Gameplay</h2>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/p34rmdPksws?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <p><br></p>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/imG-U52FLF4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <p><br></p>
  <p>*Points above are just general hints. We have a full Game design document and FlowChart that is constantly updated according to permanent gamedesign &amp; in-game economy amendments. More details may be provided upon request in the form of lightpaper, game design document, flowchart, etc.&nbsp;</p>
  <p>&nbsp;</p>
  <h2>What makes World of the Abyss (WOTA) unique?</h2>
  <p><br></p>
  <p>We are focusing on players&rsquo; live interaction and skills, no auto-play and auto-battles that most Mobile MMORPGs offer now. We want players to be completely engaged in the game and have the same old skool fun and excitement emotions as we had playing Lineage and similar games on PC and which we all miss with mobile games.&nbsp;</p>
  <p><br></p>
  <p>We are making WOTA for a huge number of players playing simultaneously. For example, we are implementing technology to have more than 500 live players in one location at a time. PvP battles can be performed anytime, anywhere on any location in real-time. We want to avoid excessive hero management.</p>
  <p><br></p>
  <p>Easy to change the profession of hero, just by getting another weapon, e.g. Bow, Swords, etc.&nbsp;</p>
  <p><br></p>
  <p>We will have a simplified crafting &amp; unique karma system (PvP/PK).</p>
  <p><br></p>
  <p>We are also doing our best to connect 2 gaming models: classic F2P model (for those millions of players who are addicted to this type of games) and P2E model for new generation of players who are interested in Blockchain mechanics, P2E, NFTs, GameFI, etc.</p>
  <p><br></p>
  <p>We&rsquo;ve just released the first NFT Chests drop and created our own DAO with AstroDAO.&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <h1>Use of Proceeds</h1>
  <p>The funds will be used for development, operations, legal and marketing purposes to launch the project according to the road map at the end of 2022.</p>
  <p><br></p>
  <h1>Rewards for Backers</h1>
  <p>We will give special limited edition NFT Chests (loot boxes) for this event, that will contain top NFT gear with unique characteristics (NFT-weapons, -armours, -jewelry, etc.).&nbsp;</p>
  <p><br></p>
  <p>Those NFT Chests may be sold unopened on Paras even now. Or may be opened in the game at the date of Global Launch (Dec 2022) to get top NFT gear stated above out of them. This gear could be used by player characters in the game itself or sold on p2p in-game marketplace (or outside the game on Paras).&nbsp;</p>
  <p><br></p>
  <p>When we issue game/project tokens, there will also be an option to use these NFT Chest to claim project tokens or just exchange these valuable artifacts to tokens.</p>`,
  team: [
    {
      name: "Max Bondarenko",
      bio: "CEO and main Dev Team Manager. He has more than 8+ Gamedev, 3D Design  Animation experience, as well as mobile apps marketing and ADs. He also ran his own AR/VR company called Mad Moil Co. for 2 years.",
    },
    {
      name: "Yuri Shtepo",
      bio: "CO-FOUNDER, CFO 20+ years of entrepreneurial and corporate experience in various areas:  project & ops management, finance, business consulting. Developed business & financial models and consulted for multiple companies and start-ups. Launched companies in the areas of manufacturing, business services and online therapy."
    },
    {
      name: "Ilya Kulebyakin",
      bio: "BizDev/Communication/PR/Fundraising, 13+ years of business development experience in various areas, ​3+ years of management, marketing, production & events organization, experience at TastySound music record-label, ​3+ years of online community management & PR experience.",
    }
  ],
  roadmap:{
    linkUrl: "https://drive.google.com/file/d/15x9BIong_C9vPBWcUPn-2Sp03kPNIyVZ/view"
  },
  about: `<h1>About the Game Tokens</h1>
  <p>$WOTA (WOTA Token) is the project native token</p>
  <p><br></p>
  <p>$SHIC (Shining Coin) is an in-game native cryptocurrency&nbsp;</p>
  <p><br></p>
  <p>The game will be powered by two native tokens: $WOTA and $SHIC. Together they will build up the dual token economy.&nbsp;</p>
  <p>$WOTA is the project token that will be used to support basic WOTA operations such as: &nbsp;</p>
  <ul>
      <li>
          <p>buying in-game NFT-items</p>
      </li>
      <li>
          <p>exchange operations of $WOTA token for other cryptocurrencies</p>
      </li>
      <li>
          <p>DAO management of the Project</p>
      </li>
      <li>
          <p>participation in DeFi projects/liquidity pools</p>
      </li>
      <li>
          <p>purchasing in-game plots of land (TBD)&nbsp;</p>
      </li>
  </ul>
  <p>$SHIC token is the in-game stablecoin, which will be&nbsp;</p>
  <ul>
      <li>
          <p>issued by WOTA to players for selling their NFT-items on the in-game marketplace</p>
      </li>
      <li>
          <p>used by players for upgrading in-game items, forts, castles, gear, skills, equipment; buying in-game lands; opening dungeons, bosses, marketplaces and their boosting; paying for caravans and for war against other clans, and some other game mechanics.&nbsp;</p>
      </li>
      <li>
          <p>used as the governance tokens for the in-game P2E Clan DAOs to impact the decision-making related to P2E Clans policies and development</p>
      </li>
  </ul>
  <p><br></p>
  <p>$WOTA token is a native fungible token on NEAR Protocol that is used for buying NFT items, Governance of the Meta Pool protocol.</p>
  <ul>
      <li>
          <p>Token Account ID: To be decided</p>
      </li>
      <li>
          <p>Total Supply: 1,500,000,000 $WOTA</p>
      </li>
      <li>
          <p>Precision: 24 digits</p>
      </li>
      <li>
          <p>Current circulating supply: 0, not issued yet</p>
      </li>
  </ul>
  <p><br></p>
  <p>$SHIC: will be calculated in accordance with in-game economy&nbsp;</p>`,
documents:[
  {title:"Gameplay",
  url:"https://youtu.be/p34rmdPksws"},
  {title:"Gameplay 2",
  url:"https://youtu.be/imG-U52FLF4"},
  {title:"Full game development & release Roadmap",
  url:"https://drive.google.com/file/d/15x9BIong_C9vPBWcUPn-2Sp03kPNIyVZ"},
  {title:"NFT/Blockchain component Roadmap & details",
  url:"https://www.mewota.com"},
]
},
{
  id: 11, // key para proyectos en katherine
  slug: "zomland", // unique friendly identifier per project. katherine smart contract would retrieve this field
  name: "ZomLand",
  motto: "Play-To-Earn NFT Collectible Game.",
  projectUrl: "https://zomland.com",
  twitter: "https://twitter.com/Zomland_Game",
  imageUrl:"/projects/zomland/cover.jpeg",
  avatarUrl:
    "/projects/zomland/icon.jpeg",
  description:
    "Is an interactive NFT &amp; Play-to-Earn collectable game with exciting gameplay and a lot of fun.",
  verified: true,
  tags: ["Gaming"],
  campaignHtml: `<h1 dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:20pt;margin-bottom:0pt;padding:0pt 0pt 6pt 0pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Project Description</span></h1>
  <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;">&nbsp;</p>
  <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><a href="https://zomland.com/" style="text-decoration:none;"><span style="font-size:11pt;font-family:Arial;color:#1155cc;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ZomLand</span></a><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;is an interactive NFT &amp; Play-to-Earn collectable game with exciting gameplay and a lot of fun.&nbsp;</span></p>
  <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">You take on the leader&apos;s role of the army of zombies and monsters to battle with other users all over the world.&nbsp;</span></p>
  <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The game combines elements of strategy that helps you to achieve maximum profit and earn more.&nbsp;</span></p>
  <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Collecting, Battles, land discovery, collaboration with users in your clan - are the main features of the ZomLand game</span></p>
  <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;">&nbsp;</p>
  <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:700;font-style:italic;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Website</span><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">:&nbsp;</span><a href="https://zomland.com/" style="text-decoration:none;"><span style="font-size:11pt;font-family:Arial;color:#1155cc;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:underline;-webkit-text-decoration-skip:none;text-decoration-skip-ink:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">https://zomland.com/</span></a><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&nbsp;</span></p>
  <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;">&nbsp;</p>
  <h1 dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:20pt 0pt 6pt 0pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Use of Proceeds</span></h1>
  <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ZomLand team needs fundings to achieve such goals as:&nbsp;</span></p>
  <ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
      <li>
          <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">complete gamify logic (battle arena)&nbsp;</span></p>
      </li>
      <li>
          <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">to do successful marketing&nbsp;</span></p>
      </li>
      <li>
          <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#222222;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">token release (dex platforms, exchanges)&nbsp;</span></p>
      </li>
  </ul>
  <p dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;">&nbsp;</p>
  <h1 dir="ltr" style="line-height:1.38;margin-top:20pt;margin-bottom:6pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Rewards for Backers</span></h1>
  <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Backers will be rewarded with $ZML tokens</span></p>
  <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><br></p>
  <h1 dir="ltr" style="line-height:1.38;margin-top:20pt;margin-bottom:6pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Gameplay Video</span></h1>
  <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><br></p>
  <iframe src="https://drive.google.com/file/d/1G10M7MhVyEsI6lVxK7hFFd8YXo3ldAUN/preview" width="640" height="480" allow="autoplay"></iframe>`,
  team: [
    {
      name: "Vlodkow",
      bio: "Volodymyr is co-founder ZomLand game. I'm a web & blockchain developer from Ukraine with 14+ years experience. Last year I decided to switch from web to blockchain development because I like new technologies and decentralisation.",
    },
    {
      name: "Andriy",
      bio: "Andrii is a second co-founder of ZomLand game. In parallel - a software engineer with 10y of experience. Most of them are in web 2.0 and last few years in web 3.0 development. Team & Technical leader."
    },
    {
      name: "Maria",
      bio: "Designer with 7y of experience. Mostly working as a digital graphic designer. Interest in crypto and NFT.",
    },
    {
      name: "Olha",
      bio: "Content writer & crypto investor, translator and content writer in ZomLand team.",
    },
    {
      name: "Lana",
      bio: "QA & SMM manager.",
    }
  ],
  roadmap:{
    imageUrl: '/projects/zomland/roadmap2.png',
  },
documents:[
  {title:"Whitepaper",
  url:"https://zomland.gitbook.io/zomland-whitepaper/"},
]
}

];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Project = ElementType<typeof data>;
