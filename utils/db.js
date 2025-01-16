let mysql  	 = require('mysql2/promise'),
	both  	 = require('../js/both'),
	{ neon } = require('@neondatabase/serverless');

let db = {
  cb: _=>_, conn: [],
  /** minimalist eventEmitter-like code structure to ensure proper behaviour */
  on: function(ev, cb, conn){
		if(ev==='pooled') this.cb=cb;
		(conn = db.conn)&&cb(conn)
	},
	query: function(query, args) {
		return new Promise((res, rej)=>{
			/** the makeshift event-callback pattern below is needed to avoid errors when the connection is pooled - which seems to take a fraction longer */
			typeof query=='object'&&(args = query.values, query=query.text),
			this.on('pooled', function(conn) {
			  conn.query(query, args).then(arr=>{
				arr = arr.rows||arr, res(isMySQL ? arr[0] : arr)
			  }).catch(rej).finally(_=>conn.release&&conn.release())
			})
		})
	  }
	}

module.exports = function(args, parts) {
	({ isMySQL} = args);
	let { connectionString } = args,
	config = {}, asString=obj=>Object.defineProperty(obj, 'toString', {
		//enumerable defaults to false
		value: function() {
		  //'port' should be before 'database' in the object below for proper behavior 
		  let sort = {'://':'user', ':':'password', '@':'host', '_:_':'port', '/':'database'}
		  sort_vs  = Object.values(sort), kVs = Object.keys(this).map(key=>~sort_vs.indexOf(key)?'':`${key}=${this[key]}`).filter(e=>e).join('&');

		  return Object.keys(sort).map(key=>key.replace(/_/g, '')+this[sort[key]]).join('') + ('?'.repeat(!!kVs)) + kVs
		}
	});
	asString(config),

	(parts = both.dBParts(connectionString)).shift(),
	['user', 'password', 'host', 'port', 'database'].forEach((key, i)=>config[key]=parts[i]),
	parts[5]&&parts[5].split('&').forEach(param=>{
		let [key, value]  = param.split('=');
		config[key.replace(/_[^]/, a=>a.replace('_', '').toUpperCase())] = value
	});

	return new Promise(async (resolve, reject)=>{
	//   await mysql.createPool(config).getConnection().then(conn=>db.cb(db.conn=conn, resolve(db))).catch(reject)
	    let client = neon(connectionString);
		/** automatic release of connection back to pool after db.conn.query */
		db.conn = { query:(query, args)=>((args||=[]).forEach(arg=>query=query.replace(/\$[0-9]|\?/, arg)), client(query))},
		resolve(db)
	})
}