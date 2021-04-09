package main

import (
  "gift-a-fact/httpd/handler"
  "gift-a-fact/tweet"
  "github.com/ChimeraCoder/anaconda"
  "github.com/gin-gonic/gin"
  "github.com/joho/godotenv"
  "log"
  "os"
)

type TwitterAccount struct {
  AccessToken       string `json:"accessToken"`
  AccessTokenSecret string `json:"accessTokenSecret"`
  ConsumerKey       string `json:"consumerKey"`
  ConsumerSecret    string `json:"consumerSecret"`
}

func main() {
  err := godotenv.Load()
  if err != nil {
    log.Fatal("Error loading .env file")
  }

  anaconda.SetConsumerKey(os.Getenv("CONSUMER_KEY"))
  anaconda.SetConsumerSecret(os.Getenv("CONSUMER_SECRET"))
  api := anaconda.NewTwitterApi(os.Getenv("ACCESS_TOKEN"), os.Getenv("ACCESS_TOKEN_SECRET"))

  r := gin.Default()

  item := tweet.New()
  r.GET("/tweet", handler.TweetsGet(item))
  r.POST("/tweet", handler.TweetPost(api, item))

  err = r.Run()
  if err != nil {
    log.Fatal("Error running")
  }
}
