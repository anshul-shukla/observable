console.log("=================traditional way===================")

function fullfill(){
  console.log("fullfill");
}

function reject(){
  console.log("reject");
}

function receiver(fullfill, reject){
  console.log("success");
  if(true){
    fullfill();
  }else{
    reject();
  }
}
receiver(fullfill,reject);

console.log("=================promise way===================")


var promise = new Promise(function(fullfill, reject){ // created proxy object 'promise'
      console.log("success");
      if(true){
        fullfill();
      }else{
        reject();
      }
});

promise.then(function(){
  console.log("fullfill");
},
function(){
  console.log("reject");
});

console.log("=================observable way===================")

var observable = Rx.Observable.create(function(observer){
    observer.next(1);
    observer.next(2);
    return function () {
        console.log('disposed');
    };
})

var subscription = observable.subscribe(function(x){
    console.log(x);
},
function(error){
  console.log(error);
},
function(){
  console.log('completed !')
})

subscription.unsubscribe();
