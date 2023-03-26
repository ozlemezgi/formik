import * as yup from "yup";

const validations = yup.object().shape({
    // email
    email:yup.string().email("Geçerli bir e-mail girin").required("Zorunlu alan"),
    // password
    password: yup.string().min(5,"Parolanız en az 5 karakter olmalıdır").required(),
    //confirmation
    passwordConfirm: yup.string().oneOf([yup.ref("password")],"parolalar uyuşmuyor").required(),
})

export default validations;