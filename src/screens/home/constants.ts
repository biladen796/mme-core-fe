import { bcatFaceOrg, bcatVideo } from '@/assets/images';

const tokenName = 'BCAT';
const contractAddress = '3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump';

export const homeContent = {
  banner: {
    image: bcatFaceOrg,
    video: bcatVideo,
    bannerText: `$${tokenName} is the happinest cat on Solana, on a mission to be worth
              billyons and billyons!`,
  },
  token: {
    contractAddress: contractAddress,
    tokenName: tokenName,
  },
  links: {
    teleLink: 'https://t.me/',
    xLink: 'https://x.com/',
    dexscreenerLink: `https://dexscreener.com/solana/${contractAddress}`,
    dextoolsLink: `https://www.dextools.io/app/en/solana/pair-explorer/${contractAddress}`,
    birdEyeLink: `https://birdeye.so/token/${contractAddress}?chain=solana`,
    coingeckoLink: 'https://www.coingecko.com/',
    coinmarketcapLink: 'https://coinmarketcap.com/',
    raydium: `https://raydium.io/swap/?inputMint=sol&outputMint=${contractAddress}`,
  },
};
