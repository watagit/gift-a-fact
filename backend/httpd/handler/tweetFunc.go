package handler

import (
  "gift-a-fact/tweet"
  "github.com/ChimeraCoder/anaconda"
  "github.com/gin-gonic/gin"
  "log"
  "net/http"
)

func TweetsGet(tweets *tweet.Tweets) gin.HandlerFunc {
  return func(c *gin.Context) {
    result := tweets.GetAll()
    c.JSON(http.StatusOK, result)
  }
}

type TweetPostRequest struct {
  Text string `json:"text"`
}

func TweetPost(api *anaconda.TwitterApi, post *tweet.Tweets) gin.HandlerFunc {
  return func(c *gin.Context) {
    requestBody := TweetPostRequest{}
    err := c.Bind(&requestBody)
    if err != nil {
      log.Fatal("Error binding")
    }

    item := tweet.Item{
      Text: requestBody.Text,
    }
    post.Add(item)

    _, err = api.PostTweet(item.Text, nil)
    if err != nil {
      log.Fatal("Error post tweet")
    }

    c.Status(http.StatusNoContent)
  }
}
