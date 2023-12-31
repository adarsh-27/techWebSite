import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const API = "https://hn.algolia.com/api/v1/search?"
    const initialState = {
        isLoading: true,
        query: "REACT",
        nbPages: 0,
        page: 0,
        hits: []
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchApiData = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await fetch(url)
            const data = await res.json()
            dispatch({
                type: "GET_DATA",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    const removePost = (post_ID) => {
        dispatch({ type: "REMOVE_POST", payload: post_ID })
    }

    const searchPost = (searchQuery) => {
        dispatch({ type: "SEARCH_POST", payload: searchQuery })
    }

    const getPrevPage = () => {
        dispatch({ type: "PREV_PAGE" })
    }
    const getNextPage = () => {
        dispatch({ type: "NEXT_PAGE" })
    }
    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page])

    return (
        <AppContext.Provider value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}>{children}</AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return (useContext(AppContext))
}

export { AppContext, AppProvider, useGlobalContext }