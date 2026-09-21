# @w6s/ffprobe-static

Static binaries for `ffprobe`, including a native Apple Silicon build.

This package is a compatibility fork of
<https://github.com/derhuerst/ffprobe-static>. It keeps the original
`{ path }` API and binary directory layout.

## Installation

Use the scoped package directly:

```sh
npm install @w6s/ffprobe-static
```

```js
var ffprobe = require('@w6s/ffprobe-static');
console.log(ffprobe.path);
```

To keep existing `require('ffprobe-static')` calls unchanged, install it with
an npm alias:

```json
{
  "dependencies": {
    "ffprobe-static": "npm:@w6s/ffprobe-static@^3.1.1"
  }
}
```

## Version notes

Supported platforms and architectures:

* macOS x64
* macOS arm64 (Apple Silicon)
* Linux x64 and ia32
* Windows x64 and ia32

The macOS arm64 binary is a native FFmpeg 4.4.8 build and requires macOS 11
or later. Its build configuration and checksums are recorded in
[`bin/darwin/arm64/BUILD_INFO.md`](bin/darwin/arm64/BUILD_INFO.md).

The other binaries are retained unchanged from the upstream 3.1.0 package.
Before publishing this fork, review the provenance warning for those retained
binaries in [`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md).

## Licensing

The JavaScript wrapper is MIT licensed. Bundled FFmpeg executables have their
own licenses based on their build configuration. See
[`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md) before redistribution.

## Acknowledgements

Special thanks to [eugeneware](https://github.com/eugeneware) for <https://github.com/eugeneware/ffmpeg-static>, which this is based upon.
