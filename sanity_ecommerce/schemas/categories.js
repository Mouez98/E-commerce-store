export default {
    name: 'categories',
    title: 'Categories',
    schemaType:'List',
    type: 'document',
    
    fields: [
        {
            name: 'category',
            title: 'Name',
            type: 'string'
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image'
        },
        { 
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'category',
              maxLength: 90,
            }
          },
        
    ]
}