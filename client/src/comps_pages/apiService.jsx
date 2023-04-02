import axios from "axios";

export const API_URL = "http://localhost:3002";

export const TOKEN_KEY = "videos_token"


export const doApiGet = async(_url) => {
  // headers: -> שולח דרכו טוקן שיושב בלוקאל
  // גם אם אין בלוקאל מידע , לא נקבל טעות
  try {
    const resp = await axios({
      url: _url,
      headers:{
        "x-api-key":localStorage[TOKEN_KEY]
      }
    })
    return resp.data;
  }
  catch(err){
    // throw -> reject מקביל ל
    // ככה שנדע שיש בעיה עם הבקשה
    throw err;
  }
}

// for post,put,patch,delete
export const doApiMethod = async(_url,_method,_body = {}) => {
  try{
    const resp = await axios({
      url:_url,
      method:_method,
      data:_body,
      headers:{
        "x-api-key":localStorage[TOKEN_KEY]
      }
    })
    return resp.data;
  }
  catch(err){
    throw err;
  }
}