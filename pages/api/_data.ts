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
  {
    id: 4, // key para proyectos en katherine
    slug: "zomland", // unique friendly identifier per project. katherine smart contract would retrieve this field
    name: "ZomLand",
    hidden: true,
    motto: "Play-To-Earn NFT Collectible Game.",
    projectUrl: "https://zomland.com",
    twitter: "https://twitter.com/Zomland_Game",
    imageUrl:"/projects/zomland/cover.JPG",
    avatarUrl:
      "/projects/zomland/icon.jpeg",
    description:
      "Is an interactive NFT, Play-to-Earn collectable game with exciting gameplay and a lot of fun.",
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
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/v3Vd5GJMJdc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    ,
    team: [
      {
        name: "Vlodkow",
        avatar: "/projects/zomland/avatar/1.JPG",
        bio: "Volodymyr is co-founder ZomLand game. I'm a web & blockchain developer from Ukraine with 14+ years experience. Last year I decided to switch from web to blockchain development because I like new technologies and decentralisation.",
      },
      {
        name: "Andriy",
        avatar: "/projects/zomland/avatar/2.JPG",
        bio: "Andrii is a second co-founder of ZomLand game. In parallel - a software engineer with 10y of experience. Most of them are in web 2.0 and last few years in web 3.0 development. Team & Technical leader."
      },
      {
        name: "Maria",
        avatar: "/projects/zomland/avatar/3.JPG",
        bio: "Designer with 7y of experience. Mostly working as a digital graphic designer. Interest in crypto and NFT.",
      },
      {
        name: "Olha",
        bio: "Content writer & crypto investor, translator and content writer in ZomLand team.",
      },
      {
        name: "Lana",
        avatar: "/projects/zomland/avatar/4.JPG",
        bio: "QA & SMM manager.",
      }
    ],
    roadmap:{
      imageUrl: '/projects/zomland/roadmap.jpg',
    },
    documents:[
      {title:"Whitepaper",
      url:"https://zomland.gitbook.io/zomland-whitepaper/"}, {
        title: "FAQ",
        url: "https://zomland.com/faq"
      }
    ]
  },
  {
    id: 5, // key para proyectos en katherine
    slug: "zomland", // unique friendly identifier per project. katherine smart contract would retrieve this field
    name: "ZomLand",
    motto: "Play-To-Earn NFT Collectible Game.",
    projectUrl: "https://zomland.com",
    twitter: "https://twitter.com/Zomland_Game",
    imageUrl:"/projects/zomland/cover.JPG",
    avatarUrl:
      "/projects/zomland/icon.jpeg",
    description:
      "Is an interactive NFT, Play-to-Earn collectable game with exciting gameplay and a lot of fun.",
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
      <h1 dir="ltr" style="line-height:1.38;background-color:#ffffff;margin-top:0pt;margin-bottom:0pt;padding:20pt 0pt 6pt 0pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Tokenomics</span></h1>
      <img src="/projects/zomland/tokenomics.png"/>
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
      <img alt src="/projects/zomland/rewards.png">

      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><br></p>
      <h1 dir="ltr" style="line-height:1.38;margin-top:20pt;margin-bottom:6pt;"><span style="font-size:20pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Gameplay Video</span></h1>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><br></p>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/v3Vd5GJMJdc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    ,
    team: [
      {
        name: "Vlodkow",
        avatar: "/projects/zomland/avatar/1.JPG",
        bio: "Volodymyr is co-founder ZomLand game. I'm a web & blockchain developer from Ukraine with 14+ years experience. Last year I decided to switch from web to blockchain development because I like new technologies and decentralisation.",
      },
      {
        name: "Andriy",
        avatar: "/projects/zomland/avatar/2.JPG",
        bio: "Andrii is a second co-founder of ZomLand game. In parallel - a software engineer with 10y of experience. Most of them are in web 2.0 and last few years in web 3.0 development. Team & Technical leader."
      },
      {
        name: "Maria",
        avatar: "/projects/zomland/avatar/3.JPG",
        bio: "Designer with 7y of experience. Mostly working as a digital graphic designer. Interest in crypto and NFT.",
      },
      {
        name: "Olha",
        bio: "Content writer & crypto investor, translator and content writer in ZomLand team.",
      },
      {
        name: "Lana",
        avatar: "/projects/zomland/avatar/4.JPG",
        bio: "QA & SMM manager.",
      }
    ],
    roadmap:{
      imageUrl: '/projects/zomland/roadmap.jpg',
    },
    documents:[
      {title:"Whitepaper",
      url:"https://zomland.gitbook.io/zomland-whitepaper/"}, {
        title: "FAQ",
        url: "https://zomland.com/faq"
      }
    ]
  },
  {
    id: 6, // key para proyectos en katherine
    slug: "nearhub", // unique friendly identifier per project. katherine smart contract would retrieve this field
    name: "NEAR HUB",
    motto: "Your gateway to the NEARverse",
    projectUrl: "https://nearhub.club",
    twitter: " https://twitter.com/NEARHub_online",
    imageUrl:"/projects/nearhub/cover.png",
    avatarUrl:
      "/projects/nearhub/icon.png",
    description:
      "<b>NEAR Hub Online</b> is a virtual platform designed to connect the global NEAR community. It provides a forum for developers, entrepreneurs, and enthusiasts working with the NEAR blockchain to share resources, exchange ideas, and collaborate on projects.",
    verified: true,
    tags: ["Community","Forum","Collaboration","Learning","Virtual"],
    campaignHtml: `
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><b>NEAR Hub</b> is committed to creating a vibrant and welcoming space for the NEAR community to connect and collaborate. Their virtual platform offers a variety of resources and tools, such as tutorials, articles, and workshops, to help members learn more about the NEAR blockchain.&nbsp;</span><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><br></span><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">They stay up to date with the latest news and updates in the blockchain space and actively promote their platform at conferences and hackathons. They believe that <b> NEAR Hub Online</b> is an essential resource for the NEAR community and they are dedicated to growing and expanding our platform to foster meaningful connections and collaborations.&nbsp;</span></p>
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The <b>NEAR Hub</b> team wants you to get onboard with this campaign so they can continue with their plan to grow the <b>NEAR Hub Online </b>platform and expand their reach to more members of the NEAR community. They&rsquo;re planning on adding new features and resources to the platform, such as interactive tools, games, and events.&nbsp;</span></p>
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The rewards you can get from this campaign are:&nbsp;</span></p>
    <p><br></p>
    <div align="left" dir="ltr" style="margin-left:0pt;">
        <table style="border:none;border-collapse:collapse;table-layout:fixed;width:451.27559055118115pt;">
            <tbody>
                <tr style="height:0pt;">
                    <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                        <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Goal 1: From 0 to 40.000 stNEAR</span></p>
                    </td>
                    <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                        <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">6 $ESTATE tokens for every stNEAR</span></p>
                    </td>
                </tr>
                <tr style="height:0pt;">
                    <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                        <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Goal 2: From 40.001 to 200.000 stNEAR</span></p>
                    </td>
                    <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                        <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">7 $ESTATE tokens for every stNEAR</span></p>
                    </td>
                </tr>
                <tr style="height:0pt;">
                    <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                        <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Goal 3: From 200.001 to 350.000 stNEAR</span></p>
                    </td>
                    <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                        <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">8 $ESTATE tokens for every stNEAR</span></p>
                    </td>
                </tr>
                <tr style="height:0pt;">
                    <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                        <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Goal 4: From 350.001 to 400.000 stNEAR</span></p>
                    </td>
                    <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                        <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">9,6 $ESTATE tokens for every stNEAR</span></p>
                    </td>
                </tr>
                <tr style="height:0pt;">
                    <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                        <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Goal 5: From 400.001 to 500.000 stNEAR</span></p>
                    </td>
                    <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                        <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">9,6 $ESTATE tokens for every stNEAR</span></p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <p><br></p>
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><span class="Apple-tab-span" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span></span><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><span class="Apple-tab-span" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span></span><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><span class="Apple-tab-span" style="white-space:pre;">&nbsp; &nbsp;</span></span></p>
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><span class="Apple-tab-span" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span></span><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><span class="Apple-tab-span" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span></span><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><span class="Apple-tab-span" style="white-space:pre;">&nbsp;&nbsp;</span></span></p>
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Roadmap</span></p>
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><br></p>
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><b>Q1 2023:</b>&nbsp;</span></p>
    <ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Launch of the NEAR Hub Estates</span></p>
        </li>
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Launch of ESTATEhub token</span></p>
        </li>
    </ul>
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre-wrap;"><b>Q2 2023:</b></span></p>
    <ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Introduction of the first virtual properties for purchase within the NEAR Hub Estates</span></p>
        </li>
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">NEAR Hub Estates Marketplace</span></p>
        </li>
    </ul>
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><b>Q3 2023:</b></span></p>
    <ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Expansion of the NEAR Hub Estates to include: virtual events and experiences</span></p>
        </li>
    </ul>
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><b>Q4 2023:</b>&nbsp;</span></p>
    <ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Launch of governance features for ESTATEhub token holders</span></p>
        </li>
    </ul>
    <br>
    <br>
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Tokenomics</span></p>
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The NEAR Hub ESTATE Token (ESTATEhub) is a utility token that powers the NEAR Hub Estates. It provides access to exclusive virtual experiences, events, and special perks within the NEAR Hub. The total supply of ESTATEhub tokens is fixed at 50 million and will never increase.</span></p>
    <p><br></p>
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Distribution:</span></p>
    <ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">10% through Metayield campaign stage</span></p>
        </li>
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">10% rewards</span></p>
        </li>
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">25% reserved for community development and marketing</span></p>
        </li>
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">15% design and development</span></p>
        </li>
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">15% for liquidity</span></p>
        </li>
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">25% reserved for the team and advisors</span></p>
        </li>
    </ul>
    <p><br></p>
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Rewards for Token Holders:</span></p>
    <p dir="ltr" style="line-height:1.38;text-indent: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ESTATEhub token holders receive:</span></p>
    <ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;margin-left: 36pt;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">5% off new land sales</span></p>
        </li>
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;margin-left: 36pt;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">2.5% off secondary sales.&nbsp;</span></p>
        </li>
    </ul>
    <p dir="ltr" style="line-height:1.38;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">These rewards can be increased by using ESTATEhub tokens to purchase property within the NEAR Hub Estates,</span></p>
    <p dir="ltr" style="line-height:1.38;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ESTATE land token holders receive:</span></p>
    <ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;margin-left: 36pt;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">10% off new land sales</span></p>
        </li>
        <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;margin-left: 36pt;">
            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">5% off secondary sales.</span></p>
        </li>
    </ul>
    <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">Rewards are distributed to a pool based ESTATEhub tokens and land tokens registered in their respective pools.</span></p>`,
    team: [
      {
        name: "Jeff Gold",
        bio: "Co-founder of NEAR Hub and Tamago, and a passionate software developer. Started creating on web3 in early 2020s. With a strong thirst for knowledge and a desire to push the boundaries of technology, Jeff is committed to using his expertise to help build a better future.",
      },
      {
        name: "Jordan Gray",
        bio: "Co-Founder of CODAME ART+TECH non-profit running 12+ years. Co-Founder TENK NFT Studio with 3M+ primary volume. Creative Commons Audio Visual Producer & Qigong Shifu.",
      },
      {
        name: "Marco Torello",
        bio: "Computer engineer with 20+ years work experience in many fields as defense, telecommunication, consulting and finance. Has both coding and infrastructure experience and currently manages an international team located all over the world."
      },
      {
        name: "Ryan Cloke",
        bio: "He has 27 years of experience developing software for projects of all types, building hundreds of projects and enjoys pushing the boundaries of what is possible by taking calculated risks and creating innovative solutions.",
      },
      {
        name: "Rebecca Hallquist - Advisor",
        bio: "Arts administrator and event marketer turned blockchain community builder. She truly believes them to be a thought and technical leader for metaverse and AI within the broader ecosystem, so she's happy to be along for the ride.",
      },
      {
        name: "Tabea Fuhrer - Community Manager",
        bio: "Tabea is an active member of the NEAR ecosystem since March 2021. She is passionate about educating people about the tools of web3 in creative and tangible ways. Additionally, she is dedicated to supporting communities by leveraging her good communication skills, hands-on mentality, and creative thinking.",
      },
      {
        name: "Dean Yeager - Lead Designer",
        bio: "Creative professional with extensive project experience from concept to development. Leverages strategic vision, business acumen, and artistic talent to deliver high-impact digital marketing projects.",
      },
      {
        name: "Arpit Tiwari (ikhimaz) - 3d artist/Metaverse Experience Creator",
        bio: "Currently pursuing a Master of Science in Visual Communication while working for NEAR Hub. He has created Metaverses that provide realistic and stylized experiences.",
      },
      {
        name: "Sammy Flores Aka Samtoshi_F_Baby",
        bio: "Graphic designer and comic book artist Co-Founder of NEARxPublish, illustrator of the NEAR Hub Comics PFP NFT collection, illustrator for Whack-A-HRMS NEAR Hub Game, and colorist for the Bob Boom! comic at Paras Comic. Sam was part of the first 100 creators on the Paras platform and is an advocate for autism awareness.",
      },
      {
        name: "Steven Caicedo - Social Marketing",
        bio: "A native New Yorker excelling in Audio/Film/Video Game/Virtual Reality Production. He has presented Virtual Reality products to major media corporations, and consulted on School; a program that combines VR with gameplay to inspire young indigenous minds to learn.",
      },
    ],
    faq: [
      {
        title: "What is ESTATEhub?",
        content: `ESTATEhub is a utility token that powers the NEAR Hub metaverse. It provides access to exclusive virtual experiences, events, and special perks within the NEAR Hub metaverse.`,
      },
      {
        title: "How many ESTATEhub tokens will be in circulation?",
        content: `The total supply of ESTATEhub tokens is fixed at 50 million and will never increase.`,
      },
      {
        title: "What can I do with ESTATEhub tokens?",
        content: `With ESTATEhub tokens, you'll have the power to unlock a world of exciting possibilities within the NEAR Hub metaverse! You can use them to purchase virtual properties, attend virtual events, access exclusive perks, purchase event tickets, trade in unique NFTs, get your hands on exclusive merchandise, and even customise your avatar.`,
      },
      {
        title: "Can ESTATEhub tokens be traded?",
        content: `Yes, ESTATEhub tokens will be tradeable on supported cryptocurrency exchanges.`,
      },
      {
        title: "What is the benefit of holding ESTATEhub tokens?",
        content: `Holding ESTATEhub tokens gives you access to exclusive virtual experiences, events, and special perks within the NEAR Hub Estates.
        Plus, as a token holder, you'll get 5% off new land sales and 2.5% off secondary sales, 
        and be able to purchase property in the NEAR Hub Estates that earns:
        10% off new land sales and 5% off secondary sales.
        <br><br>
        All sale percentages go to a pool that distributes the tokens based on the percentage of tokens/land held out of the total amount in the pool.
        `,
      },
    ],
  documents:[
    {title:"Site",
    url:"https://nearhub.club"},
    {title:"Twitter",
    url:"https://twitter.com/NEARHub_online"},
    {title:"Discord",
    url:"https://discord.gg/nearhub"},
    ]},
    {
      id: 8, // key para proyectos en katherine
      slug: "jumpdefi", // unique friendly identifier per project. katherine smart contract would retrieve this field
      name: "JUMP DEFI",
      motto: "Jump DeFi is a one-stop platform that lowers the barrier of entry to decentralized finance for users and developers.",
      projectUrl: "https://www.jumpdefi.xyz/",
      twitter: "https://twitter.com/JumpDeFi ",
      imageUrl:"/projects/jumpdefi/cover.png",
      avatarUrl:
        "/projects/jumpdefi/icon.png",
      description:
        `Jump DeFi is the first one-stop platform on NEAR Protocol; lowering the barrier of entry to decentralized finance for users and developers. The platform features a suite of no-code developer applications that help Web3 Startups go from 0 to 1 faster and cheaper! Jump DeFi onboards users to decentralized finance on NEAR easier than ever before with access to all key applications, connected on one platform. 
        Jump DeFi is an ecosystem of revenue generating protocols including the Jump DEX Automated Market Maker, Jump Pad Token Launchpad, Jump NFT Staking Platform and Jump Token Laboratory; the first no-code contract deployer on NEAR.	`,
      verified: true,
      tags: ["DeFi", "Web3", "No-code", "DEX", "All-in-one"],
      campaignHtml: `<p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Jump DeFi is the first one-stop platform on NEAR Protocol; lowering the barrier of entry to decentralized finance for users and developers. The platform features a suite of no-code developer applications that help Web3 Startups go from 0 to 1 faster and cheaper! Jump DeFi onboards users to decentralized finance on NEAR easier than ever before with access to all key applications, connected on one platform.&nbsp;</span></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><br></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Jump DeFi is an ecosystem of revenue generating protocols including the Jump DEX Automated Market Maker, Jump Pad Token Launchpad, Jump NFT Staking Platform and Jump Token Laboratory; the first no-code contract deployer on NEAR.</span></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><br></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Jump DeFi is raising funds for the continued development required to launch their Phase 2, which includes the Jump DEX automated market maker and proprietary auto-router. The funds raised will go toward development costs for the above mentioned items as well as towards a fully comprehensive security audit from a reputable firm.</span></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><span class="Apple-tab-span" style="white-space:pre;">&nbsp; &nbsp;&nbsp;</span></span></p>
      <p dir="ltr" style="line-height:1.656;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The rewards you can get from this campaign are:&nbsp;</span></p>
      <div align="left" dir="ltr" style="margin-left:0pt;">
          <table style="border:none;border-collapse:collapse;">
              <tbody>
                  <tr style="height:14.25pt;">
                      <td style="border-left:solid #000000 0.6818182500000001pt;border-right:solid #000000 0.6818182500000001pt;border-bottom:solid #000000 0.6818182500000001pt;border-top:solid #000000 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                          <p dir="ltr" style="line-height:1.656;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Goal 1: From 0 to 30.000 stNEAR</span></p>
                      </td>
                      <td style="border-left:solid #000000 0.6818182500000001pt;border-right:solid #000000 0.6818182500000001pt;border-bottom:solid #000000 0.6818182500000001pt;border-top:solid #000000 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                          <p dir="ltr" style="line-height:1.656;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">3,1 $JUMP tokens for every stNEAR</span></p>
                      </td>
                  </tr>
                  <tr style="height:14.25pt;">
                      <td style="border-left:solid #000000 0.6818182500000001pt;border-right:solid #000000 0.6818182500000001pt;border-bottom:solid #000000 0.6818182500000001pt;border-top:solid #000000 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                          <p dir="ltr" style="line-height:1.656;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Goal 2: From 30.001 to 50.000 stNEAR</span></p>
                      </td>
                      <td style="border-left:solid #000000 0.6818182500000001pt;border-right:solid #000000 0.6818182500000001pt;border-bottom:solid #000000 0.6818182500000001pt;border-top:solid #000000 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                          <p dir="ltr" style="line-height:1.656;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">3.4 $JUMP tokens for every stNEAR</span></p>
                      </td>
                  </tr>
                  <tr style="height:14.25pt;">
                      <td style="border-left:solid #000000 0.6818182500000001pt;border-right:solid #000000 0.6818182500000001pt;border-bottom:solid #000000 0.6818182500000001pt;border-top:solid #000000 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                          <p dir="ltr" style="line-height:1.656;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Goal 3: From 50.001 to 75.000 stNEAR</span></p>
                      </td>
                      <td style="border-left:solid #000000 0.6818182500000001pt;border-right:solid #000000 0.6818182500000001pt;border-bottom:solid #000000 0.6818182500000001pt;border-top:solid #000000 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                          <p dir="ltr" style="line-height:1.656;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">3,75 $JUMP tokens for every stNEAR</span></p>
                      </td>
                  </tr>
                  <tr style="height:14.25pt;">
                      <td style="border-left:solid #000000 0.6818182500000001pt;border-right:solid #000000 0.6818182500000001pt;border-bottom:solid #000000 0.6818182500000001pt;border-top:solid #000000 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                          <p dir="ltr" style="line-height:1.656;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Goal 4: From 75.001 to 100.000 stNEAR</span></p>
                      </td>
                      <td style="border-left:solid #000000 0.6818182500000001pt;border-right:solid #000000 0.6818182500000001pt;border-bottom:solid #000000 0.6818182500000001pt;border-top:solid #000000 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                          <p dir="ltr" style="line-height:1.656;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">3,75 $JUMP tokens for every stNEAR</span></p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <p><br></p>
      <p>*Remember backers give away their rewards only, not their tokens.<p>
      <p><br></p>
      <p><br></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">$JUMP tokens will be distributed using a 3 months linear release after the 6 months locking period ends.</span></p><br><br><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Why should you vote for them?</span></p>
      <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Because of their unique Value Proposition: Unlocking DeFi for users and developers on NEAR:</span></p>
      <ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
          <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
              <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">One-stop platform offers more revenue sources than competitors</span></p>
          </li>
          <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
              <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">Every tool required to take Web3 Projects from 0 to 1; faster and cheaper!</span></p>
          </li>
          <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
              <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">Jump DEX aggregates the best pricing on trades in a simple swap experience</span></p>
          </li>
          <li aria-level="1" dir="ltr" style="list-style-type:disc;font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">
              <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;">Creators of NEKO; Hub of Web3 content creation and one of the largest NEAR communities&nbsp;</span></p>
          </li>
      </ul>`,
      team: [
        {
          name: "David Leer - CEO",
          bio: "Co-Founder and CEO with a professional background in project management and expertise in decentralized finance. Former medical construction engineer with experience managing diverse groups of people and scopes of work valued at $20+ million dollars.",
        },
        {
          name: "BRANDON CANTU - COO",
          bio: "Co-Founder and COO with years of experience managing and scaling startup operations. Former Laboratory Manager with experience building teams and ensuring overall business efficiency and effectiveness."
        },
        {
          name: "JOÃO VEIGA - CTO",
          bio: "CTO and Co-Founder of Hack-a-Chain. Seasoned entrepreneur founded and exited vacation rental management startup Anfitrioes de Aluguel. João is an experienced developer and technical team manager focused on a business centric development approach.",
        },
        {
          name: "Rafael Borges - Hack-a-Chain CMO / Advisor",
          bio: "Co-Founder and CMO at Hack-a-Chain, over 6 years of experience with sales, marketing and growth for startups and tech companies.",
        },
        {
          name: "Pedro Destri - Project Manager",
          bio: "Co-founder & Engineer at Hack-a-Chain, with a fintech background and experience in project management and software development.",
        },
        {
          name: "Mateus - Full Stack Developer",
          bio: "Web3 enthusiast and full stack developer for Hackachain.",
        },
        {
          name: "AaronAbyss - Social Media Manager",
          bio: "Social Media Management and Marketing Specialist. SMMA Owner, Content Creator, and Entrepreneur. Heavily involved in the Jump DeFi and NEAR Ecosystem.",
        },
        {
          name: "Noah Major - Public Relations Manager",
          bio: "Lead Public Relations Specialist and content creator. Social media team manager and WEB3 value investor.",
        },
        {
          name: "Morgan Castle - Lead Graphic Designer",
          bio: "Graphic designer and artist with over 10 years experience. Bringing creativity and informed design to Near with thanks to Trove Labs and their chain-leading projects. Inspired by nature and all its forms.",
        },
      ],
      roadmap:{
        imageUrl: '/projects/jumpdefi/roadmap.png',
      },
    documents:[
      {title:"Site",
      url:"https://www.jumpdefi.xyz/"},
      {title:"Twitter",
      url:"https://twitter.com/JumpDeFi "},
      {title:"Discord",
      url:"https://discord.gg/TPBAA7EcH7 "},
      ]},
      {
        id: 9, // key para proyectos en katherine
        slug: "nearstarter", // unique friendly identifier per project. katherine smart contract would retrieve this field
        name: "NEARstarter",
        motto: "NEARStarter is an incubator and launchpad. This means it focuses on incubation, acceleration, and funding system for projects deployed on the NEAR Protocol and Aurora.",
        projectUrl: "https://nearstarter.fi",
        twitter: "https://twitter.com/nearstarter_fi",
        imageUrl:"/projects/nearstarter/cover.jpg",
        avatarUrl: "/projects/nearstarter/logo.jpg",
        description:
          `NEARStarter is an incubator and launchpad. This means it focuses on incubation, acceleration, and funding system for projects deployed on the NEAR Protocol and Aurora.`,
        verified: true,
        tags: ["Launchpad", "DeFi", "Index Pool", "NEAR"],
        campaignHtml: `
        <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">NEARStarter is an incubator and launchpad. This means it focuses on incubation, acceleration, and funding system for projects deployed on the NEAR Protocol and Aurora.</span></p>
        <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Its incubation process includes Legal Set-up, Product formulation, Whitepaper and Documentation, Tokenomics, Captable management, Secondary Market and Liquidity Management, Treasury Management, Audit, Listing, Partnerships, etc.&nbsp;</span></p>
        <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">All projects launching with NEARStarter are subject to comprehensive due diligence &mdash; this maximizes the chances of success during its early stages.</span></p>
        <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">NEARStarter manages NEARIA, an Index Pool of NEAR and Aurora ecosystem. All incubated projects, as well as major partners of NEARStarter, have their tokens included in the Index Pool.</span></p>
        <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The proceeds from this campaign will be split as follows:</span></p>
        <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- 50% will be staked into stNEAR and added to $NEARIA Index Pool</span></p>
        <p dir="ltr" style="line-height:1.38;text-align: justify;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">- 50% will be dedicated to the project (server and tech &amp; infra expenses, salaries...)</span></p>
        <p><br></p>
        <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">The rewards you can get from this campaign are:&nbsp;</span></p>
        <div align="left" dir="ltr" style="margin-left:0pt;">
            <table style="border:none;border-collapse:collapse;table-layout:fixed;width:451.27559055118115pt;">
                <tbody>
                    <tr style="height:0pt;">
                        <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Goal 1: From 0 to 40.000 stNEAR</span></p>
                        </td>
                        <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">No rewards&nbsp;</span></p>
                        </td>
                    </tr>
                    <tr style="height:0pt;">
                        <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Goal 2: From 40.001 to 100.000 stNEAR</span></p>
                        </td>
                        <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">10 $NEARIA per stNEAR&nbsp;</span></p>
                        </td>
                    </tr>
                    <tr style="height:0pt;">
                        <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Goal 3: From 100.001 to 250.000 stNEAR</span></p>
                        </td>
                        <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">13 $NEARIA per stNEAR&nbsp;</span></p>
                        </td>
                    </tr>
                    <tr style="height:0pt;">
                        <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Goal 4: From 250.001 to 350.000 stNEAR</span></p>
                        </td>
                        <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">15 $NEARIA per stNEAR&nbsp;</span></p>
                        </td>
                    </tr>
                    <tr style="height:0pt;">
                        <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Goal 5: From 350.001 to 500.000 stNEAR</span></p>
                        </td>
                        <td style="border-left:solid #000000 0.75pt;border-right:solid #000000 0.75pt;border-bottom:solid #000000 0.75pt;border-top:solid #000000 0.75pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:10pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">19.2 $NEARIA per stNEAR&nbsp;</span></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p><br></p>
        <p><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">You can&rsquo;t miss this opportunity.&nbsp;</span><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:#ffffff;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">With 6 incubations and 1 launch in the pipeline, plus several partnerships with renowned projects of the ecosystem, NEARIA is getting the pool depth and diversification of assets necessary to make it an excellent diversification play.</span></p>
        <p><br></p>
        <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Tokenomics</span></p>
        <p><br></p>
        <img alt='tokenomics' src="/projects/nearstarter/tokenomic.png"/>
        <br>
        <div align="left" dir="ltr" style="margin-left:0pt;">
            <table style="border:none;border-collapse:collapse;">
                <tbody>
                    <tr style="height:15pt;">
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Total Supply</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">100,000,000</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;"><br></td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;"><br></td>
                    </tr>
                    <tr style="height:15pt;">
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;"><br></td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;"><br></td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;"><br></td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;"><br></td>
                    </tr>
                    <tr style="height:26.25pt;">
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;"><br></td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">% of Total supply</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Cliff</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Vesting (months)</span></p>
                        </td>
                    </tr>
                    <tr style="height:15pt;">
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Farming Rewards to NSTART stakers</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">66%</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">0</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">120</span></p>
                        </td>
                    </tr>
                    <tr style="height:15pt;">
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Ecosystem, Liquidity, Community</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">14%</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">3</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">36</span></p>
                        </td>
                    </tr>
                    <tr style="height:15pt;">
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">ISPO</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">10%</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">3</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">0</span></p>
                        </td>
                    </tr>
                    <tr style="height:15pt;">
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Team &amp; DAO Contributors</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">10%</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">12</span></p>
                        </td>
                        <td style="border-left:solid #cccccc 0.6818182500000001pt;border-right:solid #cccccc 0.6818182500000001pt;border-bottom:solid #cccccc 0.6818182500000001pt;border-top:solid #cccccc 0.6818182500000001pt;vertical-align:bottom;padding:0pt 2pt 0pt 2pt;overflow:hidden;overflow-wrap:break-word;">
                            <p dir="ltr" style="line-height:1.38;text-align: right;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:'Space Grotesk',sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">12</span></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>`,
        team: [
          {
            name: "Ramiro - Head of Incubation",
            bio: "A decade of experience working with Web2 startups and clients. Leveraging that knowledge with Web3 counterparts since 2020.",
          },
          {
            name: "Adam - Sr Incubator Consultant.",
            bio: "Helping DeFi, NFT, and GameFi companies scale since 2020."
          },
          {
            name: "Antonio - Head of Ecosystem Growth.",
            bio: "Working on NEAR ecosystem since 2021. A 360-view of NEAR and Aurora ecosystems thanks to his activity fostering growth of South East Asian Guilds (Near Malaysia, Near Singapore, NEAR Thailand, NEAR Cambodia).",
          },
          {
            name: "Sadek - Head of Community and Social Media.",
            bio: "Not only he is a Discord, Telegram, and Twitter Wizard: he leverages any new Web3 social tool to his advantage, from Crew3 to Lens !",
          },
          {
            name: "Mstr - Head of Marketing.",
            bio: "The man, the myth, the legend. Thank him for the cypherpunk vibes you get whenever you type 'nearstarter.fi' in your computer!",
          }
        ],
        roadmap:{
          imageUrl: '/projects/nearstarter/roadmap.jpg',
        },
      documents:[
        {title:"FAQ",
        url:"https://hackmd.io/@NEARStarter/HJUVLyJ3q"},
        {title:"Deck",
        url:"https://docsend.com/view/2snj5japeg2xhthb"},
        {title:"Discord",
        url:"https://discord.gg/nearstarter"},
        {title:"Telegram",
        url:"https://t.me/NEARStarterCommunity"},
        ]},
];

export const dataToVote = [
{
  id: 11, // key para proyectos en katherine
  slug: "nearhub", // unique friendly identifier per project. katherine smart contract would retrieve this field
  name: "NEAR HUB",
winner: true,
  motto: "Your gateway to the NEARverse",
  projectUrl: "https://nearhub.club",
  twitter: " https://twitter.com/NEARHub_online",
  imageUrl:"/projects/nearhub/cover.png",
  avatarUrl:
    "/projects/nearhub/icon.png",
  description:
    "<strong>NEAR Hub Online </strong> is a virtual platform designed to connect the global NEAR community. It provides a forum for developers, entrepreneurs, and enthusiasts working with the NEAR blockchain to share resources, exchange ideas, and collaborate on projects.",
  verified: true,
  tags: ["Community","Forum","Collaboration","Learning","Virtual"],
  campaignHtml: `<p><strong>NEAR Hub Online</strong>  is a virtual platform designed to connect the global NEAR community. It provides a forum for developers, entrepreneurs, and enthusiasts working with the NEAR blockchain to share resources, exchange ideas, and collaborate on projects.&nbsp;</p>
  <p><br></p>
  <p><strong>Why should you vote for them?</strong></p>
  <p>They are committed to creating a vibrant and welcoming space for the NEAR community to connect and collaborate. Their virtual platform offers a variety of resources and tools, such as tutorials, articles, and workshops, to help members learn more about the NEAR blockchain. <br> They stay up to date with the latest news and updates in the blockchain space and actively promote our platform at conferences and hackathons. Ultimately, they are dedicated to growing and expanding their platform to foster meaningful connections and collaborations.&nbsp;</p><br>`,
  team: [
    {
      name: "Jeff Gold",
      bio: "Co-founder of NEAR Hub and Tamago, and a passionate software developer. Started creating on web3 in early 2020s. With a strong thirst for knowledge and a desire to push the boundaries of technology, Jeff is committed to using his expertise to help build a better future.",
    },
    {
      name: "Jordan Gray",
      bio: "Co-Founder of CODAME ART+TECH non-profit running 12+ years. Co-Founder TENK NFT Studio with 3M+ primary volume. Creative Commons Audio Visual Producer & Qigong Shifu.",
    },
    {
      name: "Marco Torello",
      bio: "Computer engineer with 20+ years work experience in many fields as defense, telecommunication, consulting and finance. Has both coding and infrastructure experience and currently manages an international team located all over the world."
    },
    {
      name: "Ryan Cloke",
      bio: "He has 27 years of experience developing software for projects of all types, building hundreds of projects and enjoys pushing the boundaries of what is possible by taking calculated risks and creating innovative solutions.",
    },
    {
      name: "Rebecca Hallquist - Advisor",
      bio: "Arts administrator and event marketer turned blockchain community builder. She truly believes them to be a thought and technical leader for metaverse and AI within the broader ecosystem, so she's happy to be along for the ride.",
    },
    {
      name: "Tabea Fuhrer - Community Manager",
      bio: "Tabea is an active member of the NEAR ecosystem since March 2021. She is passionate about educating people about the tools of web3 in creative and tangible ways. Additionally, she is dedicated to supporting communities by leveraging her good communication skills, hands-on mentality, and creative thinking.",
    },
    {
      name: "Dean Yeager - Lead Designer",
      bio: "Creative professional with extensive project experience from concept to development. Leverages strategic vision, business acumen, and artistic talent to deliver high-impact digital marketing projects.",
    },
    {
      name: "Arpit Tiwari (ikhimaz) - 3d artist/Metaverse Experience Creator",
      bio: "Currently pursuing a Master of Science in Visual Communication while working for NEAR Hub. He has created Metaverses that provide realistic and stylized experiences.",
    },
    {
      name: "Sammy Flores Aka Samtoshi_F_Baby",
      bio: "Currently pursuing a Master of Science in Visual Communication while working for NEAR Hub. He has created Metaverses that provide realistic and stylized experiences.",
    },
    {
      name: "Steven Caicedo - Social Marketing",
      bio: "A native New Yorker excelling in Audio/Film/Video Game/Virtual Reality Production. He has presented Virtual Reality products to major media corporations, and consulted on School; a program that combines VR with gameplay to inspire young indigenous minds to learn.",
    },
  ],
documents:[
  {title:"Site",
  url:"https://nearhub.club"},
  {title:"Twitter",
  url:"https://twitter.com/NEARHub_online"},
  {title:"Discord",
  url:"discord.gg/nearhub"},
  ]},
  {
    id: 12, // key para proyectos en katherine
    slug: "jumpdefi", // unique friendly identifier per project. katherine smart contract would retrieve this field
    name: "JUMP DEFI",
    motto: "Jump DeFi is a one-stop platform that lowers the barrier of entry to decentralized finance for users and developers.",
    projectUrl: "https://nearhub.club",
    twitter: "https://twitter.com/JumpDeFi ",
    imageUrl:"/projects/jumpdefi/cover.png",
    avatarUrl:
      "/projects/jumpdefi/icon.png",
    description:
      `Jump DeFi is the first one-stop platform on NEAR Protocol; lowering the barrier of entry to decentralized finance for users and developers. The platform features a suite of no-code developer applications that help Web3 Startups go from 0 to 1 faster and cheaper! Jump DeFi onboards users to decentralized finance on NEAR easier than ever before with access to all key applications, connected on one platform. 
      Jump DeFi is an ecosystem of revenue generating protocols including the Jump DEX Automated Market Maker, Jump Pad Token Launchpad, Jump NFT Staking Platform and Jump Token Laboratory; the first no-code contract deployer on NEAR.	`,
    verified: true,
    tags: ["DeFi", "Web3", "No-code", "DEX", "All-in-one"],
    campaignHtml: `<p><strong>Jump DeFi </strong>is the first one-stop platform on NEAR Protocol; lowering the barrier of entry to decentralized finance for users and developers. The platform features a suite of no-code developer applications that help Web3 Startups go from 0 to 1 faster and cheaper! Jump DeFi onboards users to decentralized finance on NEAR easier than ever before with access to all key applications, connected on one platform.&nbsp;</p>
    <p><strong>Jump DeFi</strong> is an ecosystem of revenue generating protocols including the Jump DEX Automated Market Maker, Jump Pad Token Launchpad, Jump NFT Staking Platform and Jump Token Laboratory; the first no-code contract deployer on NEAR. &nbsp; &nbsp; &nbsp; &nbsp;</p>
    <p><br></p>
    <p><strong>Why should you vote for them?</strong></p>
    <p>Because of their unique Value Proposition: Unlocking DeFi for users and developers on NEAR:</p>
    <ul>
        <li>
            <p>One-stop platform offers more revenue sources than competitors</p>
        </li>
        <li>
            <p>Every tool required to take Web3 Projects from 0 to 1; faster and cheaper!</p>
        </li>
        <li>
            <p>Jump DEX aggregates the best pricing on trades in a simple swap experience</p>
        </li>
        <li>
            <p>Creators of NEKO; Hub of Web3 content creation and one of the largest NEAR communities&nbsp;</p>
        </li>
    </ul>`,
    team: [
      {
        name: "David Leer - CEO",
        bio: "Co-Founder and CEO with a professional background in project management and expertise in decentralized finance. Former medical construction engineer with experience managing diverse groups of people and scopes of work valued at $20+ million dollars.",
      },
      {
        name: "BRANDON CANTU - COO",
        bio: "Co-Founder and COO with years of experience managing and scaling startup operations. Former Laboratory Manager with experience building teams and ensuring overall business efficiency and effectiveness."
      },
      {
        name: "JOÃO VEIGA - CTO",
        bio: "CTO and Co-Founder of Hack-a-Chain. Seasoned entrepreneur founded and exited vacation rental management startup Anfitrioes de Aluguel. João is an experienced developer and technical team manager focused on a business centric development approach.",
      },
      {
        name: "Rafael Borges - Hack-a-Chain CMO / Advisor",
        bio: "Co-Founder and CMO at Hack-a-Chain, over 6 years of experience with sales, marketing and growth for startups and tech companies.",
      },
      {
        name: "Pedro Destri - Project Manager",
        bio: "Co-founder & Engineer at Hack-a-Chain, with a fintech background and experience in project management and software development.",
      },
      {
        name: "Mateus - Full Stack Developer",
        bio: "Web3 enthusiast and full stack developer for Hackachain.",
      },
      {
        name: "AaronAbyss - Social Media Manager",
        bio: "Social Media Management and Marketing Specialist. SMMA Owner, Content Creator, and Entrepreneur. Heavily involved in the Jump DeFi and NEAR Ecosystem.",
      },
      {
        name: "Noah Major - Public Relations Manager",
        bio: "Lead Public Relations Specialist and content creator. Social media team manager and WEB3 value investor.",
      },
      {
        name: "Morgan Castle - Lead Graphic Designer",
        bio: "Graphic designer and artist with over 10 years experience. Bringing creativity and informed design to Near with thanks to Trove Labs and their chain-leading projects. Inspired by nature and all its forms.",
      },
    ],
  documents:[
    {title:"Site",
    url:"https://www.jumpdefi.xyz/"},
    {title:"Twitter",
    url:"https://twitter.com/JumpDeFi "},
    {title:"Discord",
    url:"https://discord.gg/TPBAA7EcH7 "},
    ]},
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Project = ElementType<typeof data>;
