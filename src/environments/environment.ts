const baseUrl= 'http://lab.ttooc.xyz';
// const baseUrl= 'http://193.112.239.236:60443';
// const baseUrl= 'http://crland.ttoto.net:60443';

export const environment = {
  baseUrl:baseUrl,
  production:false,
  url:baseUrl+'/api/login',
  config:baseUrl+'/api/config',
  oderApi:baseUrl+'/recv/api/download',
  pay:baseUrl+'/order/api/pay',
  deviceActivateAPI: baseUrl+'/device/api',
  order:baseUrl+'/recv/api/order',
  vip:baseUrl+'/crm/api/vip',
  applyVip:baseUrl+'/crm/api/join',
  orderList:baseUrl+'/persistence/api/orderByStore',
  message:baseUrl +'/account/api/message',
  uploadLog: baseUrl + "/device/api/test-upload-file",
  api: '',
  ws: ''
};

