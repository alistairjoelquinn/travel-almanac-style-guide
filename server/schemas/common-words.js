import { BsBookHalf as icon } from 'react-icons/bs';

export default {
  name: 'common-words',
  title: 'Common Words',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Word',
      type: 'string',
      description: 'What is the word?',
    },
    {
      name: 'value',
      title: 'Description',
      type: 'string',
      description: 'A more detailed description of why it is included.',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description:
        'Which letter should this word appear under? Always capitalise. e.g. "A" for Adidis, "#" for anything not falling under a letter category.',
    },
  ],
};
