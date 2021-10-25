import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import commonWords from './common-words';
import punctuation from './punctuation';
import datesNumbers from './dates-numbers';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    commonWords, punctuation, datesNumbers
  ]),
});
