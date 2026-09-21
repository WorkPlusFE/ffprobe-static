# macOS arm64 ffprobe build

- FFmpeg version: 4.4.8
- Source: <https://ffmpeg.org/releases/ffmpeg-4.4.8.tar.gz>
- Source SHA-256: `6fdb32cc5cd8a3651c0b4ab9970e99402dbae9f18729014ab7901b84dee6a9de`
- Binary SHA-256: `596d355d03b6e7530c4d19dd87fea056a31eb811443716a641b4c516562c0bc8`
- Architecture: arm64
- Minimum macOS version: 11.0
- Compiler: Apple clang 17.0.0
- SDK: macOS 26.0
- License: LGPL 2.1 or later

Configure command:

```sh
./configure \
  --prefix=/opt/ffprobe-static \
  --arch=arm64 \
  --cc=clang \
  --disable-debug \
  --disable-doc \
  --disable-ffmpeg \
  --disable-ffplay \
  --enable-ffprobe \
  --disable-shared \
  --enable-static \
  --disable-autodetect \
  --enable-securetransport \
  --extra-cflags=-mmacosx-version-min=11.0 \
  --extra-ldflags=-mmacosx-version-min=11.0
```

Build command:

```sh
make -j8 ffprobe
```

`--disable-autodetect` prevents dependencies on local package-manager
libraries. Secure Transport is enabled for HTTPS/TLS input support. The
resulting executable links only to libraries and frameworks supplied by macOS.
