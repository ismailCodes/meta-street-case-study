/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigDecimal: { input: any; output: any };
  BigInt: { input: any; output: any };
  Bytes: { input: any; output: any };
  /** 8 bytes signed integer */
  Int8: { input: any; output: any };
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

export type AuctionBidsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Bid_Filter>;
};

export enum AuctionStatus {
  Created = "Created",
  Ended = "Ended",
  Started = "Started",
}

export type Auction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Auction_Filter>>>;
  bidsCount?: InputMaybe<Scalars["Int"]["input"]>;
  bidsCount_gt?: InputMaybe<Scalars["Int"]["input"]>;
  bidsCount_gte?: InputMaybe<Scalars["Int"]["input"]>;
  bidsCount_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  bidsCount_lt?: InputMaybe<Scalars["Int"]["input"]>;
  bidsCount_lte?: InputMaybe<Scalars["Int"]["input"]>;
  bidsCount_not?: InputMaybe<Scalars["Int"]["input"]>;
  bidsCount_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  bids_?: InputMaybe<Bid_Filter>;
  collateralToken?: InputMaybe<Scalars["String"]["input"]>;
  collateralTokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  collateralTokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  collateralTokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  collateralTokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  collateralTokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  collateralTokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  collateralTokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  collateralTokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  collateralToken_?: InputMaybe<CollateralToken_Filter>;
  collateralToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  collateralToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  collateralToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  collateralToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_?: InputMaybe<CurrencyToken_Filter>;
  currencyToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  currencyToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  currencyToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  endTime?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTime_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTime_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTime_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  endTime_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTime_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTime_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  endTime_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  highestBid?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_?: InputMaybe<Bid_Filter>;
  highestBid_contains?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_gt?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_gte?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  highestBid_lt?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_lte?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_not?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  highestBid_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  highestBid_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  liquidation?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_?: InputMaybe<Liquidation_Filter>;
  liquidation_contains?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_gt?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_gte?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  liquidation_lt?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_lte?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_not?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  liquidation_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  liquidation_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Auction_Filter>>>;
  quantity?: InputMaybe<Scalars["BigInt"]["input"]>;
  quantity_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  quantity_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  quantity_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  quantity_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  quantity_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  quantity_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  quantity_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  status?: InputMaybe<AuctionStatus>;
  status_in?: InputMaybe<Array<AuctionStatus>>;
  status_not?: InputMaybe<AuctionStatus>;
  status_not_in?: InputMaybe<Array<AuctionStatus>>;
};

export enum Auction_OrderBy {
  Bids = "bids",
  BidsCount = "bidsCount",
  CollateralToken = "collateralToken",
  CollateralTokenId = "collateralTokenId",
  CollateralTokenName = "collateralToken__name",
  CurrencyToken = "currencyToken",
  CurrencyTokenId = "currencyToken__id",
  CurrencyTokenName = "currencyToken__name",
  CurrencyTokenSymbol = "currencyToken__symbol",
  EndTime = "endTime",
  HighestBid = "highestBid",
  HighestBidAmount = "highestBid__amount",
  HighestBidBidder = "highestBid__bidder",
  HighestBidId = "highestBid__id",
  HighestBidIsHighest = "highestBid__isHighest",
  HighestBidTimestamp = "highestBid__timestamp",
  HighestBidTransactionHash = "highestBid__transactionHash",
  Id = "id",
  Liquidation = "liquidation",
  LiquidationId = "liquidation__id",
  LiquidationSource = "liquidation__source",
  LiquidationSourceImplementation = "liquidation__sourceImplementation",
  Quantity = "quantity",
  Status = "status",
}

export type Batch = {
  __typename?: "Batch";
  collateralWrapperContext: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  owner: Scalars["Bytes"]["output"];
  underlyingCollateralTokenAddress: Scalars["Bytes"]["output"];
  underlyingCollateralTokenIds: Array<Scalars["BigInt"]["output"]>;
};

export type Batch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Batch_Filter>>>;
  collateralWrapperContext?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  collateralWrapperContext_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_not_in?: InputMaybe<
    Array<Scalars["Bytes"]["input"]>
  >;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Batch_Filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  underlyingCollateralTokenAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  underlyingCollateralTokenAddress_contains?: InputMaybe<
    Scalars["Bytes"]["input"]
  >;
  underlyingCollateralTokenAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  underlyingCollateralTokenAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  underlyingCollateralTokenAddress_in?: InputMaybe<
    Array<Scalars["Bytes"]["input"]>
  >;
  underlyingCollateralTokenAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  underlyingCollateralTokenAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  underlyingCollateralTokenAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  underlyingCollateralTokenAddress_not_contains?: InputMaybe<
    Scalars["Bytes"]["input"]
  >;
  underlyingCollateralTokenAddress_not_in?: InputMaybe<
    Array<Scalars["Bytes"]["input"]>
  >;
  underlyingCollateralTokenIds?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  underlyingCollateralTokenIds_contains?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  underlyingCollateralTokenIds_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  underlyingCollateralTokenIds_not?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  underlyingCollateralTokenIds_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  underlyingCollateralTokenIds_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
};

export enum Batch_OrderBy {
  CollateralWrapperContext = "collateralWrapperContext",
  Id = "id",
  Owner = "owner",
  UnderlyingCollateralTokenAddress = "underlyingCollateralTokenAddress",
  UnderlyingCollateralTokenIds = "underlyingCollateralTokenIds",
}

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

export type Bid_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Bid_Filter>>>;
  auction?: InputMaybe<Scalars["String"]["input"]>;
  auction_?: InputMaybe<Auction_Filter>;
  auction_contains?: InputMaybe<Scalars["String"]["input"]>;
  auction_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_gt?: InputMaybe<Scalars["String"]["input"]>;
  auction_gte?: InputMaybe<Scalars["String"]["input"]>;
  auction_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auction_lt?: InputMaybe<Scalars["String"]["input"]>;
  auction_lte?: InputMaybe<Scalars["String"]["input"]>;
  auction_not?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auction_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auction_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auction_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bidder?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  bidder_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  isHighest?: InputMaybe<Scalars["Boolean"]["input"]>;
  isHighest_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isHighest_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isHighest_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Bid_Filter>>>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum Bid_OrderBy {
  Amount = "amount",
  Auction = "auction",
  AuctionBidsCount = "auction__bidsCount",
  AuctionCollateralTokenId = "auction__collateralTokenId",
  AuctionEndTime = "auction__endTime",
  AuctionId = "auction__id",
  AuctionQuantity = "auction__quantity",
  AuctionStatus = "auction__status",
  Bidder = "bidder",
  Id = "id",
  IsHighest = "isHighest",
  Timestamp = "timestamp",
  TransactionHash = "transactionHash",
}

export type BlockChangedFilter = {
  number_gte: Scalars["Int"]["input"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Bundle = {
  __typename?: "Bundle";
  collateralWrapperContext: Scalars["Bytes"]["output"];
  id: Scalars["ID"]["output"];
  owner: Scalars["Bytes"]["output"];
  underlyingCollateralTokenAddress: Scalars["Bytes"]["output"];
  underlyingCollateralTokenIds: Array<Scalars["BigInt"]["output"]>;
};

export type Bundle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bundle_Filter>>>;
  collateralWrapperContext?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  collateralWrapperContext_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_not_in?: InputMaybe<
    Array<Scalars["Bytes"]["input"]>
  >;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Bundle_Filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  underlyingCollateralTokenAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  underlyingCollateralTokenAddress_contains?: InputMaybe<
    Scalars["Bytes"]["input"]
  >;
  underlyingCollateralTokenAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  underlyingCollateralTokenAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  underlyingCollateralTokenAddress_in?: InputMaybe<
    Array<Scalars["Bytes"]["input"]>
  >;
  underlyingCollateralTokenAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  underlyingCollateralTokenAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  underlyingCollateralTokenAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  underlyingCollateralTokenAddress_not_contains?: InputMaybe<
    Scalars["Bytes"]["input"]
  >;
  underlyingCollateralTokenAddress_not_in?: InputMaybe<
    Array<Scalars["Bytes"]["input"]>
  >;
  underlyingCollateralTokenIds?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  underlyingCollateralTokenIds_contains?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  underlyingCollateralTokenIds_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  underlyingCollateralTokenIds_not?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  underlyingCollateralTokenIds_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  underlyingCollateralTokenIds_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
};

export enum Bundle_OrderBy {
  CollateralWrapperContext = "collateralWrapperContext",
  Id = "id",
  Owner = "owner",
  UnderlyingCollateralTokenAddress = "underlyingCollateralTokenAddress",
  UnderlyingCollateralTokenIds = "underlyingCollateralTokenIds",
}

export type CollateralLiquidated = {
  __typename?: "CollateralLiquidated";
  id: Scalars["Bytes"]["output"];
  loan: Loan;
  proceeds: Scalars["BigInt"]["output"];
};

export type CollateralLiquidated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CollateralLiquidated_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  loan?: InputMaybe<Scalars["String"]["input"]>;
  loan_?: InputMaybe<Loan_Filter>;
  loan_contains?: InputMaybe<Scalars["String"]["input"]>;
  loan_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_gt?: InputMaybe<Scalars["String"]["input"]>;
  loan_gte?: InputMaybe<Scalars["String"]["input"]>;
  loan_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loan_lt?: InputMaybe<Scalars["String"]["input"]>;
  loan_lte?: InputMaybe<Scalars["String"]["input"]>;
  loan_not?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loan_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<CollateralLiquidated_Filter>>>;
  proceeds?: InputMaybe<Scalars["BigInt"]["input"]>;
  proceeds_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  proceeds_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  proceeds_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  proceeds_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  proceeds_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  proceeds_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  proceeds_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum CollateralLiquidated_OrderBy {
  Id = "id",
  Loan = "loan",
  LoanBorrower = "loan__borrower",
  LoanCollateralWrapperContext = "loan__collateralWrapperContext",
  LoanCollateralWrapperToken = "loan__collateralWrapperToken",
  LoanCollateralWrapperTokenId = "loan__collateralWrapperTokenId",
  LoanCompletion = "loan__completion",
  LoanDelegate = "loan__delegate",
  LoanDuration = "loan__duration",
  LoanId = "loan__id",
  LoanLoanReceipt = "loan__loanReceipt",
  LoanMaturity = "loan__maturity",
  LoanPrincipal = "loan__principal",
  LoanProceeds = "loan__proceeds",
  LoanRepayment = "loan__repayment",
  LoanStatus = "loan__status",
  LoanTimestamp = "loan__timestamp",
  LoanTransactionHash = "loan__transactionHash",
  Proceeds = "proceeds",
}

export type CollateralToken = {
  __typename?: "CollateralToken";
  id: Scalars["Bytes"]["output"];
  name: Scalars["String"]["output"];
  pools: Array<Pool>;
};

export type CollateralTokenPoolsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Pool_Filter>;
};

export type CollateralToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CollateralToken_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<CollateralToken_Filter>>>;
  pools_?: InputMaybe<Pool_Filter>;
};

export enum CollateralToken_OrderBy {
  Id = "id",
  Name = "name",
  Pools = "pools",
}

export type CurrencyToken = {
  __typename?: "CurrencyToken";
  id: Scalars["Bytes"]["output"];
  name: Scalars["String"]["output"];
  pools: Array<Pool>;
  symbol: Scalars["String"]["output"];
};

export type CurrencyTokenPoolsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Pool_Filter>;
};

export type CurrencyToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CurrencyToken_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<CurrencyToken_Filter>>>;
  pools_?: InputMaybe<Pool_Filter>;
  symbol?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_lte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum CurrencyToken_OrderBy {
  Id = "id",
  Name = "name",
  Pools = "pools",
  Symbol = "symbol",
}

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

export type DepositRedemptionsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Redemption_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Redemption_Filter>;
};

export type Deposit_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  account_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>;
  createdAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  depositedAmount?: InputMaybe<Scalars["BigInt"]["input"]>;
  depositedAmount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  depositedAmount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  depositedAmount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  depositedAmount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  depositedAmount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  depositedAmount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  depositedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Deposit_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  redemptions_?: InputMaybe<Redemption_Filter>;
  shares?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  shares_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tick?: InputMaybe<Scalars["String"]["input"]>;
  tick_?: InputMaybe<Tick_Filter>;
  tick_contains?: InputMaybe<Scalars["String"]["input"]>;
  tick_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_gt?: InputMaybe<Scalars["String"]["input"]>;
  tick_gte?: InputMaybe<Scalars["String"]["input"]>;
  tick_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tick_lt?: InputMaybe<Scalars["String"]["input"]>;
  tick_lte?: InputMaybe<Scalars["String"]["input"]>;
  tick_not?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tick_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  updatedAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  updatedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum Deposit_OrderBy {
  Account = "account",
  CreatedAt = "createdAt",
  DepositedAmount = "depositedAmount",
  Id = "id",
  Pool = "pool",
  PoolAdminFeeBalance = "pool__adminFeeBalance",
  PoolAdminFeeRate = "pool__adminFeeRate",
  PoolCollateralLiquidator = "pool__collateralLiquidator",
  PoolDelegationRegistry = "pool__delegationRegistry",
  PoolId = "pool__id",
  PoolImplementation = "pool__implementation",
  PoolImplementationVersionMajor = "pool__implementationVersionMajor",
  PoolLoansActive = "pool__loansActive",
  PoolLoansCollateralLiquidated = "pool__loansCollateralLiquidated",
  PoolLoansLiquidated = "pool__loansLiquidated",
  PoolLoansOriginated = "pool__loansOriginated",
  PoolLoansRepaid = "pool__loansRepaid",
  PoolTokenIdMerkleMetadataUri = "pool__tokenIdMerkleMetadataURI",
  PoolTokenIdMerkleRoot = "pool__tokenIdMerkleRoot",
  PoolTotalValueAvailable = "pool__totalValueAvailable",
  PoolTotalValueLocked = "pool__totalValueLocked",
  PoolTotalValueUsed = "pool__totalValueUsed",
  Redemptions = "redemptions",
  Shares = "shares",
  Tick = "tick",
  TickAccrualRate = "tick__accrualRate",
  TickAccrualTimestamp = "tick__accrualTimestamp",
  TickAccrued = "tick__accrued",
  TickActive = "tick__active",
  TickAvailable = "tick__available",
  TickDuration = "tick__duration",
  TickDurationIndex = "tick__durationIndex",
  TickId = "tick__id",
  TickInterestWeightedMaturity = "tick__interestWeightedMaturity",
  TickLimit = "tick__limit",
  TickNext = "tick__next",
  TickPending = "tick__pending",
  TickPrev = "tick__prev",
  TickPrincipalWeightedDuration = "tick__principalWeightedDuration",
  TickRate = "tick__rate",
  TickRateIndex = "tick__rateIndex",
  TickRaw = "tick__raw",
  TickRedemptionPending = "tick__redemptionPending",
  TickShares = "tick__shares",
  TickValue = "tick__value",
  UpdatedAt = "updatedAt",
}

export type Deposited = {
  __typename?: "Deposited";
  account: Scalars["Bytes"]["output"];
  amount: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  shares: Scalars["BigInt"]["output"];
  tick: Tick;
};

export type Deposited_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  account_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Deposited_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Deposited_Filter>>>;
  shares?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  shares_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tick?: InputMaybe<Scalars["String"]["input"]>;
  tick_?: InputMaybe<Tick_Filter>;
  tick_contains?: InputMaybe<Scalars["String"]["input"]>;
  tick_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_gt?: InputMaybe<Scalars["String"]["input"]>;
  tick_gte?: InputMaybe<Scalars["String"]["input"]>;
  tick_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tick_lt?: InputMaybe<Scalars["String"]["input"]>;
  tick_lte?: InputMaybe<Scalars["String"]["input"]>;
  tick_not?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tick_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum Deposited_OrderBy {
  Account = "account",
  Amount = "amount",
  Id = "id",
  Shares = "shares",
  Tick = "tick",
  TickAccrualRate = "tick__accrualRate",
  TickAccrualTimestamp = "tick__accrualTimestamp",
  TickAccrued = "tick__accrued",
  TickActive = "tick__active",
  TickAvailable = "tick__available",
  TickDuration = "tick__duration",
  TickDurationIndex = "tick__durationIndex",
  TickId = "tick__id",
  TickInterestWeightedMaturity = "tick__interestWeightedMaturity",
  TickLimit = "tick__limit",
  TickNext = "tick__next",
  TickPending = "tick__pending",
  TickPrev = "tick__prev",
  TickPrincipalWeightedDuration = "tick__principalWeightedDuration",
  TickRate = "tick__rate",
  TickRateIndex = "tick__rateIndex",
  TickRaw = "tick__raw",
  TickRedemptionPending = "tick__redemptionPending",
  TickShares = "tick__shares",
  TickValue = "tick__value",
}

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

export type LiquidationAuctionsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Auction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Auction_Filter>;
};

export type Liquidation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Liquidation_Filter>>>;
  auctions_?: InputMaybe<Auction_Filter>;
  collateralToken?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_?: InputMaybe<CollateralToken_Filter>;
  collateralToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  collateralToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  collateralToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  collateralToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_?: InputMaybe<CurrencyToken_Filter>;
  currencyToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  currencyToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  currencyToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  loan?: InputMaybe<Scalars["String"]["input"]>;
  loan_?: InputMaybe<Loan_Filter>;
  loan_contains?: InputMaybe<Scalars["String"]["input"]>;
  loan_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_gt?: InputMaybe<Scalars["String"]["input"]>;
  loan_gte?: InputMaybe<Scalars["String"]["input"]>;
  loan_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loan_lt?: InputMaybe<Scalars["String"]["input"]>;
  loan_lte?: InputMaybe<Scalars["String"]["input"]>;
  loan_not?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loan_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Liquidation_Filter>>>;
  source?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceImplementation?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceImplementation_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceImplementation_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceImplementation_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceImplementation_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  sourceImplementation_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceImplementation_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceImplementation_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceImplementation_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  sourceImplementation_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  source_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  source_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  source_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  source_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  source_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  source_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  source_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  source_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  source_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum Liquidation_OrderBy {
  Auctions = "auctions",
  CollateralToken = "collateralToken",
  CollateralTokenId = "collateralToken__id",
  CollateralTokenName = "collateralToken__name",
  CurrencyToken = "currencyToken",
  CurrencyTokenId = "currencyToken__id",
  CurrencyTokenName = "currencyToken__name",
  CurrencyTokenSymbol = "currencyToken__symbol",
  Id = "id",
  Loan = "loan",
  LoanBorrower = "loan__borrower",
  LoanCollateralWrapperContext = "loan__collateralWrapperContext",
  LoanCollateralWrapperToken = "loan__collateralWrapperToken",
  LoanCollateralWrapperTokenId = "loan__collateralWrapperTokenId",
  LoanCompletion = "loan__completion",
  LoanDelegate = "loan__delegate",
  LoanDuration = "loan__duration",
  LoanId = "loan__id",
  LoanLoanReceipt = "loan__loanReceipt",
  LoanMaturity = "loan__maturity",
  LoanPrincipal = "loan__principal",
  LoanProceeds = "loan__proceeds",
  LoanRepayment = "loan__repayment",
  LoanStatus = "loan__status",
  LoanTimestamp = "loan__timestamp",
  LoanTransactionHash = "loan__transactionHash",
  Source = "source",
  SourceImplementation = "sourceImplementation",
}

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

export type LoanLiquidated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LoanLiquidated_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  loan?: InputMaybe<Scalars["String"]["input"]>;
  loan_?: InputMaybe<Loan_Filter>;
  loan_contains?: InputMaybe<Scalars["String"]["input"]>;
  loan_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_gt?: InputMaybe<Scalars["String"]["input"]>;
  loan_gte?: InputMaybe<Scalars["String"]["input"]>;
  loan_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loan_lt?: InputMaybe<Scalars["String"]["input"]>;
  loan_lte?: InputMaybe<Scalars["String"]["input"]>;
  loan_not?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loan_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<LoanLiquidated_Filter>>>;
};

export enum LoanLiquidated_OrderBy {
  Id = "id",
  Loan = "loan",
  LoanBorrower = "loan__borrower",
  LoanCollateralWrapperContext = "loan__collateralWrapperContext",
  LoanCollateralWrapperToken = "loan__collateralWrapperToken",
  LoanCollateralWrapperTokenId = "loan__collateralWrapperTokenId",
  LoanCompletion = "loan__completion",
  LoanDelegate = "loan__delegate",
  LoanDuration = "loan__duration",
  LoanId = "loan__id",
  LoanLoanReceipt = "loan__loanReceipt",
  LoanMaturity = "loan__maturity",
  LoanPrincipal = "loan__principal",
  LoanProceeds = "loan__proceeds",
  LoanRepayment = "loan__repayment",
  LoanStatus = "loan__status",
  LoanTimestamp = "loan__timestamp",
  LoanTransactionHash = "loan__transactionHash",
}

export type LoanOriginated = {
  __typename?: "LoanOriginated";
  id: Scalars["Bytes"]["output"];
  loan: Loan;
};

export type LoanOriginated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LoanOriginated_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  loan?: InputMaybe<Scalars["String"]["input"]>;
  loan_?: InputMaybe<Loan_Filter>;
  loan_contains?: InputMaybe<Scalars["String"]["input"]>;
  loan_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_gt?: InputMaybe<Scalars["String"]["input"]>;
  loan_gte?: InputMaybe<Scalars["String"]["input"]>;
  loan_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loan_lt?: InputMaybe<Scalars["String"]["input"]>;
  loan_lte?: InputMaybe<Scalars["String"]["input"]>;
  loan_not?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loan_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<LoanOriginated_Filter>>>;
};

export enum LoanOriginated_OrderBy {
  Id = "id",
  Loan = "loan",
  LoanBorrower = "loan__borrower",
  LoanCollateralWrapperContext = "loan__collateralWrapperContext",
  LoanCollateralWrapperToken = "loan__collateralWrapperToken",
  LoanCollateralWrapperTokenId = "loan__collateralWrapperTokenId",
  LoanCompletion = "loan__completion",
  LoanDelegate = "loan__delegate",
  LoanDuration = "loan__duration",
  LoanId = "loan__id",
  LoanLoanReceipt = "loan__loanReceipt",
  LoanMaturity = "loan__maturity",
  LoanPrincipal = "loan__principal",
  LoanProceeds = "loan__proceeds",
  LoanRepayment = "loan__repayment",
  LoanStatus = "loan__status",
  LoanTimestamp = "loan__timestamp",
  LoanTransactionHash = "loan__transactionHash",
}

export type LoanRepaid = {
  __typename?: "LoanRepaid";
  id: Scalars["Bytes"]["output"];
  loan: Loan;
};

export type LoanRepaid_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LoanRepaid_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  loan?: InputMaybe<Scalars["String"]["input"]>;
  loan_?: InputMaybe<Loan_Filter>;
  loan_contains?: InputMaybe<Scalars["String"]["input"]>;
  loan_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_gt?: InputMaybe<Scalars["String"]["input"]>;
  loan_gte?: InputMaybe<Scalars["String"]["input"]>;
  loan_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loan_lt?: InputMaybe<Scalars["String"]["input"]>;
  loan_lte?: InputMaybe<Scalars["String"]["input"]>;
  loan_not?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loan_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loan_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loan_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<LoanRepaid_Filter>>>;
};

export enum LoanRepaid_OrderBy {
  Id = "id",
  Loan = "loan",
  LoanBorrower = "loan__borrower",
  LoanCollateralWrapperContext = "loan__collateralWrapperContext",
  LoanCollateralWrapperToken = "loan__collateralWrapperToken",
  LoanCollateralWrapperTokenId = "loan__collateralWrapperTokenId",
  LoanCompletion = "loan__completion",
  LoanDelegate = "loan__delegate",
  LoanDuration = "loan__duration",
  LoanId = "loan__id",
  LoanLoanReceipt = "loan__loanReceipt",
  LoanMaturity = "loan__maturity",
  LoanPrincipal = "loan__principal",
  LoanProceeds = "loan__proceeds",
  LoanRepayment = "loan__repayment",
  LoanStatus = "loan__status",
  LoanTimestamp = "loan__timestamp",
  LoanTransactionHash = "loan__transactionHash",
}

export enum LoanStatus {
  Active = "Active",
  CollateralLiquidated = "CollateralLiquidated",
  Liquidated = "Liquidated",
  Repaid = "Repaid",
}

export type Loan_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Loan_Filter>>>;
  batch?: InputMaybe<Scalars["String"]["input"]>;
  batch_?: InputMaybe<Batch_Filter>;
  batch_contains?: InputMaybe<Scalars["String"]["input"]>;
  batch_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  batch_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  batch_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  batch_gt?: InputMaybe<Scalars["String"]["input"]>;
  batch_gte?: InputMaybe<Scalars["String"]["input"]>;
  batch_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  batch_lt?: InputMaybe<Scalars["String"]["input"]>;
  batch_lte?: InputMaybe<Scalars["String"]["input"]>;
  batch_not?: InputMaybe<Scalars["String"]["input"]>;
  batch_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  batch_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  batch_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  batch_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  batch_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  batch_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  batch_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  batch_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  batch_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  borrower?: InputMaybe<Scalars["Bytes"]["input"]>;
  borrower_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  borrower_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  borrower_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  borrower_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  borrower_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  borrower_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  borrower_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  borrower_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  borrower_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  bundle?: InputMaybe<Scalars["String"]["input"]>;
  bundle_?: InputMaybe<Bundle_Filter>;
  bundle_contains?: InputMaybe<Scalars["String"]["input"]>;
  bundle_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bundle_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  bundle_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bundle_gt?: InputMaybe<Scalars["String"]["input"]>;
  bundle_gte?: InputMaybe<Scalars["String"]["input"]>;
  bundle_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  bundle_lt?: InputMaybe<Scalars["String"]["input"]>;
  bundle_lte?: InputMaybe<Scalars["String"]["input"]>;
  bundle_not?: InputMaybe<Scalars["String"]["input"]>;
  bundle_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  bundle_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bundle_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  bundle_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bundle_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  bundle_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  bundle_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bundle_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  bundle_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken?: InputMaybe<Scalars["String"]["input"]>;
  collateralTokenIds?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  collateralTokenIds_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  collateralTokenIds_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  collateralTokenIds_not?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  collateralTokenIds_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  collateralTokenIds_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  collateralToken_?: InputMaybe<CollateralToken_Filter>;
  collateralToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  collateralToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  collateralToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  collateralToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralWrapperContext?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  collateralWrapperContext_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperContext_not_in?: InputMaybe<
    Array<Scalars["Bytes"]["input"]>
  >;
  collateralWrapperToken?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperTokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  collateralWrapperTokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  collateralWrapperTokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  collateralWrapperTokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  collateralWrapperTokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  collateralWrapperTokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  collateralWrapperTokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  collateralWrapperTokenId_not_in?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  collateralWrapperToken_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperToken_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperToken_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperToken_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  collateralWrapperToken_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperToken_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperToken_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperToken_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralWrapperToken_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  completion?: InputMaybe<Scalars["BigInt"]["input"]>;
  completion_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  completion_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  completion_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  completion_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  completion_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  completion_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  completion_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  delegate?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegate_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegate_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegate_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegate_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  delegate_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegate_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegate_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegate_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegate_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  duration?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  duration_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  interests?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  interests_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  interests_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  interests_not?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  interests_not_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  interests_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  loanReceipt?: InputMaybe<Scalars["Bytes"]["input"]>;
  loanReceipt_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  loanReceipt_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  loanReceipt_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  loanReceipt_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  loanReceipt_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  loanReceipt_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  loanReceipt_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  loanReceipt_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  loanReceipt_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  maturity?: InputMaybe<Scalars["BigInt"]["input"]>;
  maturity_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  maturity_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  maturity_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  maturity_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  maturity_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  maturity_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  maturity_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Loan_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  principal?: InputMaybe<Scalars["BigInt"]["input"]>;
  principal_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  principal_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  principal_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  principal_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  principal_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  principal_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  principal_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  proceeds?: InputMaybe<Scalars["BigInt"]["input"]>;
  proceeds_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  proceeds_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  proceeds_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  proceeds_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  proceeds_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  proceeds_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  proceeds_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  repayment?: InputMaybe<Scalars["BigInt"]["input"]>;
  repayment_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  repayment_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  repayment_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  repayment_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  repayment_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  repayment_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  repayment_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  status?: InputMaybe<LoanStatus>;
  status_in?: InputMaybe<Array<LoanStatus>>;
  status_not?: InputMaybe<LoanStatus>;
  status_not_in?: InputMaybe<Array<LoanStatus>>;
  ticks?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  ticks_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  ticks_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  ticks_not?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  ticks_not_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  ticks_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  useds?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  useds_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  useds_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  useds_not?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  useds_not_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  useds_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum Loan_OrderBy {
  Batch = "batch",
  BatchCollateralWrapperContext = "batch__collateralWrapperContext",
  BatchId = "batch__id",
  BatchOwner = "batch__owner",
  BatchUnderlyingCollateralTokenAddress = "batch__underlyingCollateralTokenAddress",
  Borrower = "borrower",
  Bundle = "bundle",
  BundleCollateralWrapperContext = "bundle__collateralWrapperContext",
  BundleId = "bundle__id",
  BundleOwner = "bundle__owner",
  BundleUnderlyingCollateralTokenAddress = "bundle__underlyingCollateralTokenAddress",
  CollateralToken = "collateralToken",
  CollateralTokenIds = "collateralTokenIds",
  CollateralTokenId = "collateralToken__id",
  CollateralTokenName = "collateralToken__name",
  CollateralWrapperContext = "collateralWrapperContext",
  CollateralWrapperToken = "collateralWrapperToken",
  CollateralWrapperTokenId = "collateralWrapperTokenId",
  Completion = "completion",
  Delegate = "delegate",
  Duration = "duration",
  Id = "id",
  Interests = "interests",
  LoanReceipt = "loanReceipt",
  Maturity = "maturity",
  Pool = "pool",
  PoolAdminFeeBalance = "pool__adminFeeBalance",
  PoolAdminFeeRate = "pool__adminFeeRate",
  PoolCollateralLiquidator = "pool__collateralLiquidator",
  PoolDelegationRegistry = "pool__delegationRegistry",
  PoolId = "pool__id",
  PoolImplementation = "pool__implementation",
  PoolImplementationVersionMajor = "pool__implementationVersionMajor",
  PoolLoansActive = "pool__loansActive",
  PoolLoansCollateralLiquidated = "pool__loansCollateralLiquidated",
  PoolLoansLiquidated = "pool__loansLiquidated",
  PoolLoansOriginated = "pool__loansOriginated",
  PoolLoansRepaid = "pool__loansRepaid",
  PoolTokenIdMerkleMetadataUri = "pool__tokenIdMerkleMetadataURI",
  PoolTokenIdMerkleRoot = "pool__tokenIdMerkleRoot",
  PoolTotalValueAvailable = "pool__totalValueAvailable",
  PoolTotalValueLocked = "pool__totalValueLocked",
  PoolTotalValueUsed = "pool__totalValueUsed",
  Principal = "principal",
  Proceeds = "proceeds",
  Repayment = "repayment",
  Status = "status",
  Ticks = "ticks",
  Timestamp = "timestamp",
  TransactionHash = "transactionHash",
  Useds = "useds",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
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

export type PoolDayDataArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolDayData_Filter>;
};

export type PoolDepositsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Deposit_Filter>;
};

export type PoolEventsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PoolEvent_Filter>;
};

export type PoolLoansArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Loan_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Loan_Filter>;
};

export type PoolTicksArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Tick_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Tick_Filter>;
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

export type PoolDayData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolDayData_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolDayData_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalValueAvailable?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueAvailable_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueAvailable_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueAvailable_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalValueAvailable_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueAvailable_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueAvailable_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueAvailable_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalValueLocked?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueLocked_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueLocked_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueLocked_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalValueLocked_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueLocked_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueLocked_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalValueUsed?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueUsed_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueUsed_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueUsed_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalValueUsed_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueUsed_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueUsed_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueUsed_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum PoolDayData_OrderBy {
  Id = "id",
  Pool = "pool",
  PoolAdminFeeBalance = "pool__adminFeeBalance",
  PoolAdminFeeRate = "pool__adminFeeRate",
  PoolCollateralLiquidator = "pool__collateralLiquidator",
  PoolDelegationRegistry = "pool__delegationRegistry",
  PoolId = "pool__id",
  PoolImplementation = "pool__implementation",
  PoolImplementationVersionMajor = "pool__implementationVersionMajor",
  PoolLoansActive = "pool__loansActive",
  PoolLoansCollateralLiquidated = "pool__loansCollateralLiquidated",
  PoolLoansLiquidated = "pool__loansLiquidated",
  PoolLoansOriginated = "pool__loansOriginated",
  PoolLoansRepaid = "pool__loansRepaid",
  PoolTokenIdMerkleMetadataUri = "pool__tokenIdMerkleMetadataURI",
  PoolTokenIdMerkleRoot = "pool__tokenIdMerkleRoot",
  PoolTotalValueAvailable = "pool__totalValueAvailable",
  PoolTotalValueLocked = "pool__totalValueLocked",
  PoolTotalValueUsed = "pool__totalValueUsed",
  Timestamp = "timestamp",
  TotalValueAvailable = "totalValueAvailable",
  TotalValueLocked = "totalValueLocked",
  TotalValueUsed = "totalValueUsed",
}

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
  Withdrawn = "Withdrawn",
}

export type PoolEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  account_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<PoolEvent_Filter>>>;
  collateralLiquidated?: InputMaybe<Scalars["String"]["input"]>;
  collateralLiquidated_?: InputMaybe<CollateralLiquidated_Filter>;
  collateralLiquidated_contains?: InputMaybe<Scalars["String"]["input"]>;
  collateralLiquidated_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralLiquidated_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralLiquidated_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  collateralLiquidated_gt?: InputMaybe<Scalars["String"]["input"]>;
  collateralLiquidated_gte?: InputMaybe<Scalars["String"]["input"]>;
  collateralLiquidated_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  collateralLiquidated_lt?: InputMaybe<Scalars["String"]["input"]>;
  collateralLiquidated_lte?: InputMaybe<Scalars["String"]["input"]>;
  collateralLiquidated_not?: InputMaybe<Scalars["String"]["input"]>;
  collateralLiquidated_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  collateralLiquidated_not_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  collateralLiquidated_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralLiquidated_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  collateralLiquidated_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  collateralLiquidated_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralLiquidated_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  collateralLiquidated_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralLiquidated_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  deposit?: InputMaybe<Scalars["String"]["input"]>;
  deposit_?: InputMaybe<Deposit_Filter>;
  deposit_contains?: InputMaybe<Scalars["String"]["input"]>;
  deposit_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposit_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  deposit_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposit_gt?: InputMaybe<Scalars["String"]["input"]>;
  deposit_gte?: InputMaybe<Scalars["String"]["input"]>;
  deposit_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  deposit_lt?: InputMaybe<Scalars["String"]["input"]>;
  deposit_lte?: InputMaybe<Scalars["String"]["input"]>;
  deposit_not?: InputMaybe<Scalars["String"]["input"]>;
  deposit_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  deposit_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposit_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  deposit_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposit_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  deposit_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  deposit_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposit_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  deposit_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposited?: InputMaybe<Scalars["String"]["input"]>;
  deposited_?: InputMaybe<Deposited_Filter>;
  deposited_contains?: InputMaybe<Scalars["String"]["input"]>;
  deposited_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposited_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  deposited_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposited_gt?: InputMaybe<Scalars["String"]["input"]>;
  deposited_gte?: InputMaybe<Scalars["String"]["input"]>;
  deposited_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  deposited_lt?: InputMaybe<Scalars["String"]["input"]>;
  deposited_lte?: InputMaybe<Scalars["String"]["input"]>;
  deposited_not?: InputMaybe<Scalars["String"]["input"]>;
  deposited_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  deposited_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposited_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  deposited_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposited_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  deposited_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  deposited_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposited_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  deposited_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  from?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  from_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  loanLiquidated?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_?: InputMaybe<LoanLiquidated_Filter>;
  loanLiquidated_contains?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_gt?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_gte?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loanLiquidated_lt?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_lte?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_not?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loanLiquidated_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  loanLiquidated_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loanLiquidated_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_?: InputMaybe<LoanOriginated_Filter>;
  loanOriginated_contains?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_gt?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_gte?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loanOriginated_lt?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_lte?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_not?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loanOriginated_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  loanOriginated_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loanOriginated_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_?: InputMaybe<LoanRepaid_Filter>;
  loanRepaid_contains?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_gt?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_gte?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loanRepaid_lt?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_lte?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_not?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  loanRepaid_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  loanRepaid_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<PoolEvent_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  redeemed?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_?: InputMaybe<Redeemed_Filter>;
  redeemed_contains?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_gt?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_gte?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  redeemed_lt?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_lte?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_not?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  redeemed_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  redeemed_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenCreated?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_?: InputMaybe<TokenCreated_Filter>;
  tokenCreated_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_gt?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_gte?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenCreated_lt?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_lte?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_not?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenCreated_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenCreated_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  type?: InputMaybe<PoolEventType>;
  type_in?: InputMaybe<Array<PoolEventType>>;
  type_not?: InputMaybe<PoolEventType>;
  type_not_in?: InputMaybe<Array<PoolEventType>>;
  withdrawn?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_?: InputMaybe<Withdrawn_Filter>;
  withdrawn_contains?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_gt?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_gte?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  withdrawn_lt?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_lte?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_not?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  withdrawn_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  withdrawn_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum PoolEvent_OrderBy {
  Account = "account",
  CollateralLiquidated = "collateralLiquidated",
  CollateralLiquidatedId = "collateralLiquidated__id",
  CollateralLiquidatedProceeds = "collateralLiquidated__proceeds",
  Deposit = "deposit",
  DepositAccount = "deposit__account",
  DepositCreatedAt = "deposit__createdAt",
  DepositDepositedAmount = "deposit__depositedAmount",
  DepositId = "deposit__id",
  DepositShares = "deposit__shares",
  DepositUpdatedAt = "deposit__updatedAt",
  Deposited = "deposited",
  DepositedAccount = "deposited__account",
  DepositedAmount = "deposited__amount",
  DepositedId = "deposited__id",
  DepositedShares = "deposited__shares",
  From = "from",
  Id = "id",
  LoanLiquidated = "loanLiquidated",
  LoanLiquidatedId = "loanLiquidated__id",
  LoanOriginated = "loanOriginated",
  LoanOriginatedId = "loanOriginated__id",
  LoanRepaid = "loanRepaid",
  LoanRepaidId = "loanRepaid__id",
  Pool = "pool",
  PoolAdminFeeBalance = "pool__adminFeeBalance",
  PoolAdminFeeRate = "pool__adminFeeRate",
  PoolCollateralLiquidator = "pool__collateralLiquidator",
  PoolDelegationRegistry = "pool__delegationRegistry",
  PoolId = "pool__id",
  PoolImplementation = "pool__implementation",
  PoolImplementationVersionMajor = "pool__implementationVersionMajor",
  PoolLoansActive = "pool__loansActive",
  PoolLoansCollateralLiquidated = "pool__loansCollateralLiquidated",
  PoolLoansLiquidated = "pool__loansLiquidated",
  PoolLoansOriginated = "pool__loansOriginated",
  PoolLoansRepaid = "pool__loansRepaid",
  PoolTokenIdMerkleMetadataUri = "pool__tokenIdMerkleMetadataURI",
  PoolTokenIdMerkleRoot = "pool__tokenIdMerkleRoot",
  PoolTotalValueAvailable = "pool__totalValueAvailable",
  PoolTotalValueLocked = "pool__totalValueLocked",
  PoolTotalValueUsed = "pool__totalValueUsed",
  Redeemed = "redeemed",
  RedeemedAccount = "redeemed__account",
  RedeemedEstimatedAmount = "redeemed__estimatedAmount",
  RedeemedId = "redeemed__id",
  RedeemedShares = "redeemed__shares",
  Timestamp = "timestamp",
  TokenCreated = "tokenCreated",
  TokenCreatedId = "tokenCreated__id",
  TransactionHash = "transactionHash",
  Type = "type",
  Withdrawn = "withdrawn",
  WithdrawnAccount = "withdrawn__account",
  WithdrawnAmount = "withdrawn__amount",
  WithdrawnId = "withdrawn__id",
  WithdrawnShares = "withdrawn__shares",
}

export type Pool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  adminFeeBalance?: InputMaybe<Scalars["BigInt"]["input"]>;
  adminFeeBalance_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  adminFeeBalance_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  adminFeeBalance_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  adminFeeBalance_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  adminFeeBalance_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  adminFeeBalance_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  adminFeeBalance_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  adminFeeRate?: InputMaybe<Scalars["BigInt"]["input"]>;
  adminFeeRate_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  adminFeeRate_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  adminFeeRate_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  adminFeeRate_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  adminFeeRate_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  adminFeeRate_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  adminFeeRate_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  collateralLiquidator?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralLiquidator_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralLiquidator_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralLiquidator_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralLiquidator_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  collateralLiquidator_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralLiquidator_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralLiquidator_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralLiquidator_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  collateralLiquidator_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  collateralToken?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_?: InputMaybe<CollateralToken_Filter>;
  collateralToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  collateralToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  collateralToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  collateralToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  collateralToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  collateralWrappers?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  collateralWrappers_contains?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  collateralWrappers_contains_nocase?: InputMaybe<
    Array<Scalars["Bytes"]["input"]>
  >;
  collateralWrappers_not?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  collateralWrappers_not_contains?: InputMaybe<
    Array<Scalars["Bytes"]["input"]>
  >;
  collateralWrappers_not_contains_nocase?: InputMaybe<
    Array<Scalars["Bytes"]["input"]>
  >;
  currencyToken?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_?: InputMaybe<CurrencyToken_Filter>;
  currencyToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  currencyToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  currencyToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  currencyToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  dayData_?: InputMaybe<PoolDayData_Filter>;
  delegationRegistry?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegationRegistry_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegationRegistry_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegationRegistry_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegationRegistry_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  delegationRegistry_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegationRegistry_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegationRegistry_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegationRegistry_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  delegationRegistry_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  deposits_?: InputMaybe<Deposit_Filter>;
  durations?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  durations_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  durations_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  durations_not?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  durations_not_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  durations_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  events_?: InputMaybe<PoolEvent_Filter>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  implementation?: InputMaybe<Scalars["Bytes"]["input"]>;
  implementationVersionMajor?: InputMaybe<Scalars["String"]["input"]>;
  implementationVersionMajor_contains?: InputMaybe<Scalars["String"]["input"]>;
  implementationVersionMajor_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  implementationVersionMajor_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  implementationVersionMajor_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  implementationVersionMajor_gt?: InputMaybe<Scalars["String"]["input"]>;
  implementationVersionMajor_gte?: InputMaybe<Scalars["String"]["input"]>;
  implementationVersionMajor_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  implementationVersionMajor_lt?: InputMaybe<Scalars["String"]["input"]>;
  implementationVersionMajor_lte?: InputMaybe<Scalars["String"]["input"]>;
  implementationVersionMajor_not?: InputMaybe<Scalars["String"]["input"]>;
  implementationVersionMajor_not_contains?: InputMaybe<
    Scalars["String"]["input"]
  >;
  implementationVersionMajor_not_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  implementationVersionMajor_not_ends_with?: InputMaybe<
    Scalars["String"]["input"]
  >;
  implementationVersionMajor_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  implementationVersionMajor_not_in?: InputMaybe<
    Array<Scalars["String"]["input"]>
  >;
  implementationVersionMajor_not_starts_with?: InputMaybe<
    Scalars["String"]["input"]
  >;
  implementationVersionMajor_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  implementationVersionMajor_starts_with?: InputMaybe<
    Scalars["String"]["input"]
  >;
  implementationVersionMajor_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  implementation_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  implementation_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  implementation_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  implementation_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  implementation_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  implementation_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  implementation_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  implementation_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  implementation_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  loansActive?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansActive_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansActive_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansActive_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  loansActive_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansActive_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansActive_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansActive_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  loansCollateralLiquidated?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansCollateralLiquidated_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansCollateralLiquidated_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansCollateralLiquidated_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  loansCollateralLiquidated_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansCollateralLiquidated_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansCollateralLiquidated_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansCollateralLiquidated_not_in?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  loansLiquidated?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansLiquidated_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansLiquidated_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansLiquidated_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  loansLiquidated_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansLiquidated_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansLiquidated_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansLiquidated_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  loansOriginated?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansOriginated_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansOriginated_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansOriginated_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  loansOriginated_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansOriginated_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansOriginated_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansOriginated_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  loansRepaid?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansRepaid_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansRepaid_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansRepaid_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  loansRepaid_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansRepaid_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansRepaid_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  loansRepaid_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  loans_?: InputMaybe<Loan_Filter>;
  maxBorrows?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  maxBorrows_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  maxBorrows_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  maxBorrows_not?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  maxBorrows_not_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  maxBorrows_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  or?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  rates?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rates_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rates_not?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rates_not_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  ticks_?: InputMaybe<Tick_Filter>;
  tokenIdMerkleMetadataURI?: InputMaybe<Scalars["String"]["input"]>;
  tokenIdMerkleMetadataURI_contains?: InputMaybe<Scalars["String"]["input"]>;
  tokenIdMerkleMetadataURI_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  tokenIdMerkleMetadataURI_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenIdMerkleMetadataURI_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  tokenIdMerkleMetadataURI_gt?: InputMaybe<Scalars["String"]["input"]>;
  tokenIdMerkleMetadataURI_gte?: InputMaybe<Scalars["String"]["input"]>;
  tokenIdMerkleMetadataURI_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tokenIdMerkleMetadataURI_lt?: InputMaybe<Scalars["String"]["input"]>;
  tokenIdMerkleMetadataURI_lte?: InputMaybe<Scalars["String"]["input"]>;
  tokenIdMerkleMetadataURI_not?: InputMaybe<Scalars["String"]["input"]>;
  tokenIdMerkleMetadataURI_not_contains?: InputMaybe<
    Scalars["String"]["input"]
  >;
  tokenIdMerkleMetadataURI_not_contains_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  tokenIdMerkleMetadataURI_not_ends_with?: InputMaybe<
    Scalars["String"]["input"]
  >;
  tokenIdMerkleMetadataURI_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  tokenIdMerkleMetadataURI_not_in?: InputMaybe<
    Array<Scalars["String"]["input"]>
  >;
  tokenIdMerkleMetadataURI_not_starts_with?: InputMaybe<
    Scalars["String"]["input"]
  >;
  tokenIdMerkleMetadataURI_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  tokenIdMerkleMetadataURI_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tokenIdMerkleMetadataURI_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  tokenIdMerkleRoot?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenIdMerkleRoot_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenIdMerkleRoot_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenIdMerkleRoot_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenIdMerkleRoot_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenIdMerkleRoot_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenIdMerkleRoot_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenIdMerkleRoot_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenIdMerkleRoot_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  tokenIdMerkleRoot_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenIdRange?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenIdRange_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenIdRange_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenIdRange_not?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenIdRange_not_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenIdRange_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  tokenIdSet?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenIdSet_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenIdSet_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenIdSet_not?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenIdSet_not_contains?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenIdSet_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  totalValueAvailable?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueAvailable_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueAvailable_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueAvailable_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalValueAvailable_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueAvailable_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueAvailable_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueAvailable_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalValueLocked?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueLocked_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueLocked_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueLocked_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalValueLocked_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueLocked_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueLocked_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalValueUsed?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueUsed_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueUsed_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueUsed_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalValueUsed_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueUsed_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueUsed_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalValueUsed_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum Pool_OrderBy {
  AdminFeeBalance = "adminFeeBalance",
  AdminFeeRate = "adminFeeRate",
  CollateralLiquidator = "collateralLiquidator",
  CollateralToken = "collateralToken",
  CollateralTokenId = "collateralToken__id",
  CollateralTokenName = "collateralToken__name",
  CollateralWrappers = "collateralWrappers",
  CurrencyToken = "currencyToken",
  CurrencyTokenId = "currencyToken__id",
  CurrencyTokenName = "currencyToken__name",
  CurrencyTokenSymbol = "currencyToken__symbol",
  DayData = "dayData",
  DelegationRegistry = "delegationRegistry",
  Deposits = "deposits",
  Durations = "durations",
  Events = "events",
  Id = "id",
  Implementation = "implementation",
  ImplementationVersionMajor = "implementationVersionMajor",
  Loans = "loans",
  LoansActive = "loansActive",
  LoansCollateralLiquidated = "loansCollateralLiquidated",
  LoansLiquidated = "loansLiquidated",
  LoansOriginated = "loansOriginated",
  LoansRepaid = "loansRepaid",
  MaxBorrows = "maxBorrows",
  Rates = "rates",
  Ticks = "ticks",
  TokenIdMerkleMetadataUri = "tokenIdMerkleMetadataURI",
  TokenIdMerkleRoot = "tokenIdMerkleRoot",
  TokenIdRange = "tokenIdRange",
  TokenIdSet = "tokenIdSet",
  TotalValueAvailable = "totalValueAvailable",
  TotalValueLocked = "totalValueLocked",
  TotalValueUsed = "totalValueUsed",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  auction?: Maybe<Auction>;
  auctions: Array<Auction>;
  batch?: Maybe<Batch>;
  batches: Array<Batch>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  collateralLiquidated?: Maybe<CollateralLiquidated>;
  collateralLiquidateds: Array<CollateralLiquidated>;
  collateralToken?: Maybe<CollateralToken>;
  collateralTokens: Array<CollateralToken>;
  currencyToken?: Maybe<CurrencyToken>;
  currencyTokens: Array<CurrencyToken>;
  deposit?: Maybe<Deposit>;
  deposited?: Maybe<Deposited>;
  depositeds: Array<Deposited>;
  deposits: Array<Deposit>;
  liquidation?: Maybe<Liquidation>;
  liquidations: Array<Liquidation>;
  loan?: Maybe<Loan>;
  loanLiquidated?: Maybe<LoanLiquidated>;
  loanLiquidateds: Array<LoanLiquidated>;
  loanOriginated?: Maybe<LoanOriginated>;
  loanOriginateds: Array<LoanOriginated>;
  loanRepaid?: Maybe<LoanRepaid>;
  loanRepaids: Array<LoanRepaid>;
  loans: Array<Loan>;
  pool?: Maybe<Pool>;
  poolDayData?: Maybe<PoolDayData>;
  poolDayDatas: Array<PoolDayData>;
  poolEvent?: Maybe<PoolEvent>;
  poolEvents: Array<PoolEvent>;
  pools: Array<Pool>;
  redeemed?: Maybe<Redeemed>;
  redeemeds: Array<Redeemed>;
  redemption?: Maybe<Redemption>;
  redemptions: Array<Redemption>;
  tick?: Maybe<Tick>;
  ticks: Array<Tick>;
  tokenCreated?: Maybe<TokenCreated>;
  tokenCreateds: Array<TokenCreated>;
  withdrawn?: Maybe<Withdrawn>;
  withdrawns: Array<Withdrawn>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryAuctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAuctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Auction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Auction_Filter>;
};

export type QueryBatchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBatchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Batch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Batch_Filter>;
};

export type QueryBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bid_Filter>;
};

export type QueryBundleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBundlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Bundle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bundle_Filter>;
};

export type QueryCollateralLiquidatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCollateralLiquidatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CollateralLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollateralLiquidated_Filter>;
};

export type QueryCollateralTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCollateralTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CollateralToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollateralToken_Filter>;
};

export type QueryCurrencyTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryCurrencyTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CurrencyToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CurrencyToken_Filter>;
};

export type QueryDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDepositedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDepositedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Deposited_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposited_Filter>;
};

export type QueryDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};

export type QueryLiquidationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLiquidationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Liquidation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Liquidation_Filter>;
};

export type QueryLoanArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLoanLiquidatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLoanLiquidatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LoanLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LoanLiquidated_Filter>;
};

export type QueryLoanOriginatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLoanOriginatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LoanOriginated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LoanOriginated_Filter>;
};

export type QueryLoanRepaidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLoanRepaidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LoanRepaid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LoanRepaid_Filter>;
};

export type QueryLoansArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Loan_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Loan_Filter>;
};

export type QueryPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPoolDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPoolDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolDayData_Filter>;
};

export type QueryPoolEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPoolEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolEvent_Filter>;
};

export type QueryPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};

export type QueryRedeemedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRedeemedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Redeemed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Redeemed_Filter>;
};

export type QueryRedemptionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRedemptionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Redemption_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Redemption_Filter>;
};

export type QueryTickArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTicksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Tick_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tick_Filter>;
};

export type QueryTokenCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenCreated_Filter>;
};

export type QueryWithdrawnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryWithdrawnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Withdrawn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdrawn_Filter>;
};

export type Redeemed = {
  __typename?: "Redeemed";
  account: Scalars["Bytes"]["output"];
  estimatedAmount: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  shares: Scalars["BigInt"]["output"];
  tick: Tick;
};

export type Redeemed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  account_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Redeemed_Filter>>>;
  estimatedAmount?: InputMaybe<Scalars["BigInt"]["input"]>;
  estimatedAmount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  estimatedAmount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  estimatedAmount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  estimatedAmount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  estimatedAmount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  estimatedAmount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  estimatedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Redeemed_Filter>>>;
  shares?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  shares_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tick?: InputMaybe<Scalars["String"]["input"]>;
  tick_?: InputMaybe<Tick_Filter>;
  tick_contains?: InputMaybe<Scalars["String"]["input"]>;
  tick_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_gt?: InputMaybe<Scalars["String"]["input"]>;
  tick_gte?: InputMaybe<Scalars["String"]["input"]>;
  tick_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tick_lt?: InputMaybe<Scalars["String"]["input"]>;
  tick_lte?: InputMaybe<Scalars["String"]["input"]>;
  tick_not?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tick_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum Redeemed_OrderBy {
  Account = "account",
  EstimatedAmount = "estimatedAmount",
  Id = "id",
  Shares = "shares",
  Tick = "tick",
  TickAccrualRate = "tick__accrualRate",
  TickAccrualTimestamp = "tick__accrualTimestamp",
  TickAccrued = "tick__accrued",
  TickActive = "tick__active",
  TickAvailable = "tick__available",
  TickDuration = "tick__duration",
  TickDurationIndex = "tick__durationIndex",
  TickId = "tick__id",
  TickInterestWeightedMaturity = "tick__interestWeightedMaturity",
  TickLimit = "tick__limit",
  TickNext = "tick__next",
  TickPending = "tick__pending",
  TickPrev = "tick__prev",
  TickPrincipalWeightedDuration = "tick__principalWeightedDuration",
  TickRate = "tick__rate",
  TickRateIndex = "tick__rateIndex",
  TickRaw = "tick__raw",
  TickRedemptionPending = "tick__redemptionPending",
  TickShares = "tick__shares",
  TickValue = "tick__value",
}

export type Redemption = {
  __typename?: "Redemption";
  deposit: Deposit;
  id: Scalars["Bytes"]["output"];
  redemptionId: Scalars["BigInt"]["output"];
  shares: Scalars["BigInt"]["output"];
};

export type Redemption_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Redemption_Filter>>>;
  deposit?: InputMaybe<Scalars["String"]["input"]>;
  deposit_?: InputMaybe<Deposit_Filter>;
  deposit_contains?: InputMaybe<Scalars["String"]["input"]>;
  deposit_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposit_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  deposit_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposit_gt?: InputMaybe<Scalars["String"]["input"]>;
  deposit_gte?: InputMaybe<Scalars["String"]["input"]>;
  deposit_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  deposit_lt?: InputMaybe<Scalars["String"]["input"]>;
  deposit_lte?: InputMaybe<Scalars["String"]["input"]>;
  deposit_not?: InputMaybe<Scalars["String"]["input"]>;
  deposit_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  deposit_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposit_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  deposit_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposit_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  deposit_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  deposit_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  deposit_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  deposit_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Redemption_Filter>>>;
  redemptionId?: InputMaybe<Scalars["BigInt"]["input"]>;
  redemptionId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  redemptionId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  redemptionId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  redemptionId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  redemptionId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  redemptionId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  redemptionId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  shares?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  shares_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum Redemption_OrderBy {
  Deposit = "deposit",
  DepositAccount = "deposit__account",
  DepositCreatedAt = "deposit__createdAt",
  DepositDepositedAmount = "deposit__depositedAmount",
  DepositId = "deposit__id",
  DepositShares = "deposit__shares",
  DepositUpdatedAt = "deposit__updatedAt",
  Id = "id",
  RedemptionId = "redemptionId",
  Shares = "shares",
}

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  auction?: Maybe<Auction>;
  auctions: Array<Auction>;
  batch?: Maybe<Batch>;
  batches: Array<Batch>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  collateralLiquidated?: Maybe<CollateralLiquidated>;
  collateralLiquidateds: Array<CollateralLiquidated>;
  collateralToken?: Maybe<CollateralToken>;
  collateralTokens: Array<CollateralToken>;
  currencyToken?: Maybe<CurrencyToken>;
  currencyTokens: Array<CurrencyToken>;
  deposit?: Maybe<Deposit>;
  deposited?: Maybe<Deposited>;
  depositeds: Array<Deposited>;
  deposits: Array<Deposit>;
  liquidation?: Maybe<Liquidation>;
  liquidations: Array<Liquidation>;
  loan?: Maybe<Loan>;
  loanLiquidated?: Maybe<LoanLiquidated>;
  loanLiquidateds: Array<LoanLiquidated>;
  loanOriginated?: Maybe<LoanOriginated>;
  loanOriginateds: Array<LoanOriginated>;
  loanRepaid?: Maybe<LoanRepaid>;
  loanRepaids: Array<LoanRepaid>;
  loans: Array<Loan>;
  pool?: Maybe<Pool>;
  poolDayData?: Maybe<PoolDayData>;
  poolDayDatas: Array<PoolDayData>;
  poolEvent?: Maybe<PoolEvent>;
  poolEvents: Array<PoolEvent>;
  pools: Array<Pool>;
  redeemed?: Maybe<Redeemed>;
  redeemeds: Array<Redeemed>;
  redemption?: Maybe<Redemption>;
  redemptions: Array<Redemption>;
  tick?: Maybe<Tick>;
  ticks: Array<Tick>;
  tokenCreated?: Maybe<TokenCreated>;
  tokenCreateds: Array<TokenCreated>;
  withdrawn?: Maybe<Withdrawn>;
  withdrawns: Array<Withdrawn>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionAuctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAuctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Auction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Auction_Filter>;
};

export type SubscriptionBatchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBatchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Batch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Batch_Filter>;
};

export type SubscriptionBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Bid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bid_Filter>;
};

export type SubscriptionBundleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBundlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Bundle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bundle_Filter>;
};

export type SubscriptionCollateralLiquidatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCollateralLiquidatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CollateralLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollateralLiquidated_Filter>;
};

export type SubscriptionCollateralTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCollateralTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CollateralToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollateralToken_Filter>;
};

export type SubscriptionCurrencyTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionCurrencyTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<CurrencyToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CurrencyToken_Filter>;
};

export type SubscriptionDepositArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDepositedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDepositedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Deposited_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposited_Filter>;
};

export type SubscriptionDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Deposit_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposit_Filter>;
};

export type SubscriptionLiquidationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLiquidationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Liquidation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Liquidation_Filter>;
};

export type SubscriptionLoanArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLoanLiquidatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLoanLiquidatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LoanLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LoanLiquidated_Filter>;
};

export type SubscriptionLoanOriginatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLoanOriginatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LoanOriginated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LoanOriginated_Filter>;
};

export type SubscriptionLoanRepaidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLoanRepaidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LoanRepaid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LoanRepaid_Filter>;
};

export type SubscriptionLoansArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Loan_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Loan_Filter>;
};

export type SubscriptionPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPoolDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPoolDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolDayData_Filter>;
};

export type SubscriptionPoolEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPoolEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolEvent_Filter>;
};

export type SubscriptionPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};

export type SubscriptionRedeemedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRedeemedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Redeemed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Redeemed_Filter>;
};

export type SubscriptionRedemptionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRedemptionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Redemption_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Redemption_Filter>;
};

export type SubscriptionTickArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTicksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Tick_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tick_Filter>;
};

export type SubscriptionTokenCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenCreated_Filter>;
};

export type SubscriptionWithdrawnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionWithdrawnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Withdrawn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdrawn_Filter>;
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

export type Tick_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  accrualRate?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrualRate_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrualRate_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrualRate_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  accrualRate_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrualRate_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrualRate_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrualRate_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  accrualTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrualTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrualTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrualTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  accrualTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrualTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrualTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrualTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  accrued?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrued_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrued_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrued_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  accrued_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrued_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrued_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  accrued_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  active_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  active_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  active_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Tick_Filter>>>;
  available?: InputMaybe<Scalars["BigInt"]["input"]>;
  available_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  available_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  available_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  available_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  available_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  available_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  available_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  duration?: InputMaybe<Scalars["BigInt"]["input"]>;
  durationIndex?: InputMaybe<Scalars["Int"]["input"]>;
  durationIndex_gt?: InputMaybe<Scalars["Int"]["input"]>;
  durationIndex_gte?: InputMaybe<Scalars["Int"]["input"]>;
  durationIndex_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  durationIndex_lt?: InputMaybe<Scalars["Int"]["input"]>;
  durationIndex_lte?: InputMaybe<Scalars["Int"]["input"]>;
  durationIndex_not?: InputMaybe<Scalars["Int"]["input"]>;
  durationIndex_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  duration_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  duration_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  duration_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  interestWeightedMaturity?: InputMaybe<Scalars["BigInt"]["input"]>;
  interestWeightedMaturity_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  interestWeightedMaturity_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  interestWeightedMaturity_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  interestWeightedMaturity_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  interestWeightedMaturity_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  interestWeightedMaturity_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  interestWeightedMaturity_not_in?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  limit?: InputMaybe<Scalars["BigInt"]["input"]>;
  limit_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  limit_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  limit_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  limit_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  limit_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  limit_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  limit_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  next?: InputMaybe<Scalars["BigInt"]["input"]>;
  next_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  next_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  next_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  next_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  next_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  next_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  next_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Tick_Filter>>>;
  pending?: InputMaybe<Scalars["BigInt"]["input"]>;
  pending_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  pending_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  pending_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  pending_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  pending_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  pending_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  pending_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  prev?: InputMaybe<Scalars["BigInt"]["input"]>;
  prev_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  prev_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  prev_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  prev_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  prev_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  prev_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  prev_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  principalWeightedDuration?: InputMaybe<Scalars["BigInt"]["input"]>;
  principalWeightedDuration_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  principalWeightedDuration_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  principalWeightedDuration_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  principalWeightedDuration_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  principalWeightedDuration_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  principalWeightedDuration_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  principalWeightedDuration_not_in?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  rate?: InputMaybe<Scalars["BigInt"]["input"]>;
  rateIndex?: InputMaybe<Scalars["Int"]["input"]>;
  rateIndex_gt?: InputMaybe<Scalars["Int"]["input"]>;
  rateIndex_gte?: InputMaybe<Scalars["Int"]["input"]>;
  rateIndex_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  rateIndex_lt?: InputMaybe<Scalars["Int"]["input"]>;
  rateIndex_lte?: InputMaybe<Scalars["Int"]["input"]>;
  rateIndex_not?: InputMaybe<Scalars["Int"]["input"]>;
  rateIndex_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  rate_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rate_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rate_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rate_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rate_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rate_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rate_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  raw?: InputMaybe<Scalars["BigInt"]["input"]>;
  raw_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  raw_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  raw_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  raw_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  raw_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  raw_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  raw_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  redemptionPending?: InputMaybe<Scalars["BigInt"]["input"]>;
  redemptionPending_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  redemptionPending_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  redemptionPending_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  redemptionPending_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  redemptionPending_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  redemptionPending_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  redemptionPending_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  shares?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  shares_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<CurrencyToken_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  value_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum Tick_OrderBy {
  AccrualRate = "accrualRate",
  AccrualTimestamp = "accrualTimestamp",
  Accrued = "accrued",
  Active = "active",
  Available = "available",
  Duration = "duration",
  DurationIndex = "durationIndex",
  Id = "id",
  InterestWeightedMaturity = "interestWeightedMaturity",
  Limit = "limit",
  Next = "next",
  Pending = "pending",
  Pool = "pool",
  PoolAdminFeeBalance = "pool__adminFeeBalance",
  PoolAdminFeeRate = "pool__adminFeeRate",
  PoolCollateralLiquidator = "pool__collateralLiquidator",
  PoolDelegationRegistry = "pool__delegationRegistry",
  PoolId = "pool__id",
  PoolImplementation = "pool__implementation",
  PoolImplementationVersionMajor = "pool__implementationVersionMajor",
  PoolLoansActive = "pool__loansActive",
  PoolLoansCollateralLiquidated = "pool__loansCollateralLiquidated",
  PoolLoansLiquidated = "pool__loansLiquidated",
  PoolLoansOriginated = "pool__loansOriginated",
  PoolLoansRepaid = "pool__loansRepaid",
  PoolTokenIdMerkleMetadataUri = "pool__tokenIdMerkleMetadataURI",
  PoolTokenIdMerkleRoot = "pool__tokenIdMerkleRoot",
  PoolTotalValueAvailable = "pool__totalValueAvailable",
  PoolTotalValueLocked = "pool__totalValueLocked",
  PoolTotalValueUsed = "pool__totalValueUsed",
  Prev = "prev",
  PrincipalWeightedDuration = "principalWeightedDuration",
  Rate = "rate",
  RateIndex = "rateIndex",
  Raw = "raw",
  RedemptionPending = "redemptionPending",
  Shares = "shares",
  Token = "token",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  Value = "value",
}

export type TokenCreated = {
  __typename?: "TokenCreated";
  id: Scalars["Bytes"]["output"];
  tick: Tick;
  token: CurrencyToken;
};

export type TokenCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenCreated_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TokenCreated_Filter>>>;
  tick?: InputMaybe<Scalars["String"]["input"]>;
  tick_?: InputMaybe<Tick_Filter>;
  tick_contains?: InputMaybe<Scalars["String"]["input"]>;
  tick_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_gt?: InputMaybe<Scalars["String"]["input"]>;
  tick_gte?: InputMaybe<Scalars["String"]["input"]>;
  tick_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tick_lt?: InputMaybe<Scalars["String"]["input"]>;
  tick_lte?: InputMaybe<Scalars["String"]["input"]>;
  tick_not?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tick_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<CurrencyToken_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum TokenCreated_OrderBy {
  Id = "id",
  Tick = "tick",
  TickAccrualRate = "tick__accrualRate",
  TickAccrualTimestamp = "tick__accrualTimestamp",
  TickAccrued = "tick__accrued",
  TickActive = "tick__active",
  TickAvailable = "tick__available",
  TickDuration = "tick__duration",
  TickDurationIndex = "tick__durationIndex",
  TickId = "tick__id",
  TickInterestWeightedMaturity = "tick__interestWeightedMaturity",
  TickLimit = "tick__limit",
  TickNext = "tick__next",
  TickPending = "tick__pending",
  TickPrev = "tick__prev",
  TickPrincipalWeightedDuration = "tick__principalWeightedDuration",
  TickRate = "tick__rate",
  TickRateIndex = "tick__rateIndex",
  TickRaw = "tick__raw",
  TickRedemptionPending = "tick__redemptionPending",
  TickShares = "tick__shares",
  TickValue = "tick__value",
  Token = "token",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
}

export type Withdrawn = {
  __typename?: "Withdrawn";
  account: Scalars["Bytes"]["output"];
  amount: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  shares: Scalars["BigInt"]["output"];
  tick: Tick;
};

export type Withdrawn_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  account_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  amount?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Withdrawn_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Withdrawn_Filter>>>;
  shares?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  shares_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tick?: InputMaybe<Scalars["String"]["input"]>;
  tick_?: InputMaybe<Tick_Filter>;
  tick_contains?: InputMaybe<Scalars["String"]["input"]>;
  tick_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_gt?: InputMaybe<Scalars["String"]["input"]>;
  tick_gte?: InputMaybe<Scalars["String"]["input"]>;
  tick_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tick_lt?: InputMaybe<Scalars["String"]["input"]>;
  tick_lte?: InputMaybe<Scalars["String"]["input"]>;
  tick_not?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  tick_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tick_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  tick_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum Withdrawn_OrderBy {
  Account = "account",
  Amount = "amount",
  Id = "id",
  Shares = "shares",
  Tick = "tick",
  TickAccrualRate = "tick__accrualRate",
  TickAccrualTimestamp = "tick__accrualTimestamp",
  TickAccrued = "tick__accrued",
  TickActive = "tick__active",
  TickAvailable = "tick__available",
  TickDuration = "tick__duration",
  TickDurationIndex = "tick__durationIndex",
  TickId = "tick__id",
  TickInterestWeightedMaturity = "tick__interestWeightedMaturity",
  TickLimit = "tick__limit",
  TickNext = "tick__next",
  TickPending = "tick__pending",
  TickPrev = "tick__prev",
  TickPrincipalWeightedDuration = "tick__principalWeightedDuration",
  TickRate = "tick__rate",
  TickRateIndex = "tick__rateIndex",
  TickRaw = "tick__raw",
  TickRedemptionPending = "tick__redemptionPending",
  TickShares = "tick__shares",
  TickValue = "tick__value",
}

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]["output"]>;
  /** The block number */
  number: Scalars["Int"]["output"];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]["output"]>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"]["output"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"]["output"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type GetAllPoolsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPoolsQuery = {
  __typename?: "Query";
  pools: Array<{
    __typename?: "Pool";
    id: any;
    totalValueLocked: any;
    totalValueUsed: any;
    collateralToken: { __typename?: "CollateralToken"; name: string };
    currencyToken: { __typename?: "CurrencyToken"; symbol: string };
  }>;
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

export const GetAllPoolsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllPools" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pools" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "collateralToken" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "currencyToken" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "symbol" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalValueLocked" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "totalValueUsed" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllPoolsQuery, GetAllPoolsQueryVariables>;
export const GetTickDataDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetTickData" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "poolId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tickId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Bytes" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pool" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "poolId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "collateralToken" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "currencyToken" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "symbol" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "ticks" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "id" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "tickId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "limit" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "duration" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "rate" } },
                      { kind: "Field", name: { kind: "Name", value: "raw" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "token" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "deposits" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "depositedAmount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "shares" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "account" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tick" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTickDataQuery, GetTickDataQueryVariables>;
export const GetTicksByPoolDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetTicksByPool" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "poolId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pool" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "poolId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "collateralToken" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "currencyToken" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "symbol" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "ticks" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "raw" } },
                      { kind: "Field", name: { kind: "Name", value: "limit" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "duration" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "rate" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "durationIndex" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "rateIndex" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "active" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "shares" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "available" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pending" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "redemptionPending" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "prev" } },
                      { kind: "Field", name: { kind: "Name", value: "next" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "accrued" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "accrualRate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "accrualTimestamp" },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "principalWeightedDuration",
                        },
                      },
                      {
                        kind: "Field",
                        name: {
                          kind: "Name",
                          value: "interestWeightedMaturity",
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "token" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "symbol" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "deposits" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "account" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "depositedAmount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "shares" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tick" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTicksByPoolQuery, GetTicksByPoolQueryVariables>;
