export default interface sabji {
    id: String,
    name: String,
    price: Number | String,
    unit: String,
    offer: Boolean, // whether offer price
    notes: String,
    qntty: Number   // added by client side
    // not_avail: Boolean,  // not sent by server side then
}
