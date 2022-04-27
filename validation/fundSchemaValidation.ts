import * as Yup from "yup";

const fundSchemaValidation = Yup.object().shape({
  amount: Yup.number().required("Required").moreThan(0).lessThan(Yup.ref('balance'))
});

export default fundSchemaValidation;
