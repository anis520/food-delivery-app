import { fetchUser } from "../../utils/FetchLocalStroageData";
const userInfo=fetchUser()
export const inisialstate={
    user:userInfo
}
