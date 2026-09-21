# Licensing and third-party notices

The JavaScript wrapper in this package is licensed under the MIT License in
[`LICENSE`](LICENSE).

The bundled executables are builds of [FFmpeg](https://ffmpeg.org/) and are
not covered by the wrapper's MIT License. Their applicable license depends on
the options and third-party libraries used for each build.

## macOS arm64

`bin/darwin/arm64/ffprobe` was built from FFmpeg 4.4.8 without GPL or nonfree
components. It reports `LGPL version 2.1 or later`. The corresponding license
texts are included as:

- `bin/darwin/arm64/LICENSE.LGPLv2.1`
- `bin/darwin/arm64/LICENSE.LGPLv3`

See `bin/darwin/arm64/BUILD_INFO.md` for the source URL, checksums, compiler,
deployment target, and configure flags.

## Binaries retained from upstream

The binaries for macOS x64, Linux, and Windows are unchanged from the
upstream `ffprobe-static` 3.1.0 package at commit
`73b68af853c51b29037dccb9a4267d4342a6aa6a`. They identify themselves as
FFmpeg 4.0.2 builds configured with `--enable-gpl --enable-version3`, so they
are distributed under GPL version 3 or later. The GPLv3 text is included in
[`LICENSE.GPLv3`](LICENSE.GPLv3).

The retained binaries also enable a number of third-party libraries. The
original package did not include exact corresponding-source archives or
complete build provenance for those binaries. Anyone publishing this fork
must independently satisfy the GPL corresponding-source requirements and
audit the licenses of those linked libraries. The FFmpeg project's current
redistribution checklist is at <https://ffmpeg.org/legal.html>.
