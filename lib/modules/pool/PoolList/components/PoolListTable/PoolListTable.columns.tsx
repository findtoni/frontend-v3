'use client'

import { ColumnDef } from '@tanstack/react-table'
import numeral from 'numeral'
import Image from 'next/image'
import { GqlPoolApr, GqlPoolAprTotal } from '@/lib/services/api/generated/graphql'
import { VStack, Text, HStack, Tag } from '@chakra-ui/react'
import { getNetworkConfig } from '@/lib/config/app.config'
import { PoolListItem } from '../../../pool.types'

export interface ColumnTitles {
  network: string
  details: string
  totalLiquidity: string
  volume24h: string
  apr: string
}

export const getPoolListTableColumns = (
  columnTranslations: ColumnTranslations
): ColumnDef<PoolListItem>[] => [
  {
    id: 'chainLogoUrl',
    accessorKey: 'chain.logoUrl',
    header: columnTranslations.network,
    cell: ({ row: { original: pool } }) => {
      const networkConfig = getNetworkConfig(pool.chain)
      return (
        <Image src={networkConfig.iconPath} width={30} height={30} alt={networkConfig.shortName} />
      )
    },
  },

  {
    id: 'details',
    header: columnTranslations.details,
    cell: ({ row: { original: pool } }) => {
      return (
        <VStack align="start">
          <Text>{pool.name}</Text>
          <HStack>
            {pool.displayTokens.map(token => (
              <Tag key={token.address}>{token.symbol}</Tag>
            ))}
          </HStack>
        </VStack>
      )
    },
  },
  {
    id: 'totalLiquidity',
    accessorKey: 'dynamicData.totalLiquidity',
    header: () => <Text textAlign="right">{columnTranslations.totalLiquidity}</Text>,
    cell: props => {
      const value = numeral(props.getValue()).format('($0,0a)')

      return (
        <Text textAlign="right" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {value}
        </Text>
      )
    },
  },
  {
    id: 'volume24h',
    accessorKey: 'dynamicData.volume24h',
    header: () => <Text textAlign="right">{columnTranslations.volume24h}</Text>,
    cell: props => {
      const value = numeral(props.getValue()).format('($0,0a)')

      return (
        <Text textAlign="right" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {value}
        </Text>
      )
    },
  },
  {
    id: 'apr',
    accessorKey: 'dynamicData.apr',
    header: () => {
      return <Text textAlign="right">{columnTranslations.apr}</Text>
    },
    cell: row => {
      const value = row.getValue<GqlPoolApr>()

      // const apr = false //pool.dynamicData.apr
      if (!(value.apr as GqlPoolAprTotal)?.total) {
        return <Text align="right">-</Text>
      }

      const apr = numeral((value.apr as GqlPoolAprTotal).total).format('0.[00]%')

      return (
        <Text textAlign="right" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {apr}
        </Text>
      )
    },
  },
]
