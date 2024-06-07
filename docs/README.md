# oauth4webapi API Reference

[💗 Help the project](https://github.com/sponsors/panva)

## Table of contents

### Accessing Protected Resources

- [parseWwwAuthenticateChallenges](functions/parseWwwAuthenticateChallenges.md)
- [protectedResourceRequest](functions/protectedResourceRequest.md)

### Authorization Code Grant

- [authorizationCodeGrantRequest](functions/authorizationCodeGrantRequest.md)
- [calculatePKCECodeChallenge](functions/calculatePKCECodeChallenge.md)
- [generateRandomCodeVerifier](functions/generateRandomCodeVerifier.md)
- [isOAuth2Error](functions/isOAuth2Error.md)
- [issueRequestObject](functions/issueRequestObject.md)
- [parseWwwAuthenticateChallenges](functions/parseWwwAuthenticateChallenges.md)
- [processAuthorizationCodeOAuth2Response](functions/processAuthorizationCodeOAuth2Response.md)
- [validateAuthResponse](functions/validateAuthResponse.md)
- [validateJwtAuthResponse](functions/validateJwtAuthResponse.md)

### Authorization Code Grant w/ OpenID Connect (OIDC)

- [authorizationCodeGrantRequest](functions/authorizationCodeGrantRequest.md)
- [calculatePKCECodeChallenge](functions/calculatePKCECodeChallenge.md)
- [generateRandomCodeVerifier](functions/generateRandomCodeVerifier.md)
- [getValidatedIdTokenClaims](functions/getValidatedIdTokenClaims.md)
- [isOAuth2Error](functions/isOAuth2Error.md)
- [issueRequestObject](functions/issueRequestObject.md)
- [parseWwwAuthenticateChallenges](functions/parseWwwAuthenticateChallenges.md)
- [processAuthorizationCodeOpenIDResponse](functions/processAuthorizationCodeOpenIDResponse.md)
- [processUserInfoResponse](functions/processUserInfoResponse.md)
- [userInfoRequest](functions/userInfoRequest.md)
- [validateAuthResponse](functions/validateAuthResponse.md)
- [validateJwtAuthResponse](functions/validateJwtAuthResponse.md)

### Authorization Server Metadata

- [discoveryRequest](functions/discoveryRequest.md)
- [processDiscoveryResponse](functions/processDiscoveryResponse.md)

### Client Credentials Grant

- [clientCredentialsGrantRequest](functions/clientCredentialsGrantRequest.md)
- [isOAuth2Error](functions/isOAuth2Error.md)
- [parseWwwAuthenticateChallenges](functions/parseWwwAuthenticateChallenges.md)
- [processClientCredentialsResponse](functions/processClientCredentialsResponse.md)

### Device Authorization Grant

- [deviceAuthorizationRequest](functions/deviceAuthorizationRequest.md)
- [deviceCodeGrantRequest](functions/deviceCodeGrantRequest.md)
- [isOAuth2Error](functions/isOAuth2Error.md)
- [parseWwwAuthenticateChallenges](functions/parseWwwAuthenticateChallenges.md)
- [processDeviceAuthorizationResponse](functions/processDeviceAuthorizationResponse.md)
- [processDeviceCodeResponse](functions/processDeviceCodeResponse.md)

### Errors

- [OperationProcessingError](classes/OperationProcessingError.md)
- [UnsupportedOperationError](classes/UnsupportedOperationError.md)

### FAPI 1.0 Advanced

- [validateDetachedSignatureResponse](functions/validateDetachedSignatureResponse.md)

### JWT Access Tokens

- [validateJwtAccessToken](functions/validateJwtAccessToken.md)

### JWT Secured Authorization Response Mode for OAuth 2.0 (JARM)

- [validateJwtAuthResponse](functions/validateJwtAuthResponse.md)

### JWT-Secured Authorization Request (JAR)

- [issueRequestObject](functions/issueRequestObject.md)

### OpenID Connect (OIDC) Discovery

- [discoveryRequest](functions/discoveryRequest.md)
- [processDiscoveryResponse](functions/processDiscoveryResponse.md)

### OpenID Connect (OIDC) UserInfo

- [processUserInfoResponse](functions/processUserInfoResponse.md)
- [userInfoRequest](functions/userInfoRequest.md)

### Proof Key for Code Exchange (PKCE)

- [calculatePKCECodeChallenge](functions/calculatePKCECodeChallenge.md)
- [generateRandomCodeVerifier](functions/generateRandomCodeVerifier.md)

### Pushed Authorization Requests (PAR)

- [isOAuth2Error](functions/isOAuth2Error.md)
- [parseWwwAuthenticateChallenges](functions/parseWwwAuthenticateChallenges.md)
- [processPushedAuthorizationResponse](functions/processPushedAuthorizationResponse.md)
- [pushedAuthorizationRequest](functions/pushedAuthorizationRequest.md)

### Refreshing an Access Token

- [isOAuth2Error](functions/isOAuth2Error.md)
- [parseWwwAuthenticateChallenges](functions/parseWwwAuthenticateChallenges.md)
- [processRefreshTokenResponse](functions/processRefreshTokenResponse.md)
- [refreshTokenGrantRequest](functions/refreshTokenGrantRequest.md)

### Token Introspection

- [introspectionRequest](functions/introspectionRequest.md)
- [isOAuth2Error](functions/isOAuth2Error.md)
- [parseWwwAuthenticateChallenges](functions/parseWwwAuthenticateChallenges.md)
- [processIntrospectionResponse](functions/processIntrospectionResponse.md)

### Token Revocation

- [isOAuth2Error](functions/isOAuth2Error.md)
- [parseWwwAuthenticateChallenges](functions/parseWwwAuthenticateChallenges.md)
- [processRevocationResponse](functions/processRevocationResponse.md)
- [revocationRequest](functions/revocationRequest.md)

### Utilities

- [generateKeyPair](functions/generateKeyPair.md)
- [generateRandomCodeVerifier](functions/generateRandomCodeVerifier.md)
- [generateRandomNonce](functions/generateRandomNonce.md)
- [generateRandomState](functions/generateRandomState.md)
- [isOAuth2Error](functions/isOAuth2Error.md)
- [parseWwwAuthenticateChallenges](functions/parseWwwAuthenticateChallenges.md)

<details><summary>Uncategorized</summary>

### Interfaces

- [AuthenticatedRequestOptions](interfaces/AuthenticatedRequestOptions.md)
- [AuthorizationDetails](interfaces/AuthorizationDetails.md)
- [AuthorizationServer](interfaces/AuthorizationServer.md)
- [Client](interfaces/Client.md)
- [ClientCredentialsGrantRequestOptions](interfaces/ClientCredentialsGrantRequestOptions.md)
- [ClientCredentialsGrantResponse](interfaces/ClientCredentialsGrantResponse.md)
- [ConfirmationClaims](interfaces/ConfirmationClaims.md)
- [DPoPOptions](interfaces/DPoPOptions.md)
- [DPoPRequestOptions](interfaces/DPoPRequestOptions.md)
- [DeviceAuthorizationRequestOptions](interfaces/DeviceAuthorizationRequestOptions.md)
- [DeviceAuthorizationResponse](interfaces/DeviceAuthorizationResponse.md)
- [DiscoveryRequestOptions](interfaces/DiscoveryRequestOptions.md)
- [GenerateKeyPairOptions](interfaces/GenerateKeyPairOptions.md)
- [HttpRequestOptions](interfaces/HttpRequestOptions.md)
- [IDToken](interfaces/IDToken.md)
- [IntrospectionRequestOptions](interfaces/IntrospectionRequestOptions.md)
- [IntrospectionResponse](interfaces/IntrospectionResponse.md)
- [JWTAccessTokenClaims](interfaces/JWTAccessTokenClaims.md)
- [MTLSEndpointAliases](interfaces/MTLSEndpointAliases.md)
- [OAuth2Error](interfaces/OAuth2Error.md)
- [OAuth2TokenEndpointResponse](interfaces/OAuth2TokenEndpointResponse.md)
- [OpenIDTokenEndpointResponse](interfaces/OpenIDTokenEndpointResponse.md)
- [PrivateKey](interfaces/PrivateKey.md)
- [PrivateKeyAuthOptions](interfaces/PrivateKeyAuthOptions.md)
- [ProtectedResourceRequestOptions](interfaces/ProtectedResourceRequestOptions.md)
- [PushedAuthorizationRequestOptions](interfaces/PushedAuthorizationRequestOptions.md)
- [PushedAuthorizationResponse](interfaces/PushedAuthorizationResponse.md)
- [RevocationRequestOptions](interfaces/RevocationRequestOptions.md)
- [TokenEndpointRequestOptions](interfaces/TokenEndpointRequestOptions.md)
- [TokenEndpointResponse](interfaces/TokenEndpointResponse.md)
- [UseMTLSAliasOptions](interfaces/UseMTLSAliasOptions.md)
- [UserInfoAddress](interfaces/UserInfoAddress.md)
- [UserInfoRequestOptions](interfaces/UserInfoRequestOptions.md)
- [UserInfoResponse](interfaces/UserInfoResponse.md)
- [ValidateJWTAccessTokenOptions](interfaces/ValidateJWTAccessTokenOptions.md)
- [WWWAuthenticateChallenge](interfaces/WWWAuthenticateChallenge.md)
- [WWWAuthenticateChallengeParameters](interfaces/WWWAuthenticateChallengeParameters.md)

### Type Aliases

- [ClientAuthenticationMethod](types/ClientAuthenticationMethod.md)
- [JWSAlgorithm](types/JWSAlgorithm.md)
- [JsonArray](types/JsonArray.md)
- [JsonObject](types/JsonObject.md)
- [JsonPrimitive](types/JsonPrimitive.md)
- [JsonValue](types/JsonValue.md)

### Variables

- [clockSkew](variables/clockSkew.md)
- [clockTolerance](variables/clockTolerance.md)
- [customFetch](variables/customFetch.md)
- [expectNoNonce](variables/expectNoNonce.md)
- [expectNoState](variables/expectNoState.md)
- [skipAuthTimeCheck](variables/skipAuthTimeCheck.md)
- [skipStateCheck](variables/skipStateCheck.md)
- [skipSubjectCheck](variables/skipSubjectCheck.md)
- [useMtlsAlias](variables/useMtlsAlias.md)

</details>
