import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:8080"

export const getUsersRanked= async (lang:string): Promise<AxiosResponse<APIResponseType>> => {
  try {
    const users: AxiosResponse<APIResponseType> = await axios.get(
      baseUrl + `/get-${lang}-ranked`
    )
    // console.log(users)
    return users
  } catch (error) {
    throw new Error()
  }
}
