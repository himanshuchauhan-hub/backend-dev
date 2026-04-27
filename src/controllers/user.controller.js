import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import User from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password, username } = req.body;
  console.log("email:", email);

  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findone({
    $or: [{ email }, { username }],
  })
  if (existedUser) {
    throw new ApiError(409, "User with this email or username already exists")
  }

 const avatarLocalPath = req.files?.avatar[0]?.path;
 const coverImageLocalPath = req.files?.coverImage[0]?.path;

 if(!avatarLocalPath) {
  throw new ApiError(400, "Avatar file is required")
 }
 const avatar =await uploadOnCloudinary(avatarLocalPath)
 const coverImage = await uploadOnCloudinary(coverImageLocalPath)

 if(!avatar) {
  throw new ApiError(500, "Avatar upload failed")
}
const user = await User.create({
  fullName,
  avatar: avatar.url,
  coverImage: coverImage?.url || "",
  email,
  username: username.toLowerCase(),
  password
})
})

const createUser = await User.findbyId(user._id).select(
  "-password -refreshToken"
)

if (!createUser) {
  throw new ApiError(500, "User creation failed")
}

return res.status(201).json(
  new ApiResponse(201, createUser, "User registered successfully")
)
export { registerUser };
