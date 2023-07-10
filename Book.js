const express=require('express')
const router=express.Router()
const db=require('./db')


router.get('/',(request,response)=>{
    const stmt='select * from Book_Tb'


    db.query(stmt,(error,data)=>{

        console.log(data);

        if (error) {
            response.send(error)
          } else {
            response.send(data)
          }
    })
})
router.post('/',(request,response)=>{
  const stmt=`insert into Book_Tb values(${request.body.id}, '${request.body.b_name}','${request.body.author}','${request.body.book_type}','${request.body.price}','${request.body.publishedDate}','${request.body.langauge}')`;


  db.query(stmt,(error,data)=>{

      console.log(data);

      if (error) {
          response.send(error)
        } else {
          response.send(data)
        }
  })
})
router.put('/:id',(request,response)=>{
  const stmt=`update Book_Tb set b_name='${request.body.b_name}',author='${request.body.author}',book_type='${request.body.book_type}',price='${request.body.price}',publishedDate='${request.body.publishedDate}',langauge='${request.body.langauge}'  where id = ${request.params.id}`;

  db.query(stmt,(error,data)=>{

      console.log(data);

      if (error) {
          response.send(error)
        } else {
          response.send(data)
        }
  })
})

module.exports=router