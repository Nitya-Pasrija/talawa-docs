[my-app](../README.md) / [Modules](../modules.md) / screens/OrgList/OrgListMocks

# Module: screens/OrgList/OrgListMocks

## Table of contents

### Variables

- [MOCKS](screens_OrgList_OrgListMocks.md#mocks)
- [MOCKS\_ADMIN](screens_OrgList_OrgListMocks.md#mocks_admin)
- [MOCKS\_EMPTY](screens_OrgList_OrgListMocks.md#mocks_empty)

## Variables

### MOCKS

• `Const` **MOCKS**: ({ `request`: { `query`: `DocumentNode` = ORGANIZATION\_CONNECTION\_LIST; `variables?`: `undefined`  } ; `result`: { `data`: { `organizationsConnection`: `InterfaceOrgConnectionInfoType`[] = organizations }  }  } \| { `request`: { `query`: `DocumentNode` = USER\_ORGANIZATION\_LIST; `variables`: { `id`: `string` = '123' }  } ; `result`: { `data`: `InterfaceUserType` = superAdminUser }  })[]

#### Defined in

[src/screens/OrgList/OrgListMocks.ts:80](https://github.com/Nitya-Pasrija/talawa-admin/blob/a743224/src/screens/OrgList/OrgListMocks.ts#L80)

___

### MOCKS\_ADMIN

• `Const` **MOCKS\_ADMIN**: ({ `request`: { `query`: `DocumentNode` = ORGANIZATION\_CONNECTION\_LIST; `variables?`: `undefined`  } ; `result`: { `data`: { `organizationsConnection`: `InterfaceOrgConnectionInfoType`[] = organizations }  }  } \| { `request`: { `query`: `DocumentNode` = USER\_ORGANIZATION\_LIST; `variables`: { `id`: `string` = '123' }  } ; `result`: { `data`: `InterfaceUserType` = adminUser }  })[]

#### Defined in

[src/screens/OrgList/OrgListMocks.ts:124](https://github.com/Nitya-Pasrija/talawa-admin/blob/a743224/src/screens/OrgList/OrgListMocks.ts#L124)

___

### MOCKS\_EMPTY

• `Const` **MOCKS\_EMPTY**: ({ `request`: { `query`: `DocumentNode` = ORGANIZATION\_CONNECTION\_LIST; `variables?`: `undefined`  } ; `result`: { `data`: { `organizationsConnection`: `never`[] = [] }  }  } \| { `request`: { `query`: `DocumentNode` = USER\_ORGANIZATION\_LIST; `variables`: { `id`: `string` = '123' }  } ; `result`: { `data`: `InterfaceUserType` = superAdminUser }  })[]

#### Defined in

[src/screens/OrgList/OrgListMocks.ts:101](https://github.com/Nitya-Pasrija/talawa-admin/blob/a743224/src/screens/OrgList/OrgListMocks.ts#L101)
