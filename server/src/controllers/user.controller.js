const userCtrl = {}
const axios = require('axios')


userCtrl.getUserInfo = async (req, res) => {

    try {
        const data = await axios.get(`https://bio.torre.co/api/bios/${req.params.id}`)
        const userInfo = {}
        userInfo.links = data.data.person.links
        userInfo.strengths = data.data.strengths
        userInfo.interests = data.data.interests
        userInfo.experiences = data.data.experiences
        userInfo.jobs = data.data.jobs
        userInfo.languages = data.data.languages

        res.send(userInfo)

    } catch (err) {

        console.log(err)
    }

}

module.exports = userCtrl