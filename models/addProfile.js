import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  familyName: {
    type: String,
    required: true,
  },
  givenName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Profiles = mongoose.model("Profiles", profileSchema);

export default Profiles;
