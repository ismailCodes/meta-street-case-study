import { gql } from "@apollo/client";

export const GetTickDataQuery = gql`
  query GetTickData($poolId: ID!, $tickId: Bytes!) {
    pool(id: $poolId) {
      id
      collateralToken {
        name
      }
      currencyToken {
        id
        symbol
      }
      ticks(where: { id: $tickId }) {
        limit
        duration
        rate
        raw
        token {
          id
        }
      }
      deposits {
        depositedAmount
        shares
        account
        tick {
          id
        }
      }
    }
  }
`;
