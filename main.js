const app = Vue.createApp({
    data() {
        return {
            // cart: 0,
            cart: [],
            premium: true
        }
    },
    methods: {
        // updateCart() {
        // updateCart(id) {
        //     // this.cart += 1
        //     this.cart.push(id)
        // }
        addItem(id) {
            // this.cart += 1
            this.cart.push(id)
        },
        removeItem(id) {
            // this.cart += 1
            // my-attempt incorrect
            // this.cart.splice(id)

            const index = this.cart.indexOf(id)
            if (index > -1) {
                this.cart.splice(index, 1)
            }
        }
    }
})
