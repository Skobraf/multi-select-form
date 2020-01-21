import React from "react";
import { render } from "react-dom";
import { Field, Form, Formik, FormikActions, FormikProps } from "formik";
import CustomSelect from "./CustomSelect";

import "./App.css";



const defaultValues = {
  singleLanguage: "",
  multiLanguages: []
};

// Some dummy language data
const languageOptions = [
  {
    label: "Chinese",
    value: "zh-CN"
  },
  {
    label: "English (US)",
    value: "en-US"
  },
  {
    label: "English (GB)",
    value: "en-GB"
  },
  {
    label: "French",
    value: "fr-FR"
  },
  {
    label: "Spanish",
    value: "es-ES"
  }
];

const MultiSelectForm = () => {
  const onSubmit = (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };

  const renderForm = (formikBag) => (
    <Form>
      <Field
        className="custom-select"
        name="singleLanguage"
        options={languageOptions}
        component={CustomSelect}
        placeholder="Select a language..."
        isMulti={false}
      />
      <Field
        className="custom-select"
        name="multiLanguages"
        options={languageOptions}
        component={CustomSelect}
        placeholder="Select multi languages..."
        isMulti={true}
      />
      <button
        type="button"
        className="outline"
        onClick={formikBag.handleReset}
        disabled={!formikBag.dirty || formikBag.isSubmitting}
      >
        Reset
      </button>
      <button type="submit">Submit Form</button>
    </Form>
  );

  return (
    <Formik
      initialValues={defaultValues}
      render={renderForm}
      onSubmit={onSubmit}
    />
  );
};

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Mutliselect form</h1>
      <p className="subtitle">
        Using{" "}
        <a
          href="https://github.com/jaredpalmer/formik"
          target="_blank"
          rel="noopener"
        >
          Formik
        </a>{" "}
        &{" "}
        <a
          href="https://github.com/JedWatson/react-select"
          target="_blank"
          rel="noopener"
        >
          react-select
        </a>
      </p>
      <MultiSelectForm />
    </div>
  );
};

export default App;
