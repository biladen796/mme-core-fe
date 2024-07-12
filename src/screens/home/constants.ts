import { billyMain } from '@/assets/images';

const tokenName = 'BILLY';
const contractAddress = '3B5wuUrMEi5yATD7on46hKfej3pfmd7t1RKgrsN3pump';

export const homeContent = {
  banner: {
    image: billyMain,
    bannerText: `$${tokenName} is the cutest dog on Solana, on a mission to be worth
              billyons and billyons!`,
  },
  token: {
    contractAddress: contractAddress,
    tokenName: tokenName,
  },
  links: {
    teleLink: 'https://t.me/',
    xLink: 'https://x.com/',
    dexscreenerLink: 'https://dexscreener.com/',
    dextoolsLink: 'https://www.dextools.io/',
    birdEyeLink: 'https://birdeye.so/',
    coingeckoLink: 'https://www.coingecko.com/',
    coinmarketcapLink: 'https://coinmarketcap.com/',
  },
};
