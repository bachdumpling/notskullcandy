
# Product.all.destroy
# User.all.destroy
# Review.all.destroy

puts "seeding products, hold on"

Product.create(name: "Push Active True Wireless Earbuds", description: "Voice Control, Adventure Ready.",  price: 79.99, product_img: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/327/36431/df7ce3d9546fdb41d7cd5ca25f8177f4f675cd2584ff03839441f40853993cef__85356.1656622531.jpg?c=2",img_url: "https://skdy-assets.s3.amazonaws.com/a29c334e987b81ec7c8618fa41a6b60995f8d320ab4d6b7d26cd169b46a2a0c4.jpg")

Product.create(name: "Grind Active True Wireless Earbuds",description: "Voice Control, Ultimate Freedom.", price: 79.99, product_img: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/329/36916/0a3738e4c0de2ec1c1723fa2eb1a12952e880103e26a495f44042a84d23e78d7__29214.1657235755.png?c=2",img_url: "https://skdy-assets.s3.amazonaws.com/727f71c6944b1752709637c2effa5ca79504de8f9145486afd14afae3b5b2cc3.jpg")

Product.create(name: "Dime 2 True Wireless Earbuds",description: "Mini, Mighty, Findable", price: 39.99,product_img: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/334/36673/82daa7f4becfe7382f208fd8c0ff537612eb8d5d5545c45dbc661a713bc9425e__18721.1657126200.png?c=2",img_url: "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/ad7a181f0f360af9619055416f3b6548a106c01db923eaab6c029eb2111a92cc.jpg")

Product.create(name: "Crusher Evo Sensory Bass",description: "Feel The Bass Tuned to You.", price: 52.49,product_img: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/326/33271/e01e2892a4261f6255595b79125f7ad3bd2d0de0485296bbc5c4e42bf4426b43__05058.1655834601.jpg?c=2",img_url: "https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/5e54d2ed0e1abc03390787b727533ef3194e390fa8d0b4d5ea5078dd7751374f.jpg")

Product.create(name: "Mod True Wireless Earbuds",description: "Pocket-Sized And Customized.", price: 59.99,product_img: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/387/38342/4f15e6106b5b8e4bb5b1745c43e6b734e05d40a393ef91a5ba541b42a957e062__58349.1657642970.png?c=2",img_url: "https://skdy-assets.s3.amazonaws.com/9f36142aa5337efb10c17091ffad58d7ac0a559b5620c84dea5f3796d2bde6d5.jpg")

Product.create(name: "Indy ANC Noise Canceling True Wireless",description: "No Wires. No Noise.",product_img: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/335/32609/524981c652f712791c5ef63d9a57739ab229b4c7d689938c9f461ad3567dd76a__64175.1655422078.png?c=2",price: 79.99,img_url: "https://skdy-assets.s3.amazonaws.com/7d59164d4e277ae240e6703dfbc175d11791959ae7f262ac714971dcc4cf20a0.jpg")

Product.create(name: "Jib 2 True Wireless Earbuds",description: "Totally Wireless Essential.", price: 24.99,product_img: "https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/343/38453/b4aa77f561f6eb45d30c7651507cf2f37d7059acb38ad5c121a044edd4ea0e94__19035.1657727384.png?c=2",img_url: "https://skdy-assets.s3.amazonaws.com/d4a737d9c8b9b0b799480714f7b837207d48b8eec1547bd814a36d2e2664d5d5.jpg")


puts "seeding users"

User.create(name: "Alan", password_digest:"", img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMMdfGVo0DUO60HH2rPeiBySnx-93spUlmw&usqp=CAU")



puts "seeding reviews"

Review.create(comment: "This is the best earbud I ever had, ...and the only one tho", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "meh...", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "WOW, it's better than Apple's", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "I dont know... I was expecting it to be louder", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "I lost them, but for the 10 minutes I had it, It was OK", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "My dog seem to like them, Its the second time they eat it.", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "If you are trying to waste your money, buy it, otherwise buy anything else.", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "It's great", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)
Review.create(comment: "The battery last 2 days, awesome!", rating: rand(1..5) ,user_id: User.all.sample.id, product_id: Product.all.sample.id)



puts "uff... we are done here, back to you dev."