# JSON array values prefixer

Prefix all values of a JSON array

See [action.yml](./action.yml) for the list of `inputs` and `outputs`.

## Example usage

```yaml
prefix-secrets:
  name: Format secrets
  runs-on: ubuntu-latest
  steps:
    - name: Checkout
      uses: actions/checkout@v2

    - name: Format secrets
      id: task-definition
      uses: agendrix/json-values-prefixer@v1.0.0
      with:
        file_path: secrets/app.json
        key: key
        prefix: prefix
```
