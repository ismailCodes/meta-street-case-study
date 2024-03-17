/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;

export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigInt: { input: any; output: any };
  Bytes: { input: any; output: any };
};

export type Auction = {
  __typename?: "Auction";
  bids: Array<Bid>;
  bidsCount: Scalars["Int"]["output"];
  collateralToken?: Maybe<CollateralToken>;
  collateralTokenId: Scalars["BigInt"]["output"];
  currencyToken: CurrencyToken;
  endTime: Scalars["BigInt"]["output"];
  highestBid?: Maybe<Bid>;
  id: Scalars["Bytes"]["output"];
  liquidation: Liquidation;
  quantity: Scalars["BigInt"]["output"];
  status?: Maybe<AuctionStatus>;
};

export enum AuctionStatus {
  Created = "Created",
  Ended = "Ended",
  Started = "Started",
}

export type Batch = {
  __typename?: "Batch";
  collateralWrapperContext: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  owner: Scalars["Bytes"]["output"];
  underlyingCollateralTokenAddress: Scalars["Bytes"]["output"];
  underlyingCollateralTokenIds: Array<Scalars["BigInt"]["output"]>;
};

export type Bid = {
  __typename?: "Bid";
  amount: Scalars["BigInt"]["output"];
  auction: Auction;
  bidder: Scalars["Bytes"]["output"];
  id: Scalars["Bytes"]["output"];
  isHighest: Scalars["Boolean"]["output"];
  timestamp: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type Bundle = {
  __typename?: "Bundle";
  collateralWrapperContext: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  owner: Scalars["Bytes"]["output"];
  underlyingCollateralTokenAddress: Scalars["Bytes"]["output"];
  underlyingCollateralTokenIds: Array<Scalars["BigInt"]["output"]>;
};

export type CollateralLiquidated = {
  __typename?: "CollateralLiquidated";
  id: Scalars["Bytes"]["output"];
  loan: Loan;
  proceeds: Scalars["BigInt"]["output"];
};

export type CollateralToken = {
  __typename?: "CollateralToken";
  id: Scalars["Bytes"]["output"];
  name: Scalars["String"]["output"];
  pools: Array<Pool>;
};

export type CurrencyToken = {
  __typename?: "CurrencyToken";
  id: Scalars["Bytes"]["output"];
  name: Scalars["String"]["output"];
  pools: Array<Pool>;
  symbol: Scalars["String"]["output"];
};

export type Deposit = {
  __typename?: "Deposit";
  account: Scalars["Bytes"]["output"];
  createdAt: Scalars["BigInt"]["output"];
  depositedAmount: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  pool: Pool;
  redemptions: Array<Redemption>;
  shares: Scalars["BigInt"]["output"];
  tick: Tick;
  updatedAt: Scalars["BigInt"]["output"];
};

export type Deposited = {
  __typename?: "Deposited";
  account: Scalars["Bytes"]["output"];
  amount: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  shares: Scalars["BigInt"]["output"];
  tick: Tick;
};

export type Liquidation = {
  __typename?: "Liquidation";
  auctions: Array<Auction>;
  collateralToken: CollateralToken;
  currencyToken: CurrencyToken;
  id: Scalars["Bytes"]["output"];
  loan: Loan;
  source: Scalars["Bytes"]["output"];
  sourceImplementation: Scalars["Bytes"]["output"];
};

export type Loan = {
  __typename?: "Loan";
  batch?: Maybe<Batch>;
  borrower: Scalars["Bytes"]["output"];
  bundle?: Maybe<Bundle>;
  collateralToken: CollateralToken;
  collateralTokenIds: Array<Scalars["BigInt"]["output"]>;
  collateralWrapperContext: Scalars["Bytes"]["output"];
  collateralWrapperToken?: Maybe<Scalars["Bytes"]["output"]>;
  collateralWrapperTokenId?: Maybe<Scalars["BigInt"]["output"]>;
  completion?: Maybe<Scalars["BigInt"]["output"]>;
  delegate?: Maybe<Scalars["Bytes"]["output"]>;
  duration: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  interests: Array<Scalars["BigInt"]["output"]>;
  loanReceipt: Scalars["Bytes"]["output"];
  maturity: Scalars["BigInt"]["output"];
  pool: Pool;
  principal: Scalars["BigInt"]["output"];
  proceeds?: Maybe<Scalars["BigInt"]["output"]>;
  repayment: Scalars["BigInt"]["output"];
  status: LoanStatus;
  ticks: Array<Scalars["BigInt"]["output"]>;
  timestamp: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
  useds: Array<Scalars["BigInt"]["output"]>;
};

export type LoanLiquidated = {
  __typename?: "LoanLiquidated";
  id: Scalars["Bytes"]["output"];
  loan: Loan;
};

export type LoanOriginated = {
  __typename?: "LoanOriginated";
  id: Scalars["Bytes"]["output"];
  loan: Loan;
};

export type LoanRepaid = {
  __typename?: "LoanRepaid";
  id: Scalars["Bytes"]["output"];
  loan: Loan;
};

export enum LoanStatus {
  Active = "Active",
  CollateralLiquidated = "CollateralLiquidated",
  Liquidated = "Liquidated",
  Repaid = "Repaid",
}

export type Pool = {
  __typename?: "Pool";
  adminFeeBalance: Scalars["BigInt"]["output"];
  adminFeeRate: Scalars["BigInt"]["output"];
  collateralLiquidator: Scalars["Bytes"]["output"];
  collateralToken: CollateralToken;
  collateralWrappers: Array<Scalars["Bytes"]["output"]>;
  currencyToken: CurrencyToken;
  dayData: Array<PoolDayData>;
  delegationRegistry: Scalars["Bytes"]["output"];
  deposits: Array<Deposit>;
  durations: Array<Scalars["BigInt"]["output"]>;
  events: Array<PoolEvent>;
  id: Scalars["Bytes"]["output"];
  implementation: Scalars["Bytes"]["output"];
  implementationVersionMajor: Scalars["String"]["output"];
  loans: Array<Loan>;
  loansActive: Scalars["BigInt"]["output"];
  loansCollateralLiquidated: Scalars["BigInt"]["output"];
  loansLiquidated: Scalars["BigInt"]["output"];
  loansOriginated: Scalars["BigInt"]["output"];
  loansRepaid: Scalars["BigInt"]["output"];
  maxBorrows: Array<Scalars["BigInt"]["output"]>;
  rates: Array<Scalars["BigInt"]["output"]>;
  ticks: Array<Tick>;
  tokenIdMerkleMetadataURI?: Maybe<Scalars["String"]["output"]>;
  tokenIdMerkleRoot?: Maybe<Scalars["Bytes"]["output"]>;
  tokenIdRange?: Maybe<Array<Scalars["BigInt"]["output"]>>;
  tokenIdSet?: Maybe<Array<Scalars["BigInt"]["output"]>>;
  totalValueAvailable: Scalars["BigInt"]["output"];
  totalValueLocked: Scalars["BigInt"]["output"];
  totalValueUsed: Scalars["BigInt"]["output"];
};

export type PoolTicksArgs = {
  where?: InputMaybe<TickFilter>;
};

export type PoolDayData = {
  __typename?: "PoolDayData";
  id: Scalars["Bytes"]["output"];
  pool: Pool;
  timestamp: Scalars["BigInt"]["output"];
  totalValueAvailable: Scalars["BigInt"]["output"];
  totalValueLocked: Scalars["BigInt"]["output"];
  totalValueUsed: Scalars["BigInt"]["output"];
};

export type PoolEvent = {
  __typename?: "PoolEvent";
  account: Scalars["Bytes"]["output"];
  collateralLiquidated?: Maybe<CollateralLiquidated>;
  deposit?: Maybe<Deposit>;
  deposited?: Maybe<Deposited>;
  from: Scalars["Bytes"]["output"];
  id: Scalars["Bytes"]["output"];
  loanLiquidated?: Maybe<LoanLiquidated>;
  loanOriginated?: Maybe<LoanOriginated>;
  loanRepaid?: Maybe<LoanRepaid>;
  pool: Pool;
  redeemed?: Maybe<Redeemed>;
  timestamp: Scalars["BigInt"]["output"];
  tokenCreated?: Maybe<TokenCreated>;
  transactionHash: Scalars["Bytes"]["output"];
  transferred?: Maybe<Transferred>;
  type: PoolEventType;
  withdrawn?: Maybe<Withdrawn>;
};

export enum PoolEventType {
  CollateralLiquidated = "CollateralLiquidated",
  Deposited = "Deposited",
  LoanLiquidated = "LoanLiquidated",
  LoanOriginated = "LoanOriginated",
  LoanRepaid = "LoanRepaid",
  Redeemed = "Redeemed",
  TokenCreated = "TokenCreated",
  Transferred = "Transferred",
  Withdrawn = "Withdrawn",
}

export type Query = {
  __typename?: "Query";
  pool?: Maybe<Pool>;
  pools?: Maybe<Array<Maybe<Pool>>>;
};

export type QueryPoolArgs = {
  id: Scalars["ID"]["input"];
};

export type Redeemed = {
  __typename?: "Redeemed";
  account: Scalars["Bytes"]["output"];
  estimatedAmount: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  shares: Scalars["BigInt"]["output"];
  tick: Tick;
};

export type Redemption = {
  __typename?: "Redemption";
  deposit: Deposit;
  id: Scalars["Bytes"]["output"];
  redemptionId: Scalars["BigInt"]["output"];
  shares: Scalars["BigInt"]["output"];
};

export type Tick = {
  __typename?: "Tick";
  accrualRate?: Maybe<Scalars["BigInt"]["output"]>;
  accrualTimestamp?: Maybe<Scalars["BigInt"]["output"]>;
  accrued?: Maybe<Scalars["BigInt"]["output"]>;
  active: Scalars["Boolean"]["output"];
  available: Scalars["BigInt"]["output"];
  duration: Scalars["BigInt"]["output"];
  durationIndex: Scalars["Int"]["output"];
  id: Scalars["Bytes"]["output"];
  interestWeightedMaturity: Scalars["BigInt"]["output"];
  limit: Scalars["BigInt"]["output"];
  next: Scalars["BigInt"]["output"];
  pending: Scalars["BigInt"]["output"];
  pool: Pool;
  prev: Scalars["BigInt"]["output"];
  principalWeightedDuration: Scalars["BigInt"]["output"];
  rate: Scalars["BigInt"]["output"];
  rateIndex: Scalars["Int"]["output"];
  raw: Scalars["BigInt"]["output"];
  redemptionPending: Scalars["BigInt"]["output"];
  shares: Scalars["BigInt"]["output"];
  token?: Maybe<CurrencyToken>;
  value: Scalars["BigInt"]["output"];
};

export type TickFilter = {
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
};

export type TokenCreated = {
  __typename?: "TokenCreated";
  id: Scalars["Bytes"]["output"];
  tick: Tick;
  token: CurrencyToken;
};

export type Transferred = {
  __typename?: "Transferred";
  estimatedAmount: Scalars["BigInt"]["output"];
  from: Scalars["Bytes"]["output"];
  id: Scalars["Bytes"]["output"];
  shares: Scalars["BigInt"]["output"];
  tick: Tick;
  to: Scalars["Bytes"]["output"];
  token: CurrencyToken;
};

export type Withdrawn = {
  __typename?: "Withdrawn";
  account: Scalars["Bytes"]["output"];
  amount: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  shares: Scalars["BigInt"]["output"];
  tick: Tick;
};

export type GetAllPoolsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPoolsQuery = {
  __typename?: "Query";
  pools?: Array<{
    __typename?: "Pool";
    id: any;
    totalValueLocked: any;
    totalValueUsed: any;
    collateralToken: { __typename?: "CollateralToken"; name: string };
    currencyToken: { __typename?: "CurrencyToken"; symbol: string };
  } | null> | null;
};

export type GetTickDataQueryVariables = Exact<{
  poolId: Scalars["ID"]["input"];
  tickId: Scalars["Bytes"]["input"];
}>;

export type GetTickDataQuery = {
  __typename?: "Query";
  pool?: {
    __typename?: "Pool";
    id: any;
    collateralToken: { __typename?: "CollateralToken"; name: string };
    currencyToken: { __typename?: "CurrencyToken"; id: any; symbol: string };
    ticks: Array<{
      __typename?: "Tick";
      limit: any;
      duration: any;
      rate: any;
      raw: any;
      token?: { __typename?: "CurrencyToken"; id: any } | null;
    }>;
    deposits: Array<{
      __typename?: "Deposit";
      depositedAmount: any;
      shares: any;
      account: any;
      tick: { __typename?: "Tick"; id: any };
    }>;
  } | null;
};

export type GetTicksByPoolQueryVariables = Exact<{
  poolId: Scalars["ID"]["input"];
}>;

export type GetTicksByPoolQuery = {
  __typename?: "Query";
  pool?: {
    __typename?: "Pool";
    id: any;
    collateralToken: { __typename?: "CollateralToken"; id: any; name: string };
    currencyToken: { __typename?: "CurrencyToken"; symbol: string };
    ticks: Array<{
      __typename?: "Tick";
      id: any;
      raw: any;
      limit: any;
      duration: any;
      rate: any;
      durationIndex: number;
      rateIndex: number;
      active: boolean;
      value: any;
      shares: any;
      available: any;
      pending: any;
      redemptionPending: any;
      prev: any;
      next: any;
      accrued?: any | null;
      accrualRate?: any | null;
      accrualTimestamp?: any | null;
      principalWeightedDuration: any;
      interestWeightedMaturity: any;
      token?: {
        __typename?: "CurrencyToken";
        id: any;
        name: string;
        symbol: string;
      } | null;
    }>;
    deposits: Array<{
      __typename?: "Deposit";
      account: any;
      depositedAmount: any;
      shares: any;
      tick: { __typename?: "Tick"; id: any };
    }>;
  } | null;
};

export const GetAllPoolsDocument = gql`
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

/**
 * __useGetAllPoolsQuery__
 *
 * To run a query within a React component, call `useGetAllPoolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPoolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPoolsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPoolsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllPoolsQuery,
    GetAllPoolsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllPoolsQuery, GetAllPoolsQueryVariables>(
    GetAllPoolsDocument,
    options
  );
}
export function useGetAllPoolsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllPoolsQuery,
    GetAllPoolsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllPoolsQuery, GetAllPoolsQueryVariables>(
    GetAllPoolsDocument,
    options
  );
}
export function useGetAllPoolsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetAllPoolsQuery,
    GetAllPoolsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAllPoolsQuery, GetAllPoolsQueryVariables>(
    GetAllPoolsDocument,
    options
  );
}
export type GetAllPoolsQueryHookResult = ReturnType<typeof useGetAllPoolsQuery>;
export type GetAllPoolsLazyQueryHookResult = ReturnType<
  typeof useGetAllPoolsLazyQuery
>;
export type GetAllPoolsSuspenseQueryHookResult = ReturnType<
  typeof useGetAllPoolsSuspenseQuery
>;
export type GetAllPoolsQueryResult = Apollo.QueryResult<
  GetAllPoolsQuery,
  GetAllPoolsQueryVariables
>;
export const GetTickDataDocument = gql`
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

/**
 * __useGetTickDataQuery__
 *
 * To run a query within a React component, call `useGetTickDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTickDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTickDataQuery({
 *   variables: {
 *      poolId: // value for 'poolId'
 *      tickId: // value for 'tickId'
 *   },
 * });
 */
export function useGetTickDataQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTickDataQuery,
    GetTickDataQueryVariables
  > &
    (
      | { variables: GetTickDataQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTickDataQuery, GetTickDataQueryVariables>(
    GetTickDataDocument,
    options
  );
}
export function useGetTickDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTickDataQuery,
    GetTickDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTickDataQuery, GetTickDataQueryVariables>(
    GetTickDataDocument,
    options
  );
}
export function useGetTickDataSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetTickDataQuery,
    GetTickDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetTickDataQuery, GetTickDataQueryVariables>(
    GetTickDataDocument,
    options
  );
}
export type GetTickDataQueryHookResult = ReturnType<typeof useGetTickDataQuery>;
export type GetTickDataLazyQueryHookResult = ReturnType<
  typeof useGetTickDataLazyQuery
>;
export type GetTickDataSuspenseQueryHookResult = ReturnType<
  typeof useGetTickDataSuspenseQuery
>;
export type GetTickDataQueryResult = Apollo.QueryResult<
  GetTickDataQuery,
  GetTickDataQueryVariables
>;
export const GetTicksByPoolDocument = gql`
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

/**
 * __useGetTicksByPoolQuery__
 *
 * To run a query within a React component, call `useGetTicksByPoolQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTicksByPoolQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTicksByPoolQuery({
 *   variables: {
 *      poolId: // value for 'poolId'
 *   },
 * });
 */
export function useGetTicksByPoolQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTicksByPoolQuery,
    GetTicksByPoolQueryVariables
  > &
    (
      | { variables: GetTicksByPoolQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTicksByPoolQuery, GetTicksByPoolQueryVariables>(
    GetTicksByPoolDocument,
    options
  );
}
export function useGetTicksByPoolLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTicksByPoolQuery,
    GetTicksByPoolQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTicksByPoolQuery, GetTicksByPoolQueryVariables>(
    GetTicksByPoolDocument,
    options
  );
}
export function useGetTicksByPoolSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetTicksByPoolQuery,
    GetTicksByPoolQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetTicksByPoolQuery,
    GetTicksByPoolQueryVariables
  >(GetTicksByPoolDocument, options);
}
export type GetTicksByPoolQueryHookResult = ReturnType<
  typeof useGetTicksByPoolQuery
>;
export type GetTicksByPoolLazyQueryHookResult = ReturnType<
  typeof useGetTicksByPoolLazyQuery
>;
export type GetTicksByPoolSuspenseQueryHookResult = ReturnType<
  typeof useGetTicksByPoolSuspenseQuery
>;
export type GetTicksByPoolQueryResult = Apollo.QueryResult<
  GetTicksByPoolQuery,
  GetTicksByPoolQueryVariables
>;
