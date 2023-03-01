import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerComic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comic, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly marvelID?: number | null;
  readonly description?: string | null;
  readonly pageCount?: number | null;
  readonly thumbnail?: string | null;
  readonly synced?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comic, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly marvelID?: number | null;
  readonly description?: string | null;
  readonly pageCount?: number | null;
  readonly thumbnail?: string | null;
  readonly synced?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comic = LazyLoading extends LazyLoadingDisabled ? EagerComic : LazyComic

export declare const Comic: (new (init: ModelInit<Comic>) => Comic) & {
  copyOf(source: Comic, mutator: (draft: MutableModel<Comic>) => MutableModel<Comic> | void): Comic;
}