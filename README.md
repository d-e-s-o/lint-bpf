lint-bpf
========

A GitHub Action for linting your BPF C source code using
[`bpflint`][bpflint].

## Inputs

### `files`

**Required** A list of files to lint. Use `@<file>` syntax to include a
newline separated file list from `<file>`.

## Example usage

```yaml
uses: d-e-s-o/lint-bpf@main
with:
  files: <path-to-a-file...>
```

[bpflint]: https://github.com/d-e-s-o/bpflint
