import * as Yup from "yup";

const fundSchemaValidation = Yup.object().shape({
  amount_deposit: Yup.number()
                    .max(Yup.ref('balance'),'You dont have enough STNEAR. Visit <a href="metapool.app" target="blank"> Metapool </a> to get more. ')
});

export default fundSchemaValidation;
