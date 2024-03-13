'use client'
import { usePortfolio } from '@/lib/modules/portfolio/usePortfolio'
import { Stack, Text } from '@chakra-ui/react'
import { PortfolioSummary } from './PortfolioSummary'
import { PortfolioTable } from './PortfolioTable/PortfolioTable'
import { PortfolioNetworkClaim } from './PortfolioNetworkClaim/PortfolioNetworkClaim'

export default function Portfolio() {
  const { portfolioData, isLoading } = usePortfolio()

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  // TODO: handle errors and no data state
  if (!portfolioData) {
    return null
  }

  return (
    <Stack width="full" gap="10">
      <PortfolioSummary />
      <PortfolioNetworkClaim />
      <PortfolioTable />
    </Stack>
  )
}
