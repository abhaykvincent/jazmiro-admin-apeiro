export const  ordersDUMMY =[
    {
        id: '00001',
        customer:{
            id: '00001',
            name: 'John Doe',
            shippingAddress: {
                line1: '123 Main St',
                line2: 'Apt. 1',
                city: 'New York',
                state: 'NY',
                zip: '10001'    
            },
            conversion:{
                orders: 5
            },
            contactEmail: 'john.doe@gmail.com',
            contactPhone: '+1 123-456-7890'
        },
        items:[
            {
                id: '00001',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },
            {
                id: '00002',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },{
                id: '00001',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },
            {
                id: '00002',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },


        ],
        status: 'unfulfilled',
        payment:{
            status: 'paid',
            agent: 'stripe',
            method: 'inPerson',
            priceSummary:{
                subtotal: 100,
                shipping: 10,
                tax: 10,
                total: 110

            },
            transactionId: '123456789'
        },
        tags:['paid','unfulfilled','returningCustomer'],
        timeline:[
            {
                date: '2020-01-01',
                event: 'orderPlaced',
                status: 'unfulfilled',
                agent: 'customer'
            },
            {
                date: '2020-01-02',
                event: 'paymentReceived',
                status: 'paid',
                agent: 'stripe'
            },
            {
                date: '2020-01-03',
                event: 'orderPacked',
                status: 'funfilled',
            },
            {
                date: '2020-01-03',
                event: 'orderShipped',
                status: 'shipped',
                agent: 'jazmiro'
            },
            {
                date: '2020-01-04',
                event: 'orderDelivered',
                status: 'delivered',
                agent: 'customer'
            },

        ],
        orderTime: /* date with time */ '9:00 AM',
    },
    {
        id: '00002',
        customer:{
            id: '00003',
            name: 'Jane Doe',
            shippingAddress: {
                line1: '123 King St',
                line2: 'Apt. 1',
                city: 'New York',
                state: 'NY',
                zip: '10001'    
            },
            conversion:{
                orders: 5
            },
            contactEmail: 'jane.doe@gmail.com',
            contactPhone: '+1 123-456-7890'
        },
        items:[
            {
                id: '00001',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },
            {
                id: '00002',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },{
                id: '00001',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },
            {
                id: '00002',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },


        ],
        status: 'unfulfilled',
        payment:{
            status: 'paid',
            agent: 'stripe',
            method: 'inPerson',
            priceSummary:{
                subtotal: 100,
                shipping: 10,
                tax: 10,
                total: 110

            },
            transactionId: '123456789'
        },
        tags:['paid','unfulfilled','returningCustomer'],
        timeline:[
            {
                date: '2020-01-01',
                event: 'orderPlaced',
                status: 'unfulfilled',
                agent: 'customer'
            },
            {
                date: '2020-01-02',
                event: 'paymentReceived',
                status: 'paid',
                agent: 'stripe'
            },
            {
                date: '2020-01-03',
                event: 'orderPacked',
                status: 'funfilled',
            },
            {
                date: '2020-01-03',
                event: 'orderShipped',
                status: 'shipped',
                agent: 'jazmiro'
            },
            {
                date: '2020-01-04',
                event: 'orderDelivered',
                status: 'delivered',
                agent: 'customer'
            },

        ],
        orderTime: /* date with time */ '9:00 AM',
    },
    {
        id: '00003',
        customer:{
            id: '00003',
            name: 'John Doye',
            shippingAddress: {
                line1: '123 Main St',
                line2: 'Apt. 1',
                city: 'New York',
                state: 'NY',
                zip: '10001'    
            },
            conversion:{
                orders: 5
            },
            contactEmail: 'john.doe@gmail.com',
            contactPhone: '+1 123-456-7890'
        },
        items:[
            {
                id: '00001',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },
            {
                id: '00002',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },{
                id: '00001',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },
            {
                id: '00002',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },


        ],
        status: 'unfulfilled',
        payment:{
            status: 'paid',
            agent: 'stripe',
            method: 'inPerson',
            priceSummary:{
                subtotal: 100,
                shipping: 10,
                tax: 10,
                total: 110

            },
            transactionId: '123456789'
        },
        tags:['paid','unfulfilled','returningCustomer'],
        timeline:[
            {
                date: '2020-01-01',
                event: 'orderPlaced',
                status: 'unfulfilled',
                agent: 'customer'
            },
            {
                date: '2020-01-02',
                event: 'paymentReceived',
                status: 'paid',
                agent: 'stripe'
            },
            {
                date: '2020-01-03',
                event: 'orderPacked',
                status: 'funfilled',
            },
            {
                date: '2020-01-03',
                event: 'orderShipped',
                status: 'shipped',
                agent: 'jazmiro'
            },
            {
                date: '2020-01-04',
                event: 'orderDelivered',
                status: 'delivered',
                agent: 'customer'
            },

        ],
        orderTime: /* date with time */ '9:00 AM',
    },
    {
        id: '00004',
        customer:{
            id: '00004',
            name: 'Mathew Doye',
            shippingAddress: {
                line1: '123 Main St',
                line2: 'Apt. 1',
                city: 'New York',
                state: 'NY',
                zip: '10001'    
            },
            conversion:{
                orders: 5
            },
            contactEmail: 'john.doe@gmail.com',
            contactPhone: '+1 123-456-7890'
        },
        items:[
            {
                id: '00001',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },
            {
                id: '00002',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },{
                id: '00001',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },
            {
                id: '00002',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },


        ],
        status: 'unfulfilled',
        payment:{
            status: 'paid',
            agent: 'stripe',
            method: 'inPerson',
            priceSummary:{
                subtotal: 100,
                shipping: 10,
                tax: 10,
                total: 110

            },
            transactionId: '123456789'
        },
        tags:['paid','unfulfilled','returningCustomer'],
        timeline:[
            {
                date: '2020-01-01',
                event: 'orderPlaced',
                status: 'unfulfilled',
                agent: 'customer'
            },
            {
                date: '2020-01-02',
                event: 'paymentReceived',
                status: 'paid',
                agent: 'stripe'
            },
            {
                date: '2020-01-03',
                event: 'orderPacked',
                status: 'funfilled',
            },
            {
                date: '2020-01-03',
                event: 'orderShipped',
                status: 'shipped',
                agent: 'jazmiro'
            },
            {
                date: '2020-01-04',
                event: 'orderDelivered',
                status: 'delivered',
                agent: 'customer'
            },

        ],
        orderTime: /* date with time */ '9:00 AM',
    },
    {
        id: '00005',
        customer:{
            id: '00005',
            name: 'Smith John',
            shippingAddress: {
                line1: '123 Main St',
                line2: 'Apt. 1',
                city: 'New York',
                state: 'NY',
                zip: '10001'    
            },
            conversion:{
                orders: 5
            },
            contactEmail: 'john.doe@gmail.com',
            contactPhone: '+1 123-456-7890'
        },
        items:[
            {
                id: '00001',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },
            {
                id: '00002',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },{
                id: '00001',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },
            {
                id: '00002',
                name: 'Saree',
                price: 100,
                image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                description: 'Saree description'
            },


        ],
        status: 'unfulfilled',
        payment:{
            status: 'paid',
            agent: 'stripe',
            method: 'inPerson',
            priceSummary:{
                subtotal: 100,
                shipping: 10,
                tax: 10,
                total: 110

            },
            transactionId: '123456789'
        },
        tags:['paid','unfulfilled','returningCustomer'],
        timeline:[
            {
                date: '2020-01-01',
                event: 'orderPlaced',
                status: 'unfulfilled',
                agent: 'customer'
            },
            {
                date: '2020-01-02',
                event: 'paymentReceived',
                status: 'paid',
                agent: 'stripe'
            },
            {
                date: '2020-01-03',
                event: 'orderPacked',
                status: 'funfilled',
            },
            {
                date: '2020-01-03',
                event: 'orderShipped',
                status: 'shipped',
                agent: 'jazmiro'
            },
            {
                date: '2020-01-04',
                event: 'orderDelivered',
                status: 'delivered',
                agent: 'customer'
            },

        ],
        orderTime: /* date with time */ '9:00 AM',
    }
]