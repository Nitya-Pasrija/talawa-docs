[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/Query/tasksByEvent

# Module: resolvers/Query/tasksByEvent

## Table of contents

### Variables

- [tasksByEvent](resolvers_Query_tasksByEvent.md#tasksbyevent)

## Variables

### tasksByEvent

• `Const` **tasksByEvent**: [`QueryResolvers`](types_generatedGraphQLTypes.md#queryresolvers)[``"tasksByEvent"``]

This query will fetch the list of tasks for an Event in specified order from database.

**`Param`**

**`Param`**

An object that contains `id` of an Event and `orderBy`.

**`Remarks`**

The query function uses `getSort()` function to sort the data in specified.

#### Defined in

[src/resolvers/Query/tasksByEvent.ts:11](https://github.com/Nitya-Pasrija/talawa-api/blob/faae1c9/src/resolvers/Query/tasksByEvent.ts#L11)
