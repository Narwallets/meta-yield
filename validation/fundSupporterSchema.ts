import * as Yup from "yup";

const fundKickstarterSchema = Yup.object().shape({
  amount: Yup.number().required("Required").moreThan(0).lessThan(Yup.ref('balance'))
});

export default fundKickstarterSchema;
