import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";

//register APi=called by auth component
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}


//login API=called by auth component
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}

//add project-called by add component
export const addProjectAPI = async (reqBody,reqHeader) => {
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)  
}

//get all projects
export const getAllProjectsAPI = async (searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-projects?search=${searchKey}`,"",reqHeader)
}
//userprojects
export const getUserProjectsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-projects`,"",reqHeader)
}

//homeprojects
export const getHomeProjectsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/home-projects`,"")
}


//edit project
export const editProjectAPI = async (projectId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-project/${projectId}`,reqBody,reqHeader)
}

//remove project
export const removeProjectAPI = async (projectId,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/remove-project/${projectId}`,{},reqHeader)
}