//Definir la cuenta del administrador
export const getAdmin = () => {
    //Id de la cuenta de administrador (Creador de la aplicación)
    return ['4Dymp7B2fgWxaHIdpRZc9oizDlq2','xmTwTBcFoRggFZs3ZQahxV09TKJ3'];
}

//Get the user data from the window storage
export const getUser = () => {
    const user = window.localStorage.getItem('user_calificaciones');
    return JSON.parse(user);
}
