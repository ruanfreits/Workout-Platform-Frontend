export const setUserLocalStorage = (payload)=>{
    localStorage.setItem("u", JSON.stringify(payload))
}

export const getUserLocalStorage = () =>{
    const json = localStorage.getItem("u");

    if(!json){
        return null;
    }

    const user = JSON.parse(json);

    return user ?? user;

}