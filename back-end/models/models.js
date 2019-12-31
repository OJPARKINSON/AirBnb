import mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({ 
    name: String,
    email: String,
    review: {
        rating: Number,
        title: String,
        description: String,
    }
});

export const PropertiesSchema = new mongoose.Schema({ 
    houseName: String,
    location: String,
    bedrooms: Number,
    nightlyCost: Number,
    user_id: String,
    stays: Array
});

export const StaysSchema = new mongoose.Schema({
    user_id: String,
    property: String,
    houseName: String,
    owner: String,
    review: {
        rating: Number,
        title: String,
        description: String,
    },
    start_date: String,
    end_date:  String,
    nights: Number,
    beds: Number,
    price: Number
});