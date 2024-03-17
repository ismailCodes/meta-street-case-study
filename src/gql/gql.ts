/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetAllPools {\n    pools {\n      id\n      collateralToken {\n        name\n      }\n      currencyToken {\n        symbol\n      }\n      totalValueLocked\n      totalValueUsed\n    }\n  }\n": types.GetAllPoolsDocument,
    "\n  query GetTickData($poolId: ID!, $tickId: Bytes!) {\n    pool(id: $poolId) {\n      id\n      collateralToken {\n        name\n      }\n      currencyToken {\n        id\n        symbol\n      }\n      ticks(where: { id: $tickId }) {\n        limit\n        duration\n        rate\n        raw\n        token {\n          id\n        }\n      }\n      deposits {\n        depositedAmount\n        shares\n        account\n        tick {\n          id\n        }\n      }\n    }\n  }\n": types.GetTickDataDocument,
    "\n  query GetTicksByPool($poolId: ID!) {\n    pool(id: $poolId) {\n      id\n      collateralToken {\n        id\n        name\n      }\n      currencyToken {\n        symbol\n      }\n      ticks {\n        id\n        raw\n        limit\n        duration\n        rate\n        durationIndex\n        rateIndex\n        active\n        value\n        shares\n        available\n        pending\n        redemptionPending\n        prev\n        next\n        accrued\n        accrualRate\n        accrualTimestamp\n        principalWeightedDuration\n        interestWeightedMaturity\n        token {\n          id\n          name\n          symbol\n        }\n      }\n      deposits {\n        account\n        depositedAmount\n        shares\n        tick {\n          id\n        }\n      }\n    }\n  }\n": types.GetTicksByPoolDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllPools {\n    pools {\n      id\n      collateralToken {\n        name\n      }\n      currencyToken {\n        symbol\n      }\n      totalValueLocked\n      totalValueUsed\n    }\n  }\n"): (typeof documents)["\n  query GetAllPools {\n    pools {\n      id\n      collateralToken {\n        name\n      }\n      currencyToken {\n        symbol\n      }\n      totalValueLocked\n      totalValueUsed\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTickData($poolId: ID!, $tickId: Bytes!) {\n    pool(id: $poolId) {\n      id\n      collateralToken {\n        name\n      }\n      currencyToken {\n        id\n        symbol\n      }\n      ticks(where: { id: $tickId }) {\n        limit\n        duration\n        rate\n        raw\n        token {\n          id\n        }\n      }\n      deposits {\n        depositedAmount\n        shares\n        account\n        tick {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTickData($poolId: ID!, $tickId: Bytes!) {\n    pool(id: $poolId) {\n      id\n      collateralToken {\n        name\n      }\n      currencyToken {\n        id\n        symbol\n      }\n      ticks(where: { id: $tickId }) {\n        limit\n        duration\n        rate\n        raw\n        token {\n          id\n        }\n      }\n      deposits {\n        depositedAmount\n        shares\n        account\n        tick {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTicksByPool($poolId: ID!) {\n    pool(id: $poolId) {\n      id\n      collateralToken {\n        id\n        name\n      }\n      currencyToken {\n        symbol\n      }\n      ticks {\n        id\n        raw\n        limit\n        duration\n        rate\n        durationIndex\n        rateIndex\n        active\n        value\n        shares\n        available\n        pending\n        redemptionPending\n        prev\n        next\n        accrued\n        accrualRate\n        accrualTimestamp\n        principalWeightedDuration\n        interestWeightedMaturity\n        token {\n          id\n          name\n          symbol\n        }\n      }\n      deposits {\n        account\n        depositedAmount\n        shares\n        tick {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTicksByPool($poolId: ID!) {\n    pool(id: $poolId) {\n      id\n      collateralToken {\n        id\n        name\n      }\n      currencyToken {\n        symbol\n      }\n      ticks {\n        id\n        raw\n        limit\n        duration\n        rate\n        durationIndex\n        rateIndex\n        active\n        value\n        shares\n        available\n        pending\n        redemptionPending\n        prev\n        next\n        accrued\n        accrualRate\n        accrualTimestamp\n        principalWeightedDuration\n        interestWeightedMaturity\n        token {\n          id\n          name\n          symbol\n        }\n      }\n      deposits {\n        account\n        depositedAmount\n        shares\n        tick {\n          id\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;