[talawa-api](../README.md) / [Exports](../modules.md) / utilities/mailer

# Module: utilities/mailer

## Table of contents

### Interfaces

- [InterfaceMailFields](../interfaces/utilities_mailer.InterfaceMailFields.md)

### Functions

- [mailer](utilities_mailer.md#mailer)

## Functions

### mailer

▸ **mailer**(`mailFields`): `Promise`<`any`\>

This function sends emails to the specified user using the node mailer module.

**`Remarks`**

This is a utility method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mailFields` | [`InterfaceMailFields`](../interfaces/utilities_mailer.InterfaceMailFields.md) |

#### Returns

`Promise`<`any`\>

Promise along with resolve and reject methods.

#### Defined in

[src/utilities/mailer.ts:23](https://github.com/Nitya-Pasrija/talawa-api/blob/d3a6af9/src/utilities/mailer.ts#L23)
