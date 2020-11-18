const app = Vue.createApp({
    // data() {
    //     return {
    //         cart:0,
    //         product: 'Socks',
    //         brand: 'Vue Mastery',
    //         image: './assets/images/socks_blue.jpg',
    //         inStock: false,
    //         details: ['50% cotton', '30% wool', '20% polyester'],
    //         variants: [
    //           { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
    //           { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
    //         ]
    //     }
    // },

    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            // image: './assets/images/socks_blue.jpg',
            selectedVariant: 0,
            // inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            onSale: false
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        // updateImage(variantImage) {
        //     this.image = variantImage
        // }
        updateVariant(index) {
            this.selectedVariant = index
            // console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        onSaleTitle() {
            if(this.onSale) {
                return this.title + ' is on sale'
            } else {
                return this.title
            }
        }
    }
})
