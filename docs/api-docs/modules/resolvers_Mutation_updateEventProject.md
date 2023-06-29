[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Mutation/updateEventProject

# Module: resolvers/Mutation/updateEventProject

## Table of contents

### Functions

- [updateEventProject](resolvers_Mutation_updateEventProject.md#updateeventproject)

## Functions

### updateEventProject

▸ **updateEventProject**(`_parent`, `args`, `context`): `Promise`<[`InterfaceEventProject`](../interfaces/models_EventProject.InterfaceEventProject.md)\>

This function enables to update an event project.

**`Remarks`**

The following checks are done:
1. If the user exists.
2. If the event project exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_parent` | `any` | parent of current request |
| `args` | `any` | payload provided with the request |
| `context` | `any` | context of entire application |

#### Returns

`Promise`<[`InterfaceEventProject`](../interfaces/models_EventProject.InterfaceEventProject.md)\>

Updated event project.

#### Defined in

[src/resolvers/Mutation/updateEventProject.ts:20](https://github.com/Nitya-Pasrija/talawa-api/blob/d3a6af9/src/resolvers/Mutation/updateEventProject.ts#L20)
