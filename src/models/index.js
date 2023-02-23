// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comic } = initSchema(schema);

export {
  Comic
};