
Product.all.destroy
User.all.destroy


puts "seeding products, hold on"

Product.create(name: "Push Active True ", description: "", Wireless Earbuds price: 79,99,img_url: "https://skdy-assets.s3.amazonaws.com/a29c334e987b81ec7c8618fa41a6b60995f8d320ab4d6b7d26cd169b46a2a0c4.jpg")

Product.create(name: "Grind Active True Wireless Earbuds",description: "", price: 79,99,img_url: "https://skdy-assets.s3.amazonaws.com/727f71c6944b1752709637c2effa5ca79504de8f9145486afd14afae3b5b2cc3.jpg")

Product.create(name: "Dime 2 True Wireless Earbuds",description: "", price: 39,99,img_url: "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/ad7a181f0f360af9619055416f3b6548a106c01db923eaab6c029eb2111a92cc.jpg")

Product.create(name: "Crusher Evo Sensory Bass",description: "", price: 52,49,img_url: "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/5e54d2ed0e1abc03390787b727533ef3194e390fa8d0b4d5ea5078dd7751374f.jpg")

Product.create(name: "Mod True Wireless Earbuds",description: "", price: 59,99,img_url: "https://skdy-assets.s3.amazonaws.com/9f36142aa5337efb10c17091ffad58d7ac0a559b5620c84dea5f3796d2bde6d5.jpg")

Product.create(name: "Indy ANC Noise Canceling True Wireless",description: "", price: 79,99,img_url: "https://skdy-assets.s3.amazonaws.com/7d59164d4e277ae240e6703dfbc175d11791959ae7f262ac714971dcc4cf20a0.jpg")

Product.create(name: "Jib 2 True Wireless Earbuds",description: "", price: 24,99,img_url: "https://skdy-assets.s3.amazonaws.com/d4a737d9c8b9b0b799480714f7b837207d48b8eec1547bd814a36d2e2664d5d5.jpg")


puts "seeding users"

User.create(name: "Alan", password_digest:"", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMMdfGVo0DUO60HH2rPeiBySnx-93spUlmw&usqp=CAU")



puts "seeding reviews"

Review.create(comment: "This is the best earbud I ever had, ...and the only one tho", rating: rand(1..5) ,user_id: User.all.sample.id,product_id: Product.all.sample.id)
Review.create(comment: "meh...", rating: rand(1..5) ,user_id: User.all.sample.id,product_id: Product.all.sample.id)
Review.create(comment: "WOW, it's better than Apple's", rating: rand(1..5) ,user_id: User.all.sample.id,product_id: Product.all.sample.id)
Review.create(comment: "I dont know... I was expecting it to be louder", rating: rand(1..5) ,user_id: User.all.sample.id,product_id: Product.all.sample.id)
Review.create(comment: "I lost them, but for the 10 minutes I had it, It was OK", rating: rand(1..5) ,user_id: User.all.sample.id,product_id: Product.all.sample.id)
Review.create(comment: "My dog seem to like them, Its the second time they eat it.", rating: rand(1..5) ,user_id: User.all.sample.id,product_id: Product.all.sample.id)
Review.create(comment: "If you are trying to waste your money, buy it, otherwise buy anything else.", rating: rand(1..5) ,user_id: User.all.sample.id,product_id: Product.all.sample.id)
Review.create(comment: "It's great", rating: rand(1..5) ,user_id: User.all.sample.id,product_id: Product.all.sample.id)
Review.create(comment: "The battery last 2 days, awesome!", rating: rand(1..5) ,user_id: User.all.sample.id,product_id: Product.all.sample.id)



puts "uff... we are done here, back to you dev."