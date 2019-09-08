import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 0DyxfzJ_UMXTY-CI7T_B0xtvLqI4aVMH_4luDDvRDS4R25KsnC1K32N1F8UlKqovLMUYYZnzu3rT_F3BNox4tr6M8QaQdhrxrbzW3oBp-CF0lxSchiP0Tx796PlzXXYx'
    }
});