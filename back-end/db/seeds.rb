puts "🌱 Seeding spices..."

# Seed your database here
puts "Creating users..."
max = User.create(username: "max", password: "1")
sam = User.create(username: "sam", password: "1")

40.times do
    User.create(username: Faker::Name.first_name, password: rand(1..100))
end

puts "Creating collections..."
clothes = Collection.create(collection_name: "Clothes", user_id: max.id)
camera_gear = Collection.create(collection_name: "Camera Gear", user_id: max.id)
bike_stuff = Collection.create(collection_name: "Bike Gear", user_id: sam.id)

100.times do
    Collection.create(collection_name: Faker::Commerce.department, user_id: User.all.sample.id)    
end


500.times do
    sample_id = Collection.all.sample.id
    Item.create(
        item_name: Faker::Appliance.equipment,
        item_class: Collection.find(sample_id)[:collection_name],
        item_value: rand(10..5000),
        collection_id: sample_id,
    )
end



puts "Creating items..."
i1 = Item.create(
    item_name: "Shirt", 
    item_class: "Clothes", 
    item_value: 20.34, 
    collection_id: clothes.id
)
i2 = Item.create(
    item_name: "Pants", 
    item_class: "Clothes", 
    item_value: 50.00, 
    collection_id: clothes.id
)
i3 = Item.create(
    item_name: "Hat", 
    item_class: "Clothes", 
    item_value: 5.30, 
    collection_id: clothes.id
)
i4 = Item.create(
    item_name: "Old Camera", 
    item_class: "Electronics", 
    item_value: 100.69, 
    collection_id: camera_gear.id
)
i5 = Item.create(
    item_name: "Sony 9000", 
    item_class: "Electronics", 
    item_value: 1000.69, 
    collection_id: camera_gear.id
)
i6 = Item.create(
    item_name: "Gold Lens", 
    item_class: "Electronics", 
    item_value: 900.69, 
    collection_id: camera_gear.id
)

i7 = Item.create(
    item_name: "Fuji Frame", 
    item_class: "Bike Stuff", 
    item_value: 900.69, 
    collection_id: bike_stuff.id
)

i8 = Item.create(
    item_name: "WTB Wheelset", 
    item_class: "Bike Stuff", 
    item_value: 500.69, 
    collection_id: bike_stuff.id
)

i9 = Item.create(
    item_name: "Brooks Saddle", 
    item_class: "Bike Stuff", 
    item_value: 100.69, 
    collection_id: bike_stuff.id
)



puts "✅ Done seeding!"
