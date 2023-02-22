const axios = require('axios')
const key =  process.env.RAJA_ONKIR_CREDENTIAL
const baseUrl = "http://dev3.dansmultipro.co.id/api/recruitment/positions"

class jobController{
  static async findAll(req, res, next){
    try {
      const search = []
      const {page, description, location, full_time} = req.query
      if(page){
        search.push(`page=${page}`)
      }
      if(description){
        search.push(`description=${description}`)
      }
      if(location){
        search.push(`location=${location}`)
      }
      if(full_time){
        search.push(`full_time=true`)
      }

      const { data } = await axios({
        method: "get",
        url: baseUrl + ".json" + `?${search.join('&')}`
      });
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }
  static async findOne(req, res, next){
    try {
      let {id} = req.params
      const { data } = await axios({
        method: "get", 
        url: baseUrl + `/${id}`
      });
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = jobController