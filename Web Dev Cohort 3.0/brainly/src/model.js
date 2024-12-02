import { model, Model,Schema } from "mongoose";

const UserSchema = new Schema ({
          username : {type : String, required : true, unique : true},
          password : {type : String, required : true}
})

export const UserModel = model('user', UserSchema)


const tagSchema = new Schema({
          title : {type : String, required : true, unique : true}
})

export const TagModel = model('tag', tagSchema)

const contentSchema = new Schema({
          link: { type: String, required: true },
          type: { type: String, required: true },
          title: { type: String, required: true },
          tags: [{ type: Types.ObjectId, ref: 'Tag' }],
          userId: { type: Types.ObjectId, ref: 'User', required: true },
        });

export const ContentModel = model('content', contentSchema);


const linkSchema = new mongoose.Schema({
          hash: { type: String, required: true },
          userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        });

export const LinkModel = model('link', linkSchema);