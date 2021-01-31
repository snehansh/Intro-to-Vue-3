app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <p>Would you recommend this product?</p>
        <input 
            type="radio"
            id="yes"
            name="recommendation"
            value="yes"
            v-model="recommendation">
        <label for="yes">Yes</label>
        <input 
            type="radio"
            id="no"
            name="recommendation"
            value="no"
            v-model="recommendation">
        <label for="no">No</label><br>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>Select</option>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <input class="button" type="submit" value="Submit">

    </form>`,
    data() {
        return {
            name: '',
            review: '',
            recommendation: 'yes',
            rating: 'Select'
        } 
    },
    methods: {
        onSubmit() {
            if(this.name === '' || this.review === '' || this.rating === null) {
                alert('Review is incomplete. Please fill out every field')
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommendation: this.recommendation
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
        }
    }
})