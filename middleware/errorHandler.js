const errorHandler = (err, req, res, next) =>{
  let code = 500
  let message = "Internal Server Error"
  console.log(err)

  if(err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError'){
    let errMsg = err.errors.map(el => el.message)
    code = 400
    message = errMsg[0]
  } else if(err.name === 'invalid_login'){
    code = 401
    message = "invalid username or password"
  } else if(err.name === "job_detail_not_found"){
    code = 404
    message = "job detail not found"
  } else if(err.name === "forbidden"){
    code = 403
    message = "your not authorize"
  } else if(err.name === "invalid_token" ||err.name === "JsonWebTokenError"){
    code = 401
    message = "error authentication - invalid token"
  } else if(err.name === "page_not_found"){
    code = 404
    message = "page not Found"
  } else if(err.name === "error_ext_api"){
    code = 400
    message = "api external error"
  }
  
  res.status(code).json({message})
}

module.exports = errorHandler