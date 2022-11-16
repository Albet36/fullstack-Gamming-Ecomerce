import mongoose, { Schema } from 'mongoose';
const authSchema =  mongoose.Schema(
{
    username: String,
    password: String,
    name: String,
    age:String,
    address:String,
    phone:String,
    // role: String,

    // student: 
    // [{
    //     type : Schema.Types.ObjectId, 
    //     ref : 'students'
    // }],
}
)
const auth = mongoose.model('auth',authSchema);
export default auth;