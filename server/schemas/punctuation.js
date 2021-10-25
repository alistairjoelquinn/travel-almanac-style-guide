import { AiOutlineDotChart as icon } from 'react-icons/ai';

export default {
    name: 'punctuation',
    title: 'Punctuation',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'What is the item?'
        },
        {
            name: 'value',
            title: 'Description',
            type: 'string',
            description: 'A more detailed description of why it is included.'
        },
    ]
};