import React from "react";

import { Form, Formik } from "formik";
import styled from "styled-components"

import { Movies } from "../../core/movies";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterBar = ({ onChange, className }) => {
  const categories = Movies.categories();
  const initialValues = Movies.initialCheckboxesValues();

  return (
    <div className={className}>
      <Formik
        initialValues={initialValues}
        onSubmit={() => null}
        enableReinitialize
        >
        {({ values, setFieldValue }) => {
          onChange(values);
          return (
            <Form>
              <Container>
                {categories.map((category) => {
                  return (
                    <Container key={category}>
                      <input
                        id={category}
                        name={category}
                        type="checkbox"
                        checked={values[category]}
                        onChange={(e) => setFieldValue(category, e.target.checked)} 
                        />
                      <label htmlFor={category}>{category}</label>
                    </Container>
                  )}
                  )}
              </Container>
            </Form>
        )}}
      </Formik>
    </div>
  );
}
