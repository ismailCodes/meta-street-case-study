import { gql } from "@apollo/client";

export const GetAllPoolsQuery = gql`
  query GetAllPools {
    pools {
      id
      collateralToken {
        name
      }
      currencyToken {
        symbol
      }
      totalValueLocked
      totalValueUsed
    }
  }
`;
