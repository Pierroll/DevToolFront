export const getUserId = () => {
    let userId = localStorage.getItem("user_id");
    if (!userId) {
        userId = `USER-${Math.floor(1000 + Math.random() * 9000)}`; // Genera un User ID aleatorio
        localStorage.setItem("user_id", userId);
    }
    return userId;
};
