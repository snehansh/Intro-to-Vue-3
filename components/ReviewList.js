app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave this {{ review.rating }} stars
                <br />
                "{{ review.review }}"
                <span v-if="review.recommendation === 'yes'">{{ review.name }} recommends this item</span>
                <span v-else>{{ review.name }} does not recommend this item</span>
            </li>
        </ul>
    </div>
    `
})