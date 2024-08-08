import { bcatVideo, catFace } from '@/assets/images';

const tokenName = 'BCAT';
const contractAddress = 'EJLtw36BWFPX9hzzzXDWLQsGjYCofPKvWwFJ9tdCpump';

export const homeContent = {
  banner: {
    image: catFace,
    video: bcatVideo,
    bannerText: `$${tokenName} is the happinest cat on Solana, on a mission to be worth
              billyons and billyons!`,
  },
  token: {
    contractAddress: contractAddress,
    tokenName: tokenName,
  },
  links: {
    teleLink: 'https://t.me/blisscatcoin',
    xLink: 'https://x.com/Blisscatcoin',
    dexscreenerLink: `https://dexscreener.com/solana/${contractAddress}`,
    dextoolsLink: `https://www.dextools.io/app/en/solana/pair-explorer/${contractAddress}`,
    birdEyeLink: `https://birdeye.so/token/${contractAddress}?chain=solana`,
    coingeckoLink: 'https://www.coingecko.com/',
    coinmarketcapLink: 'https://coinmarketcap.com/',
    raydium: `https://raydium.io/swap/?inputMint=sol&outputMint=${contractAddress}`,
    pumpfun: 'https://pump.fun/EJLtw36BWFPX9hzzzXDWLQsGjYCofPKvWwFJ9tdCpump',
  },
};
