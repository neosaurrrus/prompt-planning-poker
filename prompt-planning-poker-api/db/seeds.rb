# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Plan.create(name: "Test Plan 1", owner: "Test User 1", url: "testurl1")
Plan.create(name: "Test Plan 2", owner: "Test User 2", url: "testurl2")
# Plan[0].story.build(as_a:"User")
Story.create(plan_id:1, as_a:"User",want_to:"log in to the system", i_can:"Add, remove and delete my stuff")

Plan.last.stories.build(as_a:"Admin",want_to:"delete accounts", i_can:"keep database tidy").save
Plan.first.stories.build(as_a:"Admin",want_to:"add accounts", i_can:"let users do cool things").save


