import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import commonWords from './common-words';
import punctuation from './punctuation';
import datesNumbers from './dates-numbers';
import bestPractise from './best-practise';
import quickFormatting from './quick-formatting';
import toneOfVoice from './tone-of-voice';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    commonWords,
    punctuation,
    datesNumbers,
    bestPractise,
    quickFormatting,
    toneOfVoice,
  ]),
});
