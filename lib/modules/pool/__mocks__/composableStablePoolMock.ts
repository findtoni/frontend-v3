/* eslint-disable max-len */

import { GqlChain, GqlPoolElement, GqlPoolType } from '@/lib/shared/services/api/generated/graphql'

export const composableStablePoolMock: GqlPoolElement = {
  id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570',
  address: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76',
  name: 'Balancer vETH/WETH StablePool',
  version: 4,
  owner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  decimals: 18,
  factory: '0xfada0f4547ab2de89d1304a668c39b3e09aa7c76',
  symbol: 'vETH/WETH BPT',
  createTime: 1686959963,
  type: GqlPoolType.ComposableStable,
  chain: GqlChain.Mainnet,
  vaultVersion: 2,
  dynamicData: {
    poolId: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570',
    swapEnabled: true,
    totalLiquidity: '2857.49',
    totalLiquidity24hAgo: '2960.31',
    totalShares: '1.160614615757644766',
    totalShares24hAgo: '1.160614615757644766',
    fees24h: '0.00',
    swapFee: '0.0004',
    volume24h: '0.00',
    fees48h: '0.00',
    volume48h: '0.00',
    lifetimeVolume: '1007985.66',
    lifetimeSwapFees: '403.19',
    holdersCount: '3',
    isInRecoveryMode: true,
    isPaused: false,
    swapsCount: '47',
    sharePriceAth: '2753.05007888785',
    sharePriceAthTimestamp: 1710201600,
    sharePriceAtl: '815.1980599871368',
    sharePriceAtlTimestamp: 1699228800,
    totalLiquidityAth: '1212364.95',
    totalLiquidityAthTimestamp: 1690243200,
    totalLiquidityAtl: '33.72',
    totalLiquidityAtlTimestamp: 1686960000,
    volume24hAth: '273590.85',
    volume24hAthTimestamp: 1689552000,
    volume24hAtl: '0.00',
    volume24hAtlTimestamp: 1686960000,
    fees24hAth: '109.44',
    fees24hAthTimestamp: 1689552000,
    fees24hAtl: '0.00',
    fees24hAtlTimestamp: 1686960000,
    yieldCapture24h: '0.18',
    yieldCapture48h: '0.37',
    apr: {
      hasRewardApr: false,
      thirdPartyApr: { total: '0' },
      nativeRewardApr: { total: '0' },
      swapApr: '0',
      apr: { total: '0.02302921486892855' },
      items: [
        {
          id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-vETH-yield-apr',
          title: 'vETH APR',
          apr: { total: '0.02302921486892855' },
          subItems: [],
        },
      ],
    },
  },
  allTokens: [
    {
      id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76',
      address: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76',
      name: 'Balancer vETH/WETH StablePool',
      symbol: 'vETH/WETH BPT',
      decimals: 18,
      isNested: false,
      isPhantomBpt: true,
      isMainToken: false,
    },
    {
      id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f',
      address: '0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f',
      name: 'Voucher Ethereum 2.0',
      symbol: 'vETH',
      decimals: 18,
      isNested: false,
      isPhantomBpt: false,
      isMainToken: true,
    },
    {
      id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      isNested: false,
      isPhantomBpt: false,
      isMainToken: true,
    },
  ],
  displayTokens: [
    {
      id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f',
      address: '0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f',
      name: 'Voucher Ethereum 2.0',
      weight: null,
      symbol: 'vETH',
      nestedTokens: null,
    },
    {
      id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      name: 'Wrapped Ether',
      weight: null,
      symbol: 'WETH',
      nestedTokens: null,
    },
  ],
  staking: {
    id: '0x1d157cf1f1339864a3c291d1bbe786d6ee682434',
    type: 'GAUGE',
    chain: 'MAINNET',
    address: '0x1d157cf1f1339864a3c291d1bbe786d6ee682434',
    gauge: {
      id: '0x1d157cf1f1339864a3c291d1bbe786d6ee682434',
      gaugeAddress: '0x1d157cf1f1339864a3c291d1bbe786d6ee682434',
      version: 1,
      status: 'KILLED',
      workingSupply: '0.0',
      otherGauges: [],
      rewards: [
        {
          id: '0x1d157cf1f1339864a3c291d1bbe786d6ee682434-0xba100000625a3754423978a60c9317c58a424e3d',
          rewardPerSecond: '0.000000000000000000',
          tokenAddress: '0xba100000625a3754423978a60c9317c58a424e3d',
        },
      ],
    },
  },
  investConfig: {
    singleAssetEnabled: true,
    proportionalEnabled: false,
    options: [
      {
        poolTokenIndex: 1,
        poolTokenAddress: '0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f',
        tokenOptions: [
          {
            id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f',
            index: 1,
            name: 'Voucher Ethereum 2.0',
            symbol: 'vETH',
            balance: '0.645255000373054104',
            address: '0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f',
            priceRate: '1.053700826873821075',
            decimals: 18,
            weight: null,
            totalBalance: '0.645255000373054104',
          },
        ],
      },
      {
        poolTokenIndex: 2,
        poolTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        tokenOptions: [
          {
            id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            index: 2,
            name: 'Wrapped Ether',
            symbol: 'WETH',
            balance: '0.502315206026072355',
            address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            priceRate: '1.0',
            decimals: 18,
            weight: null,
            totalBalance: '0.502315206026072355',
          },
        ],
      },
    ],
  },
  withdrawConfig: {
    singleAssetEnabled: true,
    proportionalEnabled: true,
    options: [
      {
        poolTokenIndex: 1,
        poolTokenAddress: '0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f',
        tokenOptions: [
          {
            id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f',
            index: 1,
            name: 'Voucher Ethereum 2.0',
            symbol: 'vETH',
            balance: '0.645255000373054104',
            address: '0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f',
            priceRate: '1.053700826873821075',
            decimals: 18,
            weight: null,
            totalBalance: '0.645255000373054104',
          },
        ],
      },
      {
        poolTokenIndex: 2,
        poolTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        tokenOptions: [
          {
            id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            index: 2,
            name: 'Wrapped Ether',
            symbol: 'WETH',
            balance: '0.502315206026072355',
            address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            priceRate: '1.0',
            decimals: 18,
            weight: null,
            totalBalance: '0.502315206026072355',
          },
        ],
      },
    ],
  },
  userBalance: {
    stakedBalance: '0',
    totalBalance: '0.0',
    walletBalance: '0',
    stakedBalanceUsd: 0,
    walletBalanceUsd: 0,
    totalBalanceUsd: 0,
  },
  amp: '50',
  nestingType: 'NO_NESTING',
  bptPriceRate: '1.018385877232728716',
  poolTokens: [
    {
      id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76',
      index: 0,
      name: 'Balancer vETH/WETH StablePool',
      symbol: 'vETH/WETH BPT',
      balance: '2596148429267413.794052669613761796',
      address: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76',
      weight: null,
      priceRate: '1.018385877232728716',
      decimals: 18,
      pool: {
        id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570',
        type: 'COMPOSABLE_STABLE',
        version: 4,
        name: 'Balancer vETH/WETH StablePool',
        symbol: 'vETH/WETH BPT',
        address: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76',
        owner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
        factory: '0xfada0f4547ab2de89d1304a668c39b3e09aa7c76',
        createTime: 1686959963,
        totalShares: '1.160614615757644766',
        totalLiquidity: '2857.493507546285',
        nestingType: 'NO_NESTING',
        swapFee: '0.0004',
        amp: '50',
        bptPriceRate: '1.018385877232728716',
        tokens: [
          {
            id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76',
            index: 0,
            name: 'Balancer vETH/WETH StablePool',
            symbol: 'vETH/WETH BPT',
            balance: '2596148429267413.794052669613761796',
            address: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76',
            priceRate: '1.018385877232728716',
            decimals: 18,
            weight: null,
            totalBalance: '2596148429267413.794052669613761796',
          },
          {
            id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f',
            index: 1,
            name: 'Voucher Ethereum 2.0',
            symbol: 'vETH',
            balance: '0.645255000373054104',
            address: '0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f',
            priceRate: '1.053700826873821075',
            decimals: 18,
            weight: null,
          },
          {
            id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            index: 2,
            name: 'Wrapped Ether',
            symbol: 'WETH',
            balance: '0.502315206026072355',
            address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            priceRate: '1.0',
            decimals: 18,
            weight: null,
          },
        ],
      },
    },
    {
      id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f',
      index: 1,
      name: 'Voucher Ethereum 2.0',
      symbol: 'vETH',
      balance: '0.645255000373054104',
      address: '0x4bc3263eb5bb2ef7ad9ab6fb68be80e43b43801f',
      priceRate: '1.053700826873821075',
      decimals: 18,
      weight: null,
      totalBalance: '0.645255000373054104',
    },
    {
      id: '0x156c02f3f7fef64a3a9d80ccf7085f23cce91d76000000000000000000000570-0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      index: 2,
      name: 'Wrapped Ether',
      symbol: 'WETH',
      balance: '0.502315206026072355',
      address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      priceRate: '1.0',
      decimals: 18,
      weight: null,
      totalBalance: '0.502315206026072355',
    },
  ],
} as unknown as GqlPoolElement
