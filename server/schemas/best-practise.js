import { BsTrophy as icon } from 'react-icons/bs';

export default {
  name: 'best-practise',
  title: 'General Best Practice',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'What is the best practise being described?',
    },
    {
      name: 'value',
      title: 'Description',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Each input field will become a separate paragraph.',
    },
  ],
};
