


# clientToQuery method








[GraphQLClient](https://pub.dev/documentation/graphql/5.1.3/graphql/GraphQLClient-class.html) clientToQuery
()








## Implementation

```dart
GraphQLClient clientToQuery() {
  //TODO: Implement websocket link from OrgUrl
  // final link = Link.split(
  //     (request) => request.isSubscription, webSocketLink, httpLink);
  return GraphQLClient(
    cache: GraphQLCache(partialDataPolicy: PartialDataCachePolicy.accept),
    link: httpLink,
  );
}
```







