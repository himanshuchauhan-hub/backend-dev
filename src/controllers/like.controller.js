import mongoose from 'mongoose';
import { asyncHandler } from '../utils/asyncHandler.js';
import { Like } from '../models/like.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js'


const toggleVideoLike = asyncHandler(async (req, res) => {
  const { videoId } = req.params
  // todo: toggle like for a video
})


const toggleCommentLike = asyncHandler(async (req, res) => {
  const { commentId } = req.params
  // todo: toggle like for a comment
})

const toggleTweetLike = asyncHandler(async (req, res) => {
  const { tweetId } = req.params
  // todo: toggle like for a tweet
})

const getLikedVideos = asyncHandler(async (req, res) => {

})


export {
  toggleVideoLike,
  toggleCommentLike,
  toggleTweetLike,
  getLikedVideos
}