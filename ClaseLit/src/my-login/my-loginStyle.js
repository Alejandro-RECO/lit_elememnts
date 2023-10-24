import { css } from "lit-element";

export default css`
.login{
    margin:10px;
    width:200px;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:.5rem;
    padding:10px;
    text-align:center;
    font-family: "Helvetica Neue",Helvetica;
    background-color:#353634;
    box-sizing:border-box;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.login-p{
    padding:0;
    font-size:.7rem;
    color:#0de5a8;
}
.login-title{
    color: #0f0f0f;
    text-transform:uppercase;
    font-size:1.5em;
    width:100%;
}
.title-spot{
    font-size:1em; 
    color: #0de5a8;
    
}
.login-form{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:15px;
    font-size:.9em;
    color: #171717;
    width:100%;
}
.login-ul{
    display:flex;
    flex-direction:column;
    margin:0;
    padding:0;
    width: 90%;
}
.login-li{
    position:relative;
    text-decoration:none;
    list-style:none;  
    text-align:start;  
    display:flex;
    flex-direction:column;
    gap:20px;
    width:100%;
}
.login-label{
    position:absolute;
    bottom:0;
    font-size:.8rem;
    padding-bottom:.5rem;
}
.login-intput{
    width:100%;
    background-color:#353634;
    outline:none;
    border:none;
    border-bottom:1px solid #0de5a8;
    margin-top:15px;
}
.login-intput:focus{
    color:white;
}
.login-a{
    color:#0de5a8;
    text-decoration:none;
    font-size:.7rem;
}
.login-button{
    padding:5px;
    border:none;
    border-radius:.3rem;
    background-color:#171717;
    color: #0de5a8;
    font-size:.6rem;
}
.login-button:hover{
    color: #0de5a8;
    background-color:#171717;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: .5s;
    cursor:pointer;
}

`

