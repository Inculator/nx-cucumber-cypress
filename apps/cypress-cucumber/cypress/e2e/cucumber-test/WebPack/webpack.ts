import {
  Given,
  When,
  Then,
  And,
} from '@badeball/cypress-cucumber-preprocessor';
import {
  DeleteApi,
  GetApi,
  PostApi,
  authorizationHeader,
  jsonContentType,
  HeaderParam,
  GetRequestParamsBuilder,
  PostRequestParamsBuilder,
  DeleteRequestParamsBuilder,
  GetRequestParams,
  PostRequestParams,
  DeleteRequestParams,
} from 'cypress-commons';

Given(`webpack is configured`, () => {});

Then(`this test should work just fine!`, () => {
  cy.loginMKTP();
  let authHeader: HeaderParam = authorizationHeader('xid:56TYUV');
  let contentTypeHeader: HeaderParam = jsonContentType();

  let headerMap = new Map<string, string>();
  headerMap.set(
    authHeader.key,
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJta3RwLWludGVybmFsLWNsaWVudCIsImNvbm5lY3RvcnNJbmZvcm1hdGlvbiI6e30sImF1dGhvcml6YXRpb25zIjp7ImFwcGxpY2F0aW9uQWNjZXNzUHJvZmlsZXMiOlt7ImFjY2Vzc1Byb2ZpbGVDb2RlIjoiMiIsImNvbXBhbnlDb2RlIjoiMiIsImNvdW50cnlDb2RlIjoiTkwiLCJyb2xlcyI6W3siaWQiOiJBRE1JTiJ9XX1dfSwiaXNzIjoiaHR0cHM6Ly9hcGkubWt0cC5wbTJkZXYuc2JjcC5pby9jb3JlL2F1dGhlbnRpY2F0aW9uIiwiaG9zdElkIjoiU0JTX1JVTiIsImF1dGhlbnRpY2F0aW9uU3Vic2lkaWFyeUlkIjoiU0JTIiwidmVyc2lvbiI6IjQuMy4wIiwiY2xpZW50X2lkIjoibWt0cC1pbnRlcm5hbC1jbGllbnQiLCJzY29wZSI6ImRlZmF1bHQtc2NvcGUiLCJ0ZW5hbnRJZCI6IlNPUFJBX1NURVJJQSIsImF1dGhlbnRpY2F0aW9uRGVjaXNpb24iOnsicHJvdG9jb2wiOiIiLCJsZXZlbCI6MCwiY29ycmVsYXRpb25JZCI6Ijg2MDkwZTNmLTM5NzQtNDc1OS05NmFiLTg3ODIwMDFmYjlhYiIsImV4dGVybmFsRGVjaXNpb24iOm51bGx9LCJ0b2tlblR5cGUiOiJURU5BTlRfSU5URVJOQUxfQVBQIiwiZXhwIjoyNjc2ODkzNTIyLCJncmFudFR5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMiLCJpYXQiOjE2NzY4OTE3MjIsImp0aSI6IjYzZjM1NjRhNTM2ZWQ5NzkxZmEzMDZjMSJ9.wg-nSeNppcSLvc-TESU-fQOWmiW0C4ixoThTiPUXcTQmbBwpiIBy-202qSdTd-v9d0C90Y3t9AkwRnb6snqB4uZnpcWdJZgg8cER5tiKEfOxv4hnxjDCOikBoCwAUxIHeeSfGmOfourm1-QmlzJTZZAIXFYQlCAhtnBvEkMpP4CMra2NXV9c3urgHSTOAUrK_g32rxxlxfJHEkdUcj5oyxblnO_cOTj1E_kVJ9ZX-yVdyLRZqrrR29GH0uO1Gl2xOdy4te1UMdaijafIx8KF0V5TneRSE5SJqClbCjFT_itgOQPek8Q-WwnERcPqTJRiW3VkactFCnxXuiWqac3vUA'
  );
  headerMap.set(contentTypeHeader.key, contentTypeHeader.value);

  let requestParamBuilder = new GetRequestParamsBuilder(
    'http://localhost:8080/api/testing-parameters/currentDateTime'
  );
  let requestParam: GetRequestParams = requestParamBuilder
    .setHeaders(headerMap)
    .setQueryParams(new Map())
    .setPerformanceScoreInMillSec(5000)
    .setResponseHandler((response: any) => {
      cy.log(response);
    })
    .build();

  new GetApi().send(requestParam);
});
