[talawa-api](../README.md) / [Exports](../modules.md) / utilities/auth

# Module: utilities/auth

## Table of contents

### Interfaces

- [InterfaceJwtTokenPayload](../interfaces/utilities_auth.InterfaceJwtTokenPayload.md)

### Functions

- [createAccessToken](utilities_auth.md#createaccesstoken)
- [createRefreshToken](utilities_auth.md#createrefreshtoken)

## Functions

### createAccessToken

▸ **createAccessToken**(`user`): `string`

This function creates a json web token which expires in 15 minutes.
It signs the given payload(user data) into a JSON Web Token string payload.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | [`InterfaceUser`](../interfaces/models_User.InterfaceUser.md) | User data |

#### Returns

`string`

JSON Web Token string payload

#### Defined in

[src/utilities/auth.ts:18](https://github.com/Nitya-Pasrija/talawa-api/blob/faae1c9/src/utilities/auth.ts#L18)

___

### createRefreshToken

▸ **createRefreshToken**(`user`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`InterfaceUser`](../interfaces/models_User.InterfaceUser.md) |

#### Returns

`string`

#### Defined in

[src/utilities/auth.ts:34](https://github.com/Nitya-Pasrija/talawa-api/blob/faae1c9/src/utilities/auth.ts#L34)
