


# fetchOrgById method








[Future](https://api.flutter.dev/flutter/dart-async/Future-class.html) fetchOrgById
([String](https://api.flutter.dev/flutter/dart-core/String-class.html) id)





<p>This function fetch the organization using the <code>id</code> passed.</p>



## Implementation

```dart
Future<dynamic> fetchOrgById(String id) async {
  final QueryResult result = await clientNonAuth
      .mutate(MutationOptions(document: gql(_query.fetchOrgById(id))));
  // if there is an error or exception in [result]
  if (result.hasException) {
    final exception = encounteredExceptionOrError(result.exception!);
    if (exception!) {
      fetchOrgById(id);
    }
  } else if (result.data != null && result.isConcrete) {
    return OrgInfo.fromJson(
      result.data!['organizations'][0] as Map<String, dynamic>,
    );
  }
  return false;
}
```







