[my-app](../README.md) / [Modules](../modules.md) / components/AdminNavbar/AdminNavbarMocks

# Module: components/AdminNavbar/AdminNavbarMocks

## Table of contents

### Variables

- [MOCKS](components_AdminNavbar_AdminNavbarMocks.md#mocks)
- [MOCKS\_WITH\_IMAGE](components_AdminNavbar_AdminNavbarMocks.md#mocks_with_image)

## Variables

### MOCKS

• `Const` **MOCKS**: { `request`: { `query`: `DocumentNode` = ORGANIZATIONS\_LIST } ; `result`: { `data`: { `organizations`: { `_id`: `number` = 1; `admins`: { `_id`: `string` = '123'; `email`: `string` = 'johndoe@gmail.com'; `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' } ; `apiUrl`: `string` = 'www.dummyWebsite.com'; `blockedUsers`: { `_id`: `string` = '789'; `email`: `string` = 'stevesmith@gmail.com'; `firstName`: `string` = 'Steve'; `lastName`: `string` = 'Smith' } ; `creator`: { `email`: `string` = ''; `firstName`: `string` = ''; `lastName`: `string` = '' } ; `description`: `string` = 'This is a Dummy Organization'; `image`: `string` = ''; `isPublic`: `boolean` = true; `location`: `string` = 'New Delhi'; `members`: { `_id`: `string` = '123'; `email`: `string` = 'johndoe@gmail.com'; `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' } ; `membershipRequests`: { `_id`: `string` = '456'; `user`: { `email`: `string` = 'samsmith@gmail.com'; `firstName`: `string` = 'Sam'; `lastName`: `string` = 'Smith' }  } ; `name`: `string` = 'Dummy Organization'; `spamCount`: { `_id`: `string` = '6954'; `groupchat`: { `_id`: `string` = '321'; `title`: `string` = 'Dummy' } ; `isReaded`: `boolean` = false; `user`: { `_id`: `string` = '878'; `email`: `string` = 'joeroot@gmail.com'; `firstName`: `string` = 'Joe'; `lastName`: `string` = 'Root' }  }[] ; `visibleInSearch`: `boolean` = false }[]  }  }  }[]

#### Defined in

[src/components/AdminNavbar/AdminNavbarMocks.ts:4](https://github.com/Nitya-Pasrija/talawa-admin/blob/a743224/src/components/AdminNavbar/AdminNavbarMocks.ts#L4)

___

### MOCKS\_WITH\_IMAGE

• `Const` **MOCKS\_WITH\_IMAGE**: { `request`: { `query`: `DocumentNode` = ORGANIZATIONS\_LIST } ; `result`: { `data`: { `organizations`: { `_id`: `number` = 1; `admins`: { `_id`: `string` = '123'; `email`: `string` = 'johndoe@gmail.com'; `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' } ; `apiUrl`: `string` = 'www.dummyWebsite.com'; `blockedUsers`: { `_id`: `string` = '789'; `email`: `string` = 'stevesmith@gmail.com'; `firstName`: `string` = 'Steve'; `lastName`: `string` = 'Smith' } ; `creator`: { `email`: `string` = ''; `firstName`: `string` = ''; `lastName`: `string` = '' } ; `description`: `string` = 'This is a Dummy Organization'; `image`: `string` = 'https://via.placeholder.com/45x45'; `isPublic`: `boolean` = true; `location`: `string` = 'New Delhi'; `members`: { `_id`: `string` = '123'; `email`: `string` = 'johndoe@gmail.com'; `firstName`: `string` = 'John'; `lastName`: `string` = 'Doe' } ; `membershipRequests`: { `_id`: `string` = '456'; `user`: { `email`: `string` = 'samsmith@gmail.com'; `firstName`: `string` = 'Sam'; `lastName`: `string` = 'Smith' }  } ; `name`: `string` = 'Dummy Organization'; `spamCount`: { `_id`: `string` = '6954'; `groupchat`: { `_id`: `string` = '321'; `title`: `string` = 'Dummy' } ; `isReaded`: `boolean` = false; `user`: { `_id`: `string` = '878'; `email`: `string` = 'joeroot@gmail.com'; `firstName`: `string` = 'Joe'; `lastName`: `string` = 'Root' }  }[] ; `visibleInSearch`: `boolean` = false }[]  }  }  }[]

#### Defined in

[src/components/AdminNavbar/AdminNavbarMocks.ts:76](https://github.com/Nitya-Pasrija/talawa-admin/blob/a743224/src/components/AdminNavbar/AdminNavbarMocks.ts#L76)
