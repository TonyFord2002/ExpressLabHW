require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

const fs = require('fs') 
app.engine('hypatia', (filePath, options, callback) => { 
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)

    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', options.message + '</h1>')
      .replace('#content#', options.content + '</div>' )
      .replace('#image#', '<img src=' + options.image + '>' )
    return callback(null, rendered)
  })
})

  app.get('/', (req, res) => {
	res.render('template1', { title: 'Welcome', message: "<h1 style ='color: blue'> Hello!", content: '<div style="color: lightcoral; font-size: 40px">Welcome everyone to my homework page', image: 'https://media2.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif' })
  })
  
  app.get('/2', (req, res) => {
	res.render('template2', { title: 'Page 2', message: "<h1>Welcome to the second page", content: 'This page is not styled like the first one.' })
  })
  
  app.get('/3', (req, res) => {
	res.render('template2', { title: 'Page 3', message: "<h1 style='color: red'>Welcome to the third page", content: "<div style = 'color: chartreuse; font-size:50px'>This page is different!" })
  })

  app.get('/4', (req, res) =>{
    res.render('template1', {title: 'Page 4', message: '<h1>Welcome to the fourth page', content: 'This page is different too!', image: 'http://25.media.tumblr.com/tumblr_mdnxix2KRL1rd02nao1_500.gif' })
  })

  app.get('/5', (req, res) => {
	res.render('template1', { title: 'Page 5', message: '<h1 style="color: lime">Welcome to the fifth page', content: "<div style='color:snow; font-size:200px'>YES!", image: "https://c.tenor.com/QQNtnfVCfvUAAAAM/baby-scream-yeah.gif" })
  })

  app.get('/6', (req, res) => {
	res.render('template2', { title: 'Page 6', message: '<h1>Welcome to the sixth page', content: "<div style='color:coral; font-size:40px'>Different is good!" })
  })
  
  app.get('/7', (req, res) => {
	res.render('template2', { title: 'Page 7', message: '<h1>Welcome to the seventh page', content: '<div style="color: red; font-size:70px"> In some ways we are all the same too.' })
  })
  
  app.get('/8', (req, res) => {
	res.render('template1', { title: 'Page 8', message: '<h1>Welcome to the eighth page', content: '<div style="color:blue; font-size:30px">We are all software deveolpers after all!', image:"https://media1.giphy.com/media/ekjmhJUGHJm7FC4Juo/200w.gif?cid=82a1493buthnqtysz5f542gbcg8nctt4oizhrh756rovd8uf&rid=200w.gif&ct=g" })
  })

  app.get('/9', (req, res) =>{
    res.render('template2', {title: 'Page 9', message: '<h1>Welcome to the nineth page', content: '<div style="color:gold; font-size:30px">But at the end of the day there is always one truth left...' })
  })

  app.get('/10', (req, res) => {
	res.render('template1', { title: 'Page 10', message: '<h1>Welcome to the tenth page', content: `<div style='color:tomato; font-size:140px'>"We dont do this for fun, we do this for the money!"`, image: 'https://media0.giphy.com/media/LdOyjZ7io5Msw/giphy.gif' })
  })


app.set('views', './views') 
app.set('view engine', 'hypatia') 

app.listen(port,() => {
    console.log('listening on port' , port);
});