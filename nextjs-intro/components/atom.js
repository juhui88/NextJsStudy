import { atom } from "recoil";

export const loginState = atom({
    key: "loginState",
    default: false
})

export const profileImgState = atom({
    key: "profileImgState",
    default : ""
})