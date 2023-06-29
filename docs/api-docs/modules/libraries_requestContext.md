[talawa-api](../README.md) / [Exports](../modules.md) / libraries/requestContext

# Module: libraries/requestContext

## Table of contents

### Variables

- [requestContextNamespace](libraries_requestContext.md#requestcontextnamespace)

### Functions

- [getRequestContextValue](libraries_requestContext.md#getrequestcontextvalue)
- [init](libraries_requestContext.md#init)
- [middleware](libraries_requestContext.md#middleware)
- [setRequestContext](libraries_requestContext.md#setrequestcontext)
- [setRequestContextValue](libraries_requestContext.md#setrequestcontextvalue)
- [translate](libraries_requestContext.md#translate)
- [translatePlural](libraries_requestContext.md#translateplural)

## Variables

### requestContextNamespace

• `Const` **requestContextNamespace**: `Namespace`

#### Defined in

[src/libraries/requestContext.ts:8](https://github.com/Nitya-Pasrija/talawa-api/blob/d3a6af9/src/libraries/requestContext.ts#L8)

## Functions

### getRequestContextValue

▸ **getRequestContextValue**<`T`\>(`key`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`T`

#### Defined in

[src/libraries/requestContext.ts:18](https://github.com/Nitya-Pasrija/talawa-api/blob/d3a6af9/src/libraries/requestContext.ts#L18)

___

### init

▸ **init**<`T`\>(`options?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `InterfaceInitOptions`<`T`\> |

#### Returns

`T`

#### Defined in

[src/libraries/requestContext.ts:44](https://github.com/Nitya-Pasrija/talawa-api/blob/d3a6af9/src/libraries/requestContext.ts#L44)

___

### middleware

▸ **middleware**(): (`req`: `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\>, `res`: `Response`<`any`, `Record`<`string`, `any`\>\>, `next`: `NextFunction`) => `void`

#### Returns

`fn`

▸ (`req`, `res`, `next`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

##### Returns

`void`

#### Defined in

[src/libraries/requestContext.ts:27](https://github.com/Nitya-Pasrija/talawa-api/blob/d3a6af9/src/libraries/requestContext.ts#L27)

___

### setRequestContext

▸ **setRequestContext**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`void`

#### Defined in

[src/libraries/requestContext.ts:22](https://github.com/Nitya-Pasrija/talawa-api/blob/d3a6af9/src/libraries/requestContext.ts#L22)

___

### setRequestContextValue

▸ **setRequestContextValue**<`T`\>(`key`, `value`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `T` |

#### Returns

`T`

#### Defined in

[src/libraries/requestContext.ts:14](https://github.com/Nitya-Pasrija/talawa-api/blob/d3a6af9/src/libraries/requestContext.ts#L14)

___

### translate

▸ **translate**(`...args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`any`

#### Defined in

[src/libraries/requestContext.ts:61](https://github.com/Nitya-Pasrija/talawa-api/blob/d3a6af9/src/libraries/requestContext.ts#L61)

___

### translatePlural

▸ **translatePlural**(`...args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any` |

#### Returns

`any`

#### Defined in

[src/libraries/requestContext.ts:70](https://github.com/Nitya-Pasrija/talawa-api/blob/d3a6af9/src/libraries/requestContext.ts#L70)
