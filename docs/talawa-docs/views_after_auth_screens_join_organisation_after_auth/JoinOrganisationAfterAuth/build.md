


# build method







- @[override](https://api.flutter.dev/flutter/dart-core/override-constant.html)

[Widget](https://api.flutter.dev/flutter/widgets/Widget-class.html) build
([BuildContext](https://api.flutter.dev/flutter/widgets/BuildContext-class.html) context)

_<span class="feature">override</span>_



<p>Describes the part of the user interface represented by this widget.</p>
<p>The framework calls this method when this widget is inserted into the tree
in a given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> and when the dependencies of this widget change
(e.g., an <a href="https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html">InheritedWidget</a> referenced by this widget changes). This
method can potentially be called in every frame and should not have any side
effects beyond building a widget.</p>
<p>The framework replaces the subtree below this widget with the widget
returned by this method, either by updating the existing subtree or by
removing the subtree and inflating a new subtree, depending on whether the
widget returned by this method can update the root of the existing
subtree, as determined by calling <a href="https://api.flutter.dev/flutter/widgets/Widget/canUpdate.html">Widget.canUpdate</a>.</p>
<p>Typically implementations return a newly created constellation of widgets
that are configured with information from this widget's constructor and
from the given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>.</p>
<p>The given <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a> contains information about the location in the
tree at which this widget is being built. For example, the context
provides the set of inherited widgets for this location in the tree. A
given widget might be built with multiple different <a href="https://api.flutter.dev/flutter/widgets/BuildContext-class.html">BuildContext</a>
arguments over time if the widget is moved around the tree or if the
widget is inserted into the tree in multiple places at once.</p>
<p>The implementation of this method must only depend on:</p>
<ul>
<li>the fields of the widget, which themselves must not change over time,
and</li>
<li>any ambient state obtained from the <code>context</code> using
<a href="https://api.flutter.dev/flutter/widgets/BuildContext/dependOnInheritedWidgetOfExactType.html">BuildContext.dependOnInheritedWidgetOfExactType</a>.</li>
</ul>
<p>If a widget's <a href="../../views_after_auth_screens_join_organisation_after_auth/JoinOrganisationAfterAuth/build.md">build</a> method is to depend on anything else, use a
<a href="https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html">StatefulWidget</a> instead.</p>
<p>See also:</p>
<ul>
<li><a href="https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html">StatelessWidget</a>, which contains the discussion on performance considerations.</li>
</ul>



## Implementation

```dart
@override
Widget build(BuildContext context) {
  return BaseView<SelectOrganizationViewModel>(
    onModelReady: (model) => model.initialise(orgId),
    builder: (context, model, child) {
      return Scaffold(
        key: const Key('JoinOrgScreen'),
        // header for the widget
        appBar: AppBar(
          centerTitle: true,
          // title of the header.
          title: Text(
            AppLocalizations.of(context)!
                .strictTranslate('Join Organisation'),
            style: Theme.of(context).textTheme.titleLarge!.copyWith(
                  fontWeight: FontWeight.w600,
                  fontSize: 20,
                ),
          ),
          // action button for the option to join the organization using QR code.
          actions: [
            IconButton(
              icon: const Icon(
                Icons.qr_code_scanner,
                size: 30,
                semanticLabel: 'Join Organisation with QR',
              ),
              onPressed: () => scanQR(context, model),
            ),
          ],
        ),
        body: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 12, 12, 8),
              // Cupertino search textfield in flutter is ios style (like) searchTextfield.
              // A cupertinoSearchTextField widget lets us create a searchTextField in ios style.
              // It is used to display a text field where the user can type his search query.
              child: CupertinoSearchTextField(
                focusNode: model.searchFocus,
                controller: model.searchController,
                onChanged: (value) => model.setState(ViewState.idle),
                suffixMode: OverlayVisibilityMode.always,
                style: Theme.of(context).textTheme.headlineSmall,
                suffixIcon: const Icon(
                  CupertinoIcons.xmark_circle_fill,
                  size: 25,
                ),
                onSuffixTap: () {
                  model.searchController.clear();
                  model.organizations = [];
                  model.searchFocus.unfocus();
                  model.searching = false;
                  model.setState(ViewState.idle);
                },
              ),
            ),
            // if organization selected then renders the organization info in CustomListTile.
            model.selectedOrganization.id != '-1'
                ? ColoredBox(
                    color: Theme.of(context)
                        .colorScheme
                        .secondaryContainer
                        .withOpacity(0.2),
                    child: CustomListTile(
                      index: model.organizations
                          .indexOf(model.selectedOrganization),
                      type: TileType.org,
                      orgInfo: model.selectedOrganization,
                      onTapOrgInfo: (item) => model.selectOrg(item),
                      key: const Key('OrgSelItem'),
                      showIcon: true,
                    ),
                  )
                : const SizedBox(),
            const Padding(
              padding: EdgeInsets.symmetric(horizontal: 12.0),
              child: Divider(
                color: Colors.grey,
                thickness: 2.0,
              ),
            ),
            Expanded(
              // if model searching is under process then renders OrganizationSearchList widget
              // else renders OrganizationList widget.
              child: model.searching
                  ? OrganizationSearchList(model: model)
                  : OrganizationList(model: model),
            ),
            SizedBox(
              height: SizeConfig.screenHeight! * 0.0215,
            ),
            // if user selected the organization then renders the button to join the organization.
            model.selectedOrganization.id != '-1'
                ? Column(
                    children: [
                      RaisedRoundedButton(
                        buttonLabel: AppLocalizations.of(context)!
                            .strictTranslate('Join selected organisation'),
                        onTap: model.onTapJoin,
                        textColor: const Color(0xFF008A37),
                        key: const Key('JoinSelectedOrgButton'),
                        backgroundColor: Colors.white,
                      ),
                      SizedBox(
                        height: SizeConfig.screenHeight! * 0.0215,
                      ),
                    ],
                  )
                : const SizedBox(),
          ],
        ),
      );
    },
  );
}
```







