import { gql } from "@apollo/client";

export const GetTicksByPoolQuery = gql`
  query GetTicksByPool($poolId: ID!) {
    pool(id: $poolId) {
      id
      collateralToken {
        id
        name
      }
      currencyToken {
        symbol
      }
      ticks {
        id
        raw
        limit
        duration
        rate
        durationIndex
        rateIndex
        active
        value
        shares
        available
        pending
        redemptionPending
        prev
        next
        accrued
        accrualRate
        accrualTimestamp
        principalWeightedDuration
        interestWeightedMaturity
        token {
          id
          name
          symbol
        }
      }
      deposits {
        account
        depositedAmount
        shares
        tick {
          id
        }
      }
    }
  }
`;
