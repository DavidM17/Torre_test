const analyticsCtrl = {}
const axios = require('axios')


analyticsCtrl.getAnalyticsSalary = async (req, res) => {

    try {

        const result = await axios.post('https://search.torre.co/opportunities/_search/?currency=USD%24&page=0&periodicity=hourly&lang=es&size=100&aggregate=false&offset=0', { "skill/role": { "text": req.params.id, "experience": "potential-to-develop" } })

        const salaries = []
        result.data.results.forEach(element => {

            if (element.compensation !== null) {
                let min = 0;
                let max = 0;
                if (element.compensation.data !== null) {

                    if (element.compensation.data.minAmount !== null) {
                        min = element.compensation.data.minAmount
                    }
                    if (element.compensation.data.maxAmount !== null) {
                        max = element.compensation.data.maxAmount
                    }

                    if (min !== 0 || max !== 0) {
                        if (min == 0) min = max
                        if (max == 0) max = min
                        if (element.compensation.data.currency == 'USD$') {
                            if (element.compensation.data.periodicity == 'monthly') {
                                salaries.push(((min + max) / 2) * 12)
                            }
                            if (element.compensation.data.periodicity == 'yearly') {
                                salaries.push((min + max) / 2)
                            }
                        }
                    }
                }
            }

        });

        res.json(salaries)

    } catch (err) {
        console.log(err)
    }
}

module.exports = analyticsCtrl