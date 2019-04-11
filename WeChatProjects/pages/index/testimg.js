WeixinJSBridge.invoke('imagePreview', {
  current: 'http://inews.gtimg.com/newsapp_bt/0/1693121381/641',
  urls: [ // 所有图片的URL列表，数组格式
    'https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg',
    'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
    'https://img1.gtimg.com/10/1048/104857/10485729_980x1200_0.jpg'
  ]
}, function (res) {
  console.log(res.err_msg)
})