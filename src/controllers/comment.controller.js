import mongoose from 'mongoose';
import { asyncHandler } from '../utils/asyncHandler.js';
import { Comment } from '../models/comment.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js'


const getVideoComments = asyncHandler(async (req, res) => {
  const { videoId } = req.params
  const { page = 1, limit = 10 } = req.query

  // get comments for a video
})

const addComment = asyncHandler(async (req, res) => {
  const { videoId } = req.params
})

const updateComment = asyncHandler(async (req, res) => {

})

const deleteComment = asyncHandler(async (req, res) => {

})



export {
  getVideoComments,
  addComment,
  updateComment,
  deleteComment
}
