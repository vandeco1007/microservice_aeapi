module.exports= {
  getauth: async(req, res, next) =>{
    var axios = require('axios');
    let data = {"userid": "jun88996", "password": "6b18f445251c73b6f68b0026d0e5bb1fb484c1fc"}

    var config = {
      method: 'post',
      url: 'https://boapi.jun88.bet/jun88-ims/api/v1/login',
      headers: { 
        'Authorization': ' undefined', 
        'Content-Type': ' application/json;charset=UTF-8', 
        'Referer': ' https://bo.jun88.bet/', 
        'sec-ch-ua': ' "Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"', 
        'sec-ch-ua-mobile': ' ?0', 
        'sec-ch-ua-platform': ' "Windows"', 
        'User-Agent': ' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36'
      },
      data : data
    };
    console.log(req.body)

    axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}