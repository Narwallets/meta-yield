import * as Yup from "yup";

const voteSchemaValidation = Yup.object().shape({
    amount: Yup.number()
    .required("The amount to vote is required")
    .moreThan(0, 'The amount to vote must be greater than 0')
    // .max(Yup.ref("supporterDeposited"))
});
export default voteSchemaValidation;

