[talawa-api](../README.md) / [Exports](../modules.md) / constants

# Module: constants

## Table of contents

### Variables

- [ACCESS\_TOKEN\_SECRET](constants.md#access_token_secret)
- [ADMIN\_REMOVING\_ADMIN](constants.md#admin_removing_admin)
- [ADMIN\_REMOVING\_CREATOR](constants.md#admin_removing_creator)
- [BASE\_URL](constants.md#base_url)
- [CHAT\_NOT\_FOUND\_ERROR](constants.md#chat_not_found_error)
- [COMMENT\_NOT\_FOUND\_ERROR](constants.md#comment_not_found_error)
- [EMAIL\_ALREADY\_EXISTS\_ERROR](constants.md#email_already_exists_error)
- [ERROR\_IN\_SENDING\_MAIL](constants.md#error_in_sending_mail)
- [EVENT\_NOT\_FOUND\_ERROR](constants.md#event_not_found_error)
- [EVENT\_PROJECT\_NOT\_FOUND\_ERROR](constants.md#event_project_not_found_error)
- [INCORRECT\_TAG\_INPUT](constants.md#incorrect_tag_input)
- [INTERNAL\_SERVER\_ERROR](constants.md#internal_server_error)
- [INVALID\_CREDENTIALS\_ERROR](constants.md#invalid_credentials_error)
- [INVALID\_FILE\_TYPE](constants.md#invalid_file_type)
- [INVALID\_OTP](constants.md#invalid_otp)
- [INVALID\_REFRESH\_TOKEN\_ERROR](constants.md#invalid_refresh_token_error)
- [INVALID\_TAG\_INPUT](constants.md#invalid_tag_input)
- [IN\_PRODUCTION](constants.md#in_production)
- [LAST\_RESORT\_SUPERADMIN\_EMAIL](constants.md#last_resort_superadmin_email)
- [LENGTH\_VALIDATION\_ERROR](constants.md#length_validation_error)
- [MAIL\_PASSWORD](constants.md#mail_password)
- [MAIL\_USERNAME](constants.md#mail_username)
- [MEMBERSHIP\_REQUEST\_ALREADY\_EXISTS](constants.md#membership_request_already_exists)
- [MEMBERSHIP\_REQUEST\_NOT\_FOUND\_ERROR](constants.md#membership_request_not_found_error)
- [MEMBER\_NOT\_FOUND\_ERROR](constants.md#member_not_found_error)
- [MONGO\_DB\_URL](constants.md#mongo_db_url)
- [NO\_CHANGE\_IN\_TAG\_NAME](constants.md#no_change_in_tag_name)
- [ORGANIZATION\_IMAGE\_NOT\_FOUND\_ERROR](constants.md#organization_image_not_found_error)
- [ORGANIZATION\_MEMBER\_NOT\_FOUND\_ERROR](constants.md#organization_member_not_found_error)
- [ORGANIZATION\_NOT\_AUTHORIZED\_ERROR](constants.md#organization_not_authorized_error)
- [ORGANIZATION\_NOT\_FOUND\_ERROR](constants.md#organization_not_found_error)
- [POST\_NOT\_FOUND\_ERROR](constants.md#post_not_found_error)
- [RECAPTCHA\_SECRET\_KEY](constants.md#recaptcha_secret_key)
- [REFRESH\_TOKEN\_SECRET](constants.md#refresh_token_secret)
- [REGEX\_VALIDATION\_ERROR](constants.md#regex_validation_error)
- [REGISTRANT\_ALREADY\_EXIST\_ERROR](constants.md#registrant_already_exist_error)
- [SAME\_FILE\_ERROR](constants.md#same_file_error)
- [SMTP\_OPTIONS](constants.md#smtp_options)
- [STATUS\_ACTIVE](constants.md#status_active)
- [SUPERADMIN\_CANT\_CHANGE\_OWN\_ROLE](constants.md#superadmin_cant_change_own_role)
- [TAG\_ALREADY\_EXISTS](constants.md#tag_already_exists)
- [TAG\_NOT\_FOUND](constants.md#tag_not_found)
- [TASK\_NOT\_FOUND\_ERROR](constants.md#task_not_found_error)
- [TRANSLATION\_ALREADY\_PRESENT\_ERROR](constants.md#translation_already_present_error)
- [UNAUTHENTICATED\_ERROR](constants.md#unauthenticated_error)
- [URL](constants.md#url)
- [USER\_ALREADY\_HAS\_TAG](constants.md#user_already_has_tag)
- [USER\_ALREADY\_MEMBER\_ERROR](constants.md#user_already_member_error)
- [USER\_ALREADY\_UNREGISTERED\_ERROR](constants.md#user_already_unregistered_error)
- [USER\_BLOCKING\_SELF](constants.md#user_blocking_self)
- [USER\_DOES\_NOT\_BELONG\_TO\_TAGS\_ORGANIZATION](constants.md#user_does_not_belong_to_tags_organization)
- [USER\_DOES\_NOT\_HAVE\_THE\_TAG](constants.md#user_does_not_have_the_tag)
- [USER\_NOT\_AUTHORIZED\_ADMIN](constants.md#user_not_authorized_admin)
- [USER\_NOT\_AUTHORIZED\_ERROR](constants.md#user_not_authorized_error)
- [USER\_NOT\_AUTHORIZED\_SUPERADMIN](constants.md#user_not_authorized_superadmin)
- [USER\_NOT\_AUTHORIZED\_TO\_CREATE\_TAG](constants.md#user_not_authorized_to_create_tag)
- [USER\_NOT\_AUTHORIZED\_TO\_PIN](constants.md#user_not_authorized_to_pin)
- [USER\_NOT\_FOUND\_ERROR](constants.md#user_not_found_error)
- [USER\_NOT\_ORGANIZATION\_ADMIN](constants.md#user_not_organization_admin)
- [USER\_PROFILE\_IMAGE\_NOT\_FOUND\_ERROR](constants.md#user_profile_image_not_found_error)
- [USER\_REMOVING\_SELF](constants.md#user_removing_self)
- [apiKey](constants.md#apikey)
- [appId](constants.md#appid)
- [iOSapiKey](constants.md#iosapikey)
- [iOSappId](constants.md#iosappid)
- [iOSmessagingSenderId](constants.md#iosmessagingsenderid)
- [iOSprojectId](constants.md#iosprojectid)
- [iOSstorageBucket](constants.md#iosstoragebucket)
- [iosBundleId](constants.md#iosbundleid)
- [iosClientId](constants.md#iosclientid)
- [messagingSenderId](constants.md#messagingsenderid)
- [projectId](constants.md#projectid)
- [storageBucket](constants.md#storagebucket)

## Variables

### ACCESS\_TOKEN\_SECRET

• `Const` **ACCESS\_TOKEN\_SECRET**: `undefined` \| `string` = `ENV.ACCESS_TOKEN_SECRET`

#### Defined in

[src/constants.ts:313](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L313)

___

### ADMIN\_REMOVING\_ADMIN

• `Const` **ADMIN\_REMOVING\_ADMIN**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:156](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L156)

___

### ADMIN\_REMOVING\_CREATOR

• `Const` **ADMIN\_REMOVING\_CREATOR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:162](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L162)

___

### BASE\_URL

• `Const` **BASE\_URL**: `string`

#### Defined in

[src/constants.ts:311](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L311)

___

### CHAT\_NOT\_FOUND\_ERROR

• `Const` **CHAT\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:9](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L9)

___

### COMMENT\_NOT\_FOUND\_ERROR

• `Const` **COMMENT\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:15](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L15)

___

### EMAIL\_ALREADY\_EXISTS\_ERROR

• `Const` **EMAIL\_ALREADY\_EXISTS\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:304](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L304)

___

### ERROR\_IN\_SENDING\_MAIL

• `Const` **ERROR\_IN\_SENDING\_MAIL**: ``"Error in sending mail"``

#### Defined in

[src/constants.ts:21](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L21)

___

### EVENT\_NOT\_FOUND\_ERROR

• `Const` **EVENT\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:22](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L22)

___

### EVENT\_PROJECT\_NOT\_FOUND\_ERROR

• `Const` **EVENT\_PROJECT\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:28](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L28)

___

### INCORRECT\_TAG\_INPUT

• `Const` **INCORRECT\_TAG\_INPUT**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:195](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L195)

___

### INTERNAL\_SERVER\_ERROR

• `Const` **INTERNAL\_SERVER\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:101](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L101)

___

### INVALID\_CREDENTIALS\_ERROR

• `Const` **INVALID\_CREDENTIALS\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:286](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L286)

___

### INVALID\_FILE\_TYPE

• `Const` **INVALID\_FILE\_TYPE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:89](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L89)

___

### INVALID\_OTP

• `Const` **INVALID\_OTP**: ``"Invalid OTP"``

#### Defined in

[src/constants.ts:34](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L34)

___

### INVALID\_REFRESH\_TOKEN\_ERROR

• `Const` **INVALID\_REFRESH\_TOKEN\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:292](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L292)

___

### INVALID\_TAG\_INPUT

• `Const` **INVALID\_TAG\_INPUT**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:188](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L188)

___

### IN\_PRODUCTION

• `Const` **IN\_PRODUCTION**: `boolean`

#### Defined in

[src/constants.ts:36](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L36)

___

### LAST\_RESORT\_SUPERADMIN\_EMAIL

• `Const` **LAST\_RESORT\_SUPERADMIN\_EMAIL**: `undefined` \| `string` = `process.env.LAST_RESORT_SUPERADMIN_EMAIL`

#### Defined in

[src/constants.ts:349](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L349)

___

### LENGTH\_VALIDATION\_ERROR

• `Const` **LENGTH\_VALIDATION\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:113](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L113)

___

### MAIL\_PASSWORD

• `Const` **MAIL\_PASSWORD**: `undefined` \| `string` = `ENV.MAIL_PASSWORD`

#### Defined in

[src/constants.ts:323](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L323)

___

### MAIL\_USERNAME

• `Const` **MAIL\_USERNAME**: `undefined` \| `string` = `ENV.MAIL_USERNAME`

#### Defined in

[src/constants.ts:321](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L321)

___

### MEMBERSHIP\_REQUEST\_ALREADY\_EXISTS

• `Const` **MEMBERSHIP\_REQUEST\_ALREADY\_EXISTS**: ``"Membership Request already exists"``

#### Defined in

[src/constants.ts:49](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L49)

___

### MEMBERSHIP\_REQUEST\_NOT\_FOUND\_ERROR

• `Const` **MEMBERSHIP\_REQUEST\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:43](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L43)

___

### MEMBER\_NOT\_FOUND\_ERROR

• `Const` **MEMBER\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:37](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L37)

___

### MONGO\_DB\_URL

• `Const` **MONGO\_DB\_URL**: `undefined` \| `string` = `ENV.MONGO_DB_URL`

#### Defined in

[src/constants.ts:317](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L317)

___

### NO\_CHANGE\_IN\_TAG\_NAME

• `Const` **NO\_CHANGE\_IN\_TAG\_NAME**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:201](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L201)

___

### ORGANIZATION\_IMAGE\_NOT\_FOUND\_ERROR

• `Const` **ORGANIZATION\_IMAGE\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:70](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L70)

___

### ORGANIZATION\_MEMBER\_NOT\_FOUND\_ERROR

• `Const` **ORGANIZATION\_MEMBER\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:52](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L52)

___

### ORGANIZATION\_NOT\_AUTHORIZED\_ERROR

• `Const` **ORGANIZATION\_NOT\_AUTHORIZED\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:58](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L58)

___

### ORGANIZATION\_NOT\_FOUND\_ERROR

• `Const` **ORGANIZATION\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:64](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L64)

___

### POST\_NOT\_FOUND\_ERROR

• `Const` **POST\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:76](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L76)

___

### RECAPTCHA\_SECRET\_KEY

• `Const` **RECAPTCHA\_SECRET\_KEY**: `undefined` \| `string` = `ENV.RECAPTCHA_SECRET_KEY`

#### Defined in

[src/constants.ts:319](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L319)

___

### REFRESH\_TOKEN\_SECRET

• `Const` **REFRESH\_TOKEN\_SECRET**: `undefined` \| `string` = `ENV.REFRESH_TOKEN_SECRET`

#### Defined in

[src/constants.ts:315](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L315)

___

### REGEX\_VALIDATION\_ERROR

• `Const` **REGEX\_VALIDATION\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:119](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L119)

___

### REGISTRANT\_ALREADY\_EXIST\_ERROR

• `Const` **REGISTRANT\_ALREADY\_EXIST\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:82](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L82)

___

### SAME\_FILE\_ERROR

• `Const` **SAME\_FILE\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:95](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L95)

___

### SMTP\_OPTIONS

• `Const` **SMTP\_OPTIONS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `IS_SMTP` | `undefined` \| `string` |
| `SMTP_HOST` | `undefined` \| `string` |
| `SMTP_PASSWORD` | `undefined` \| `string` |
| `SMTP_PORT` | `undefined` \| `string` |
| `SMTP_SSL_TLS` | `undefined` \| `string` |
| `SMTP_USERNAME` | `undefined` \| `string` |

#### Defined in

[src/constants.ts:352](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L352)

___

### STATUS\_ACTIVE

• `Const` **STATUS\_ACTIVE**: ``"ACTIVE"``

#### Defined in

[src/constants.ts:243](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L243)

___

### SUPERADMIN\_CANT\_CHANGE\_OWN\_ROLE

• `Const` **SUPERADMIN\_CANT\_CHANGE\_OWN\_ROLE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:274](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L274)

___

### TAG\_ALREADY\_EXISTS

• `Const` **TAG\_ALREADY\_EXISTS**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:208](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L208)

___

### TAG\_NOT\_FOUND

• `Const` **TAG\_NOT\_FOUND**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:175](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L175)

___

### TASK\_NOT\_FOUND\_ERROR

• `Const` **TASK\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:236](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L236)

___

### TRANSLATION\_ALREADY\_PRESENT\_ERROR

• `Const` **TRANSLATION\_ALREADY\_PRESENT\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:280](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L280)

___

### UNAUTHENTICATED\_ERROR

• `Const` **UNAUTHENTICATED\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:107](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L107)

___

### URL

• `Const` **URL**: ``"http://localhost:4000/graphql"`` \| ``"http://calico.palisadoes.org/talawa/graphql"``

#### Defined in

[src/constants.ts:245](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L245)

___

### USER\_ALREADY\_HAS\_TAG

• `Const` **USER\_ALREADY\_HAS\_TAG**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:222](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L222)

___

### USER\_ALREADY\_MEMBER\_ERROR

• `Const` **USER\_ALREADY\_MEMBER\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:250](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L250)

___

### USER\_ALREADY\_UNREGISTERED\_ERROR

• `Const` **USER\_ALREADY\_UNREGISTERED\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:256](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L256)

___

### USER\_BLOCKING\_SELF

• `Const` **USER\_BLOCKING\_SELF**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:143](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L143)

___

### USER\_DOES\_NOT\_BELONG\_TO\_TAGS\_ORGANIZATION

• `Const` **USER\_DOES\_NOT\_BELONG\_TO\_TAGS\_ORGANIZATION**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:181](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L181)

___

### USER\_DOES\_NOT\_HAVE\_THE\_TAG

• `Const` **USER\_DOES\_NOT\_HAVE\_THE\_TAG**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:229](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L229)

___

### USER\_NOT\_AUTHORIZED\_ADMIN

• `Const` **USER\_NOT\_AUTHORIZED\_ADMIN**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:131](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L131)

___

### USER\_NOT\_AUTHORIZED\_ERROR

• `Const` **USER\_NOT\_AUTHORIZED\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:262](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L262)

___

### USER\_NOT\_AUTHORIZED\_SUPERADMIN

• `Const` **USER\_NOT\_AUTHORIZED\_SUPERADMIN**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:125](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L125)

___

### USER\_NOT\_AUTHORIZED\_TO\_CREATE\_TAG

• `Const` **USER\_NOT\_AUTHORIZED\_TO\_CREATE\_TAG**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:215](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L215)

___

### USER\_NOT\_AUTHORIZED\_TO\_PIN

• `Const` **USER\_NOT\_AUTHORIZED\_TO\_PIN**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:168](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L168)

___

### USER\_NOT\_FOUND\_ERROR

• `Const` **USER\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:268](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L268)

___

### USER\_NOT\_ORGANIZATION\_ADMIN

• `Const` **USER\_NOT\_ORGANIZATION\_ADMIN**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:137](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L137)

___

### USER\_PROFILE\_IMAGE\_NOT\_FOUND\_ERROR

• `Const` **USER\_PROFILE\_IMAGE\_NOT\_FOUND\_ERROR**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `DESC` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:298](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L298)

___

### USER\_REMOVING\_SELF

• `Const` **USER\_REMOVING\_SELF**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CODE` | `string` |
| `MESSAGE` | `string` |
| `PARAM` | `string` |

#### Defined in

[src/constants.ts:149](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L149)

___

### apiKey

• `Const` **apiKey**: `undefined` \| `string` = `ENV.apiKey`

#### Defined in

[src/constants.ts:325](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L325)

___

### appId

• `Const` **appId**: `undefined` \| `string` = `ENV.appId`

#### Defined in

[src/constants.ts:327](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L327)

___

### iOSapiKey

• `Const` **iOSapiKey**: `undefined` \| `string` = `ENV.iOSapiKey`

#### Defined in

[src/constants.ts:335](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L335)

___

### iOSappId

• `Const` **iOSappId**: `undefined` \| `string` = `ENV.iOSappId`

#### Defined in

[src/constants.ts:337](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L337)

___

### iOSmessagingSenderId

• `Const` **iOSmessagingSenderId**: `undefined` \| `string` = `ENV.iOSmessagingSenderId`

#### Defined in

[src/constants.ts:339](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L339)

___

### iOSprojectId

• `Const` **iOSprojectId**: `undefined` \| `string` = `ENV.iOSprojectId`

#### Defined in

[src/constants.ts:341](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L341)

___

### iOSstorageBucket

• `Const` **iOSstorageBucket**: `undefined` \| `string` = `ENV.iOSstorageBucket`

#### Defined in

[src/constants.ts:343](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L343)

___

### iosBundleId

• `Const` **iosBundleId**: `undefined` \| `string` = `ENV.iosBundleId`

#### Defined in

[src/constants.ts:347](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L347)

___

### iosClientId

• `Const` **iosClientId**: `undefined` \| `string` = `ENV.iosClientId`

#### Defined in

[src/constants.ts:345](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L345)

___

### messagingSenderId

• `Const` **messagingSenderId**: `undefined` \| `string` = `ENV.messagingSenderId`

#### Defined in

[src/constants.ts:329](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L329)

___

### projectId

• `Const` **projectId**: `undefined` \| `string` = `ENV.projectId`

#### Defined in

[src/constants.ts:331](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L331)

___

### storageBucket

• `Const` **storageBucket**: `undefined` \| `string` = `ENV.storageBucket`

#### Defined in

[src/constants.ts:333](https://github.com/Nitya-Pasrija/talawa-api/blob/80ec51a/src/constants.ts#L333)
