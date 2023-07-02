


# init method








void init
()








## Implementation

```dart
void init() {
  clientNonAuth = graphqlConfig.clientToQuery();
  clientAuth = graphqlConfig.authClient();
  _query = Queries();
}
```







