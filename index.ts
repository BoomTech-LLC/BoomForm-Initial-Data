import { fieldsInitials , IFieldsInitials } from "./src/fields";
import { formInitials  , IFromsInitials} from "./src/form";

interface IInitials{
  fieldsInitials : IFieldsInitials,
  formInitials: IFromsInitials
}


const Initials : IInitials= {
  fieldsInitials,
  formInitials
}

export default Initials
