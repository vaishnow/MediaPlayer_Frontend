import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

//upload videos
export const uploadAllVideo = async (reqBody) => {
	return await commonAPI('POST', `${serverURL}/videos`, reqBody)
}

//get all videos from json server
export const getAllVideos = async ()=>{
	return await commonAPI('GET',`${serverURL}/videos`,"")
}

//api to delete videos from json server
export const deleteVideo = async (id)=>{
	return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

//add videos to watchHistory
export const addToHistory = async (reqBody) => {
	return await commonAPI('POST', `${serverURL}/history`, reqBody)
}

//get all history from json server
export const getAllHistory = async ()=>{
	return await commonAPI('GET',`${serverURL}/history`,"")
}

//api to delete history from json server
export const deleteHistory = async (id)=>{
	return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//add categories
export const addToCategory = async (body) => {
	return await commonAPI('POST', `${serverURL}/categories`, body)
}

//get all category from json server
export const getAllCategory = async ()=>{
	return await commonAPI('GET',`${serverURL}/categories`,"")
}

//api to delete history from json server
export const deleteCategory = async (id)=>{
	return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
}


//get all category from json server
export const getVideo = async (id)=>{
	return await commonAPI('GET',`${serverURL}/videos`,"")
}