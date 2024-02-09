import { useHasApprovedRelayer } from '@/lib/modules/relayer/useHasApprovedRelayer'
import { ClaimAndUnstakeButton } from './ClaimAndUnstakeButton'
import { useHasMinterApproval } from '@/lib/modules/staking/gauge/useHasMinterApproval'
import { approveRelayerConfig } from '@/lib/modules/relayer/approveRelayerConfig'
import { minterApprovalConfig } from '@/lib/modules/staking/gauge/minterApprovalConfig'

export function useClaimAndUnstakeStepConfigs() {
  const { hasMinterApproval } = useHasMinterApproval()
  const { hasApprovedRelayer } = useHasApprovedRelayer()

  let stepConfigs = [
    {
      render: () => <ClaimAndUnstakeButton />,
    },
  ]

  if (!hasApprovedRelayer) {
    stepConfigs = [approveRelayerConfig, ...stepConfigs]
  }

  if (!hasMinterApproval) {
    stepConfigs = [minterApprovalConfig, ...stepConfigs]
  }

  return stepConfigs
}
