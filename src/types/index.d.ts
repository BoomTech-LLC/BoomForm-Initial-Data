export interface IFieldsInitials extends Object {
    [key: string]: any;
 }

export interface IFromsInitials extends Object {
    [key: string]: any;
}  

export interface IInitials{
  fieldsInitials : IFieldsInitials,
  formInitials: IFromsInitials
}
