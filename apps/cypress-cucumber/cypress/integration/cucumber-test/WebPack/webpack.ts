/// <reference types="Cypress" />

// import myAssertion from "./myAssertion";
// import { authorizationHeader, DefaultValues, jsonContentType, PostApi, GetApi, DeleteApi, PatchApi, RequestParams } from "@sbs-cloud/k6-commons";

const {
  Given,
  Then
} = require("@badeball/cypress-cucumber-preprocessor/steps");


// const defaultRequestParam  = {
//   params: { headers: { ...authorizationHeader(""), ...jsonContentType(), 'apiKey': DefaultValues.keyId.value } }
// }
// const create = new PostApi("", defaultRequestParam);

Given(`webpack is configured`, () => {});

Then(`this test should work just fine!`, () => {
//   myAssertion();
  cy.visit('https://google.com')
});
