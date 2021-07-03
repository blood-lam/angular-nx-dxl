# xlsx-temp

xlsx-temp domain

## shell

application entry point

```sh
npx nx g @nrwl/angular:lib shell --directory=xlsx-temp --tags=scope:xlsx-temp,dtype:shell --routing --lazy --parent-module=[your application module path]
npx nx g component components/xlsx-temp-shell --project=xlsx-temp-shell
```

## feature

smart components

```sh
npx nx g @nrwl/angular:lib feature --directory=xlsx-temp --tags=scope:xlsx-temp,dtype:feature
# ngrx
npx nx g ngrx xlsx-temps --module=libs/xlsx-temp/feature/src/lib/xlsx-temp-feature.module.ts --facade --syntax=creators --directory=+state/xlsx-temps
```

## ui

simple dumb components

```sh
npx nx g @nrwl/angular:lib ui --directory=xlsx-temp --tags=scope:xlsx-temp,dtype:ui
```

## util

helper functions

```sh
npx nx g @nrwl/node:lib util --directory=xlsx-temp --tags=scope:xlsx-temp,dtype:util
```

## data-access

backend access api

```sh
npx nx g @nrwl/angular:lib data-access --directory=xlsx-temp --tags=scope:xlsx-temp,dtype:data-access
npx nx g service xlsx-temp/xlsx-temp --project=xlsx-temp-data-access
```

## mock

simply typescript library

```sh
npx nx g @nrwl/node:lib mock --directory=xlsx-temp --tags=scope:xlsx-temp,dtype:mock
```
