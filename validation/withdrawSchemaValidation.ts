import * as Yup from "yup";
import { yoctoToStNear } from "../lib/util";

const withdrawSchemaValidation = Yup.object().shape({
    amount: Yup.number().required("Required").moreThan(0).max(Yup.ref("supporterDeposited"))
});

export default withdrawSchemaValidation;
