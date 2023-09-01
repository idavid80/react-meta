/* import { Formik } from 'formik';
import { Field } from 'formik';

function Form() {
    return (
<Formik
initialValues={{ name: "", email: "" }}
onSubmit={async (values) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  alert(JSON.stringify("Sus datos son, nombre: " + values.name, "email: ") + values.email);
}}
>

<Form>
  <Field name="name" type="text" />
  <Field name="email" type="email" />
  <button type="submit">Submit</button>
</Form>

</Formik>)
}
export default Form; */