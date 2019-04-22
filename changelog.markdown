# 2.0.0

- Added relaxed JSON parsing that returns `null` when `undefined`, raw input for non-JSON data
- Added `.backend` method
- Added TypeScript typings
- Improved documentation

# 1.4.1

Fix a bug where `local-storage` would throw in IE when using the `file://` protocol

# 1.4.0 Clear Skies

- Added `.clear` method

# 1.3.1 Pony Up

- Added to Bower registry as `localstorage`

# 1.2.0 Pigtails

- Fixed a bug which prevented the change tracking API from parsing the JSON values in localStorage

# 1.1.1 Meltdown

- Fixed a bug in change tracking API where exceptions would be thrown

# 1.1.0 Band of Brothers

- `ls.set` traps `QuotaExceededError` exceptions
- `ls.set` returns whether persistance was succesful

# 1.0.0 IPO

- Initial Public Release
