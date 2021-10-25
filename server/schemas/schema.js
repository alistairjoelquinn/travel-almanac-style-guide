import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import commonWords from './common-words';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    commonWords
  ]),
});
