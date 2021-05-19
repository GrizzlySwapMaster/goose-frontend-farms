import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://grizzlyswap.com',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xDf5a096D33dE84b11041A7FF78E7008c328184ab',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Hunter Farms (V2 LP)',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Prey Staking',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Layered Farming',
    icon: 'IfoIcon',
    items: [
      {
        label: 'Layer 1 (GRZX)',
        href: 'https://layer.grizzlyswap.com',
      },
      {
        label: 'Layer 2 (BEAR2)',
        href: 'https://layer2.grizzlyswap.com'
      },
    ],
  },

  {
    label: 'TechRate Audit',
    icon: 'AuditIcon',
    href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/Grizzly%20Full%20Smart%20Contract%20Security%20Audit.pdf',
  },
  {
    label: 'Emission Reduction Mechanism',
    icon: 'GroupsIcon',
    href: 'https://grizzlyswap.gitbook.io/grizzly-swap/emission-mechanism/automatic-emission-reduction',
  },
  {
    label: 'RoadMap',
    icon: 'RoadmapIcon',
    href: 'https://grizzlyswap.gitbook.io/grizzly-swap/road-map',
  },
  {
    label: 'Listing',
    icon: 'IfoIcon',
    items: [
      {
        label: 'Dappradar',
        href: 'https://dappradar.com/binance-smart-chain/defi/grizzly-swap',
      }
    ],
  },
  {
    label: 'Price Chart',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/tokens/0xdf5a096d33de84b11041a7ff78e7008c328184ab',
      },
      {
        label: 'CoinHunt',
        href: 'https://coinhunt.cc/coin/548550324',
      },
    ],
  },
  
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/GrizzlySwap',
      },
      {
        label: 'Docs',
        href: 'https://grizzlyswap.medium.com/',
      },
      {
        label: 'Blog',
        href: 'https://grizzlyswap.gitbook.io/grizzly-swap/'
      },
    ],
  },
]

export default config
