export const secureText=(value)=>{
    const regexUppercase = new RegExp(/^(?=.*[A-Z]).+$/)
    const regexLowercase = new RegExp(/^(?=.*[a-z]).+$/)
    const regexNumber = new RegExp(/^(?=.*[0-9]).+$/)

    if(!regexUppercase.test(value)){
    return {status:false , mensagem: "Não existe letras maiusculas na sua senha"}}
    else if(!regexLowercase.test(value)){
    return {status:false , mensagem: "Não existe letras minusculas na sua senha"}}
    else if(!regexNumber.test(value)){
    return {status:false , mensagem: "Não existe numeros na sua senha"}}
    else if(value.length <= 6){
    return {status:false , mensagem: "Sua senha precisa ter no mínimo 7 caracteres"}}

    return {status: true , mensagem: "Okay todos os requisitos de senha atingidos"}
}