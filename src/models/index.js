// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostStatus = {
  "ACTIVE": "ACTIVE",
  "INACTIVE": "INACTIVE"
};

const { Comment, Post, Todo } = initSchema(schema);

export {
  Comment,
  Post,
  Todo,
  PostStatus
};