sian = User.create!(
  email: "sian.m.stone@gmail.com",
  first_name: "Sian",
  last_name: "Stone"
)


jane = User.create!(
  email: "jane.doe@example.com",
  first_name: "Jane",
  last_name: "Doe"
)


Item.create!(
  [
    {
      title: "Infinite Jest",
      description: "Cult book by David Foster Wallace",
      user: sian,
      image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1446876799l/6759.jpg"
    },
    {
      title: "Catch-22",
      description: "Novel by Joseph Heller",
      user: sian,
      image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360503366l/857043.jpg"
    },
    {
      title: "Slaughterhouse 5",
      description: "Classic novel by Kurt Vonnegut",
      user: sian,
      image_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560958806l/108978._SY475_.jpg"
    }
  ]
)
