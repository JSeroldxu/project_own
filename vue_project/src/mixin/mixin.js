import { Toast } from 'vant';
import Vue from 'vue'
Vue.use(Toast);
//时间格式化
var padDate=function(va){
    va=va<10?'0'+va:va;
    return va
  }
  export let filtersTime = {
    filters:{
      formatDate:function (val) {
        let value=new Date(val);
        let year=value.getFullYear();
        let month=padDate(value.getMonth()+1);
        let day=padDate(value.getDate());
        let hour=padDate(value.getHours());
        let minutes=padDate(value.getMinutes());
        let seconds=padDate(value.getSeconds());
        return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
      },
      yearTime:function (val) {
        let value=new Date(val);
        let year=value.getFullYear();
        return year;
      },
      monthTime:function (val) {
        let value=new Date(val);
        let month=padDate(value.getMonth()+1);
        let day=padDate(value.getDate());
        return month+'-'+day;
      },
      hourTime:function (val) {
        let value=new Date(val);
        let hour=padDate(value.getHours());
        let minutes=padDate(value.getMinutes());
        let seconds=padDate(value.getSeconds());
        return hour+':'+minutes +':'+seconds;
      },
      yearMonthTime:function (val) {
        let value=new Date(val);
        let year=value.getFullYear();
        let month=padDate(value.getMonth()+1);
        let day=padDate(value.getDate());
        return year+'-'+month+'-'+day
      },
    },
    methods:{
      //阿里云上传设置资源名
      timestamp() {
        parseInt()
        let time = new Date();
        let y = time.getFullYear();
        let m = time.getMonth() + 1;
        let d = time.getDate();
        let h = time.getHours();
        let mm = time.getMinutes();
        let s = time.getSeconds();
  
        return "" + y + this.add0(m) + this.add0(d) + this.add0(h) + this.add0(mm) + this.add0(s);
      },
      add0(m) {
        return m < 10 ? '0' + m : m;
      },
    //  图片压缩
      compress(img) {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext('2d');
        //瓦片canvas
        let tCanvas = document.createElement("canvas");
        let tctx = tCanvas.getContext("2d");
        let initSize = img.src.length;
        // let width = img.width;
        // let height = img.height;
  
        let image = new Image()
        image.src = img.src
        let width = image.width
        let height = image.height
        console.log(width)
        console.log(height)
        console.log(width * height / 4000000)
        console.log(width * height / 1000000)
        //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
        let ratio;
        if ((ratio = width * height / 4000000) > 1) {
          console.log("大于400万像素")
          ratio = Math.sqrt(ratio);
          width /= ratio;
          height /= ratio;
        } else {
          ratio = 1;
        }
        canvas.width = width;
        canvas.height = height;
        //        铺底色
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //如果图片像素大于100万则使用瓦片绘制
        let count;
        if ((count = width * height / 1000000) > 1) {
          count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
          console.log('瓦片数量：' + count)
          //            计算每块瓦片的宽和高
          let nw = ~~(width / count);
          let nh = ~~(height / count);
          tCanvas.width = nw;
          tCanvas.height = nh;
          for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
              tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
              ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
            }
          }
        } else {
          ctx.drawImage(img, 0, 0, width, height);
        }
        //进行最小压缩
        let ndata = canvas.toDataURL('image/jpeg');
        console.log('压缩前：' + initSize);
        console.log('压缩后：' + ndata.length);
        console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
        // tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
  
  
        console.log(ndata)
        return ndata
      },
      Toast() { 
        Toast.loading({
          mask: true,
          message: '加载中...'
        });
      },
      ToastClear() { 
        Toast.clear()
      }
    // //   数字转化
    //     changeNum(num) { 
    //         console.log(typeof num.toString())
    //         let numStr = num.toString()
    //         if (numStr.length < 5) {
    //             return num;
    //         } else if (numStr.length > 4 && numStr.length < 9) { 
    //             return  parseFloat(num / 10000).toFixed(2) + '万'
    //         }
    //     }
    }
  }
  