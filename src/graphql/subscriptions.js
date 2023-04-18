/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComic = /* GraphQL */ `
  subscription OnCreateComic(
    $filter: ModelSubscriptionComicFilterInput
    $owner: String
  ) {
    onCreateComic(filter: $filter, owner: $owner) {
      id
      name
      marvelID
      description
      thumbnail
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateComic = /* GraphQL */ `
  subscription OnUpdateComic(
    $filter: ModelSubscriptionComicFilterInput
    $owner: String
  ) {
    onUpdateComic(filter: $filter, owner: $owner) {
      id
      name
      marvelID
      description
      thumbnail
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteComic = /* GraphQL */ `
  subscription OnDeleteComic(
    $filter: ModelSubscriptionComicFilterInput
    $owner: String
  ) {
    onDeleteComic(filter: $filter, owner: $owner) {
      id
      name
      marvelID
      description
      thumbnail
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
