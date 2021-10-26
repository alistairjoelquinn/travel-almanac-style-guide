import { AiFillFormatPainter as icon } from 'react-icons/ai';

export default {
    name: 'quick-formatting',
    title: 'Quick Formatting',
    type: 'document',
    icon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'What is the title?'
        },
        {
            name: 'value',
            title: 'Description',
            type: 'string',
            description: 'A more detailed description of why it is included.'
        },
    ]
};