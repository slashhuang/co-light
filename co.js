/*
 * @Author slashhuang
 * 17/3/20
 * 简单版的co
 */

module.exports = (gen)=>{
	let basePromise=(value)=>{
			let nextGen = gen.next(value); 				
			let nextVal = nextGen['value'];
			if(!nextGen.done){
				return Promise.resolve(nextVal).then(basePromise)
			}else{
				return Promise.resolve(nextVal)
			}
		};
	return new Promise((resolve,reject)=>{
		//启动generator
		 let start = gen.next()['value'];
		 Promise.resolve(start).then(resolve)
	}).then(basePromise)
}