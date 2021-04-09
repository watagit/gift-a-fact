package tweet

type Item struct {
  Text string `json:"text"`
}

type Tweets struct {
  Items []Item
}

func New() *Tweets {
  return &Tweets{}
}

func (r *Tweets) Add(item Item) {
  r.Items = append(r.Items, item)
}

func (r *Tweets) GetAll() []Item {
  return r.Items
}
