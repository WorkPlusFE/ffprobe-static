var tape = require('tape');
var fs = require('fs');
var path = require('path');
var childProcess = require('child_process');
var ffprobe = require('..');
var darwinArm64Binary = path.join(__dirname, '..', 'bin', 'darwin', 'arm64', 'ffprobe');

tape('ffprobe path should exist on fs', function (t) {
  var stats = fs.statSync(ffprobe.path);
  t.ok(stats.isFile(ffprobe.path));
  t.end();
});

tape('darwin arm64 binary should be an arm64 Mach-O executable', function (t) {
  var header = Buffer.alloc(8);
  var fd = fs.openSync(darwinArm64Binary, 'r');

  fs.readSync(fd, header, 0, header.length, 0);
  fs.closeSync(fd);

  t.equal(header.readUInt32LE(0), 0xfeedfacf, 'has a 64-bit Mach-O header');
  t.equal(header.readUInt32LE(4), 0x0100000c, 'declares the ARM64 CPU type');
  t.end();
});

tape('darwin arm64 binary should support HTTPS inputs', function (t) {
  var canRunArm64 = process.platform === 'darwin' &&
    childProcess.spawnSync('/usr/bin/arch', ['-arm64', '/usr/bin/true']).status === 0;

  if (!canRunArm64) {
    t.skip('requires a macOS arm64 host');
    t.end();
    return;
  }

  var output = childProcess.execFileSync('/usr/bin/arch', [
    '-arm64',
    darwinArm64Binary,
    '-hide_banner',
    '-protocols'
  ], { encoding: 'utf8' });

  t.match(output, /^\s+https$/m, 'lists the HTTPS protocol');
  t.end();
});
