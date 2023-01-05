import { FcReading as icon } from 'react-icons/fc';

export default {
  name: 'proofreading',
  title: 'Proofreading',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'What is the section?',
    },
    {
      name: 'value',
      title: 'Description',
      type: 'text',
      description:
        'This HTML will be shown exactly on screen! Be sure to always use the correct tags. If you are unsure then check the following resource https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
    },
    {
      name: 'order',
      title: 'Article Order',
      type: 'number',
      description:
        'This value should be an integer. A lower number will always be listed before a higher number i.e. article 3 will appear before article 4.',
    },
  ],
};
