// @ts-nocheck
import {
  GraphQLResolveInfo,
  SelectionSetNode,
  FieldNode,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import { gql } from "@graphql-mesh/utils";

import type { GetMeshOptions } from "@graphql-mesh/runtime";
import type { YamlConfig } from "@graphql-mesh/types";
import { PubSub } from "@graphql-mesh/utils";
import { DefaultLogger } from "@graphql-mesh/utils";
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from "@whatwg-node/fetch";

import { MeshResolvedSource } from "@graphql-mesh/runtime";
import { MeshTransform, MeshPlugin } from "@graphql-mesh/types";
import GraphqlHandler from "@graphql-mesh/graphql";
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from "@graphql-mesh/utils";
import { createMeshHTTPHandler, MeshHTTPHandler } from "@graphql-mesh/http";
import {
  getMesh,
  ExecuteMeshFn,
  SubscribeMeshFn,
  MeshContext as BaseMeshContext,
  MeshInstance,
} from "@graphql-mesh/runtime";
import { MeshStore, FsStoreStorageAdapter } from "@graphql-mesh/store";
import { path as pathModule } from "@graphql-mesh/cross-helpers";
import { ImportFn } from "@graphql-mesh/types";
import type { MetastreetCsTypes } from "./sources/metastreet-cs/types";
import * as importedModule$0 from "./sources/metastreet-cs/introspectionSchema";
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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type Auction = {
  id: Scalars["Bytes"];
  liquidation: Liquidation;
  collateralToken?: Maybe<CollateralToken>;
  currencyToken: CurrencyToken;
  collateralTokenId: Scalars["BigInt"];
  quantity: Scalars["BigInt"];
  highestBid?: Maybe<Bid>;
  bidsCount: Scalars["Int"];
  endTime: Scalars["BigInt"];
  bids: Array<Bid>;
  status?: Maybe<AuctionStatus>;
};

export type AuctionbidsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
};

export type AuctionStatus = "Created" | "Started" | "Ended";

export type Auction_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  liquidation?: InputMaybe<Scalars["String"]>;
  liquidation_not?: InputMaybe<Scalars["String"]>;
  liquidation_gt?: InputMaybe<Scalars["String"]>;
  liquidation_lt?: InputMaybe<Scalars["String"]>;
  liquidation_gte?: InputMaybe<Scalars["String"]>;
  liquidation_lte?: InputMaybe<Scalars["String"]>;
  liquidation_in?: InputMaybe<Array<Scalars["String"]>>;
  liquidation_not_in?: InputMaybe<Array<Scalars["String"]>>;
  liquidation_contains?: InputMaybe<Scalars["String"]>;
  liquidation_contains_nocase?: InputMaybe<Scalars["String"]>;
  liquidation_not_contains?: InputMaybe<Scalars["String"]>;
  liquidation_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  liquidation_starts_with?: InputMaybe<Scalars["String"]>;
  liquidation_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidation_not_starts_with?: InputMaybe<Scalars["String"]>;
  liquidation_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidation_ends_with?: InputMaybe<Scalars["String"]>;
  liquidation_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidation_not_ends_with?: InputMaybe<Scalars["String"]>;
  liquidation_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  liquidation_?: InputMaybe<Liquidation_filter>;
  collateralToken?: InputMaybe<Scalars["String"]>;
  collateralToken_not?: InputMaybe<Scalars["String"]>;
  collateralToken_gt?: InputMaybe<Scalars["String"]>;
  collateralToken_lt?: InputMaybe<Scalars["String"]>;
  collateralToken_gte?: InputMaybe<Scalars["String"]>;
  collateralToken_lte?: InputMaybe<Scalars["String"]>;
  collateralToken_in?: InputMaybe<Array<Scalars["String"]>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  collateralToken_contains?: InputMaybe<Scalars["String"]>;
  collateralToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_not_contains?: InputMaybe<Scalars["String"]>;
  collateralToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_starts_with?: InputMaybe<Scalars["String"]>;
  collateralToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  collateralToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_ends_with?: InputMaybe<Scalars["String"]>;
  collateralToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  collateralToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_?: InputMaybe<CollateralToken_filter>;
  currencyToken?: InputMaybe<Scalars["String"]>;
  currencyToken_not?: InputMaybe<Scalars["String"]>;
  currencyToken_gt?: InputMaybe<Scalars["String"]>;
  currencyToken_lt?: InputMaybe<Scalars["String"]>;
  currencyToken_gte?: InputMaybe<Scalars["String"]>;
  currencyToken_lte?: InputMaybe<Scalars["String"]>;
  currencyToken_in?: InputMaybe<Array<Scalars["String"]>>;
  currencyToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  currencyToken_contains?: InputMaybe<Scalars["String"]>;
  currencyToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_not_contains?: InputMaybe<Scalars["String"]>;
  currencyToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_starts_with?: InputMaybe<Scalars["String"]>;
  currencyToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  currencyToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_ends_with?: InputMaybe<Scalars["String"]>;
  currencyToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  currencyToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_?: InputMaybe<CurrencyToken_filter>;
  collateralTokenId?: InputMaybe<Scalars["BigInt"]>;
  collateralTokenId_not?: InputMaybe<Scalars["BigInt"]>;
  collateralTokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  collateralTokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  collateralTokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  collateralTokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  collateralTokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralTokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  quantity?: InputMaybe<Scalars["BigInt"]>;
  quantity_not?: InputMaybe<Scalars["BigInt"]>;
  quantity_gt?: InputMaybe<Scalars["BigInt"]>;
  quantity_lt?: InputMaybe<Scalars["BigInt"]>;
  quantity_gte?: InputMaybe<Scalars["BigInt"]>;
  quantity_lte?: InputMaybe<Scalars["BigInt"]>;
  quantity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  quantity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  highestBid?: InputMaybe<Scalars["String"]>;
  highestBid_not?: InputMaybe<Scalars["String"]>;
  highestBid_gt?: InputMaybe<Scalars["String"]>;
  highestBid_lt?: InputMaybe<Scalars["String"]>;
  highestBid_gte?: InputMaybe<Scalars["String"]>;
  highestBid_lte?: InputMaybe<Scalars["String"]>;
  highestBid_in?: InputMaybe<Array<Scalars["String"]>>;
  highestBid_not_in?: InputMaybe<Array<Scalars["String"]>>;
  highestBid_contains?: InputMaybe<Scalars["String"]>;
  highestBid_contains_nocase?: InputMaybe<Scalars["String"]>;
  highestBid_not_contains?: InputMaybe<Scalars["String"]>;
  highestBid_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  highestBid_starts_with?: InputMaybe<Scalars["String"]>;
  highestBid_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  highestBid_not_starts_with?: InputMaybe<Scalars["String"]>;
  highestBid_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  highestBid_ends_with?: InputMaybe<Scalars["String"]>;
  highestBid_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  highestBid_not_ends_with?: InputMaybe<Scalars["String"]>;
  highestBid_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  highestBid_?: InputMaybe<Bid_filter>;
  bidsCount?: InputMaybe<Scalars["Int"]>;
  bidsCount_not?: InputMaybe<Scalars["Int"]>;
  bidsCount_gt?: InputMaybe<Scalars["Int"]>;
  bidsCount_lt?: InputMaybe<Scalars["Int"]>;
  bidsCount_gte?: InputMaybe<Scalars["Int"]>;
  bidsCount_lte?: InputMaybe<Scalars["Int"]>;
  bidsCount_in?: InputMaybe<Array<Scalars["Int"]>>;
  bidsCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  endTime?: InputMaybe<Scalars["BigInt"]>;
  endTime_not?: InputMaybe<Scalars["BigInt"]>;
  endTime_gt?: InputMaybe<Scalars["BigInt"]>;
  endTime_lt?: InputMaybe<Scalars["BigInt"]>;
  endTime_gte?: InputMaybe<Scalars["BigInt"]>;
  endTime_lte?: InputMaybe<Scalars["BigInt"]>;
  endTime_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  endTime_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bids_?: InputMaybe<Bid_filter>;
  status?: InputMaybe<AuctionStatus>;
  status_not?: InputMaybe<AuctionStatus>;
  status_in?: InputMaybe<Array<AuctionStatus>>;
  status_not_in?: InputMaybe<Array<AuctionStatus>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Auction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Auction_filter>>>;
};

export type Auction_orderBy =
  | "id"
  | "liquidation"
  | "liquidation__id"
  | "liquidation__source"
  | "liquidation__sourceImplementation"
  | "collateralToken"
  | "collateralToken__id"
  | "collateralToken__name"
  | "currencyToken"
  | "currencyToken__id"
  | "currencyToken__name"
  | "currencyToken__symbol"
  | "collateralTokenId"
  | "quantity"
  | "highestBid"
  | "highestBid__id"
  | "highestBid__bidder"
  | "highestBid__amount"
  | "highestBid__isHighest"
  | "highestBid__timestamp"
  | "highestBid__transactionHash"
  | "bidsCount"
  | "endTime"
  | "bids"
  | "status";

export type Batch = {
  id: Scalars["ID"];
  owner: Scalars["Bytes"];
  collateralWrapperContext: Scalars["Bytes"];
  underlyingCollateralTokenAddress: Scalars["Bytes"];
  underlyingCollateralTokenIds: Array<Scalars["BigInt"]>;
};

export type Batch_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  owner?: InputMaybe<Scalars["Bytes"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]>;
  owner_lt?: InputMaybe<Scalars["Bytes"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  owner_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_not?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_gt?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_lt?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_gte?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_lte?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralWrapperContext_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralWrapperContext_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_not_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress_not?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingCollateralTokenAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingCollateralTokenAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenIds?: InputMaybe<Array<Scalars["BigInt"]>>;
  underlyingCollateralTokenIds_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  underlyingCollateralTokenIds_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  underlyingCollateralTokenIds_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  underlyingCollateralTokenIds_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  underlyingCollateralTokenIds_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Batch_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Batch_filter>>>;
};

export type Batch_orderBy =
  | "id"
  | "owner"
  | "collateralWrapperContext"
  | "underlyingCollateralTokenAddress"
  | "underlyingCollateralTokenIds";

export type Bid = {
  id: Scalars["Bytes"];
  auction: Auction;
  bidder: Scalars["Bytes"];
  amount: Scalars["BigInt"];
  isHighest: Scalars["Boolean"];
  timestamp: Scalars["BigInt"];
  transactionHash: Scalars["Bytes"];
};

export type Bid_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  auction?: InputMaybe<Scalars["String"]>;
  auction_not?: InputMaybe<Scalars["String"]>;
  auction_gt?: InputMaybe<Scalars["String"]>;
  auction_lt?: InputMaybe<Scalars["String"]>;
  auction_gte?: InputMaybe<Scalars["String"]>;
  auction_lte?: InputMaybe<Scalars["String"]>;
  auction_in?: InputMaybe<Array<Scalars["String"]>>;
  auction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  auction_contains?: InputMaybe<Scalars["String"]>;
  auction_contains_nocase?: InputMaybe<Scalars["String"]>;
  auction_not_contains?: InputMaybe<Scalars["String"]>;
  auction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  auction_starts_with?: InputMaybe<Scalars["String"]>;
  auction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auction_not_starts_with?: InputMaybe<Scalars["String"]>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  auction_ends_with?: InputMaybe<Scalars["String"]>;
  auction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auction_not_ends_with?: InputMaybe<Scalars["String"]>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  auction_?: InputMaybe<Auction_filter>;
  bidder?: InputMaybe<Scalars["Bytes"]>;
  bidder_not?: InputMaybe<Scalars["Bytes"]>;
  bidder_gt?: InputMaybe<Scalars["Bytes"]>;
  bidder_lt?: InputMaybe<Scalars["Bytes"]>;
  bidder_gte?: InputMaybe<Scalars["Bytes"]>;
  bidder_lte?: InputMaybe<Scalars["Bytes"]>;
  bidder_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  bidder_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  bidder_contains?: InputMaybe<Scalars["Bytes"]>;
  bidder_not_contains?: InputMaybe<Scalars["Bytes"]>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  isHighest?: InputMaybe<Scalars["Boolean"]>;
  isHighest_not?: InputMaybe<Scalars["Boolean"]>;
  isHighest_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  isHighest_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bid_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bid_filter>>>;
};

export type Bid_orderBy =
  | "id"
  | "auction"
  | "auction__id"
  | "auction__collateralTokenId"
  | "auction__quantity"
  | "auction__bidsCount"
  | "auction__endTime"
  | "auction__status"
  | "bidder"
  | "amount"
  | "isHighest"
  | "timestamp"
  | "transactionHash";

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type Bundle = {
  id: Scalars["ID"];
  owner: Scalars["Bytes"];
  collateralWrapperContext: Scalars["Bytes"];
  underlyingCollateralTokenAddress: Scalars["Bytes"];
  underlyingCollateralTokenIds: Array<Scalars["BigInt"]>;
};

export type Bundle_filter = {
  id?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  owner?: InputMaybe<Scalars["Bytes"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]>;
  owner_lt?: InputMaybe<Scalars["Bytes"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  owner_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_not?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_gt?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_lt?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_gte?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_lte?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralWrapperContext_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralWrapperContext_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_not_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress_not?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress_gt?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress_lt?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress_gte?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress_lte?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingCollateralTokenAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  underlyingCollateralTokenAddress_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenAddress_not_contains?: InputMaybe<Scalars["Bytes"]>;
  underlyingCollateralTokenIds?: InputMaybe<Array<Scalars["BigInt"]>>;
  underlyingCollateralTokenIds_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  underlyingCollateralTokenIds_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  underlyingCollateralTokenIds_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  underlyingCollateralTokenIds_not_contains?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  underlyingCollateralTokenIds_not_contains_nocase?: InputMaybe<
    Array<Scalars["BigInt"]>
  >;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bundle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bundle_filter>>>;
};

export type Bundle_orderBy =
  | "id"
  | "owner"
  | "collateralWrapperContext"
  | "underlyingCollateralTokenAddress"
  | "underlyingCollateralTokenIds";

export type CollateralLiquidated = {
  id: Scalars["Bytes"];
  loan: Loan;
  proceeds: Scalars["BigInt"];
};

export type CollateralLiquidated_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  loan?: InputMaybe<Scalars["String"]>;
  loan_not?: InputMaybe<Scalars["String"]>;
  loan_gt?: InputMaybe<Scalars["String"]>;
  loan_lt?: InputMaybe<Scalars["String"]>;
  loan_gte?: InputMaybe<Scalars["String"]>;
  loan_lte?: InputMaybe<Scalars["String"]>;
  loan_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_not_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_contains?: InputMaybe<Scalars["String"]>;
  loan_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_contains?: InputMaybe<Scalars["String"]>;
  loan_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_starts_with?: InputMaybe<Scalars["String"]>;
  loan_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_ends_with?: InputMaybe<Scalars["String"]>;
  loan_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_?: InputMaybe<Loan_filter>;
  proceeds?: InputMaybe<Scalars["BigInt"]>;
  proceeds_not?: InputMaybe<Scalars["BigInt"]>;
  proceeds_gt?: InputMaybe<Scalars["BigInt"]>;
  proceeds_lt?: InputMaybe<Scalars["BigInt"]>;
  proceeds_gte?: InputMaybe<Scalars["BigInt"]>;
  proceeds_lte?: InputMaybe<Scalars["BigInt"]>;
  proceeds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  proceeds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CollateralLiquidated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CollateralLiquidated_filter>>>;
};

export type CollateralLiquidated_orderBy =
  | "id"
  | "loan"
  | "loan__id"
  | "loan__status"
  | "loan__transactionHash"
  | "loan__timestamp"
  | "loan__completion"
  | "loan__delegate"
  | "loan__borrower"
  | "loan__maturity"
  | "loan__duration"
  | "loan__collateralWrapperToken"
  | "loan__collateralWrapperTokenId"
  | "loan__principal"
  | "loan__repayment"
  | "loan__proceeds"
  | "loan__collateralWrapperContext"
  | "loan__loanReceipt"
  | "proceeds";

export type CollateralToken = {
  id: Scalars["Bytes"];
  name: Scalars["String"];
  pools: Array<Pool>;
};

export type CollateralTokenpoolsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
};

export type CollateralToken_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pools_?: InputMaybe<Pool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CollateralToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CollateralToken_filter>>>;
};

export type CollateralToken_orderBy = "id" | "name" | "pools";

export type CurrencyToken = {
  id: Scalars["Bytes"];
  name: Scalars["String"];
  symbol: Scalars["String"];
  pools: Array<Pool>;
};

export type CurrencyTokenpoolsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
};

export type CurrencyToken_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol?: InputMaybe<Scalars["String"]>;
  symbol_not?: InputMaybe<Scalars["String"]>;
  symbol_gt?: InputMaybe<Scalars["String"]>;
  symbol_lt?: InputMaybe<Scalars["String"]>;
  symbol_gte?: InputMaybe<Scalars["String"]>;
  symbol_lte?: InputMaybe<Scalars["String"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
  symbol_contains?: InputMaybe<Scalars["String"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pools_?: InputMaybe<Pool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CurrencyToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CurrencyToken_filter>>>;
};

export type CurrencyToken_orderBy = "id" | "name" | "symbol" | "pools";

export type Deposit = {
  id: Scalars["Bytes"];
  pool: Pool;
  tick: Tick;
  account: Scalars["Bytes"];
  shares: Scalars["BigInt"];
  depositedAmount: Scalars["BigInt"];
  updatedAt: Scalars["BigInt"];
  createdAt: Scalars["BigInt"];
  redemptions: Array<Redemption>;
};

export type DepositredemptionsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Redemption_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Redemption_filter>;
};

export type Deposit_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_filter>;
  tick?: InputMaybe<Scalars["String"]>;
  tick_not?: InputMaybe<Scalars["String"]>;
  tick_gt?: InputMaybe<Scalars["String"]>;
  tick_lt?: InputMaybe<Scalars["String"]>;
  tick_gte?: InputMaybe<Scalars["String"]>;
  tick_lte?: InputMaybe<Scalars["String"]>;
  tick_in?: InputMaybe<Array<Scalars["String"]>>;
  tick_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tick_contains?: InputMaybe<Scalars["String"]>;
  tick_contains_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_contains?: InputMaybe<Scalars["String"]>;
  tick_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tick_starts_with?: InputMaybe<Scalars["String"]>;
  tick_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_starts_with?: InputMaybe<Scalars["String"]>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_ends_with?: InputMaybe<Scalars["String"]>;
  tick_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_ends_with?: InputMaybe<Scalars["String"]>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_?: InputMaybe<Tick_filter>;
  account?: InputMaybe<Scalars["Bytes"]>;
  account_not?: InputMaybe<Scalars["Bytes"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]>;
  account_lt?: InputMaybe<Scalars["Bytes"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  account_contains?: InputMaybe<Scalars["Bytes"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]>;
  shares?: InputMaybe<Scalars["BigInt"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]>;
  shares_lt?: InputMaybe<Scalars["BigInt"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  depositedAmount?: InputMaybe<Scalars["BigInt"]>;
  depositedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  depositedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  depositedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  depositedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  depositedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  depositedAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  depositedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  updatedAt?: InputMaybe<Scalars["BigInt"]>;
  updatedAt_not?: InputMaybe<Scalars["BigInt"]>;
  updatedAt_gt?: InputMaybe<Scalars["BigInt"]>;
  updatedAt_lt?: InputMaybe<Scalars["BigInt"]>;
  updatedAt_gte?: InputMaybe<Scalars["BigInt"]>;
  updatedAt_lte?: InputMaybe<Scalars["BigInt"]>;
  updatedAt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdAt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  redemptions_?: InputMaybe<Redemption_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Deposit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Deposit_filter>>>;
};

export type Deposit_orderBy =
  | "id"
  | "pool"
  | "pool__id"
  | "pool__implementationVersionMajor"
  | "pool__implementation"
  | "pool__adminFeeRate"
  | "pool__collateralLiquidator"
  | "pool__delegationRegistry"
  | "pool__tokenIdMerkleRoot"
  | "pool__tokenIdMerkleMetadataURI"
  | "pool__adminFeeBalance"
  | "pool__totalValueLocked"
  | "pool__totalValueAvailable"
  | "pool__totalValueUsed"
  | "pool__loansOriginated"
  | "pool__loansActive"
  | "pool__loansRepaid"
  | "pool__loansLiquidated"
  | "pool__loansCollateralLiquidated"
  | "tick"
  | "tick__id"
  | "tick__raw"
  | "tick__limit"
  | "tick__duration"
  | "tick__rate"
  | "tick__durationIndex"
  | "tick__rateIndex"
  | "tick__active"
  | "tick__value"
  | "tick__shares"
  | "tick__available"
  | "tick__pending"
  | "tick__redemptionPending"
  | "tick__prev"
  | "tick__next"
  | "tick__accrued"
  | "tick__accrualRate"
  | "tick__accrualTimestamp"
  | "tick__principalWeightedDuration"
  | "tick__interestWeightedMaturity"
  | "account"
  | "shares"
  | "depositedAmount"
  | "updatedAt"
  | "createdAt"
  | "redemptions";

export type Deposited = {
  id: Scalars["Bytes"];
  account: Scalars["Bytes"];
  tick: Tick;
  amount: Scalars["BigInt"];
  shares: Scalars["BigInt"];
};

export type Deposited_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  account?: InputMaybe<Scalars["Bytes"]>;
  account_not?: InputMaybe<Scalars["Bytes"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]>;
  account_lt?: InputMaybe<Scalars["Bytes"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  account_contains?: InputMaybe<Scalars["Bytes"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tick?: InputMaybe<Scalars["String"]>;
  tick_not?: InputMaybe<Scalars["String"]>;
  tick_gt?: InputMaybe<Scalars["String"]>;
  tick_lt?: InputMaybe<Scalars["String"]>;
  tick_gte?: InputMaybe<Scalars["String"]>;
  tick_lte?: InputMaybe<Scalars["String"]>;
  tick_in?: InputMaybe<Array<Scalars["String"]>>;
  tick_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tick_contains?: InputMaybe<Scalars["String"]>;
  tick_contains_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_contains?: InputMaybe<Scalars["String"]>;
  tick_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tick_starts_with?: InputMaybe<Scalars["String"]>;
  tick_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_starts_with?: InputMaybe<Scalars["String"]>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_ends_with?: InputMaybe<Scalars["String"]>;
  tick_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_ends_with?: InputMaybe<Scalars["String"]>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_?: InputMaybe<Tick_filter>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  shares?: InputMaybe<Scalars["BigInt"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]>;
  shares_lt?: InputMaybe<Scalars["BigInt"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Deposited_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Deposited_filter>>>;
};

export type Deposited_orderBy =
  | "id"
  | "account"
  | "tick"
  | "tick__id"
  | "tick__raw"
  | "tick__limit"
  | "tick__duration"
  | "tick__rate"
  | "tick__durationIndex"
  | "tick__rateIndex"
  | "tick__active"
  | "tick__value"
  | "tick__shares"
  | "tick__available"
  | "tick__pending"
  | "tick__redemptionPending"
  | "tick__prev"
  | "tick__next"
  | "tick__accrued"
  | "tick__accrualRate"
  | "tick__accrualTimestamp"
  | "tick__principalWeightedDuration"
  | "tick__interestWeightedMaturity"
  | "amount"
  | "shares";

export type Liquidation = {
  id: Scalars["Bytes"];
  source: Scalars["Bytes"];
  sourceImplementation: Scalars["Bytes"];
  collateralToken: CollateralToken;
  currencyToken: CurrencyToken;
  loan: Loan;
  auctions: Array<Auction>;
};

export type LiquidationauctionsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Auction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Auction_filter>;
};

export type Liquidation_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  source?: InputMaybe<Scalars["Bytes"]>;
  source_not?: InputMaybe<Scalars["Bytes"]>;
  source_gt?: InputMaybe<Scalars["Bytes"]>;
  source_lt?: InputMaybe<Scalars["Bytes"]>;
  source_gte?: InputMaybe<Scalars["Bytes"]>;
  source_lte?: InputMaybe<Scalars["Bytes"]>;
  source_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  source_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  source_contains?: InputMaybe<Scalars["Bytes"]>;
  source_not_contains?: InputMaybe<Scalars["Bytes"]>;
  sourceImplementation?: InputMaybe<Scalars["Bytes"]>;
  sourceImplementation_not?: InputMaybe<Scalars["Bytes"]>;
  sourceImplementation_gt?: InputMaybe<Scalars["Bytes"]>;
  sourceImplementation_lt?: InputMaybe<Scalars["Bytes"]>;
  sourceImplementation_gte?: InputMaybe<Scalars["Bytes"]>;
  sourceImplementation_lte?: InputMaybe<Scalars["Bytes"]>;
  sourceImplementation_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sourceImplementation_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sourceImplementation_contains?: InputMaybe<Scalars["Bytes"]>;
  sourceImplementation_not_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralToken?: InputMaybe<Scalars["String"]>;
  collateralToken_not?: InputMaybe<Scalars["String"]>;
  collateralToken_gt?: InputMaybe<Scalars["String"]>;
  collateralToken_lt?: InputMaybe<Scalars["String"]>;
  collateralToken_gte?: InputMaybe<Scalars["String"]>;
  collateralToken_lte?: InputMaybe<Scalars["String"]>;
  collateralToken_in?: InputMaybe<Array<Scalars["String"]>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  collateralToken_contains?: InputMaybe<Scalars["String"]>;
  collateralToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_not_contains?: InputMaybe<Scalars["String"]>;
  collateralToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_starts_with?: InputMaybe<Scalars["String"]>;
  collateralToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  collateralToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_ends_with?: InputMaybe<Scalars["String"]>;
  collateralToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  collateralToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_?: InputMaybe<CollateralToken_filter>;
  currencyToken?: InputMaybe<Scalars["String"]>;
  currencyToken_not?: InputMaybe<Scalars["String"]>;
  currencyToken_gt?: InputMaybe<Scalars["String"]>;
  currencyToken_lt?: InputMaybe<Scalars["String"]>;
  currencyToken_gte?: InputMaybe<Scalars["String"]>;
  currencyToken_lte?: InputMaybe<Scalars["String"]>;
  currencyToken_in?: InputMaybe<Array<Scalars["String"]>>;
  currencyToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  currencyToken_contains?: InputMaybe<Scalars["String"]>;
  currencyToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_not_contains?: InputMaybe<Scalars["String"]>;
  currencyToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_starts_with?: InputMaybe<Scalars["String"]>;
  currencyToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  currencyToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_ends_with?: InputMaybe<Scalars["String"]>;
  currencyToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  currencyToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_?: InputMaybe<CurrencyToken_filter>;
  loan?: InputMaybe<Scalars["String"]>;
  loan_not?: InputMaybe<Scalars["String"]>;
  loan_gt?: InputMaybe<Scalars["String"]>;
  loan_lt?: InputMaybe<Scalars["String"]>;
  loan_gte?: InputMaybe<Scalars["String"]>;
  loan_lte?: InputMaybe<Scalars["String"]>;
  loan_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_not_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_contains?: InputMaybe<Scalars["String"]>;
  loan_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_contains?: InputMaybe<Scalars["String"]>;
  loan_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_starts_with?: InputMaybe<Scalars["String"]>;
  loan_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_ends_with?: InputMaybe<Scalars["String"]>;
  loan_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_?: InputMaybe<Loan_filter>;
  auctions_?: InputMaybe<Auction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Liquidation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Liquidation_filter>>>;
};

export type Liquidation_orderBy =
  | "id"
  | "source"
  | "sourceImplementation"
  | "collateralToken"
  | "collateralToken__id"
  | "collateralToken__name"
  | "currencyToken"
  | "currencyToken__id"
  | "currencyToken__name"
  | "currencyToken__symbol"
  | "loan"
  | "loan__id"
  | "loan__status"
  | "loan__transactionHash"
  | "loan__timestamp"
  | "loan__completion"
  | "loan__delegate"
  | "loan__borrower"
  | "loan__maturity"
  | "loan__duration"
  | "loan__collateralWrapperToken"
  | "loan__collateralWrapperTokenId"
  | "loan__principal"
  | "loan__repayment"
  | "loan__proceeds"
  | "loan__collateralWrapperContext"
  | "loan__loanReceipt"
  | "auctions";

export type Loan = {
  id: Scalars["Bytes"];
  pool: Pool;
  status: LoanStatus;
  transactionHash: Scalars["Bytes"];
  timestamp: Scalars["BigInt"];
  completion?: Maybe<Scalars["BigInt"]>;
  bundle?: Maybe<Bundle>;
  batch?: Maybe<Batch>;
  delegate?: Maybe<Scalars["Bytes"]>;
  borrower: Scalars["Bytes"];
  maturity: Scalars["BigInt"];
  duration: Scalars["BigInt"];
  collateralToken: CollateralToken;
  collateralTokenIds: Array<Scalars["BigInt"]>;
  collateralWrapperToken?: Maybe<Scalars["Bytes"]>;
  collateralWrapperTokenId?: Maybe<Scalars["BigInt"]>;
  ticks: Array<Scalars["BigInt"]>;
  useds: Array<Scalars["BigInt"]>;
  interests: Array<Scalars["BigInt"]>;
  principal: Scalars["BigInt"];
  repayment: Scalars["BigInt"];
  proceeds?: Maybe<Scalars["BigInt"]>;
  collateralWrapperContext: Scalars["Bytes"];
  loanReceipt: Scalars["Bytes"];
};

export type LoanLiquidated = {
  id: Scalars["Bytes"];
  loan: Loan;
};

export type LoanLiquidated_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  loan?: InputMaybe<Scalars["String"]>;
  loan_not?: InputMaybe<Scalars["String"]>;
  loan_gt?: InputMaybe<Scalars["String"]>;
  loan_lt?: InputMaybe<Scalars["String"]>;
  loan_gte?: InputMaybe<Scalars["String"]>;
  loan_lte?: InputMaybe<Scalars["String"]>;
  loan_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_not_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_contains?: InputMaybe<Scalars["String"]>;
  loan_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_contains?: InputMaybe<Scalars["String"]>;
  loan_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_starts_with?: InputMaybe<Scalars["String"]>;
  loan_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_ends_with?: InputMaybe<Scalars["String"]>;
  loan_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_?: InputMaybe<Loan_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LoanLiquidated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LoanLiquidated_filter>>>;
};

export type LoanLiquidated_orderBy =
  | "id"
  | "loan"
  | "loan__id"
  | "loan__status"
  | "loan__transactionHash"
  | "loan__timestamp"
  | "loan__completion"
  | "loan__delegate"
  | "loan__borrower"
  | "loan__maturity"
  | "loan__duration"
  | "loan__collateralWrapperToken"
  | "loan__collateralWrapperTokenId"
  | "loan__principal"
  | "loan__repayment"
  | "loan__proceeds"
  | "loan__collateralWrapperContext"
  | "loan__loanReceipt";

export type LoanOriginated = {
  id: Scalars["Bytes"];
  loan: Loan;
};

export type LoanOriginated_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  loan?: InputMaybe<Scalars["String"]>;
  loan_not?: InputMaybe<Scalars["String"]>;
  loan_gt?: InputMaybe<Scalars["String"]>;
  loan_lt?: InputMaybe<Scalars["String"]>;
  loan_gte?: InputMaybe<Scalars["String"]>;
  loan_lte?: InputMaybe<Scalars["String"]>;
  loan_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_not_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_contains?: InputMaybe<Scalars["String"]>;
  loan_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_contains?: InputMaybe<Scalars["String"]>;
  loan_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_starts_with?: InputMaybe<Scalars["String"]>;
  loan_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_ends_with?: InputMaybe<Scalars["String"]>;
  loan_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_?: InputMaybe<Loan_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LoanOriginated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LoanOriginated_filter>>>;
};

export type LoanOriginated_orderBy =
  | "id"
  | "loan"
  | "loan__id"
  | "loan__status"
  | "loan__transactionHash"
  | "loan__timestamp"
  | "loan__completion"
  | "loan__delegate"
  | "loan__borrower"
  | "loan__maturity"
  | "loan__duration"
  | "loan__collateralWrapperToken"
  | "loan__collateralWrapperTokenId"
  | "loan__principal"
  | "loan__repayment"
  | "loan__proceeds"
  | "loan__collateralWrapperContext"
  | "loan__loanReceipt";

export type LoanRepaid = {
  id: Scalars["Bytes"];
  loan: Loan;
};

export type LoanRepaid_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  loan?: InputMaybe<Scalars["String"]>;
  loan_not?: InputMaybe<Scalars["String"]>;
  loan_gt?: InputMaybe<Scalars["String"]>;
  loan_lt?: InputMaybe<Scalars["String"]>;
  loan_gte?: InputMaybe<Scalars["String"]>;
  loan_lte?: InputMaybe<Scalars["String"]>;
  loan_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_not_in?: InputMaybe<Array<Scalars["String"]>>;
  loan_contains?: InputMaybe<Scalars["String"]>;
  loan_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_contains?: InputMaybe<Scalars["String"]>;
  loan_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  loan_starts_with?: InputMaybe<Scalars["String"]>;
  loan_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with?: InputMaybe<Scalars["String"]>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_ends_with?: InputMaybe<Scalars["String"]>;
  loan_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with?: InputMaybe<Scalars["String"]>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loan_?: InputMaybe<Loan_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LoanRepaid_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LoanRepaid_filter>>>;
};

export type LoanRepaid_orderBy =
  | "id"
  | "loan"
  | "loan__id"
  | "loan__status"
  | "loan__transactionHash"
  | "loan__timestamp"
  | "loan__completion"
  | "loan__delegate"
  | "loan__borrower"
  | "loan__maturity"
  | "loan__duration"
  | "loan__collateralWrapperToken"
  | "loan__collateralWrapperTokenId"
  | "loan__principal"
  | "loan__repayment"
  | "loan__proceeds"
  | "loan__collateralWrapperContext"
  | "loan__loanReceipt";

export type LoanStatus =
  | "Active"
  | "Liquidated"
  | "Repaid"
  | "CollateralLiquidated";

export type Loan_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_filter>;
  status?: InputMaybe<LoanStatus>;
  status_not?: InputMaybe<LoanStatus>;
  status_in?: InputMaybe<Array<LoanStatus>>;
  status_not_in?: InputMaybe<Array<LoanStatus>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  completion?: InputMaybe<Scalars["BigInt"]>;
  completion_not?: InputMaybe<Scalars["BigInt"]>;
  completion_gt?: InputMaybe<Scalars["BigInt"]>;
  completion_lt?: InputMaybe<Scalars["BigInt"]>;
  completion_gte?: InputMaybe<Scalars["BigInt"]>;
  completion_lte?: InputMaybe<Scalars["BigInt"]>;
  completion_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  completion_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  bundle?: InputMaybe<Scalars["String"]>;
  bundle_not?: InputMaybe<Scalars["String"]>;
  bundle_gt?: InputMaybe<Scalars["String"]>;
  bundle_lt?: InputMaybe<Scalars["String"]>;
  bundle_gte?: InputMaybe<Scalars["String"]>;
  bundle_lte?: InputMaybe<Scalars["String"]>;
  bundle_in?: InputMaybe<Array<Scalars["String"]>>;
  bundle_not_in?: InputMaybe<Array<Scalars["String"]>>;
  bundle_contains?: InputMaybe<Scalars["String"]>;
  bundle_contains_nocase?: InputMaybe<Scalars["String"]>;
  bundle_not_contains?: InputMaybe<Scalars["String"]>;
  bundle_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  bundle_starts_with?: InputMaybe<Scalars["String"]>;
  bundle_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  bundle_not_starts_with?: InputMaybe<Scalars["String"]>;
  bundle_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  bundle_ends_with?: InputMaybe<Scalars["String"]>;
  bundle_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  bundle_not_ends_with?: InputMaybe<Scalars["String"]>;
  bundle_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  bundle_?: InputMaybe<Bundle_filter>;
  batch?: InputMaybe<Scalars["String"]>;
  batch_not?: InputMaybe<Scalars["String"]>;
  batch_gt?: InputMaybe<Scalars["String"]>;
  batch_lt?: InputMaybe<Scalars["String"]>;
  batch_gte?: InputMaybe<Scalars["String"]>;
  batch_lte?: InputMaybe<Scalars["String"]>;
  batch_in?: InputMaybe<Array<Scalars["String"]>>;
  batch_not_in?: InputMaybe<Array<Scalars["String"]>>;
  batch_contains?: InputMaybe<Scalars["String"]>;
  batch_contains_nocase?: InputMaybe<Scalars["String"]>;
  batch_not_contains?: InputMaybe<Scalars["String"]>;
  batch_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  batch_starts_with?: InputMaybe<Scalars["String"]>;
  batch_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  batch_not_starts_with?: InputMaybe<Scalars["String"]>;
  batch_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  batch_ends_with?: InputMaybe<Scalars["String"]>;
  batch_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  batch_not_ends_with?: InputMaybe<Scalars["String"]>;
  batch_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  batch_?: InputMaybe<Batch_filter>;
  delegate?: InputMaybe<Scalars["Bytes"]>;
  delegate_not?: InputMaybe<Scalars["Bytes"]>;
  delegate_gt?: InputMaybe<Scalars["Bytes"]>;
  delegate_lt?: InputMaybe<Scalars["Bytes"]>;
  delegate_gte?: InputMaybe<Scalars["Bytes"]>;
  delegate_lte?: InputMaybe<Scalars["Bytes"]>;
  delegate_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  delegate_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  delegate_contains?: InputMaybe<Scalars["Bytes"]>;
  delegate_not_contains?: InputMaybe<Scalars["Bytes"]>;
  borrower?: InputMaybe<Scalars["Bytes"]>;
  borrower_not?: InputMaybe<Scalars["Bytes"]>;
  borrower_gt?: InputMaybe<Scalars["Bytes"]>;
  borrower_lt?: InputMaybe<Scalars["Bytes"]>;
  borrower_gte?: InputMaybe<Scalars["Bytes"]>;
  borrower_lte?: InputMaybe<Scalars["Bytes"]>;
  borrower_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  borrower_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  borrower_contains?: InputMaybe<Scalars["Bytes"]>;
  borrower_not_contains?: InputMaybe<Scalars["Bytes"]>;
  maturity?: InputMaybe<Scalars["BigInt"]>;
  maturity_not?: InputMaybe<Scalars["BigInt"]>;
  maturity_gt?: InputMaybe<Scalars["BigInt"]>;
  maturity_lt?: InputMaybe<Scalars["BigInt"]>;
  maturity_gte?: InputMaybe<Scalars["BigInt"]>;
  maturity_lte?: InputMaybe<Scalars["BigInt"]>;
  maturity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  maturity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  duration?: InputMaybe<Scalars["BigInt"]>;
  duration_not?: InputMaybe<Scalars["BigInt"]>;
  duration_gt?: InputMaybe<Scalars["BigInt"]>;
  duration_lt?: InputMaybe<Scalars["BigInt"]>;
  duration_gte?: InputMaybe<Scalars["BigInt"]>;
  duration_lte?: InputMaybe<Scalars["BigInt"]>;
  duration_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  duration_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralToken?: InputMaybe<Scalars["String"]>;
  collateralToken_not?: InputMaybe<Scalars["String"]>;
  collateralToken_gt?: InputMaybe<Scalars["String"]>;
  collateralToken_lt?: InputMaybe<Scalars["String"]>;
  collateralToken_gte?: InputMaybe<Scalars["String"]>;
  collateralToken_lte?: InputMaybe<Scalars["String"]>;
  collateralToken_in?: InputMaybe<Array<Scalars["String"]>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  collateralToken_contains?: InputMaybe<Scalars["String"]>;
  collateralToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_not_contains?: InputMaybe<Scalars["String"]>;
  collateralToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_starts_with?: InputMaybe<Scalars["String"]>;
  collateralToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  collateralToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_ends_with?: InputMaybe<Scalars["String"]>;
  collateralToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  collateralToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_?: InputMaybe<CollateralToken_filter>;
  collateralTokenIds?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralTokenIds_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralTokenIds_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralTokenIds_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralTokenIds_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralTokenIds_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralWrapperToken?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperToken_not?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperToken_gt?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperToken_lt?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperToken_gte?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperToken_lte?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperToken_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralWrapperToken_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralWrapperToken_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperToken_not_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperTokenId?: InputMaybe<Scalars["BigInt"]>;
  collateralWrapperTokenId_not?: InputMaybe<Scalars["BigInt"]>;
  collateralWrapperTokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  collateralWrapperTokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  collateralWrapperTokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  collateralWrapperTokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  collateralWrapperTokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralWrapperTokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  ticks?: InputMaybe<Array<Scalars["BigInt"]>>;
  ticks_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  ticks_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  ticks_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  ticks_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  ticks_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  useds?: InputMaybe<Array<Scalars["BigInt"]>>;
  useds_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  useds_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  useds_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  useds_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  useds_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  interests?: InputMaybe<Array<Scalars["BigInt"]>>;
  interests_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  interests_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  interests_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  interests_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  interests_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  principal?: InputMaybe<Scalars["BigInt"]>;
  principal_not?: InputMaybe<Scalars["BigInt"]>;
  principal_gt?: InputMaybe<Scalars["BigInt"]>;
  principal_lt?: InputMaybe<Scalars["BigInt"]>;
  principal_gte?: InputMaybe<Scalars["BigInt"]>;
  principal_lte?: InputMaybe<Scalars["BigInt"]>;
  principal_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  principal_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  repayment?: InputMaybe<Scalars["BigInt"]>;
  repayment_not?: InputMaybe<Scalars["BigInt"]>;
  repayment_gt?: InputMaybe<Scalars["BigInt"]>;
  repayment_lt?: InputMaybe<Scalars["BigInt"]>;
  repayment_gte?: InputMaybe<Scalars["BigInt"]>;
  repayment_lte?: InputMaybe<Scalars["BigInt"]>;
  repayment_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  repayment_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  proceeds?: InputMaybe<Scalars["BigInt"]>;
  proceeds_not?: InputMaybe<Scalars["BigInt"]>;
  proceeds_gt?: InputMaybe<Scalars["BigInt"]>;
  proceeds_lt?: InputMaybe<Scalars["BigInt"]>;
  proceeds_gte?: InputMaybe<Scalars["BigInt"]>;
  proceeds_lte?: InputMaybe<Scalars["BigInt"]>;
  proceeds_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  proceeds_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralWrapperContext?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_not?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_gt?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_lt?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_gte?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_lte?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralWrapperContext_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralWrapperContext_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralWrapperContext_not_contains?: InputMaybe<Scalars["Bytes"]>;
  loanReceipt?: InputMaybe<Scalars["Bytes"]>;
  loanReceipt_not?: InputMaybe<Scalars["Bytes"]>;
  loanReceipt_gt?: InputMaybe<Scalars["Bytes"]>;
  loanReceipt_lt?: InputMaybe<Scalars["Bytes"]>;
  loanReceipt_gte?: InputMaybe<Scalars["Bytes"]>;
  loanReceipt_lte?: InputMaybe<Scalars["Bytes"]>;
  loanReceipt_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  loanReceipt_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  loanReceipt_contains?: InputMaybe<Scalars["Bytes"]>;
  loanReceipt_not_contains?: InputMaybe<Scalars["Bytes"]>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Loan_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Loan_filter>>>;
};

export type Loan_orderBy =
  | "id"
  | "pool"
  | "pool__id"
  | "pool__implementationVersionMajor"
  | "pool__implementation"
  | "pool__adminFeeRate"
  | "pool__collateralLiquidator"
  | "pool__delegationRegistry"
  | "pool__tokenIdMerkleRoot"
  | "pool__tokenIdMerkleMetadataURI"
  | "pool__adminFeeBalance"
  | "pool__totalValueLocked"
  | "pool__totalValueAvailable"
  | "pool__totalValueUsed"
  | "pool__loansOriginated"
  | "pool__loansActive"
  | "pool__loansRepaid"
  | "pool__loansLiquidated"
  | "pool__loansCollateralLiquidated"
  | "status"
  | "transactionHash"
  | "timestamp"
  | "completion"
  | "bundle"
  | "bundle__id"
  | "bundle__owner"
  | "bundle__collateralWrapperContext"
  | "bundle__underlyingCollateralTokenAddress"
  | "batch"
  | "batch__id"
  | "batch__owner"
  | "batch__collateralWrapperContext"
  | "batch__underlyingCollateralTokenAddress"
  | "delegate"
  | "borrower"
  | "maturity"
  | "duration"
  | "collateralToken"
  | "collateralToken__id"
  | "collateralToken__name"
  | "collateralTokenIds"
  | "collateralWrapperToken"
  | "collateralWrapperTokenId"
  | "ticks"
  | "useds"
  | "interests"
  | "principal"
  | "repayment"
  | "proceeds"
  | "collateralWrapperContext"
  | "loanReceipt";

/** Defines the order direction, either ascending or descending */
export type OrderDirection = "asc" | "desc";

export type Pool = {
  id: Scalars["Bytes"];
  implementationVersionMajor: Scalars["String"];
  implementation: Scalars["Bytes"];
  collateralToken: CollateralToken;
  currencyToken: CurrencyToken;
  collateralWrappers: Array<Scalars["Bytes"]>;
  durations: Array<Scalars["BigInt"]>;
  rates: Array<Scalars["BigInt"]>;
  adminFeeRate: Scalars["BigInt"];
  collateralLiquidator: Scalars["Bytes"];
  delegationRegistry: Scalars["Bytes"];
  tokenIdRange?: Maybe<Array<Scalars["BigInt"]>>;
  tokenIdSet?: Maybe<Array<Scalars["BigInt"]>>;
  tokenIdMerkleRoot?: Maybe<Scalars["Bytes"]>;
  tokenIdMerkleMetadataURI?: Maybe<Scalars["String"]>;
  maxBorrows: Array<Scalars["BigInt"]>;
  adminFeeBalance: Scalars["BigInt"];
  ticks: Array<Tick>;
  deposits: Array<Deposit>;
  loans: Array<Loan>;
  events: Array<PoolEvent>;
  totalValueLocked: Scalars["BigInt"];
  totalValueAvailable: Scalars["BigInt"];
  totalValueUsed: Scalars["BigInt"];
  loansOriginated: Scalars["BigInt"];
  loansActive: Scalars["BigInt"];
  loansRepaid: Scalars["BigInt"];
  loansLiquidated: Scalars["BigInt"];
  loansCollateralLiquidated: Scalars["BigInt"];
  dayData: Array<PoolDayData>;
};

export type PoolticksArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Tick_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tick_filter>;
};

export type PooldepositsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
};

export type PoolloansArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
};

export type PooleventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolEvent_filter>;
};

export type PooldayDataArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
};

export type PoolDayData = {
  id: Scalars["Bytes"];
  timestamp: Scalars["BigInt"];
  pool: Pool;
  totalValueLocked: Scalars["BigInt"];
  totalValueAvailable: Scalars["BigInt"];
  totalValueUsed: Scalars["BigInt"];
};

export type PoolDayData_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_filter>;
  totalValueLocked?: InputMaybe<Scalars["BigInt"]>;
  totalValueLocked_not?: InputMaybe<Scalars["BigInt"]>;
  totalValueLocked_gt?: InputMaybe<Scalars["BigInt"]>;
  totalValueLocked_lt?: InputMaybe<Scalars["BigInt"]>;
  totalValueLocked_gte?: InputMaybe<Scalars["BigInt"]>;
  totalValueLocked_lte?: InputMaybe<Scalars["BigInt"]>;
  totalValueLocked_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueAvailable?: InputMaybe<Scalars["BigInt"]>;
  totalValueAvailable_not?: InputMaybe<Scalars["BigInt"]>;
  totalValueAvailable_gt?: InputMaybe<Scalars["BigInt"]>;
  totalValueAvailable_lt?: InputMaybe<Scalars["BigInt"]>;
  totalValueAvailable_gte?: InputMaybe<Scalars["BigInt"]>;
  totalValueAvailable_lte?: InputMaybe<Scalars["BigInt"]>;
  totalValueAvailable_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueAvailable_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueUsed?: InputMaybe<Scalars["BigInt"]>;
  totalValueUsed_not?: InputMaybe<Scalars["BigInt"]>;
  totalValueUsed_gt?: InputMaybe<Scalars["BigInt"]>;
  totalValueUsed_lt?: InputMaybe<Scalars["BigInt"]>;
  totalValueUsed_gte?: InputMaybe<Scalars["BigInt"]>;
  totalValueUsed_lte?: InputMaybe<Scalars["BigInt"]>;
  totalValueUsed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueUsed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolDayData_filter>>>;
};

export type PoolDayData_orderBy =
  | "id"
  | "timestamp"
  | "pool"
  | "pool__id"
  | "pool__implementationVersionMajor"
  | "pool__implementation"
  | "pool__adminFeeRate"
  | "pool__collateralLiquidator"
  | "pool__delegationRegistry"
  | "pool__tokenIdMerkleRoot"
  | "pool__tokenIdMerkleMetadataURI"
  | "pool__adminFeeBalance"
  | "pool__totalValueLocked"
  | "pool__totalValueAvailable"
  | "pool__totalValueUsed"
  | "pool__loansOriginated"
  | "pool__loansActive"
  | "pool__loansRepaid"
  | "pool__loansLiquidated"
  | "pool__loansCollateralLiquidated"
  | "totalValueLocked"
  | "totalValueAvailable"
  | "totalValueUsed";

export type PoolEvent = {
  id: Scalars["Bytes"];
  transactionHash: Scalars["Bytes"];
  timestamp: Scalars["BigInt"];
  from: Scalars["Bytes"];
  account: Scalars["Bytes"];
  type: PoolEventType;
  pool: Pool;
  deposit?: Maybe<Deposit>;
  loanOriginated?: Maybe<LoanOriginated>;
  loanRepaid?: Maybe<LoanRepaid>;
  loanLiquidated?: Maybe<LoanLiquidated>;
  collateralLiquidated?: Maybe<CollateralLiquidated>;
  deposited?: Maybe<Deposited>;
  redeemed?: Maybe<Redeemed>;
  withdrawn?: Maybe<Withdrawn>;
  tokenCreated?: Maybe<TokenCreated>;
};

export type PoolEventType =
  | "LoanOriginated"
  | "LoanRepaid"
  | "LoanLiquidated"
  | "CollateralLiquidated"
  | "Deposited"
  | "Redeemed"
  | "Withdrawn"
  | "TokenCreated";

export type PoolEvent_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  from?: InputMaybe<Scalars["Bytes"]>;
  from_not?: InputMaybe<Scalars["Bytes"]>;
  from_gt?: InputMaybe<Scalars["Bytes"]>;
  from_lt?: InputMaybe<Scalars["Bytes"]>;
  from_gte?: InputMaybe<Scalars["Bytes"]>;
  from_lte?: InputMaybe<Scalars["Bytes"]>;
  from_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  from_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  from_contains?: InputMaybe<Scalars["Bytes"]>;
  from_not_contains?: InputMaybe<Scalars["Bytes"]>;
  account?: InputMaybe<Scalars["Bytes"]>;
  account_not?: InputMaybe<Scalars["Bytes"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]>;
  account_lt?: InputMaybe<Scalars["Bytes"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  account_contains?: InputMaybe<Scalars["Bytes"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]>;
  type?: InputMaybe<PoolEventType>;
  type_not?: InputMaybe<PoolEventType>;
  type_in?: InputMaybe<Array<PoolEventType>>;
  type_not_in?: InputMaybe<Array<PoolEventType>>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_filter>;
  deposit?: InputMaybe<Scalars["String"]>;
  deposit_not?: InputMaybe<Scalars["String"]>;
  deposit_gt?: InputMaybe<Scalars["String"]>;
  deposit_lt?: InputMaybe<Scalars["String"]>;
  deposit_gte?: InputMaybe<Scalars["String"]>;
  deposit_lte?: InputMaybe<Scalars["String"]>;
  deposit_in?: InputMaybe<Array<Scalars["String"]>>;
  deposit_not_in?: InputMaybe<Array<Scalars["String"]>>;
  deposit_contains?: InputMaybe<Scalars["String"]>;
  deposit_contains_nocase?: InputMaybe<Scalars["String"]>;
  deposit_not_contains?: InputMaybe<Scalars["String"]>;
  deposit_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  deposit_starts_with?: InputMaybe<Scalars["String"]>;
  deposit_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  deposit_not_starts_with?: InputMaybe<Scalars["String"]>;
  deposit_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  deposit_ends_with?: InputMaybe<Scalars["String"]>;
  deposit_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deposit_not_ends_with?: InputMaybe<Scalars["String"]>;
  deposit_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deposit_?: InputMaybe<Deposit_filter>;
  loanOriginated?: InputMaybe<Scalars["String"]>;
  loanOriginated_not?: InputMaybe<Scalars["String"]>;
  loanOriginated_gt?: InputMaybe<Scalars["String"]>;
  loanOriginated_lt?: InputMaybe<Scalars["String"]>;
  loanOriginated_gte?: InputMaybe<Scalars["String"]>;
  loanOriginated_lte?: InputMaybe<Scalars["String"]>;
  loanOriginated_in?: InputMaybe<Array<Scalars["String"]>>;
  loanOriginated_not_in?: InputMaybe<Array<Scalars["String"]>>;
  loanOriginated_contains?: InputMaybe<Scalars["String"]>;
  loanOriginated_contains_nocase?: InputMaybe<Scalars["String"]>;
  loanOriginated_not_contains?: InputMaybe<Scalars["String"]>;
  loanOriginated_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  loanOriginated_starts_with?: InputMaybe<Scalars["String"]>;
  loanOriginated_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loanOriginated_not_starts_with?: InputMaybe<Scalars["String"]>;
  loanOriginated_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loanOriginated_ends_with?: InputMaybe<Scalars["String"]>;
  loanOriginated_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loanOriginated_not_ends_with?: InputMaybe<Scalars["String"]>;
  loanOriginated_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loanOriginated_?: InputMaybe<LoanOriginated_filter>;
  loanRepaid?: InputMaybe<Scalars["String"]>;
  loanRepaid_not?: InputMaybe<Scalars["String"]>;
  loanRepaid_gt?: InputMaybe<Scalars["String"]>;
  loanRepaid_lt?: InputMaybe<Scalars["String"]>;
  loanRepaid_gte?: InputMaybe<Scalars["String"]>;
  loanRepaid_lte?: InputMaybe<Scalars["String"]>;
  loanRepaid_in?: InputMaybe<Array<Scalars["String"]>>;
  loanRepaid_not_in?: InputMaybe<Array<Scalars["String"]>>;
  loanRepaid_contains?: InputMaybe<Scalars["String"]>;
  loanRepaid_contains_nocase?: InputMaybe<Scalars["String"]>;
  loanRepaid_not_contains?: InputMaybe<Scalars["String"]>;
  loanRepaid_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  loanRepaid_starts_with?: InputMaybe<Scalars["String"]>;
  loanRepaid_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loanRepaid_not_starts_with?: InputMaybe<Scalars["String"]>;
  loanRepaid_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loanRepaid_ends_with?: InputMaybe<Scalars["String"]>;
  loanRepaid_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loanRepaid_not_ends_with?: InputMaybe<Scalars["String"]>;
  loanRepaid_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loanRepaid_?: InputMaybe<LoanRepaid_filter>;
  loanLiquidated?: InputMaybe<Scalars["String"]>;
  loanLiquidated_not?: InputMaybe<Scalars["String"]>;
  loanLiquidated_gt?: InputMaybe<Scalars["String"]>;
  loanLiquidated_lt?: InputMaybe<Scalars["String"]>;
  loanLiquidated_gte?: InputMaybe<Scalars["String"]>;
  loanLiquidated_lte?: InputMaybe<Scalars["String"]>;
  loanLiquidated_in?: InputMaybe<Array<Scalars["String"]>>;
  loanLiquidated_not_in?: InputMaybe<Array<Scalars["String"]>>;
  loanLiquidated_contains?: InputMaybe<Scalars["String"]>;
  loanLiquidated_contains_nocase?: InputMaybe<Scalars["String"]>;
  loanLiquidated_not_contains?: InputMaybe<Scalars["String"]>;
  loanLiquidated_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  loanLiquidated_starts_with?: InputMaybe<Scalars["String"]>;
  loanLiquidated_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loanLiquidated_not_starts_with?: InputMaybe<Scalars["String"]>;
  loanLiquidated_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  loanLiquidated_ends_with?: InputMaybe<Scalars["String"]>;
  loanLiquidated_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loanLiquidated_not_ends_with?: InputMaybe<Scalars["String"]>;
  loanLiquidated_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  loanLiquidated_?: InputMaybe<LoanLiquidated_filter>;
  collateralLiquidated?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_not?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_gt?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_lt?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_gte?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_lte?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_in?: InputMaybe<Array<Scalars["String"]>>;
  collateralLiquidated_not_in?: InputMaybe<Array<Scalars["String"]>>;
  collateralLiquidated_contains?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_contains_nocase?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_not_contains?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_starts_with?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_not_starts_with?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_ends_with?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_not_ends_with?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralLiquidated_?: InputMaybe<CollateralLiquidated_filter>;
  deposited?: InputMaybe<Scalars["String"]>;
  deposited_not?: InputMaybe<Scalars["String"]>;
  deposited_gt?: InputMaybe<Scalars["String"]>;
  deposited_lt?: InputMaybe<Scalars["String"]>;
  deposited_gte?: InputMaybe<Scalars["String"]>;
  deposited_lte?: InputMaybe<Scalars["String"]>;
  deposited_in?: InputMaybe<Array<Scalars["String"]>>;
  deposited_not_in?: InputMaybe<Array<Scalars["String"]>>;
  deposited_contains?: InputMaybe<Scalars["String"]>;
  deposited_contains_nocase?: InputMaybe<Scalars["String"]>;
  deposited_not_contains?: InputMaybe<Scalars["String"]>;
  deposited_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  deposited_starts_with?: InputMaybe<Scalars["String"]>;
  deposited_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  deposited_not_starts_with?: InputMaybe<Scalars["String"]>;
  deposited_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  deposited_ends_with?: InputMaybe<Scalars["String"]>;
  deposited_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deposited_not_ends_with?: InputMaybe<Scalars["String"]>;
  deposited_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deposited_?: InputMaybe<Deposited_filter>;
  redeemed?: InputMaybe<Scalars["String"]>;
  redeemed_not?: InputMaybe<Scalars["String"]>;
  redeemed_gt?: InputMaybe<Scalars["String"]>;
  redeemed_lt?: InputMaybe<Scalars["String"]>;
  redeemed_gte?: InputMaybe<Scalars["String"]>;
  redeemed_lte?: InputMaybe<Scalars["String"]>;
  redeemed_in?: InputMaybe<Array<Scalars["String"]>>;
  redeemed_not_in?: InputMaybe<Array<Scalars["String"]>>;
  redeemed_contains?: InputMaybe<Scalars["String"]>;
  redeemed_contains_nocase?: InputMaybe<Scalars["String"]>;
  redeemed_not_contains?: InputMaybe<Scalars["String"]>;
  redeemed_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  redeemed_starts_with?: InputMaybe<Scalars["String"]>;
  redeemed_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  redeemed_not_starts_with?: InputMaybe<Scalars["String"]>;
  redeemed_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  redeemed_ends_with?: InputMaybe<Scalars["String"]>;
  redeemed_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  redeemed_not_ends_with?: InputMaybe<Scalars["String"]>;
  redeemed_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  redeemed_?: InputMaybe<Redeemed_filter>;
  withdrawn?: InputMaybe<Scalars["String"]>;
  withdrawn_not?: InputMaybe<Scalars["String"]>;
  withdrawn_gt?: InputMaybe<Scalars["String"]>;
  withdrawn_lt?: InputMaybe<Scalars["String"]>;
  withdrawn_gte?: InputMaybe<Scalars["String"]>;
  withdrawn_lte?: InputMaybe<Scalars["String"]>;
  withdrawn_in?: InputMaybe<Array<Scalars["String"]>>;
  withdrawn_not_in?: InputMaybe<Array<Scalars["String"]>>;
  withdrawn_contains?: InputMaybe<Scalars["String"]>;
  withdrawn_contains_nocase?: InputMaybe<Scalars["String"]>;
  withdrawn_not_contains?: InputMaybe<Scalars["String"]>;
  withdrawn_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  withdrawn_starts_with?: InputMaybe<Scalars["String"]>;
  withdrawn_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  withdrawn_not_starts_with?: InputMaybe<Scalars["String"]>;
  withdrawn_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  withdrawn_ends_with?: InputMaybe<Scalars["String"]>;
  withdrawn_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  withdrawn_not_ends_with?: InputMaybe<Scalars["String"]>;
  withdrawn_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  withdrawn_?: InputMaybe<Withdrawn_filter>;
  tokenCreated?: InputMaybe<Scalars["String"]>;
  tokenCreated_not?: InputMaybe<Scalars["String"]>;
  tokenCreated_gt?: InputMaybe<Scalars["String"]>;
  tokenCreated_lt?: InputMaybe<Scalars["String"]>;
  tokenCreated_gte?: InputMaybe<Scalars["String"]>;
  tokenCreated_lte?: InputMaybe<Scalars["String"]>;
  tokenCreated_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenCreated_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenCreated_contains?: InputMaybe<Scalars["String"]>;
  tokenCreated_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenCreated_not_contains?: InputMaybe<Scalars["String"]>;
  tokenCreated_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenCreated_starts_with?: InputMaybe<Scalars["String"]>;
  tokenCreated_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenCreated_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenCreated_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenCreated_ends_with?: InputMaybe<Scalars["String"]>;
  tokenCreated_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenCreated_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenCreated_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenCreated_?: InputMaybe<TokenCreated_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolEvent_filter>>>;
};

export type PoolEvent_orderBy =
  | "id"
  | "transactionHash"
  | "timestamp"
  | "from"
  | "account"
  | "type"
  | "pool"
  | "pool__id"
  | "pool__implementationVersionMajor"
  | "pool__implementation"
  | "pool__adminFeeRate"
  | "pool__collateralLiquidator"
  | "pool__delegationRegistry"
  | "pool__tokenIdMerkleRoot"
  | "pool__tokenIdMerkleMetadataURI"
  | "pool__adminFeeBalance"
  | "pool__totalValueLocked"
  | "pool__totalValueAvailable"
  | "pool__totalValueUsed"
  | "pool__loansOriginated"
  | "pool__loansActive"
  | "pool__loansRepaid"
  | "pool__loansLiquidated"
  | "pool__loansCollateralLiquidated"
  | "deposit"
  | "deposit__id"
  | "deposit__account"
  | "deposit__shares"
  | "deposit__depositedAmount"
  | "deposit__updatedAt"
  | "deposit__createdAt"
  | "loanOriginated"
  | "loanOriginated__id"
  | "loanRepaid"
  | "loanRepaid__id"
  | "loanLiquidated"
  | "loanLiquidated__id"
  | "collateralLiquidated"
  | "collateralLiquidated__id"
  | "collateralLiquidated__proceeds"
  | "deposited"
  | "deposited__id"
  | "deposited__account"
  | "deposited__amount"
  | "deposited__shares"
  | "redeemed"
  | "redeemed__id"
  | "redeemed__account"
  | "redeemed__shares"
  | "redeemed__estimatedAmount"
  | "withdrawn"
  | "withdrawn__id"
  | "withdrawn__account"
  | "withdrawn__shares"
  | "withdrawn__amount"
  | "tokenCreated"
  | "tokenCreated__id";

export type Pool_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  implementationVersionMajor?: InputMaybe<Scalars["String"]>;
  implementationVersionMajor_not?: InputMaybe<Scalars["String"]>;
  implementationVersionMajor_gt?: InputMaybe<Scalars["String"]>;
  implementationVersionMajor_lt?: InputMaybe<Scalars["String"]>;
  implementationVersionMajor_gte?: InputMaybe<Scalars["String"]>;
  implementationVersionMajor_lte?: InputMaybe<Scalars["String"]>;
  implementationVersionMajor_in?: InputMaybe<Array<Scalars["String"]>>;
  implementationVersionMajor_not_in?: InputMaybe<Array<Scalars["String"]>>;
  implementationVersionMajor_contains?: InputMaybe<Scalars["String"]>;
  implementationVersionMajor_contains_nocase?: InputMaybe<Scalars["String"]>;
  implementationVersionMajor_not_contains?: InputMaybe<Scalars["String"]>;
  implementationVersionMajor_not_contains_nocase?: InputMaybe<
    Scalars["String"]
  >;
  implementationVersionMajor_starts_with?: InputMaybe<Scalars["String"]>;
  implementationVersionMajor_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  implementationVersionMajor_not_starts_with?: InputMaybe<Scalars["String"]>;
  implementationVersionMajor_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]
  >;
  implementationVersionMajor_ends_with?: InputMaybe<Scalars["String"]>;
  implementationVersionMajor_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  implementationVersionMajor_not_ends_with?: InputMaybe<Scalars["String"]>;
  implementationVersionMajor_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]
  >;
  implementation?: InputMaybe<Scalars["Bytes"]>;
  implementation_not?: InputMaybe<Scalars["Bytes"]>;
  implementation_gt?: InputMaybe<Scalars["Bytes"]>;
  implementation_lt?: InputMaybe<Scalars["Bytes"]>;
  implementation_gte?: InputMaybe<Scalars["Bytes"]>;
  implementation_lte?: InputMaybe<Scalars["Bytes"]>;
  implementation_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  implementation_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  implementation_contains?: InputMaybe<Scalars["Bytes"]>;
  implementation_not_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralToken?: InputMaybe<Scalars["String"]>;
  collateralToken_not?: InputMaybe<Scalars["String"]>;
  collateralToken_gt?: InputMaybe<Scalars["String"]>;
  collateralToken_lt?: InputMaybe<Scalars["String"]>;
  collateralToken_gte?: InputMaybe<Scalars["String"]>;
  collateralToken_lte?: InputMaybe<Scalars["String"]>;
  collateralToken_in?: InputMaybe<Array<Scalars["String"]>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  collateralToken_contains?: InputMaybe<Scalars["String"]>;
  collateralToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_not_contains?: InputMaybe<Scalars["String"]>;
  collateralToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_starts_with?: InputMaybe<Scalars["String"]>;
  collateralToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  collateralToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_ends_with?: InputMaybe<Scalars["String"]>;
  collateralToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  collateralToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  collateralToken_?: InputMaybe<CollateralToken_filter>;
  currencyToken?: InputMaybe<Scalars["String"]>;
  currencyToken_not?: InputMaybe<Scalars["String"]>;
  currencyToken_gt?: InputMaybe<Scalars["String"]>;
  currencyToken_lt?: InputMaybe<Scalars["String"]>;
  currencyToken_gte?: InputMaybe<Scalars["String"]>;
  currencyToken_lte?: InputMaybe<Scalars["String"]>;
  currencyToken_in?: InputMaybe<Array<Scalars["String"]>>;
  currencyToken_not_in?: InputMaybe<Array<Scalars["String"]>>;
  currencyToken_contains?: InputMaybe<Scalars["String"]>;
  currencyToken_contains_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_not_contains?: InputMaybe<Scalars["String"]>;
  currencyToken_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_starts_with?: InputMaybe<Scalars["String"]>;
  currencyToken_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_not_starts_with?: InputMaybe<Scalars["String"]>;
  currencyToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_ends_with?: InputMaybe<Scalars["String"]>;
  currencyToken_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_not_ends_with?: InputMaybe<Scalars["String"]>;
  currencyToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  currencyToken_?: InputMaybe<CurrencyToken_filter>;
  collateralWrappers?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralWrappers_not?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralWrappers_contains?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralWrappers_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralWrappers_not_contains?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralWrappers_not_contains_nocase?: InputMaybe<Array<Scalars["Bytes"]>>;
  durations?: InputMaybe<Array<Scalars["BigInt"]>>;
  durations_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  durations_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  durations_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  durations_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  durations_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  rates?: InputMaybe<Array<Scalars["BigInt"]>>;
  rates_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  rates_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  rates_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  adminFeeRate?: InputMaybe<Scalars["BigInt"]>;
  adminFeeRate_not?: InputMaybe<Scalars["BigInt"]>;
  adminFeeRate_gt?: InputMaybe<Scalars["BigInt"]>;
  adminFeeRate_lt?: InputMaybe<Scalars["BigInt"]>;
  adminFeeRate_gte?: InputMaybe<Scalars["BigInt"]>;
  adminFeeRate_lte?: InputMaybe<Scalars["BigInt"]>;
  adminFeeRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  adminFeeRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  collateralLiquidator?: InputMaybe<Scalars["Bytes"]>;
  collateralLiquidator_not?: InputMaybe<Scalars["Bytes"]>;
  collateralLiquidator_gt?: InputMaybe<Scalars["Bytes"]>;
  collateralLiquidator_lt?: InputMaybe<Scalars["Bytes"]>;
  collateralLiquidator_gte?: InputMaybe<Scalars["Bytes"]>;
  collateralLiquidator_lte?: InputMaybe<Scalars["Bytes"]>;
  collateralLiquidator_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralLiquidator_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  collateralLiquidator_contains?: InputMaybe<Scalars["Bytes"]>;
  collateralLiquidator_not_contains?: InputMaybe<Scalars["Bytes"]>;
  delegationRegistry?: InputMaybe<Scalars["Bytes"]>;
  delegationRegistry_not?: InputMaybe<Scalars["Bytes"]>;
  delegationRegistry_gt?: InputMaybe<Scalars["Bytes"]>;
  delegationRegistry_lt?: InputMaybe<Scalars["Bytes"]>;
  delegationRegistry_gte?: InputMaybe<Scalars["Bytes"]>;
  delegationRegistry_lte?: InputMaybe<Scalars["Bytes"]>;
  delegationRegistry_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  delegationRegistry_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  delegationRegistry_contains?: InputMaybe<Scalars["Bytes"]>;
  delegationRegistry_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tokenIdRange?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenIdRange_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenIdRange_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenIdRange_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenIdRange_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenIdRange_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenIdSet?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenIdSet_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenIdSet_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenIdSet_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenIdSet_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenIdSet_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenIdMerkleRoot?: InputMaybe<Scalars["Bytes"]>;
  tokenIdMerkleRoot_not?: InputMaybe<Scalars["Bytes"]>;
  tokenIdMerkleRoot_gt?: InputMaybe<Scalars["Bytes"]>;
  tokenIdMerkleRoot_lt?: InputMaybe<Scalars["Bytes"]>;
  tokenIdMerkleRoot_gte?: InputMaybe<Scalars["Bytes"]>;
  tokenIdMerkleRoot_lte?: InputMaybe<Scalars["Bytes"]>;
  tokenIdMerkleRoot_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenIdMerkleRoot_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenIdMerkleRoot_contains?: InputMaybe<Scalars["Bytes"]>;
  tokenIdMerkleRoot_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tokenIdMerkleMetadataURI?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_not?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_gt?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_lt?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_gte?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_lte?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenIdMerkleMetadataURI_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tokenIdMerkleMetadataURI_contains?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_not_contains?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_starts_with?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_not_starts_with?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]
  >;
  tokenIdMerkleMetadataURI_ends_with?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_not_ends_with?: InputMaybe<Scalars["String"]>;
  tokenIdMerkleMetadataURI_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  maxBorrows?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxBorrows_not?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxBorrows_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxBorrows_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxBorrows_not_contains?: InputMaybe<Array<Scalars["BigInt"]>>;
  maxBorrows_not_contains_nocase?: InputMaybe<Array<Scalars["BigInt"]>>;
  adminFeeBalance?: InputMaybe<Scalars["BigInt"]>;
  adminFeeBalance_not?: InputMaybe<Scalars["BigInt"]>;
  adminFeeBalance_gt?: InputMaybe<Scalars["BigInt"]>;
  adminFeeBalance_lt?: InputMaybe<Scalars["BigInt"]>;
  adminFeeBalance_gte?: InputMaybe<Scalars["BigInt"]>;
  adminFeeBalance_lte?: InputMaybe<Scalars["BigInt"]>;
  adminFeeBalance_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  adminFeeBalance_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  ticks_?: InputMaybe<Tick_filter>;
  deposits_?: InputMaybe<Deposit_filter>;
  loans_?: InputMaybe<Loan_filter>;
  events_?: InputMaybe<PoolEvent_filter>;
  totalValueLocked?: InputMaybe<Scalars["BigInt"]>;
  totalValueLocked_not?: InputMaybe<Scalars["BigInt"]>;
  totalValueLocked_gt?: InputMaybe<Scalars["BigInt"]>;
  totalValueLocked_lt?: InputMaybe<Scalars["BigInt"]>;
  totalValueLocked_gte?: InputMaybe<Scalars["BigInt"]>;
  totalValueLocked_lte?: InputMaybe<Scalars["BigInt"]>;
  totalValueLocked_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueAvailable?: InputMaybe<Scalars["BigInt"]>;
  totalValueAvailable_not?: InputMaybe<Scalars["BigInt"]>;
  totalValueAvailable_gt?: InputMaybe<Scalars["BigInt"]>;
  totalValueAvailable_lt?: InputMaybe<Scalars["BigInt"]>;
  totalValueAvailable_gte?: InputMaybe<Scalars["BigInt"]>;
  totalValueAvailable_lte?: InputMaybe<Scalars["BigInt"]>;
  totalValueAvailable_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueAvailable_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueUsed?: InputMaybe<Scalars["BigInt"]>;
  totalValueUsed_not?: InputMaybe<Scalars["BigInt"]>;
  totalValueUsed_gt?: InputMaybe<Scalars["BigInt"]>;
  totalValueUsed_lt?: InputMaybe<Scalars["BigInt"]>;
  totalValueUsed_gte?: InputMaybe<Scalars["BigInt"]>;
  totalValueUsed_lte?: InputMaybe<Scalars["BigInt"]>;
  totalValueUsed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  totalValueUsed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  loansOriginated?: InputMaybe<Scalars["BigInt"]>;
  loansOriginated_not?: InputMaybe<Scalars["BigInt"]>;
  loansOriginated_gt?: InputMaybe<Scalars["BigInt"]>;
  loansOriginated_lt?: InputMaybe<Scalars["BigInt"]>;
  loansOriginated_gte?: InputMaybe<Scalars["BigInt"]>;
  loansOriginated_lte?: InputMaybe<Scalars["BigInt"]>;
  loansOriginated_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  loansOriginated_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  loansActive?: InputMaybe<Scalars["BigInt"]>;
  loansActive_not?: InputMaybe<Scalars["BigInt"]>;
  loansActive_gt?: InputMaybe<Scalars["BigInt"]>;
  loansActive_lt?: InputMaybe<Scalars["BigInt"]>;
  loansActive_gte?: InputMaybe<Scalars["BigInt"]>;
  loansActive_lte?: InputMaybe<Scalars["BigInt"]>;
  loansActive_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  loansActive_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  loansRepaid?: InputMaybe<Scalars["BigInt"]>;
  loansRepaid_not?: InputMaybe<Scalars["BigInt"]>;
  loansRepaid_gt?: InputMaybe<Scalars["BigInt"]>;
  loansRepaid_lt?: InputMaybe<Scalars["BigInt"]>;
  loansRepaid_gte?: InputMaybe<Scalars["BigInt"]>;
  loansRepaid_lte?: InputMaybe<Scalars["BigInt"]>;
  loansRepaid_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  loansRepaid_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  loansLiquidated?: InputMaybe<Scalars["BigInt"]>;
  loansLiquidated_not?: InputMaybe<Scalars["BigInt"]>;
  loansLiquidated_gt?: InputMaybe<Scalars["BigInt"]>;
  loansLiquidated_lt?: InputMaybe<Scalars["BigInt"]>;
  loansLiquidated_gte?: InputMaybe<Scalars["BigInt"]>;
  loansLiquidated_lte?: InputMaybe<Scalars["BigInt"]>;
  loansLiquidated_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  loansLiquidated_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  loansCollateralLiquidated?: InputMaybe<Scalars["BigInt"]>;
  loansCollateralLiquidated_not?: InputMaybe<Scalars["BigInt"]>;
  loansCollateralLiquidated_gt?: InputMaybe<Scalars["BigInt"]>;
  loansCollateralLiquidated_lt?: InputMaybe<Scalars["BigInt"]>;
  loansCollateralLiquidated_gte?: InputMaybe<Scalars["BigInt"]>;
  loansCollateralLiquidated_lte?: InputMaybe<Scalars["BigInt"]>;
  loansCollateralLiquidated_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  loansCollateralLiquidated_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  dayData_?: InputMaybe<PoolDayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
};

export type Pool_orderBy =
  | "id"
  | "implementationVersionMajor"
  | "implementation"
  | "collateralToken"
  | "collateralToken__id"
  | "collateralToken__name"
  | "currencyToken"
  | "currencyToken__id"
  | "currencyToken__name"
  | "currencyToken__symbol"
  | "collateralWrappers"
  | "durations"
  | "rates"
  | "adminFeeRate"
  | "collateralLiquidator"
  | "delegationRegistry"
  | "tokenIdRange"
  | "tokenIdSet"
  | "tokenIdMerkleRoot"
  | "tokenIdMerkleMetadataURI"
  | "maxBorrows"
  | "adminFeeBalance"
  | "ticks"
  | "deposits"
  | "loans"
  | "events"
  | "totalValueLocked"
  | "totalValueAvailable"
  | "totalValueUsed"
  | "loansOriginated"
  | "loansActive"
  | "loansRepaid"
  | "loansLiquidated"
  | "loansCollateralLiquidated"
  | "dayData";

export type Query = {
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  poolDayData?: Maybe<PoolDayData>;
  poolDayDatas: Array<PoolDayData>;
  collateralToken?: Maybe<CollateralToken>;
  collateralTokens: Array<CollateralToken>;
  currencyToken?: Maybe<CurrencyToken>;
  currencyTokens: Array<CurrencyToken>;
  tick?: Maybe<Tick>;
  ticks: Array<Tick>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  redemption?: Maybe<Redemption>;
  redemptions: Array<Redemption>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  batch?: Maybe<Batch>;
  batches: Array<Batch>;
  loan?: Maybe<Loan>;
  loans: Array<Loan>;
  poolEvent?: Maybe<PoolEvent>;
  poolEvents: Array<PoolEvent>;
  loanOriginated?: Maybe<LoanOriginated>;
  loanOriginateds: Array<LoanOriginated>;
  loanRepaid?: Maybe<LoanRepaid>;
  loanRepaids: Array<LoanRepaid>;
  loanLiquidated?: Maybe<LoanLiquidated>;
  loanLiquidateds: Array<LoanLiquidated>;
  collateralLiquidated?: Maybe<CollateralLiquidated>;
  collateralLiquidateds: Array<CollateralLiquidated>;
  deposited?: Maybe<Deposited>;
  depositeds: Array<Deposited>;
  redeemed?: Maybe<Redeemed>;
  redeemeds: Array<Redeemed>;
  withdrawn?: Maybe<Withdrawn>;
  withdrawns: Array<Withdrawn>;
  tokenCreated?: Maybe<TokenCreated>;
  tokenCreateds: Array<TokenCreated>;
  liquidation?: Maybe<Liquidation>;
  liquidations: Array<Liquidation>;
  auction?: Maybe<Auction>;
  auctions: Array<Auction>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};

export type QuerypoolArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerypoolsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerypoolDayDataArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerypoolDayDatasArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerycollateralTokenArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerycollateralTokensArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CollateralToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerycurrencyTokenArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerycurrencyTokensArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CurrencyToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrencyToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerytickArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryticksArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Tick_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tick_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerydepositArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerydepositsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryredemptionArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryredemptionsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Redemption_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Redemption_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerybundleArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerybundlesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerybatchArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerybatchesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Batch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Batch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryloanArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryloansArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerypoolEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerypoolEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryloanOriginatedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryloanOriginatedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LoanOriginated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanOriginated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryloanRepaidArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryloanRepaidsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LoanRepaid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRepaid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryloanLiquidatedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryloanLiquidatedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LoanLiquidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanLiquidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerycollateralLiquidatedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerycollateralLiquidatedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CollateralLiquidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralLiquidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerydepositedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerydepositedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposited_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposited_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryredeemedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryredeemedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Redeemed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Redeemed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerywithdrawnArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerywithdrawnsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Withdrawn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdrawn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerytokenCreatedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerytokenCreatedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryliquidationArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryliquidationsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Liquidation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryauctionArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryauctionsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Auction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Auction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerybidArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerybidsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Redeemed = {
  id: Scalars["Bytes"];
  account: Scalars["Bytes"];
  tick: Tick;
  shares: Scalars["BigInt"];
  estimatedAmount: Scalars["BigInt"];
};

export type Redeemed_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  account?: InputMaybe<Scalars["Bytes"]>;
  account_not?: InputMaybe<Scalars["Bytes"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]>;
  account_lt?: InputMaybe<Scalars["Bytes"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  account_contains?: InputMaybe<Scalars["Bytes"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tick?: InputMaybe<Scalars["String"]>;
  tick_not?: InputMaybe<Scalars["String"]>;
  tick_gt?: InputMaybe<Scalars["String"]>;
  tick_lt?: InputMaybe<Scalars["String"]>;
  tick_gte?: InputMaybe<Scalars["String"]>;
  tick_lte?: InputMaybe<Scalars["String"]>;
  tick_in?: InputMaybe<Array<Scalars["String"]>>;
  tick_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tick_contains?: InputMaybe<Scalars["String"]>;
  tick_contains_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_contains?: InputMaybe<Scalars["String"]>;
  tick_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tick_starts_with?: InputMaybe<Scalars["String"]>;
  tick_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_starts_with?: InputMaybe<Scalars["String"]>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_ends_with?: InputMaybe<Scalars["String"]>;
  tick_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_ends_with?: InputMaybe<Scalars["String"]>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_?: InputMaybe<Tick_filter>;
  shares?: InputMaybe<Scalars["BigInt"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]>;
  shares_lt?: InputMaybe<Scalars["BigInt"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  estimatedAmount?: InputMaybe<Scalars["BigInt"]>;
  estimatedAmount_not?: InputMaybe<Scalars["BigInt"]>;
  estimatedAmount_gt?: InputMaybe<Scalars["BigInt"]>;
  estimatedAmount_lt?: InputMaybe<Scalars["BigInt"]>;
  estimatedAmount_gte?: InputMaybe<Scalars["BigInt"]>;
  estimatedAmount_lte?: InputMaybe<Scalars["BigInt"]>;
  estimatedAmount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  estimatedAmount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Redeemed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Redeemed_filter>>>;
};

export type Redeemed_orderBy =
  | "id"
  | "account"
  | "tick"
  | "tick__id"
  | "tick__raw"
  | "tick__limit"
  | "tick__duration"
  | "tick__rate"
  | "tick__durationIndex"
  | "tick__rateIndex"
  | "tick__active"
  | "tick__value"
  | "tick__shares"
  | "tick__available"
  | "tick__pending"
  | "tick__redemptionPending"
  | "tick__prev"
  | "tick__next"
  | "tick__accrued"
  | "tick__accrualRate"
  | "tick__accrualTimestamp"
  | "tick__principalWeightedDuration"
  | "tick__interestWeightedMaturity"
  | "shares"
  | "estimatedAmount";

export type Redemption = {
  id: Scalars["Bytes"];
  redemptionId: Scalars["BigInt"];
  deposit: Deposit;
  shares: Scalars["BigInt"];
};

export type Redemption_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  redemptionId?: InputMaybe<Scalars["BigInt"]>;
  redemptionId_not?: InputMaybe<Scalars["BigInt"]>;
  redemptionId_gt?: InputMaybe<Scalars["BigInt"]>;
  redemptionId_lt?: InputMaybe<Scalars["BigInt"]>;
  redemptionId_gte?: InputMaybe<Scalars["BigInt"]>;
  redemptionId_lte?: InputMaybe<Scalars["BigInt"]>;
  redemptionId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  redemptionId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  deposit?: InputMaybe<Scalars["String"]>;
  deposit_not?: InputMaybe<Scalars["String"]>;
  deposit_gt?: InputMaybe<Scalars["String"]>;
  deposit_lt?: InputMaybe<Scalars["String"]>;
  deposit_gte?: InputMaybe<Scalars["String"]>;
  deposit_lte?: InputMaybe<Scalars["String"]>;
  deposit_in?: InputMaybe<Array<Scalars["String"]>>;
  deposit_not_in?: InputMaybe<Array<Scalars["String"]>>;
  deposit_contains?: InputMaybe<Scalars["String"]>;
  deposit_contains_nocase?: InputMaybe<Scalars["String"]>;
  deposit_not_contains?: InputMaybe<Scalars["String"]>;
  deposit_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  deposit_starts_with?: InputMaybe<Scalars["String"]>;
  deposit_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  deposit_not_starts_with?: InputMaybe<Scalars["String"]>;
  deposit_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  deposit_ends_with?: InputMaybe<Scalars["String"]>;
  deposit_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deposit_not_ends_with?: InputMaybe<Scalars["String"]>;
  deposit_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deposit_?: InputMaybe<Deposit_filter>;
  shares?: InputMaybe<Scalars["BigInt"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]>;
  shares_lt?: InputMaybe<Scalars["BigInt"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Redemption_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Redemption_filter>>>;
};

export type Redemption_orderBy =
  | "id"
  | "redemptionId"
  | "deposit"
  | "deposit__id"
  | "deposit__account"
  | "deposit__shares"
  | "deposit__depositedAmount"
  | "deposit__updatedAt"
  | "deposit__createdAt"
  | "shares";

export type Subscription = {
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  poolDayData?: Maybe<PoolDayData>;
  poolDayDatas: Array<PoolDayData>;
  collateralToken?: Maybe<CollateralToken>;
  collateralTokens: Array<CollateralToken>;
  currencyToken?: Maybe<CurrencyToken>;
  currencyTokens: Array<CurrencyToken>;
  tick?: Maybe<Tick>;
  ticks: Array<Tick>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  redemption?: Maybe<Redemption>;
  redemptions: Array<Redemption>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  batch?: Maybe<Batch>;
  batches: Array<Batch>;
  loan?: Maybe<Loan>;
  loans: Array<Loan>;
  poolEvent?: Maybe<PoolEvent>;
  poolEvents: Array<PoolEvent>;
  loanOriginated?: Maybe<LoanOriginated>;
  loanOriginateds: Array<LoanOriginated>;
  loanRepaid?: Maybe<LoanRepaid>;
  loanRepaids: Array<LoanRepaid>;
  loanLiquidated?: Maybe<LoanLiquidated>;
  loanLiquidateds: Array<LoanLiquidated>;
  collateralLiquidated?: Maybe<CollateralLiquidated>;
  collateralLiquidateds: Array<CollateralLiquidated>;
  deposited?: Maybe<Deposited>;
  depositeds: Array<Deposited>;
  redeemed?: Maybe<Redeemed>;
  redeemeds: Array<Redeemed>;
  withdrawn?: Maybe<Withdrawn>;
  withdrawns: Array<Withdrawn>;
  tokenCreated?: Maybe<TokenCreated>;
  tokenCreateds: Array<TokenCreated>;
  liquidation?: Maybe<Liquidation>;
  liquidations: Array<Liquidation>;
  auction?: Maybe<Auction>;
  auctions: Array<Auction>;
  bid?: Maybe<Bid>;
  bids: Array<Bid>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};

export type SubscriptionpoolArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionpoolsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionpoolDayDataArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionpoolDayDatasArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptioncollateralTokenArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptioncollateralTokensArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CollateralToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptioncurrencyTokenArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptioncurrencyTokensArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CurrencyToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrencyToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptiontickArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionticksArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Tick_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tick_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptiondepositArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptiondepositsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionredemptionArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionredemptionsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Redemption_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Redemption_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionbundleArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionbundlesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionbatchArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionbatchesArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Batch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Batch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionloanArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionloansArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionpoolEventArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionpoolEventsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PoolEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionloanOriginatedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionloanOriginatedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LoanOriginated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanOriginated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionloanRepaidArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionloanRepaidsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LoanRepaid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRepaid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionloanLiquidatedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionloanLiquidatedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<LoanLiquidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanLiquidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptioncollateralLiquidatedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptioncollateralLiquidatedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<CollateralLiquidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralLiquidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptiondepositedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptiondepositedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deposited_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposited_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionredeemedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionredeemedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Redeemed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Redeemed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionwithdrawnArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionwithdrawnsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Withdrawn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdrawn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptiontokenCreatedArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptiontokenCreatedsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TokenCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionliquidationArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionliquidationsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Liquidation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionauctionArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionauctionsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Auction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Auction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionbidArgs = {
  id: Scalars["ID"];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionbidsArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};

export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Tick = {
  id: Scalars["Bytes"];
  pool: Pool;
  raw: Scalars["BigInt"];
  limit: Scalars["BigInt"];
  duration: Scalars["BigInt"];
  rate: Scalars["BigInt"];
  durationIndex: Scalars["Int"];
  rateIndex: Scalars["Int"];
  active: Scalars["Boolean"];
  value: Scalars["BigInt"];
  shares: Scalars["BigInt"];
  available: Scalars["BigInt"];
  pending: Scalars["BigInt"];
  redemptionPending: Scalars["BigInt"];
  prev: Scalars["BigInt"];
  next: Scalars["BigInt"];
  accrued?: Maybe<Scalars["BigInt"]>;
  accrualRate?: Maybe<Scalars["BigInt"]>;
  accrualTimestamp?: Maybe<Scalars["BigInt"]>;
  principalWeightedDuration: Scalars["BigInt"];
  interestWeightedMaturity: Scalars["BigInt"];
  token?: Maybe<CurrencyToken>;
};

export type Tick_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  pool?: InputMaybe<Scalars["String"]>;
  pool_not?: InputMaybe<Scalars["String"]>;
  pool_gt?: InputMaybe<Scalars["String"]>;
  pool_lt?: InputMaybe<Scalars["String"]>;
  pool_gte?: InputMaybe<Scalars["String"]>;
  pool_lte?: InputMaybe<Scalars["String"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  pool_contains?: InputMaybe<Scalars["String"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  pool_?: InputMaybe<Pool_filter>;
  raw?: InputMaybe<Scalars["BigInt"]>;
  raw_not?: InputMaybe<Scalars["BigInt"]>;
  raw_gt?: InputMaybe<Scalars["BigInt"]>;
  raw_lt?: InputMaybe<Scalars["BigInt"]>;
  raw_gte?: InputMaybe<Scalars["BigInt"]>;
  raw_lte?: InputMaybe<Scalars["BigInt"]>;
  raw_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  raw_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  limit?: InputMaybe<Scalars["BigInt"]>;
  limit_not?: InputMaybe<Scalars["BigInt"]>;
  limit_gt?: InputMaybe<Scalars["BigInt"]>;
  limit_lt?: InputMaybe<Scalars["BigInt"]>;
  limit_gte?: InputMaybe<Scalars["BigInt"]>;
  limit_lte?: InputMaybe<Scalars["BigInt"]>;
  limit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  limit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  duration?: InputMaybe<Scalars["BigInt"]>;
  duration_not?: InputMaybe<Scalars["BigInt"]>;
  duration_gt?: InputMaybe<Scalars["BigInt"]>;
  duration_lt?: InputMaybe<Scalars["BigInt"]>;
  duration_gte?: InputMaybe<Scalars["BigInt"]>;
  duration_lte?: InputMaybe<Scalars["BigInt"]>;
  duration_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  duration_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rate?: InputMaybe<Scalars["BigInt"]>;
  rate_not?: InputMaybe<Scalars["BigInt"]>;
  rate_gt?: InputMaybe<Scalars["BigInt"]>;
  rate_lt?: InputMaybe<Scalars["BigInt"]>;
  rate_gte?: InputMaybe<Scalars["BigInt"]>;
  rate_lte?: InputMaybe<Scalars["BigInt"]>;
  rate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  durationIndex?: InputMaybe<Scalars["Int"]>;
  durationIndex_not?: InputMaybe<Scalars["Int"]>;
  durationIndex_gt?: InputMaybe<Scalars["Int"]>;
  durationIndex_lt?: InputMaybe<Scalars["Int"]>;
  durationIndex_gte?: InputMaybe<Scalars["Int"]>;
  durationIndex_lte?: InputMaybe<Scalars["Int"]>;
  durationIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
  durationIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  rateIndex?: InputMaybe<Scalars["Int"]>;
  rateIndex_not?: InputMaybe<Scalars["Int"]>;
  rateIndex_gt?: InputMaybe<Scalars["Int"]>;
  rateIndex_lt?: InputMaybe<Scalars["Int"]>;
  rateIndex_gte?: InputMaybe<Scalars["Int"]>;
  rateIndex_lte?: InputMaybe<Scalars["Int"]>;
  rateIndex_in?: InputMaybe<Array<Scalars["Int"]>>;
  rateIndex_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  active?: InputMaybe<Scalars["Boolean"]>;
  active_not?: InputMaybe<Scalars["Boolean"]>;
  active_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  active_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  value?: InputMaybe<Scalars["BigInt"]>;
  value_not?: InputMaybe<Scalars["BigInt"]>;
  value_gt?: InputMaybe<Scalars["BigInt"]>;
  value_lt?: InputMaybe<Scalars["BigInt"]>;
  value_gte?: InputMaybe<Scalars["BigInt"]>;
  value_lte?: InputMaybe<Scalars["BigInt"]>;
  value_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  value_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  shares?: InputMaybe<Scalars["BigInt"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]>;
  shares_lt?: InputMaybe<Scalars["BigInt"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  available?: InputMaybe<Scalars["BigInt"]>;
  available_not?: InputMaybe<Scalars["BigInt"]>;
  available_gt?: InputMaybe<Scalars["BigInt"]>;
  available_lt?: InputMaybe<Scalars["BigInt"]>;
  available_gte?: InputMaybe<Scalars["BigInt"]>;
  available_lte?: InputMaybe<Scalars["BigInt"]>;
  available_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  available_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  pending?: InputMaybe<Scalars["BigInt"]>;
  pending_not?: InputMaybe<Scalars["BigInt"]>;
  pending_gt?: InputMaybe<Scalars["BigInt"]>;
  pending_lt?: InputMaybe<Scalars["BigInt"]>;
  pending_gte?: InputMaybe<Scalars["BigInt"]>;
  pending_lte?: InputMaybe<Scalars["BigInt"]>;
  pending_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  pending_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  redemptionPending?: InputMaybe<Scalars["BigInt"]>;
  redemptionPending_not?: InputMaybe<Scalars["BigInt"]>;
  redemptionPending_gt?: InputMaybe<Scalars["BigInt"]>;
  redemptionPending_lt?: InputMaybe<Scalars["BigInt"]>;
  redemptionPending_gte?: InputMaybe<Scalars["BigInt"]>;
  redemptionPending_lte?: InputMaybe<Scalars["BigInt"]>;
  redemptionPending_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  redemptionPending_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  prev?: InputMaybe<Scalars["BigInt"]>;
  prev_not?: InputMaybe<Scalars["BigInt"]>;
  prev_gt?: InputMaybe<Scalars["BigInt"]>;
  prev_lt?: InputMaybe<Scalars["BigInt"]>;
  prev_gte?: InputMaybe<Scalars["BigInt"]>;
  prev_lte?: InputMaybe<Scalars["BigInt"]>;
  prev_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  prev_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  next?: InputMaybe<Scalars["BigInt"]>;
  next_not?: InputMaybe<Scalars["BigInt"]>;
  next_gt?: InputMaybe<Scalars["BigInt"]>;
  next_lt?: InputMaybe<Scalars["BigInt"]>;
  next_gte?: InputMaybe<Scalars["BigInt"]>;
  next_lte?: InputMaybe<Scalars["BigInt"]>;
  next_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  next_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  accrued?: InputMaybe<Scalars["BigInt"]>;
  accrued_not?: InputMaybe<Scalars["BigInt"]>;
  accrued_gt?: InputMaybe<Scalars["BigInt"]>;
  accrued_lt?: InputMaybe<Scalars["BigInt"]>;
  accrued_gte?: InputMaybe<Scalars["BigInt"]>;
  accrued_lte?: InputMaybe<Scalars["BigInt"]>;
  accrued_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  accrued_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  accrualRate?: InputMaybe<Scalars["BigInt"]>;
  accrualRate_not?: InputMaybe<Scalars["BigInt"]>;
  accrualRate_gt?: InputMaybe<Scalars["BigInt"]>;
  accrualRate_lt?: InputMaybe<Scalars["BigInt"]>;
  accrualRate_gte?: InputMaybe<Scalars["BigInt"]>;
  accrualRate_lte?: InputMaybe<Scalars["BigInt"]>;
  accrualRate_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  accrualRate_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  accrualTimestamp?: InputMaybe<Scalars["BigInt"]>;
  accrualTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  accrualTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  accrualTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  accrualTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  accrualTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  accrualTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  accrualTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  principalWeightedDuration?: InputMaybe<Scalars["BigInt"]>;
  principalWeightedDuration_not?: InputMaybe<Scalars["BigInt"]>;
  principalWeightedDuration_gt?: InputMaybe<Scalars["BigInt"]>;
  principalWeightedDuration_lt?: InputMaybe<Scalars["BigInt"]>;
  principalWeightedDuration_gte?: InputMaybe<Scalars["BigInt"]>;
  principalWeightedDuration_lte?: InputMaybe<Scalars["BigInt"]>;
  principalWeightedDuration_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  principalWeightedDuration_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  interestWeightedMaturity?: InputMaybe<Scalars["BigInt"]>;
  interestWeightedMaturity_not?: InputMaybe<Scalars["BigInt"]>;
  interestWeightedMaturity_gt?: InputMaybe<Scalars["BigInt"]>;
  interestWeightedMaturity_lt?: InputMaybe<Scalars["BigInt"]>;
  interestWeightedMaturity_gte?: InputMaybe<Scalars["BigInt"]>;
  interestWeightedMaturity_lte?: InputMaybe<Scalars["BigInt"]>;
  interestWeightedMaturity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  interestWeightedMaturity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  token?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<CurrencyToken_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Tick_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Tick_filter>>>;
};

export type Tick_orderBy =
  | "id"
  | "pool"
  | "pool__id"
  | "pool__implementationVersionMajor"
  | "pool__implementation"
  | "pool__adminFeeRate"
  | "pool__collateralLiquidator"
  | "pool__delegationRegistry"
  | "pool__tokenIdMerkleRoot"
  | "pool__tokenIdMerkleMetadataURI"
  | "pool__adminFeeBalance"
  | "pool__totalValueLocked"
  | "pool__totalValueAvailable"
  | "pool__totalValueUsed"
  | "pool__loansOriginated"
  | "pool__loansActive"
  | "pool__loansRepaid"
  | "pool__loansLiquidated"
  | "pool__loansCollateralLiquidated"
  | "raw"
  | "limit"
  | "duration"
  | "rate"
  | "durationIndex"
  | "rateIndex"
  | "active"
  | "value"
  | "shares"
  | "available"
  | "pending"
  | "redemptionPending"
  | "prev"
  | "next"
  | "accrued"
  | "accrualRate"
  | "accrualTimestamp"
  | "principalWeightedDuration"
  | "interestWeightedMaturity"
  | "token"
  | "token__id"
  | "token__name"
  | "token__symbol";

export type TokenCreated = {
  id: Scalars["Bytes"];
  tick: Tick;
  token: CurrencyToken;
};

export type TokenCreated_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tick?: InputMaybe<Scalars["String"]>;
  tick_not?: InputMaybe<Scalars["String"]>;
  tick_gt?: InputMaybe<Scalars["String"]>;
  tick_lt?: InputMaybe<Scalars["String"]>;
  tick_gte?: InputMaybe<Scalars["String"]>;
  tick_lte?: InputMaybe<Scalars["String"]>;
  tick_in?: InputMaybe<Array<Scalars["String"]>>;
  tick_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tick_contains?: InputMaybe<Scalars["String"]>;
  tick_contains_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_contains?: InputMaybe<Scalars["String"]>;
  tick_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tick_starts_with?: InputMaybe<Scalars["String"]>;
  tick_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_starts_with?: InputMaybe<Scalars["String"]>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_ends_with?: InputMaybe<Scalars["String"]>;
  tick_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_ends_with?: InputMaybe<Scalars["String"]>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_?: InputMaybe<Tick_filter>;
  token?: InputMaybe<Scalars["String"]>;
  token_not?: InputMaybe<Scalars["String"]>;
  token_gt?: InputMaybe<Scalars["String"]>;
  token_lt?: InputMaybe<Scalars["String"]>;
  token_gte?: InputMaybe<Scalars["String"]>;
  token_lte?: InputMaybe<Scalars["String"]>;
  token_in?: InputMaybe<Array<Scalars["String"]>>;
  token_not_in?: InputMaybe<Array<Scalars["String"]>>;
  token_contains?: InputMaybe<Scalars["String"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_not_contains?: InputMaybe<Scalars["String"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  token_starts_with?: InputMaybe<Scalars["String"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_starts_with?: InputMaybe<Scalars["String"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  token_ends_with?: InputMaybe<Scalars["String"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  token_?: InputMaybe<CurrencyToken_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenCreated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenCreated_filter>>>;
};

export type TokenCreated_orderBy =
  | "id"
  | "tick"
  | "tick__id"
  | "tick__raw"
  | "tick__limit"
  | "tick__duration"
  | "tick__rate"
  | "tick__durationIndex"
  | "tick__rateIndex"
  | "tick__active"
  | "tick__value"
  | "tick__shares"
  | "tick__available"
  | "tick__pending"
  | "tick__redemptionPending"
  | "tick__prev"
  | "tick__next"
  | "tick__accrued"
  | "tick__accrualRate"
  | "tick__accrualTimestamp"
  | "tick__principalWeightedDuration"
  | "tick__interestWeightedMaturity"
  | "token"
  | "token__id"
  | "token__name"
  | "token__symbol";

export type Withdrawn = {
  id: Scalars["Bytes"];
  account: Scalars["Bytes"];
  tick: Tick;
  shares: Scalars["BigInt"];
  amount: Scalars["BigInt"];
};

export type Withdrawn_filter = {
  id?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  account?: InputMaybe<Scalars["Bytes"]>;
  account_not?: InputMaybe<Scalars["Bytes"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]>;
  account_lt?: InputMaybe<Scalars["Bytes"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  account_contains?: InputMaybe<Scalars["Bytes"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tick?: InputMaybe<Scalars["String"]>;
  tick_not?: InputMaybe<Scalars["String"]>;
  tick_gt?: InputMaybe<Scalars["String"]>;
  tick_lt?: InputMaybe<Scalars["String"]>;
  tick_gte?: InputMaybe<Scalars["String"]>;
  tick_lte?: InputMaybe<Scalars["String"]>;
  tick_in?: InputMaybe<Array<Scalars["String"]>>;
  tick_not_in?: InputMaybe<Array<Scalars["String"]>>;
  tick_contains?: InputMaybe<Scalars["String"]>;
  tick_contains_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_contains?: InputMaybe<Scalars["String"]>;
  tick_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  tick_starts_with?: InputMaybe<Scalars["String"]>;
  tick_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_starts_with?: InputMaybe<Scalars["String"]>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_ends_with?: InputMaybe<Scalars["String"]>;
  tick_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_not_ends_with?: InputMaybe<Scalars["String"]>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  tick_?: InputMaybe<Tick_filter>;
  shares?: InputMaybe<Scalars["BigInt"]>;
  shares_not?: InputMaybe<Scalars["BigInt"]>;
  shares_gt?: InputMaybe<Scalars["BigInt"]>;
  shares_lt?: InputMaybe<Scalars["BigInt"]>;
  shares_gte?: InputMaybe<Scalars["BigInt"]>;
  shares_lte?: InputMaybe<Scalars["BigInt"]>;
  shares_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  shares_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount?: InputMaybe<Scalars["BigInt"]>;
  amount_not?: InputMaybe<Scalars["BigInt"]>;
  amount_gt?: InputMaybe<Scalars["BigInt"]>;
  amount_lt?: InputMaybe<Scalars["BigInt"]>;
  amount_gte?: InputMaybe<Scalars["BigInt"]>;
  amount_lte?: InputMaybe<Scalars["BigInt"]>;
  amount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  amount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Withdrawn_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Withdrawn_filter>>>;
};

export type Withdrawn_orderBy =
  | "id"
  | "account"
  | "tick"
  | "tick__id"
  | "tick__raw"
  | "tick__limit"
  | "tick__duration"
  | "tick__rate"
  | "tick__durationIndex"
  | "tick__rateIndex"
  | "tick__active"
  | "tick__value"
  | "tick__shares"
  | "tick__available"
  | "tick__pending"
  | "tick__redemptionPending"
  | "tick__prev"
  | "tick__next"
  | "tick__accrued"
  | "tick__accrualRate"
  | "tick__accrualTimestamp"
  | "tick__principalWeightedDuration"
  | "tick__interestWeightedMaturity"
  | "shares"
  | "amount";

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | "allow"
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | "deny";

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Auction: ResolverTypeWrapper<Auction>;
  AuctionStatus: AuctionStatus;
  Auction_filter: Auction_filter;
  Auction_orderBy: Auction_orderBy;
  Batch: ResolverTypeWrapper<Batch>;
  Batch_filter: Batch_filter;
  Batch_orderBy: Batch_orderBy;
  Bid: ResolverTypeWrapper<Bid>;
  Bid_filter: Bid_filter;
  Bid_orderBy: Bid_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars["BigDecimal"]>;
  BigInt: ResolverTypeWrapper<Scalars["BigInt"]>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Bundle: ResolverTypeWrapper<Bundle>;
  Bundle_filter: Bundle_filter;
  Bundle_orderBy: Bundle_orderBy;
  Bytes: ResolverTypeWrapper<Scalars["Bytes"]>;
  CollateralLiquidated: ResolverTypeWrapper<CollateralLiquidated>;
  CollateralLiquidated_filter: CollateralLiquidated_filter;
  CollateralLiquidated_orderBy: CollateralLiquidated_orderBy;
  CollateralToken: ResolverTypeWrapper<CollateralToken>;
  CollateralToken_filter: CollateralToken_filter;
  CollateralToken_orderBy: CollateralToken_orderBy;
  CurrencyToken: ResolverTypeWrapper<CurrencyToken>;
  CurrencyToken_filter: CurrencyToken_filter;
  CurrencyToken_orderBy: CurrencyToken_orderBy;
  Deposit: ResolverTypeWrapper<Deposit>;
  Deposit_filter: Deposit_filter;
  Deposit_orderBy: Deposit_orderBy;
  Deposited: ResolverTypeWrapper<Deposited>;
  Deposited_filter: Deposited_filter;
  Deposited_orderBy: Deposited_orderBy;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Int8: ResolverTypeWrapper<Scalars["Int8"]>;
  Liquidation: ResolverTypeWrapper<Liquidation>;
  Liquidation_filter: Liquidation_filter;
  Liquidation_orderBy: Liquidation_orderBy;
  Loan: ResolverTypeWrapper<Loan>;
  LoanLiquidated: ResolverTypeWrapper<LoanLiquidated>;
  LoanLiquidated_filter: LoanLiquidated_filter;
  LoanLiquidated_orderBy: LoanLiquidated_orderBy;
  LoanOriginated: ResolverTypeWrapper<LoanOriginated>;
  LoanOriginated_filter: LoanOriginated_filter;
  LoanOriginated_orderBy: LoanOriginated_orderBy;
  LoanRepaid: ResolverTypeWrapper<LoanRepaid>;
  LoanRepaid_filter: LoanRepaid_filter;
  LoanRepaid_orderBy: LoanRepaid_orderBy;
  LoanStatus: LoanStatus;
  Loan_filter: Loan_filter;
  Loan_orderBy: Loan_orderBy;
  OrderDirection: OrderDirection;
  Pool: ResolverTypeWrapper<Pool>;
  PoolDayData: ResolverTypeWrapper<PoolDayData>;
  PoolDayData_filter: PoolDayData_filter;
  PoolDayData_orderBy: PoolDayData_orderBy;
  PoolEvent: ResolverTypeWrapper<PoolEvent>;
  PoolEventType: PoolEventType;
  PoolEvent_filter: PoolEvent_filter;
  PoolEvent_orderBy: PoolEvent_orderBy;
  Pool_filter: Pool_filter;
  Pool_orderBy: Pool_orderBy;
  Query: ResolverTypeWrapper<{}>;
  Redeemed: ResolverTypeWrapper<Redeemed>;
  Redeemed_filter: Redeemed_filter;
  Redeemed_orderBy: Redeemed_orderBy;
  Redemption: ResolverTypeWrapper<Redemption>;
  Redemption_filter: Redemption_filter;
  Redemption_orderBy: Redemption_orderBy;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Subscription: ResolverTypeWrapper<{}>;
  Tick: ResolverTypeWrapper<Tick>;
  Tick_filter: Tick_filter;
  Tick_orderBy: Tick_orderBy;
  TokenCreated: ResolverTypeWrapper<TokenCreated>;
  TokenCreated_filter: TokenCreated_filter;
  TokenCreated_orderBy: TokenCreated_orderBy;
  Withdrawn: ResolverTypeWrapper<Withdrawn>;
  Withdrawn_filter: Withdrawn_filter;
  Withdrawn_orderBy: Withdrawn_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Auction: Auction;
  Auction_filter: Auction_filter;
  Batch: Batch;
  Batch_filter: Batch_filter;
  Bid: Bid;
  Bid_filter: Bid_filter;
  BigDecimal: Scalars["BigDecimal"];
  BigInt: Scalars["BigInt"];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars["Boolean"];
  Bundle: Bundle;
  Bundle_filter: Bundle_filter;
  Bytes: Scalars["Bytes"];
  CollateralLiquidated: CollateralLiquidated;
  CollateralLiquidated_filter: CollateralLiquidated_filter;
  CollateralToken: CollateralToken;
  CollateralToken_filter: CollateralToken_filter;
  CurrencyToken: CurrencyToken;
  CurrencyToken_filter: CurrencyToken_filter;
  Deposit: Deposit;
  Deposit_filter: Deposit_filter;
  Deposited: Deposited;
  Deposited_filter: Deposited_filter;
  Float: Scalars["Float"];
  ID: Scalars["ID"];
  Int: Scalars["Int"];
  Int8: Scalars["Int8"];
  Liquidation: Liquidation;
  Liquidation_filter: Liquidation_filter;
  Loan: Loan;
  LoanLiquidated: LoanLiquidated;
  LoanLiquidated_filter: LoanLiquidated_filter;
  LoanOriginated: LoanOriginated;
  LoanOriginated_filter: LoanOriginated_filter;
  LoanRepaid: LoanRepaid;
  LoanRepaid_filter: LoanRepaid_filter;
  Loan_filter: Loan_filter;
  Pool: Pool;
  PoolDayData: PoolDayData;
  PoolDayData_filter: PoolDayData_filter;
  PoolEvent: PoolEvent;
  PoolEvent_filter: PoolEvent_filter;
  Pool_filter: Pool_filter;
  Query: {};
  Redeemed: Redeemed;
  Redeemed_filter: Redeemed_filter;
  Redemption: Redemption;
  Redemption_filter: Redemption_filter;
  String: Scalars["String"];
  Subscription: {};
  Tick: Tick;
  Tick_filter: Tick_filter;
  TokenCreated: TokenCreated;
  TokenCreated_filter: TokenCreated_filter;
  Withdrawn: Withdrawn;
  Withdrawn_filter: Withdrawn_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = {};

export type entityDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext,
  Args = entityDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars["String"];
};

export type subgraphIdDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext,
  Args = subgraphIdDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars["String"];
};

export type derivedFromDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext,
  Args = derivedFromDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AuctionResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Auction"] = ResolversParentTypes["Auction"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  liquidation?: Resolver<
    ResolversTypes["Liquidation"],
    ParentType,
    ContextType
  >;
  collateralToken?: Resolver<
    Maybe<ResolversTypes["CollateralToken"]>,
    ParentType,
    ContextType
  >;
  currencyToken?: Resolver<
    ResolversTypes["CurrencyToken"],
    ParentType,
    ContextType
  >;
  collateralTokenId?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  quantity?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  highestBid?: Resolver<Maybe<ResolversTypes["Bid"]>, ParentType, ContextType>;
  bidsCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  bids?: Resolver<
    Array<ResolversTypes["Bid"]>,
    ParentType,
    ContextType,
    RequireFields<AuctionbidsArgs, "skip" | "first">
  >;
  status?: Resolver<
    Maybe<ResolversTypes["AuctionStatus"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BatchResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Batch"] = ResolversParentTypes["Batch"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  collateralWrapperContext?: Resolver<
    ResolversTypes["Bytes"],
    ParentType,
    ContextType
  >;
  underlyingCollateralTokenAddress?: Resolver<
    ResolversTypes["Bytes"],
    ParentType,
    ContextType
  >;
  underlyingCollateralTokenIds?: Resolver<
    Array<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BidResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Bid"] = ResolversParentTypes["Bid"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  auction?: Resolver<ResolversTypes["Auction"], ParentType, ContextType>;
  bidder?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  isHighest?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["BigDecimal"], any> {
  name: "BigDecimal";
}

export interface BigIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["BigInt"], any> {
  name: "BigInt";
}

export type BundleResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Bundle"] = ResolversParentTypes["Bundle"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  collateralWrapperContext?: Resolver<
    ResolversTypes["Bytes"],
    ParentType,
    ContextType
  >;
  underlyingCollateralTokenAddress?: Resolver<
    ResolversTypes["Bytes"],
    ParentType,
    ContextType
  >;
  underlyingCollateralTokenIds?: Resolver<
    Array<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BytesScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Bytes"], any> {
  name: "Bytes";
}

export type CollateralLiquidatedResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["CollateralLiquidated"] = ResolversParentTypes["CollateralLiquidated"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  loan?: Resolver<ResolversTypes["Loan"], ParentType, ContextType>;
  proceeds?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollateralTokenResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["CollateralToken"] = ResolversParentTypes["CollateralToken"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pools?: Resolver<
    Array<ResolversTypes["Pool"]>,
    ParentType,
    ContextType,
    RequireFields<CollateralTokenpoolsArgs, "skip" | "first">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrencyTokenResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["CurrencyToken"] = ResolversParentTypes["CurrencyToken"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pools?: Resolver<
    Array<ResolversTypes["Pool"]>,
    ParentType,
    ContextType,
    RequireFields<CurrencyTokenpoolsArgs, "skip" | "first">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DepositResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Deposit"] = ResolversParentTypes["Deposit"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes["Pool"], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes["Tick"], ParentType, ContextType>;
  account?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  depositedAmount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  redemptions?: Resolver<
    Array<ResolversTypes["Redemption"]>,
    ParentType,
    ContextType,
    RequireFields<DepositredemptionsArgs, "skip" | "first">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DepositedResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Deposited"] = ResolversParentTypes["Deposited"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  account?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes["Tick"], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Int8"], any> {
  name: "Int8";
}

export type LiquidationResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Liquidation"] = ResolversParentTypes["Liquidation"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  source?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  sourceImplementation?: Resolver<
    ResolversTypes["Bytes"],
    ParentType,
    ContextType
  >;
  collateralToken?: Resolver<
    ResolversTypes["CollateralToken"],
    ParentType,
    ContextType
  >;
  currencyToken?: Resolver<
    ResolversTypes["CurrencyToken"],
    ParentType,
    ContextType
  >;
  loan?: Resolver<ResolversTypes["Loan"], ParentType, ContextType>;
  auctions?: Resolver<
    Array<ResolversTypes["Auction"]>,
    ParentType,
    ContextType,
    RequireFields<LiquidationauctionsArgs, "skip" | "first">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Loan"] = ResolversParentTypes["Loan"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes["Pool"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["LoanStatus"], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  completion?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  bundle?: Resolver<Maybe<ResolversTypes["Bundle"]>, ParentType, ContextType>;
  batch?: Resolver<Maybe<ResolversTypes["Batch"]>, ParentType, ContextType>;
  delegate?: Resolver<Maybe<ResolversTypes["Bytes"]>, ParentType, ContextType>;
  borrower?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  maturity?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  collateralToken?: Resolver<
    ResolversTypes["CollateralToken"],
    ParentType,
    ContextType
  >;
  collateralTokenIds?: Resolver<
    Array<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  collateralWrapperToken?: Resolver<
    Maybe<ResolversTypes["Bytes"]>,
    ParentType,
    ContextType
  >;
  collateralWrapperTokenId?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  ticks?: Resolver<Array<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  useds?: Resolver<Array<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  interests?: Resolver<
    Array<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  principal?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  repayment?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  proceeds?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  collateralWrapperContext?: Resolver<
    ResolversTypes["Bytes"],
    ParentType,
    ContextType
  >;
  loanReceipt?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanLiquidatedResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["LoanLiquidated"] = ResolversParentTypes["LoanLiquidated"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  loan?: Resolver<ResolversTypes["Loan"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanOriginatedResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["LoanOriginated"] = ResolversParentTypes["LoanOriginated"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  loan?: Resolver<ResolversTypes["Loan"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanRepaidResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["LoanRepaid"] = ResolversParentTypes["LoanRepaid"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  loan?: Resolver<ResolversTypes["Loan"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Pool"] = ResolversParentTypes["Pool"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  implementationVersionMajor?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  implementation?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  collateralToken?: Resolver<
    ResolversTypes["CollateralToken"],
    ParentType,
    ContextType
  >;
  currencyToken?: Resolver<
    ResolversTypes["CurrencyToken"],
    ParentType,
    ContextType
  >;
  collateralWrappers?: Resolver<
    Array<ResolversTypes["Bytes"]>,
    ParentType,
    ContextType
  >;
  durations?: Resolver<
    Array<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  rates?: Resolver<Array<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  adminFeeRate?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  collateralLiquidator?: Resolver<
    ResolversTypes["Bytes"],
    ParentType,
    ContextType
  >;
  delegationRegistry?: Resolver<
    ResolversTypes["Bytes"],
    ParentType,
    ContextType
  >;
  tokenIdRange?: Resolver<
    Maybe<Array<ResolversTypes["BigInt"]>>,
    ParentType,
    ContextType
  >;
  tokenIdSet?: Resolver<
    Maybe<Array<ResolversTypes["BigInt"]>>,
    ParentType,
    ContextType
  >;
  tokenIdMerkleRoot?: Resolver<
    Maybe<ResolversTypes["Bytes"]>,
    ParentType,
    ContextType
  >;
  tokenIdMerkleMetadataURI?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  maxBorrows?: Resolver<
    Array<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  adminFeeBalance?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  ticks?: Resolver<
    Array<ResolversTypes["Tick"]>,
    ParentType,
    ContextType,
    RequireFields<PoolticksArgs, "skip" | "first">
  >;
  deposits?: Resolver<
    Array<ResolversTypes["Deposit"]>,
    ParentType,
    ContextType,
    RequireFields<PooldepositsArgs, "skip" | "first">
  >;
  loans?: Resolver<
    Array<ResolversTypes["Loan"]>,
    ParentType,
    ContextType,
    RequireFields<PoolloansArgs, "skip" | "first">
  >;
  events?: Resolver<
    Array<ResolversTypes["PoolEvent"]>,
    ParentType,
    ContextType,
    RequireFields<PooleventsArgs, "skip" | "first">
  >;
  totalValueLocked?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  totalValueAvailable?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  totalValueUsed?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  loansOriginated?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  loansActive?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  loansRepaid?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  loansLiquidated?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  loansCollateralLiquidated?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  dayData?: Resolver<
    Array<ResolversTypes["PoolDayData"]>,
    ParentType,
    ContextType,
    RequireFields<PooldayDataArgs, "skip" | "first">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolDayDataResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["PoolDayData"] = ResolversParentTypes["PoolDayData"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes["Pool"], ParentType, ContextType>;
  totalValueLocked?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  totalValueAvailable?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  totalValueUsed?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolEventResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["PoolEvent"] = ResolversParentTypes["PoolEvent"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  from?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  account?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["PoolEventType"], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes["Pool"], ParentType, ContextType>;
  deposit?: Resolver<Maybe<ResolversTypes["Deposit"]>, ParentType, ContextType>;
  loanOriginated?: Resolver<
    Maybe<ResolversTypes["LoanOriginated"]>,
    ParentType,
    ContextType
  >;
  loanRepaid?: Resolver<
    Maybe<ResolversTypes["LoanRepaid"]>,
    ParentType,
    ContextType
  >;
  loanLiquidated?: Resolver<
    Maybe<ResolversTypes["LoanLiquidated"]>,
    ParentType,
    ContextType
  >;
  collateralLiquidated?: Resolver<
    Maybe<ResolversTypes["CollateralLiquidated"]>,
    ParentType,
    ContextType
  >;
  deposited?: Resolver<
    Maybe<ResolversTypes["Deposited"]>,
    ParentType,
    ContextType
  >;
  redeemed?: Resolver<
    Maybe<ResolversTypes["Redeemed"]>,
    ParentType,
    ContextType
  >;
  withdrawn?: Resolver<
    Maybe<ResolversTypes["Withdrawn"]>,
    ParentType,
    ContextType
  >;
  tokenCreated?: Resolver<
    Maybe<ResolversTypes["TokenCreated"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  pool?: Resolver<
    Maybe<ResolversTypes["Pool"]>,
    ParentType,
    ContextType,
    RequireFields<QuerypoolArgs, "id" | "subgraphError">
  >;
  pools?: Resolver<
    Array<ResolversTypes["Pool"]>,
    ParentType,
    ContextType,
    RequireFields<QuerypoolsArgs, "skip" | "first" | "subgraphError">
  >;
  poolDayData?: Resolver<
    Maybe<ResolversTypes["PoolDayData"]>,
    ParentType,
    ContextType,
    RequireFields<QuerypoolDayDataArgs, "id" | "subgraphError">
  >;
  poolDayDatas?: Resolver<
    Array<ResolversTypes["PoolDayData"]>,
    ParentType,
    ContextType,
    RequireFields<QuerypoolDayDatasArgs, "skip" | "first" | "subgraphError">
  >;
  collateralToken?: Resolver<
    Maybe<ResolversTypes["CollateralToken"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycollateralTokenArgs, "id" | "subgraphError">
  >;
  collateralTokens?: Resolver<
    Array<ResolversTypes["CollateralToken"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycollateralTokensArgs, "skip" | "first" | "subgraphError">
  >;
  currencyToken?: Resolver<
    Maybe<ResolversTypes["CurrencyToken"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycurrencyTokenArgs, "id" | "subgraphError">
  >;
  currencyTokens?: Resolver<
    Array<ResolversTypes["CurrencyToken"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycurrencyTokensArgs, "skip" | "first" | "subgraphError">
  >;
  tick?: Resolver<
    Maybe<ResolversTypes["Tick"]>,
    ParentType,
    ContextType,
    RequireFields<QuerytickArgs, "id" | "subgraphError">
  >;
  ticks?: Resolver<
    Array<ResolversTypes["Tick"]>,
    ParentType,
    ContextType,
    RequireFields<QueryticksArgs, "skip" | "first" | "subgraphError">
  >;
  deposit?: Resolver<
    Maybe<ResolversTypes["Deposit"]>,
    ParentType,
    ContextType,
    RequireFields<QuerydepositArgs, "id" | "subgraphError">
  >;
  deposits?: Resolver<
    Array<ResolversTypes["Deposit"]>,
    ParentType,
    ContextType,
    RequireFields<QuerydepositsArgs, "skip" | "first" | "subgraphError">
  >;
  redemption?: Resolver<
    Maybe<ResolversTypes["Redemption"]>,
    ParentType,
    ContextType,
    RequireFields<QueryredemptionArgs, "id" | "subgraphError">
  >;
  redemptions?: Resolver<
    Array<ResolversTypes["Redemption"]>,
    ParentType,
    ContextType,
    RequireFields<QueryredemptionsArgs, "skip" | "first" | "subgraphError">
  >;
  bundle?: Resolver<
    Maybe<ResolversTypes["Bundle"]>,
    ParentType,
    ContextType,
    RequireFields<QuerybundleArgs, "id" | "subgraphError">
  >;
  bundles?: Resolver<
    Array<ResolversTypes["Bundle"]>,
    ParentType,
    ContextType,
    RequireFields<QuerybundlesArgs, "skip" | "first" | "subgraphError">
  >;
  batch?: Resolver<
    Maybe<ResolversTypes["Batch"]>,
    ParentType,
    ContextType,
    RequireFields<QuerybatchArgs, "id" | "subgraphError">
  >;
  batches?: Resolver<
    Array<ResolversTypes["Batch"]>,
    ParentType,
    ContextType,
    RequireFields<QuerybatchesArgs, "skip" | "first" | "subgraphError">
  >;
  loan?: Resolver<
    Maybe<ResolversTypes["Loan"]>,
    ParentType,
    ContextType,
    RequireFields<QueryloanArgs, "id" | "subgraphError">
  >;
  loans?: Resolver<
    Array<ResolversTypes["Loan"]>,
    ParentType,
    ContextType,
    RequireFields<QueryloansArgs, "skip" | "first" | "subgraphError">
  >;
  poolEvent?: Resolver<
    Maybe<ResolversTypes["PoolEvent"]>,
    ParentType,
    ContextType,
    RequireFields<QuerypoolEventArgs, "id" | "subgraphError">
  >;
  poolEvents?: Resolver<
    Array<ResolversTypes["PoolEvent"]>,
    ParentType,
    ContextType,
    RequireFields<QuerypoolEventsArgs, "skip" | "first" | "subgraphError">
  >;
  loanOriginated?: Resolver<
    Maybe<ResolversTypes["LoanOriginated"]>,
    ParentType,
    ContextType,
    RequireFields<QueryloanOriginatedArgs, "id" | "subgraphError">
  >;
  loanOriginateds?: Resolver<
    Array<ResolversTypes["LoanOriginated"]>,
    ParentType,
    ContextType,
    RequireFields<QueryloanOriginatedsArgs, "skip" | "first" | "subgraphError">
  >;
  loanRepaid?: Resolver<
    Maybe<ResolversTypes["LoanRepaid"]>,
    ParentType,
    ContextType,
    RequireFields<QueryloanRepaidArgs, "id" | "subgraphError">
  >;
  loanRepaids?: Resolver<
    Array<ResolversTypes["LoanRepaid"]>,
    ParentType,
    ContextType,
    RequireFields<QueryloanRepaidsArgs, "skip" | "first" | "subgraphError">
  >;
  loanLiquidated?: Resolver<
    Maybe<ResolversTypes["LoanLiquidated"]>,
    ParentType,
    ContextType,
    RequireFields<QueryloanLiquidatedArgs, "id" | "subgraphError">
  >;
  loanLiquidateds?: Resolver<
    Array<ResolversTypes["LoanLiquidated"]>,
    ParentType,
    ContextType,
    RequireFields<QueryloanLiquidatedsArgs, "skip" | "first" | "subgraphError">
  >;
  collateralLiquidated?: Resolver<
    Maybe<ResolversTypes["CollateralLiquidated"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycollateralLiquidatedArgs, "id" | "subgraphError">
  >;
  collateralLiquidateds?: Resolver<
    Array<ResolversTypes["CollateralLiquidated"]>,
    ParentType,
    ContextType,
    RequireFields<
      QuerycollateralLiquidatedsArgs,
      "skip" | "first" | "subgraphError"
    >
  >;
  deposited?: Resolver<
    Maybe<ResolversTypes["Deposited"]>,
    ParentType,
    ContextType,
    RequireFields<QuerydepositedArgs, "id" | "subgraphError">
  >;
  depositeds?: Resolver<
    Array<ResolversTypes["Deposited"]>,
    ParentType,
    ContextType,
    RequireFields<QuerydepositedsArgs, "skip" | "first" | "subgraphError">
  >;
  redeemed?: Resolver<
    Maybe<ResolversTypes["Redeemed"]>,
    ParentType,
    ContextType,
    RequireFields<QueryredeemedArgs, "id" | "subgraphError">
  >;
  redeemeds?: Resolver<
    Array<ResolversTypes["Redeemed"]>,
    ParentType,
    ContextType,
    RequireFields<QueryredeemedsArgs, "skip" | "first" | "subgraphError">
  >;
  withdrawn?: Resolver<
    Maybe<ResolversTypes["Withdrawn"]>,
    ParentType,
    ContextType,
    RequireFields<QuerywithdrawnArgs, "id" | "subgraphError">
  >;
  withdrawns?: Resolver<
    Array<ResolversTypes["Withdrawn"]>,
    ParentType,
    ContextType,
    RequireFields<QuerywithdrawnsArgs, "skip" | "first" | "subgraphError">
  >;
  tokenCreated?: Resolver<
    Maybe<ResolversTypes["TokenCreated"]>,
    ParentType,
    ContextType,
    RequireFields<QuerytokenCreatedArgs, "id" | "subgraphError">
  >;
  tokenCreateds?: Resolver<
    Array<ResolversTypes["TokenCreated"]>,
    ParentType,
    ContextType,
    RequireFields<QuerytokenCreatedsArgs, "skip" | "first" | "subgraphError">
  >;
  liquidation?: Resolver<
    Maybe<ResolversTypes["Liquidation"]>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidationArgs, "id" | "subgraphError">
  >;
  liquidations?: Resolver<
    Array<ResolversTypes["Liquidation"]>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidationsArgs, "skip" | "first" | "subgraphError">
  >;
  auction?: Resolver<
    Maybe<ResolversTypes["Auction"]>,
    ParentType,
    ContextType,
    RequireFields<QueryauctionArgs, "id" | "subgraphError">
  >;
  auctions?: Resolver<
    Array<ResolversTypes["Auction"]>,
    ParentType,
    ContextType,
    RequireFields<QueryauctionsArgs, "skip" | "first" | "subgraphError">
  >;
  bid?: Resolver<
    Maybe<ResolversTypes["Bid"]>,
    ParentType,
    ContextType,
    RequireFields<QuerybidArgs, "id" | "subgraphError">
  >;
  bids?: Resolver<
    Array<ResolversTypes["Bid"]>,
    ParentType,
    ContextType,
    RequireFields<QuerybidsArgs, "skip" | "first" | "subgraphError">
  >;
  _meta?: Resolver<
    Maybe<ResolversTypes["_Meta_"]>,
    ParentType,
    ContextType,
    Partial<Query_metaArgs>
  >;
}>;

export type RedeemedResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Redeemed"] = ResolversParentTypes["Redeemed"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  account?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes["Tick"], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  estimatedAmount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RedemptionResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Redemption"] = ResolversParentTypes["Redemption"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  redemptionId?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes["Deposit"], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = ResolversObject<{
  pool?: SubscriptionResolver<
    Maybe<ResolversTypes["Pool"]>,
    "pool",
    ParentType,
    ContextType,
    RequireFields<SubscriptionpoolArgs, "id" | "subgraphError">
  >;
  pools?: SubscriptionResolver<
    Array<ResolversTypes["Pool"]>,
    "pools",
    ParentType,
    ContextType,
    RequireFields<SubscriptionpoolsArgs, "skip" | "first" | "subgraphError">
  >;
  poolDayData?: SubscriptionResolver<
    Maybe<ResolversTypes["PoolDayData"]>,
    "poolDayData",
    ParentType,
    ContextType,
    RequireFields<SubscriptionpoolDayDataArgs, "id" | "subgraphError">
  >;
  poolDayDatas?: SubscriptionResolver<
    Array<ResolversTypes["PoolDayData"]>,
    "poolDayDatas",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionpoolDayDatasArgs,
      "skip" | "first" | "subgraphError"
    >
  >;
  collateralToken?: SubscriptionResolver<
    Maybe<ResolversTypes["CollateralToken"]>,
    "collateralToken",
    ParentType,
    ContextType,
    RequireFields<SubscriptioncollateralTokenArgs, "id" | "subgraphError">
  >;
  collateralTokens?: SubscriptionResolver<
    Array<ResolversTypes["CollateralToken"]>,
    "collateralTokens",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptioncollateralTokensArgs,
      "skip" | "first" | "subgraphError"
    >
  >;
  currencyToken?: SubscriptionResolver<
    Maybe<ResolversTypes["CurrencyToken"]>,
    "currencyToken",
    ParentType,
    ContextType,
    RequireFields<SubscriptioncurrencyTokenArgs, "id" | "subgraphError">
  >;
  currencyTokens?: SubscriptionResolver<
    Array<ResolversTypes["CurrencyToken"]>,
    "currencyTokens",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptioncurrencyTokensArgs,
      "skip" | "first" | "subgraphError"
    >
  >;
  tick?: SubscriptionResolver<
    Maybe<ResolversTypes["Tick"]>,
    "tick",
    ParentType,
    ContextType,
    RequireFields<SubscriptiontickArgs, "id" | "subgraphError">
  >;
  ticks?: SubscriptionResolver<
    Array<ResolversTypes["Tick"]>,
    "ticks",
    ParentType,
    ContextType,
    RequireFields<SubscriptionticksArgs, "skip" | "first" | "subgraphError">
  >;
  deposit?: SubscriptionResolver<
    Maybe<ResolversTypes["Deposit"]>,
    "deposit",
    ParentType,
    ContextType,
    RequireFields<SubscriptiondepositArgs, "id" | "subgraphError">
  >;
  deposits?: SubscriptionResolver<
    Array<ResolversTypes["Deposit"]>,
    "deposits",
    ParentType,
    ContextType,
    RequireFields<SubscriptiondepositsArgs, "skip" | "first" | "subgraphError">
  >;
  redemption?: SubscriptionResolver<
    Maybe<ResolversTypes["Redemption"]>,
    "redemption",
    ParentType,
    ContextType,
    RequireFields<SubscriptionredemptionArgs, "id" | "subgraphError">
  >;
  redemptions?: SubscriptionResolver<
    Array<ResolversTypes["Redemption"]>,
    "redemptions",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionredemptionsArgs,
      "skip" | "first" | "subgraphError"
    >
  >;
  bundle?: SubscriptionResolver<
    Maybe<ResolversTypes["Bundle"]>,
    "bundle",
    ParentType,
    ContextType,
    RequireFields<SubscriptionbundleArgs, "id" | "subgraphError">
  >;
  bundles?: SubscriptionResolver<
    Array<ResolversTypes["Bundle"]>,
    "bundles",
    ParentType,
    ContextType,
    RequireFields<SubscriptionbundlesArgs, "skip" | "first" | "subgraphError">
  >;
  batch?: SubscriptionResolver<
    Maybe<ResolversTypes["Batch"]>,
    "batch",
    ParentType,
    ContextType,
    RequireFields<SubscriptionbatchArgs, "id" | "subgraphError">
  >;
  batches?: SubscriptionResolver<
    Array<ResolversTypes["Batch"]>,
    "batches",
    ParentType,
    ContextType,
    RequireFields<SubscriptionbatchesArgs, "skip" | "first" | "subgraphError">
  >;
  loan?: SubscriptionResolver<
    Maybe<ResolversTypes["Loan"]>,
    "loan",
    ParentType,
    ContextType,
    RequireFields<SubscriptionloanArgs, "id" | "subgraphError">
  >;
  loans?: SubscriptionResolver<
    Array<ResolversTypes["Loan"]>,
    "loans",
    ParentType,
    ContextType,
    RequireFields<SubscriptionloansArgs, "skip" | "first" | "subgraphError">
  >;
  poolEvent?: SubscriptionResolver<
    Maybe<ResolversTypes["PoolEvent"]>,
    "poolEvent",
    ParentType,
    ContextType,
    RequireFields<SubscriptionpoolEventArgs, "id" | "subgraphError">
  >;
  poolEvents?: SubscriptionResolver<
    Array<ResolversTypes["PoolEvent"]>,
    "poolEvents",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionpoolEventsArgs,
      "skip" | "first" | "subgraphError"
    >
  >;
  loanOriginated?: SubscriptionResolver<
    Maybe<ResolversTypes["LoanOriginated"]>,
    "loanOriginated",
    ParentType,
    ContextType,
    RequireFields<SubscriptionloanOriginatedArgs, "id" | "subgraphError">
  >;
  loanOriginateds?: SubscriptionResolver<
    Array<ResolversTypes["LoanOriginated"]>,
    "loanOriginateds",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionloanOriginatedsArgs,
      "skip" | "first" | "subgraphError"
    >
  >;
  loanRepaid?: SubscriptionResolver<
    Maybe<ResolversTypes["LoanRepaid"]>,
    "loanRepaid",
    ParentType,
    ContextType,
    RequireFields<SubscriptionloanRepaidArgs, "id" | "subgraphError">
  >;
  loanRepaids?: SubscriptionResolver<
    Array<ResolversTypes["LoanRepaid"]>,
    "loanRepaids",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionloanRepaidsArgs,
      "skip" | "first" | "subgraphError"
    >
  >;
  loanLiquidated?: SubscriptionResolver<
    Maybe<ResolversTypes["LoanLiquidated"]>,
    "loanLiquidated",
    ParentType,
    ContextType,
    RequireFields<SubscriptionloanLiquidatedArgs, "id" | "subgraphError">
  >;
  loanLiquidateds?: SubscriptionResolver<
    Array<ResolversTypes["LoanLiquidated"]>,
    "loanLiquidateds",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionloanLiquidatedsArgs,
      "skip" | "first" | "subgraphError"
    >
  >;
  collateralLiquidated?: SubscriptionResolver<
    Maybe<ResolversTypes["CollateralLiquidated"]>,
    "collateralLiquidated",
    ParentType,
    ContextType,
    RequireFields<SubscriptioncollateralLiquidatedArgs, "id" | "subgraphError">
  >;
  collateralLiquidateds?: SubscriptionResolver<
    Array<ResolversTypes["CollateralLiquidated"]>,
    "collateralLiquidateds",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptioncollateralLiquidatedsArgs,
      "skip" | "first" | "subgraphError"
    >
  >;
  deposited?: SubscriptionResolver<
    Maybe<ResolversTypes["Deposited"]>,
    "deposited",
    ParentType,
    ContextType,
    RequireFields<SubscriptiondepositedArgs, "id" | "subgraphError">
  >;
  depositeds?: SubscriptionResolver<
    Array<ResolversTypes["Deposited"]>,
    "depositeds",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptiondepositedsArgs,
      "skip" | "first" | "subgraphError"
    >
  >;
  redeemed?: SubscriptionResolver<
    Maybe<ResolversTypes["Redeemed"]>,
    "redeemed",
    ParentType,
    ContextType,
    RequireFields<SubscriptionredeemedArgs, "id" | "subgraphError">
  >;
  redeemeds?: SubscriptionResolver<
    Array<ResolversTypes["Redeemed"]>,
    "redeemeds",
    ParentType,
    ContextType,
    RequireFields<SubscriptionredeemedsArgs, "skip" | "first" | "subgraphError">
  >;
  withdrawn?: SubscriptionResolver<
    Maybe<ResolversTypes["Withdrawn"]>,
    "withdrawn",
    ParentType,
    ContextType,
    RequireFields<SubscriptionwithdrawnArgs, "id" | "subgraphError">
  >;
  withdrawns?: SubscriptionResolver<
    Array<ResolversTypes["Withdrawn"]>,
    "withdrawns",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionwithdrawnsArgs,
      "skip" | "first" | "subgraphError"
    >
  >;
  tokenCreated?: SubscriptionResolver<
    Maybe<ResolversTypes["TokenCreated"]>,
    "tokenCreated",
    ParentType,
    ContextType,
    RequireFields<SubscriptiontokenCreatedArgs, "id" | "subgraphError">
  >;
  tokenCreateds?: SubscriptionResolver<
    Array<ResolversTypes["TokenCreated"]>,
    "tokenCreateds",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptiontokenCreatedsArgs,
      "skip" | "first" | "subgraphError"
    >
  >;
  liquidation?: SubscriptionResolver<
    Maybe<ResolversTypes["Liquidation"]>,
    "liquidation",
    ParentType,
    ContextType,
    RequireFields<SubscriptionliquidationArgs, "id" | "subgraphError">
  >;
  liquidations?: SubscriptionResolver<
    Array<ResolversTypes["Liquidation"]>,
    "liquidations",
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionliquidationsArgs,
      "skip" | "first" | "subgraphError"
    >
  >;
  auction?: SubscriptionResolver<
    Maybe<ResolversTypes["Auction"]>,
    "auction",
    ParentType,
    ContextType,
    RequireFields<SubscriptionauctionArgs, "id" | "subgraphError">
  >;
  auctions?: SubscriptionResolver<
    Array<ResolversTypes["Auction"]>,
    "auctions",
    ParentType,
    ContextType,
    RequireFields<SubscriptionauctionsArgs, "skip" | "first" | "subgraphError">
  >;
  bid?: SubscriptionResolver<
    Maybe<ResolversTypes["Bid"]>,
    "bid",
    ParentType,
    ContextType,
    RequireFields<SubscriptionbidArgs, "id" | "subgraphError">
  >;
  bids?: SubscriptionResolver<
    Array<ResolversTypes["Bid"]>,
    "bids",
    ParentType,
    ContextType,
    RequireFields<SubscriptionbidsArgs, "skip" | "first" | "subgraphError">
  >;
  _meta?: SubscriptionResolver<
    Maybe<ResolversTypes["_Meta_"]>,
    "_meta",
    ParentType,
    ContextType,
    Partial<Subscription_metaArgs>
  >;
}>;

export type TickResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Tick"] = ResolversParentTypes["Tick"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes["Pool"], ParentType, ContextType>;
  raw?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  limit?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  durationIndex?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  rateIndex?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  active?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  available?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  pending?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  redemptionPending?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  prev?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  next?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  accrued?: Resolver<Maybe<ResolversTypes["BigInt"]>, ParentType, ContextType>;
  accrualRate?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  accrualTimestamp?: Resolver<
    Maybe<ResolversTypes["BigInt"]>,
    ParentType,
    ContextType
  >;
  principalWeightedDuration?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  interestWeightedMaturity?: Resolver<
    ResolversTypes["BigInt"],
    ParentType,
    ContextType
  >;
  token?: Resolver<
    Maybe<ResolversTypes["CurrencyToken"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenCreatedResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["TokenCreated"] = ResolversParentTypes["TokenCreated"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes["Tick"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["CurrencyToken"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawnResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["Withdrawn"] = ResolversParentTypes["Withdrawn"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  account?: Resolver<ResolversTypes["Bytes"], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes["Tick"], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["_Block_"] = ResolversParentTypes["_Block_"]
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes["Bytes"]>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes["_Meta_"] = ResolversParentTypes["_Meta_"]
> = ResolversObject<{
  block?: Resolver<ResolversTypes["_Block_"], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Auction?: AuctionResolvers<ContextType>;
  Batch?: BatchResolvers<ContextType>;
  Bid?: BidResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bundle?: BundleResolvers<ContextType>;
  Bytes?: GraphQLScalarType;
  CollateralLiquidated?: CollateralLiquidatedResolvers<ContextType>;
  CollateralToken?: CollateralTokenResolvers<ContextType>;
  CurrencyToken?: CurrencyTokenResolvers<ContextType>;
  Deposit?: DepositResolvers<ContextType>;
  Deposited?: DepositedResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  Liquidation?: LiquidationResolvers<ContextType>;
  Loan?: LoanResolvers<ContextType>;
  LoanLiquidated?: LoanLiquidatedResolvers<ContextType>;
  LoanOriginated?: LoanOriginatedResolvers<ContextType>;
  LoanRepaid?: LoanRepaidResolvers<ContextType>;
  Pool?: PoolResolvers<ContextType>;
  PoolDayData?: PoolDayDataResolvers<ContextType>;
  PoolEvent?: PoolEventResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Redeemed?: RedeemedResolvers<ContextType>;
  Redemption?: RedemptionResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Tick?: TickResolvers<ContextType>;
  TokenCreated?: TokenCreatedResolvers<ContextType>;
  Withdrawn?: WithdrawnResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = MetastreetCsTypes.Context & BaseMeshContext;

import { fileURLToPath } from "@graphql-mesh/utils";
const baseDir = pathModule.join(
  pathModule.dirname(fileURLToPath(import.meta.url)),
  ".."
);

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (
    pathModule.isAbsolute(moduleId)
      ? pathModule.relative(baseDir, moduleId)
      : moduleId
  )
    .split("\\")
    .join("/")
    .replace(baseDir + "/", "");
  switch (relativeModuleId) {
    case ".graphclient/sources/metastreet-cs/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;

    default:
      return Promise.reject(
        new Error(`Cannot find module '${relativeModuleId}'.`)
      );
  }
};

const rootStore = new MeshStore(
  ".graphclient",
  new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "ts",
  }),
  {
    readonly: true,
    validate: false,
  }
);

export const rawServeConfig: YamlConfig.Config["serve"] = undefined as any;
export async function getMeshOptions(): Promise<GetMeshOptions> {
  const pubsub = new PubSub();
  const sourcesStore = rootStore.child("sources");
  const logger = new DefaultLogger("GraphClient");
  const cache = new (MeshCache as any)({
    ...({} as any),
    importFn,
    store: rootStore.child("cache"),
    pubsub,
    logger,
  } as any);

  const sources: MeshResolvedSource[] = [];
  const transforms: MeshTransform[] = [];
  const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
  const metastreetCsTransforms = [];
  const additionalTypeDefs = [] as any[];
  const metastreetCsHandler = new GraphqlHandler({
    name: "metastreet-cs",
    config: {
      endpoint:
        "https://api.studio.thegraph.com/query/31830/metastreet-v2-sepolia/version/latest",
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child("metastreet-cs"),
    logger: logger.child("metastreet-cs"),
    importFn,
  });
  sources[0] = {
    name: "metastreet-cs",
    handler: metastreetCsHandler,
    transforms: metastreetCsTransforms,
  };
  const additionalResolvers = [] as any[];
  const merger = new (BareMerger as any)({
    cache,
    pubsub,
    logger: logger.child("bareMerger"),
    store: rootStore.child("bareMerger"),
  });

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
        {
          document: GetTicksByPoolDocument,
          get rawSDL() {
            return printWithCache(GetTicksByPoolDocument);
          },
          location: "GetTicksByPoolDocument.graphql",
        },
      ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<
  TServerContext = {}
>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  });
}

let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions()
      .then((meshOptions) => getMesh(meshOptions))
      .then((mesh) => {
        const id = mesh.pubsub.subscribe("destroy", () => {
          meshInstance$ = undefined;
          mesh.pubsub.unsubscribe(id);
        });
        return mesh;
      });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) =>
  getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) =>
  getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(
  globalContext?: TGlobalContext
) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) =>
    sdkRequesterFactory(globalContext)
  );
  return getSdk<TOperationContext, TGlobalContext>((...args) =>
    sdkRequester$.then((sdkRequester) => sdkRequester(...args))
  );
}
export type GetTicksByPoolQueryVariables = Exact<{
  poolId: Scalars["ID"];
}>;

export type GetTicksByPoolQuery = {
  pool?: Maybe<
    Pick<Pool, "id"> & {
      ticks: Array<
        Pick<
          Tick,
          | "id"
          | "raw"
          | "limit"
          | "duration"
          | "rate"
          | "durationIndex"
          | "rateIndex"
          | "active"
          | "value"
          | "shares"
          | "available"
          | "pending"
          | "redemptionPending"
          | "prev"
          | "next"
          | "accrued"
          | "accrualRate"
          | "accrualTimestamp"
          | "principalWeightedDuration"
          | "interestWeightedMaturity"
        > & { token?: Maybe<Pick<CurrencyToken, "id" | "name" | "symbol">> }
      >;
    }
  >;
};

export const GetTicksByPoolDocument = gql`
  query GetTicksByPool($poolId: ID!) {
    pool(id: $poolId) {
      id
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
    }
  }
` as unknown as DocumentNode<GetTicksByPoolQuery, GetTicksByPoolQueryVariables>;

export type Requester<C = {}, E = unknown> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C
) => Promise<R> | AsyncIterable<R>;
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetTicksByPool(
      variables: GetTicksByPoolQueryVariables,
      options?: C
    ): Promise<GetTicksByPoolQuery> {
      return requester<GetTicksByPoolQuery, GetTicksByPoolQueryVariables>(
        GetTicksByPoolDocument,
        variables,
        options
      ) as Promise<GetTicksByPoolQuery>;
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
