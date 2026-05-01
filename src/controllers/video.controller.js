import mongoose from 'mongoose';
import { asyncHandler } from '../utils/asyncHandler.js';
import { Video } from '../models/video.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';


const getAllVideos = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query
  // get all videos
})

const publishVideo = asyncHandler(async (req, res) => {
  const { title, description } = req.body

  // ... upload video to cloudinary
})

const getVideoById = asyncHandler(async (req, res) => {
  const { videoId } = req.params
  // get video by id
})

const updateVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params

  // update video by id
})

const deleteVideo = asyncHandler(async (req, res) => {
  const { videoId } = req.params
  // delete video by id
})

const togglePublisher = asyncHandler(async (req, res) => {
  const { videoId } = req.params
  // toggle publisher status
})

export {
  getAllVideos,
  publishVideo,
  getVideoById,
  updateVideo,
  deleteVideo,
  togglePublisher
}