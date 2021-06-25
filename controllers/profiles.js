import Profiles from "../models/addProfile.js";

export const getProfiles = async (req, res) => {
  try {
    const profiles = await Profiles.find();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProfile = async (req, res) => {
  let id = req.params.id;
  try {
    const profile = await Profiles.find({ googleId: id });
    res.status(200).json(profile);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addProfile = async (req, res) => {
  const profile = req.body;

  const newProfile = new Profiles(profile);

  try {
    await newProfile.save();

    res.status(201).json(newProfile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
