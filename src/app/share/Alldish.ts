import { Dish } from "./dish";


export const alldish: Dish[] = [
    {
      id: '0',
      name: 'Uthappizza',
      image: '/assets/images/uthappizza.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '4.99',
      // tslint:disable-next-line:max-line-length
      description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
      comment: [
        {
            rate: 5,
            comment: 'coment for 1',
            author: 'arthesis',
            date: '2012-10-16T17:57:28.556094Z'
        },
        {
            rate: 4,
            comment: 'comment for 2',
            author: 'arthesis2',
            date: '2014-09-05T17:57:28.556094Z'
        },
        {
            rate: 3,
            comment: 'comment for 3',
            author: 'arthesis3',
            date: '2015-02-13T17:57:28.556094Z'
        },
        {
            rate: 2,
            comment: 'comment for 4',
            author: 'arthesis4',
            date: '2013-12-02T17:57:28.556094Z'
        },
        {
            rate: 1,
            comment: 'comment for 5',
            author: 'arthesis5',
            date: '2011-12-02T17:57:28.556094Z'
        },
      ]
    },
    {
        id: '1',
        name: 'Zucchipakoda',
        image: '/assets/images/zucchipakoda.png',
        category: 'appetizer',
        featured: false,
        label: '',
        price: '1.99',
        description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
        comment: [
            {
                rate: 3,
                comment: 'coment for 1',
                author: 'arthesis',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rate: 3,
                comment: 'comment for 2',
                author: 'arthesis2',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rate: 3,
                comment: 'comment for 3',
                author: 'arthesis3',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rate: 3,
                comment: 'comment for 4',
                author: 'arthesis4',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rate: 4,
                comment: 'comment for 5',
                author: 'arthesis5',
                date: '2011-12-02T17:57:28.556094Z'
            },
          ]
      },
      {
        id: '2',
        name: 'Vadonut',
        image: '/assets/images/vadonut.png',
        category: 'appetizer',
        featured: false,
        label: 'New',
        price: '1.99',
        description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
        comment: [
            {
                rate: 2,
                comment: 'coment for 1',
                author: 'arthesis',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rate: 2,
                comment: 'comment for 2',
                author: 'arthesis2',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rate: 2,
                comment: 'comment for 3',
                author: 'arthesis3',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rate: 2,
                comment: 'comment for 4',
                author: 'arthesis4',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rate: 3,
                comment: 'comment for 5',
                author: 'arthesis5',
                date: '2011-12-02T17:57:28.556094Z'
            },
          ]
      },
      {
        id: '3',
        name: 'ElaiCheese Cake',
        image: '/assets/images/elaicheesecake.png',
        category: 'dessert',
        featured: false,
        label: '',
        price: '2.99',
        description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
        comment: [
            {
                rate: 1,
                comment: 'coment for 1',
                author: 'arthesis',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rate: 1,
                comment: 'comment for 2',
                author: 'arthesis2',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rate: 1,
                comment: 'comment for 3',
                author: 'arthesis3',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rate: 1,
                comment: 'comment for 4',
                author: 'arthesis4',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rate: 2,
                comment: 'comment for 5',
                author: 'arthesis5',
                date: '2011-12-02T17:57:28.556094Z'
            },
          ]
      }
  ];