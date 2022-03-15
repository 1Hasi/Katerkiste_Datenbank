import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
   orderItems: [
       {
        name:{type: String, required: true},
        qty: {type: Number, required: true},
        bild: {type: String, required: true},
        preis: {type: Number, required: true},
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
       },
   },
], shippingAddress: {
    vorname: {type: String, required: true},
    nachname: {type: String, required: true},
    adresse: {type: String, required: true},
    plz: {type: String, required: true},
    stadt: {type: String, required: true},
    land: {type: String, required: true},
} 
})