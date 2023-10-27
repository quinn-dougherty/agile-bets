{ pkgs ? import <nixpkgs> { } }:

with pkgs;

mkShell { buildInputs = [ typescript nodejs nodePackages.eslint ]; }
