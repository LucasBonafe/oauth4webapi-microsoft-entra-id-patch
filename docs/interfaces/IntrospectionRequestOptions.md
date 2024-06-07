# Interface: IntrospectionRequestOptions

[💗 Help the project](https://github.com/sponsors/panva)

## Table of contents

### Properties

- [[customFetch]](IntrospectionRequestOptions.md#customfetch)
- [[useMtlsAlias]](IntrospectionRequestOptions.md#usemtlsalias)
- [additionalParameters](IntrospectionRequestOptions.md#additionalparameters)
- [clientPrivateKey](IntrospectionRequestOptions.md#clientprivatekey)
- [headers](IntrospectionRequestOptions.md#headers)
- [requestJwtResponse](IntrospectionRequestOptions.md#requestjwtresponse)
- [signal](IntrospectionRequestOptions.md#signal)

## Properties

### [customFetch]

• `Optional` **[customFetch]**: (`input`: `RequestInfo` \| [`URL`]( https://developer.mozilla.org/docs/Web/API/URL ), `init?`: `RequestInit`) => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`Response`]( https://developer.mozilla.org/docs/Web/API/Response )\>

See [customFetch](../variables/customFetch.md).

___

### [useMtlsAlias]

• `Optional` **[useMtlsAlias]**: `boolean`

See [useMtlsAlias](../variables/useMtlsAlias.md).

___

### additionalParameters

• `Optional` **additionalParameters**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> \| [`URLSearchParams`]( https://developer.mozilla.org/docs/Web/API/URLSearchParams ) \| `string`[][]

Any additional parameters to send. This cannot override existing parameter values.

___

### clientPrivateKey

• `Optional` **clientPrivateKey**: [`CryptoKey`]( https://developer.mozilla.org/docs/Web/API/CryptoKey ) \| [`PrivateKeyAuthOptions`](PrivateKeyAuthOptions.md)

Private key to use for `private_key_jwt`
[client authentication](../types/ClientAuthenticationMethod.md). Its algorithm must be compatible with
a supported [JWS `alg` Algorithm](../types/JWSAlgorithm.md).

___

### headers

• `Optional` **headers**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )\<`string`, `string`\> \| [`string`, `string`][] \| [`Headers`]( https://developer.mozilla.org/docs/Web/API/Headers )

Headers to additionally send with the HTTP Request(s) triggered by this function's invocation.

___

### requestJwtResponse

• `Optional` **requestJwtResponse**: `boolean`

Request a JWT Response from the
[`as.introspection_endpoint`](AuthorizationServer.md#introspection_endpoint). Default is

- True when
  [`client.introspection_signed_response_alg`](Client.md#introspection_signed_response_alg) is
  set
- False otherwise

___

### signal

• `Optional` **signal**: [`AbortSignal`]( https://developer.mozilla.org/docs/Web/API/AbortSignal ) \| () => [`AbortSignal`]( https://developer.mozilla.org/docs/Web/API/AbortSignal )

An AbortSignal instance, or a factory returning one, to abort the HTTP Request(s) triggered by
this function's invocation.

**`Example`**

A 5000ms timeout AbortSignal for every request

```js
const signal = () => AbortSignal.timeout(5_000) // Note: AbortSignal.timeout may not yet be available in all runtimes.
```

## Hierarchy

- [`HttpRequestOptions`](HttpRequestOptions.md)

- [`AuthenticatedRequestOptions`](AuthenticatedRequestOptions.md)

  ↳ **`IntrospectionRequestOptions`**
