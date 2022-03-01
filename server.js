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
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#','<div>'+ options.content + '</div>' )
      .replace('#image#', '<img src=' + options.image + '>' )
    return callback(null, rendered)
  })
})

  app.get('/', (req, res) => {
	res.render('template1', { title: 'Welcome', message: 'Welcome', content: 'Welcome everyone to my homework page', image: 'https://images.unsplash.com/photo-1600577916048-804c9191e36c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VsY29tZSUyMHNpZ258ZW58MHx8MHx8&w=1000&q=80' })
  })
  
  app.get('/2', (req, res) => {
	res.render('template2', { title: 'Page 2', message: 'Welcome to page 2', content: 'Page 2 template 1' })
  })
  
  app.get('/3', (req, res) => {
	res.render('template1', { title: 'Page 3', message: 'Welcome to page 3', content: 'Page 3 template 1' })
  })

  app.get('/4', (req, res) =>{
    res.render('template1', {title: 'Page 4', message: 'Welcome to page 4', content: 'Page 4 template 1' })
  })

  app.get('/5', (req, res) => {
	res.render('template1', { title: 'Page 5', message: 'Welcome to page 5', content: 'Page 5 template 1' })
  })

  app.get('/6', (req, res) => {
	res.render('template2', { title: 'Page 6', message: 'Welcome to page 6', content: 'Page 1 template 2' })
  })
  
  app.get('/7', (req, res) => {
	res.render('template2', { title: 'Page 7', message: 'Welcome to page 7', content: 'Page 2 template 2' })
  })
  
  app.get('/8', (req, res) => {
	res.render('template2', { title: 'Page 8', message: 'Welcome to page 8', content: 'Page 3 template 2' })
  })

  app.get('/9', (req, res) =>{
    res.render('template2', {title: 'Page 9', message: 'Welcome to page 9', content: 'Page 4 template 2' })
  })

  app.get('/10', (req, res) => {
	res.render('template2', { title: 'Page 10', message: 'Welcome to page 10', content: 'Page 5 template 2' })
  })


app.set('views', './views') 
app.set('view engine', 'hypatia') 

app.listen(port,() => {
    console.log('listening on port' , port);
});