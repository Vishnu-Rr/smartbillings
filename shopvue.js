var app = new Vue({
    el:'#shop',
    data:{
addmech:false,
      add:false,
    nnn:true,
      amot:'',
      clos:false,
names:'',
sss:'',
ccc:'',
shop:'',
phone:'',
      detail:[],
      class:false,
      alerts:false,
      name:'',
serial:'',
alert:false,
mrp:'',
price:'',
Quantity:'',
list:[],
seen:true,
bills:false,
serials:'',
low:'',
hide:false,
activeTab: 'Cash_Memo',
date:'',

billings:[
{
  product: null,
  serial: null,
  mrp: null,
  quantity: 1,
  price:null,  
},
{
  product: null,
  serial: null,
  mrp: null,
  quantity: 1,
  price:null,  
},
{
  product: null,
  serial: null,
  mrp: null,
  quantity: 1,
  price:null,  
},
{
  product: null,
  serial: null,
  mrp: null,
  quantity: 1,
  price:null,  
},
{
  product: null,
  serial: null,
  mrp: null,
  quantity: 1,
  price:null,  
},
],
},


mounted(list) {
  var products = localStorage.getItem('products')
  if (products != null) {
    this.list = JSON.parse(products)
  }
  var mechanics = localStorage.getItem('mechanics')
  if (mechanics != null) {
    this.detail = JSON.parse(mechanics)
}

},
computed: {
  totalBillAmount: function() {
    let totalAmount = 0
    for (var i=0; i< this.billings.length; i++) {
      let bill = this.billings[i]
      if (bill.price != null) {
        totalAmount = totalAmount + bill.price
      }
    } 
    return totalAmount
    
  },
  datetimes:function(){
  var final= null;
    var date1=new Date().getDate();
    var months = new Date().getMonth();
var year = new Date().getFullYear();
return final = date1 +"/"+eval(months+1)+"/"+year
},

  discount: function() {
    let Totalmrp = 0
    for (var i=0; i< this.billings.length; i++) {
      let bill = this.billings[i]
      if (bill.fxd != null) {
        Totalmrp = parseInt(Totalmrp) + parseInt(bill.fxd)
    
      }
    }
    return Totalmrp - this.totalBillAmount

  
},
},
  methods:{
    classe(){
this.addmech=!this.addmech
this.alerts=!this.alerts
this.names= this.sss
this.phone=this.ccc
    },
    clearss(index){
this.detail.splice(index,1)
this.clos=!this.clos
this.alerts=!this.alerts
localStorage.setItem('mechanics', JSON.stringify(this.detail))

} ,
   mech(){
    this.addmech=!this.addmech
    this.alerts=!this.alerts
    },
close(detail){



this.detail.push({

id:this.detail.length+1,
name:this.names,
sname:this.totalBillAmount,
cnumber:this.phone,
bill:this.billings,
date:new Date().getDate()+"/"+eval(new Date().getMonth()+1)+"/"+new Date().getFullYear()
})
console.log(this.detail)
this.addmech=!this.addmech
this.alerts=!this.alerts
this.names=''
this.shop=''
this.phone=''
localStorage.setItem('mechanics', JSON.stringify(this.detail))
this.reset()
},
adds(detail){
this.activeTab='Cash_Memo'
this.billings = detail.bill             
this.totalBillAmount=detail.sname
},
uls(){
  this.addmech=!this.addmech
this.alerts=!this.alerts
this.shop=""
},
lists(){
this.alert=!this.alert
},
main(){
  this.clos=!this.clos
  this.alerts=!this.alerts
},


 reset(index){
   this.ccc='',
   this.sss='',
this.billings = [{
  product: null,
  serial: null,
  mrp: null,
  quantity: 1,
  price:null,  
},

{
  product: null,
  serial: null,
  mrp: null,
  quantity: 1,
  price:null,  
},
{
  product: null,
  serial: null,
  mrp: null,
  quantity: 1,
  price:null,  
},
{
  product: null,
  serial: null,
  mrp: null,
  quantity: 1,
  price:null,  
},

{
  product: null,
  serial: null,
  mrp: null,
  quantity: 1,
  price:null,  
},]
 },
 clears(index){
this.list.splice(index,1)
localStorage.setItem('products', JSON.stringify(this.list))

},
funct(list){
  localStorage.setItem('products', JSON.stringify(this.list))

},

    selectProduct(bill, index) {


      if (bill.product != null) {
        let product = this.list.find(function (a) {
          if (a.id == bill.product) {
            return a
          }
        })
        bill.serial = product.seriala
        bill.mrp = product.Mrp
        bill.fxd = bill.quantity*product.Mrp
        bill.saleprice = product.pricev
        bill.price = bill.quantity * product.pricev
bill.totalq=product.stock
      }

     if(index==this.billings.length -1 ){
       this.addBill()
     }
      
 
    
    },
    addamount(detail,index){


  },
    calculateprice(bill){
     if (parseInt( bill.totalq)<parseInt(bill.quantity)){
      alert("your stock is "+bill.totalq+"..please enter less amount")
      return bill.quantity=bill.totalq
    }else{
      bill.price = bill.quantity * bill.saleprice
    bill.fxd=bill.quantity*bill.mrp
      
      
        
    }
  },

    addBill() {
      this.billings.push({
        product: null,
        serial: null,
        mrp: null,
        quantity: 1,
        price: null
      })
      
    },

      functiona(list){

if(this.name=='',this.serial=='',this.mrp=='',this.price=='',this.Quantity==''){return false}
      
        var cr = this.Quantity *this.price
          this.list.push( {
              id:this.list.length+1,
              title:this.name,
               seriala:this.serial,
              Mrp:this.mrp,
              stock:this.Quantity,
             pricev:this.price,
             ttprice:cr,
            })
             
  

          this.name=''
        this.serial=''
       this.mrp=''
      this.price=''
       this.Quantity=''
       this.alert=!this.alert
       this.alerts=!this.alerts
       localStorage.setItem('products', JSON.stringify(this.list))
          
}, 
prints(){
    
window.print()
  
},
lists(){
  this.alert=!this.alert
  this.alerts=!this.alerts

},
      

  clear(index){
this.billings.splice(index,1)
  }
    },

})
