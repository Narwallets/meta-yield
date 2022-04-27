import * as Yup from "yup";

const withdrawSchemaValidation = Yup.object().shape({
    amount_withdraw: Yup.number()
    .required("Required")
    .moreThan(0)
    // .max(Yup.ref("supporterDeposited"))
});
export default withdrawSchemaValidation;

