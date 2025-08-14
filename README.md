lint-bpf
========

A GitHub Action for linting your BPF C source code using
[`bpflint`][bpflint].

## Inputs

### `args`

**Required** A list of arguments to pass to the `bpflinter` CLI.
Positional arguments are treated as file names to lint. Use `@<file>`
syntax to include a newline separated file list from `<file>`. Refer to
[`bpflinter` USAGE information][bpflinter-usage] for additional details.


## Example usage

```yaml
uses: d-e-s-o/lint-bpf@v0.1.0
with:
  args: <list-of-arguments...>
```

Please note that only Linux runners are supported at the moment.

[bpflint]: https://github.com/d-e-s-o/bpflint
[bpflinter-usage]: https://github.com/d-e-s-o/bpflint/blob/main/cli/USAGE.md
