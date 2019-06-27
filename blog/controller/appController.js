const mongoose = require('mongoose')

//importing models
const BlogModel = require('./../models/Blog')
const shortid = require('shortid')

//importing libraries
const logger = require('./../libs/logger')
const check = require('./../libs/check')
const response = require('./../libs/response')

let getAllBlogs = (req, res)=>{
    BlogModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result)=>{
            if(err){
                console.log(err)
                logger.error(err.message, "appController: getAllBlogs", 10)
                let apiResponse = response.generate(true, err.message, 500, null)
                res.send(apiResponse)
            } else if(check.isEmpty(result)){
                logger.info("No Blogs Found", "appController: getAllBlogs", 10)
                let apiResponse = response.generate(true, "No Blogs Found", 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, "All Blogs Found", 200, result)
                res.send(apiResponse)
            }
        })
} // end get all users

let singleBlog = (req, res)=> {
    BlogModel.findOne({'blogId': req.params.blogId}, (err, result)=>{
        if(err){
            console.log(err)
            logger.error(err.message, "appController: singleBlog", 10)
            let apiResponse = response.generate(true, err.message, 500, null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)){
            logger.info("No Blog Found", "appController: singleBlog", 10)
            let apiResponse = response.generate(true, "No Blog Found", 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, "Blog Found", 200, result)
            res.send(apiResponse)
        }
    })
} // end single blog

let viewByAuthor = (req, res)=>{
    BlogModel.findOne({'author': req.params.author}, (err, result)=>{
        if(err){
            console.log(err)
            logger.error(err.message, "appController: viewByAuthor", 10)
            let apiResponse = response.generate(true, err.message, 500, null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)){
            logger.info("No Author Found", "appController: viewByAuthor", 10)
            let apiResponse = response.generate(true, "No Author Found", 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, "Author Found", 200, result)
            res.send(apiResponse)
        }
    })
} // end view by author

let viewByCategory = (req, res)=>{
    BlogModel.findOne({'category': req.params.category}, (err, result)=>{
        if(err){
            console.log(err)
            logger.error(err.message, "appController: viewByCategory", 10)
            let apiResponse = response.generate(true, err.message, 500, null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)){
            logger.info("No Category Found", "appController: viewByCategory", 10)
            let apiResponse = response.generate(true, "No Category Found", 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, "Category Found", 200, result)
            res.send(apiResponse)
        }
    })
} // end view by category

let createBlog = (req, res)=>{
    let blogId = shortid.generate()
    let today = Date.now()

    let newBlog =  new BlogModel({
        blogId: blogId,
        title: req.body.title,
        description: req.body.title,
        bodyHtml: req.body.bodyHtml,
        author: req.body.fullname,
        category: req.body.category,
        createdOn: today,
        modifiedOn: today
    })

    let tags = (req.body == undefined || req.body.tags == null || req.body.tags == '')? []: req.body.tags.split(',')
    newBlog.tags = tags

    newBlog.save((err, result)=>{
        if(err){
            console.log(err)
            let apiResponse = response.generate(true, "Failed to create Blog", 500, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, "Blog Created", 200, result)
            res.send(apiResponse) 
        }
    })
} // end create Blog

let deleteBlog = (req, res)=> {
    BlogModel.deleteOne({'blogId': req.params.blogId}).exec((err, result)=>{
        if(err){
            console.log(err)
            logger.error(err.message, "appController: deleteBlog", 10)
            let apiResponse = response.generate(true, err.message, 500, null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)){
            logger.info("No Blog Found", "appController: deleteBlog", 10)
            let apiResponse = response.generate(true, "No Blog Found", 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, "Blog Deleted Successfully", 200, result)
            res.send(apiResponse)
        }
    })
} // end delete blog

let editBlog = (req, res)=> {
    let options = req.body

    BlogModel.update({'blogId': req.params.blogId}, options, {multi: true}, (err, result)=>{
        if(err){
            console.log(err)
            logger.error(err.message, "appController: editBlog", 10)
            let apiResponse = response.generate(true, err.message, 500, null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)){
            logger.info("No Blog Found", "appController: editBlog", 10)
            let apiResponse = response.generate(true, "No Blog Found", 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, "Blog Edited Successfully", 200, result)
            res.send(apiResponse)
        }
    })
} // end edit blog

let increaseBlogViewCount = (req, res)=> {
    BlogModel.findOne({'blogId': req.params.blogId}, (err, result)=>{
        if(err){
            console.log(err)
            logger.error(err.message, "appController: increaseBlogViewCount", 10)
            let apiResponse = response.generate(true, err.message, 500, null)
            res.send(apiResponse)
        } else if(check.isEmpty(result)){
            logger.info("No Blog Found", "appController: increaseBlogViewCount", 10)
            let apiResponse = response.generate(true, "No Blog Found", 404, null)
            res.send(apiResponse)
        } else {

            result.views += 1
            result.save((err, result)=>{
                if(err){
                    let apiResponse = response.generate(true, 'Failed to Update the View Count', 500, null)
                    res.send(apiResponse)
                } else{
                    let apiResponse = response.generate(false, "Blog Updated Successfully", 200, result)
                    res.send(apiResponse)
                }
            }) 
        }
    })
} // end increase blog view count

module.exports = {
    getAllBlogs: getAllBlogs,
    singleBlog: singleBlog,
    createBlog: createBlog,
    deleteBlog: deleteBlog,
    editBlog: editBlog,
    viewByAuthor: viewByAuthor,
    viewByCategory: viewByCategory,
    increaseBlogViewCount: increaseBlogViewCount
}