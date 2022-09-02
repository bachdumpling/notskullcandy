Product.destroy_all
Review.destroy_all
User.destroy_all

puts "seeding products, hold on"

Product.create!(name: "Push Active True Wireless Earbuds", description: "Voice Control, Adventure Ready.",avg_rating:rand(1..5),  price: "79.99", product_img: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/327/52611/df7ce3d9546fdb41d7cd5ca25f8177f4f675cd2584ff03839441f40853993cef__38242.1661384237.jpg?c=2",img_url: "https://skdy-assets.s3.amazonaws.com/a29c334e987b81ec7c8618fa41a6b60995f8d320ab4d6b7d26cd169b46a2a0c4.jpg")

Product.create(name: "Grind Active True Wireless Earbuds",description: "Voice Control, Ultimate Freedom.",avg_rating:rand(1..5),  price: "79.99", product_img: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/332/53685/cdda5382c1ccc6c692724af68c212b7a6a1353e63192f5ebaa8cc586e1568e00__23670.1661800642.jpg?c=2",img_url: "https://skdy-assets.s3.amazonaws.com/727f71c6944b1752709637c2effa5ca79504de8f9145486afd14afae3b5b2cc3.jpg")

Product.create(name: "Dime 2 True Wireless Earbuds",description: "Mini, Mighty, Findable", price: "39.99",avg_rating:rand(1..5), product_img: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/389/33379/d3964cb26fef710b3d8bc3ea7f2f691ee6e6f67bbdf6c7e23eace10a95cec00f__77109.1655836012.png?c=2",img_url: "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/ad7a181f0f360af9619055416f3b6548a106c01db923eaab6c029eb2111a92cc.jpg")

Product.create(name: "Crusher Evo Sensory Bass",description: "Feel The Bass Tuned to You.", price: "52.49",avg_rating:rand(1..5), product_img: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/396/47717/a69e80d7abc00bc43522b23a30dedcccf03fff4fb4b7c865dc1455501a19c8b9__47097.1660667781.png?c=2",img_url: "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/87cc720363bcad83acb275be2e7271dffa0e5ccf1fd25cedb5187b8c4a7e394f.jpg")

Product.create(name: "Mod True Wireless Earbuds",description: "Pocket-Sized And Customized.", price: "59.99",avg_rating:rand(1..5), product_img: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/387/38342/4f15e6106b5b8e4bb5b1745c43e6b734e05d40a393ef91a5ba541b42a957e062__58349.1657642970.png?c=2",img_url: "https://skdy-assets.s3.amazonaws.com/9f36142aa5337efb10c17091ffad58d7ac0a559b5620c84dea5f3796d2bde6d5.jpg")

Product.create(name: "Indy ANC Noise Canceling True Wireless",description: "No Wires. No Noise.",avg_rating:rand(1..5), product_img: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/335/50432/524981c652f712791c5ef63d9a57739ab229b4c7d689938c9f461ad3567dd76a__78998.1661068487.png?c=2",price: "79.99",img_url: "https://skdy-assets.s3.amazonaws.com/7d59164d4e277ae240e6703dfbc175d11791959ae7f262ac714971dcc4cf20a0.jpg")


puts "seeding users"

User.create!(name: "Alan",username:"alanmatos", password_digest:"test", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMMdfGVo0DUO60HH2rPeiBySnx-93spUlmw&usqp=CAU")



puts "seeding reviews"

Review.create!(comment: "This is the best earbud I ever had, ...and the only one tho", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "meh...", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "WOW, it's better than Apple's", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "I dont know... I was expecting it to be louder", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "I lost them, but for the 10 minutes I had it, It was OK", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "My dog seem to like them, Its the second time they eat it.", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "If you are trying to waste your money, buy it, otherwise buy anything else.", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "It's great", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "The battery last 2 days, awesome!", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)



puts "uff... we are done here, back to you dev."