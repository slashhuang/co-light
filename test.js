

/*测试co*/

let co = require('./co');

var p1 = (val)=>Promise.resolve({
	then:(resolve,reject)=>{
		setTimeout(resolve,1000,val);
	}
})

function* s(){
	let y = yield p1('a');
	console.log(y);
	let q = yield p1(y+d);
	console.log(q);
	return y + 2+q
};
let gen = s();

// print 
// a
// b
// finally
// ab
co(gen).then((t)=>{
	console.log('finally');
	console.log(t)
}).catch((err)=>{
	console.log('err----',err)
})
