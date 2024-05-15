import {useContext , createContext} from 'react'

export const TheamContext = createContext({
    TheamMode:'Light',
    DarkMode: ()=>{},
    LightMode: ()=>{},
})

export const TheamContextProvider = TheamContext.Provider

export default function useTheam(){
    return useContext(TheamContext)
}
