export const setCurrentUSer = (data) => {
    return{
        type: "FETCH_CURRENT_USER",
        payload: data 
    }
}