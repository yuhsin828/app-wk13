import axios from "axios";

export const getUbikeInfo = async () => {
  const { data } = await axios.get('https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json?fbclid=IwAR3_-94j24mJkpmzM93DgAu3u7ikSNH94w1LbzJLtLLpTNvLZCzKDurM2Sg');
  let myData = data.filter((item) => item.sarea == "大安區");
  return myData;
};
