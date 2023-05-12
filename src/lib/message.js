export function showMessage(message){

    
    const containerModal=document.createElement("div");
    containerModal.className="container-modal";
    const contentModal=document.createElement("div")
    contentModal.className="content-modal";
    const alert=document.createElement("p");
    alert.className="alert-message";
    alert.textContent=message;
    console.log(alert);

}