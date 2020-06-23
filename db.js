const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const conf = require('config');

/* 接続先URL */
const url = conf.ENV.DB_HOST;

/* データベース名 */
const dbName = conf.ENV.DB_NAME;

/**
 * 追加オプション
 * MongoClient用オプション設定
 */
const connectOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

/**
 * データベース接続
 * データベース接続用の引数追加
 */
MongoClient.connect(url, connectOption, (err, client) => {

  /* Errorがあれば処理を中断 */
  assert.equal(null, err);

  /* 接続に成功すればコンソールに表示 */
  console.log('Connected successfully to server');

  /** DBに挿入する処理 users->collection (RDBだとtable) */
  // const db = client.db(dbName);
  // db.collection('users',function(err,collection){
  //   collection.insertMany([
  //     {name:'hase', age: '23'},
  //     {name:'ito', age:'23'}
  //   ],function(err,result){
  //     client.close();
  //   })
  // });
  /*DBから値を取得*/
  db.collection('users').find({}).toArray(function(err,result){
    if(err) throw err;
    console.log(result);
    /* DBとの接続切断 */
    client.close();
  });
});
