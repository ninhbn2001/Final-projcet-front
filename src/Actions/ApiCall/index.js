import axios from "axios"
import { API_ROOT } from "utilities/constants"

export const updateBoard = async (id, data) => {
    const request = await axios.put(`${API_ROOT}/routers/boards/${id}`, data)
    console.log(request)
    return request.data
}

export const fetchBoardDetails = async (id, data) => {
    const request = await axios.get(`${API_ROOT}/routers/boards/${id}`, data)
    console.log(request)
    return request.data
}

export const createNewColumn = async (data) => {

    const request = await axios.post(`${API_ROOT}/routers/columns`, data)
    console.log(request)
    return request.data
}
// Update and Remove columns
export const updateColumn = async (id, data) => {
    const request = await axios.put(`${API_ROOT}/routers/columns/${id}`, data)
    console.log(request)
    return request.data
}

export const createNewCard = async (data) => {
    const request = await axios.post(`${API_ROOT}/routers/cards`, data)
    console.log(request)
    return request.data
}

export const updateCard = async (id, data) => {
    const request = await axios.put(`${API_ROOT}/routers/cards/${id}`, data)
    console.log(request)
    return request.data
}

export const login = async (id, data) => {
    const request = await axios.post(`${API_ROOT}/routers/login/${id}`, data)
    console.log(request)
    return request.data
}

export const register = async (data) => {
    const request = await axios.post(`${API_ROOT}/routers/users`, data)
    console.log(request)
    return request.data
}