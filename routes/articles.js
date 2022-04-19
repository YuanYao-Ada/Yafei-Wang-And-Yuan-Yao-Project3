const express = require('express')
const Article = require('./../models/article')
// const Review = require('./../models/review')
const router = express.Router()

// route for creating new article
router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article() })
})

router.get('/edit/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.render('articles/edit', { article: article })
})

// slug is to modify the url with the article title
// ????? comments now showing
router.get('/:slug', async (req, res) => {
    // const article = await Article.findOne(req.params.id).populate('reviews')
    const article = await Article.findOne({ slug: req.params.slug })
    console.log(article)
    if (article === null) res.redirect('/')
    res.render('articles/show', { article: article })
})

// route to create a new article
router.post('/', async (req, res, next) => {   
    req.article = new Article()
    next()
}, saveArticleAndRedirect('new'))

// route to post a review
//???? review is empty on the page
// router.post('/:id/reviews', async (req, res) => {
//      const article = await Article.findById(req.params.id)
//      const review = new Review(req.body.review)
//      article.reviews.push(review)
//      await review.save()
//      await article.save()
//      res.redirect(`/articles/${article.slug}`)
// })

// route to update an article
router.put('/:id', async (req, res, next) => {   
    req.article = await Article.findById(req.params.id)
    next()
}, saveArticleAndRedirect('edit'))

// route to delete an article
router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

// route to delete a review
// ?????
// router.delete('/:id/reviews/:reviewId', async (req, res) => {
//     const {id, reviewId} = req.params
//     await Article.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
//     await Review.findByIdAndDelete(reviewId)
//     res.redirect(`/${id}`)

// })

// help function to save and redicrect 
function saveArticleAndRedirect(path) {
    return async (req, res) => {
        let article = req.article
        article.title = req.body.title
        article.description = req.body.description
        try {
          article = await article.save()
          res.redirect(`/articles/${article.slug}`)
        //   res.redirect(`/articles/${article.id}`)
        } catch (e) {
          res.render(`articles/${path}`, { article: article })
        }
      }
}


module.exports = router


