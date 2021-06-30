# [example]
[example] domain
## shell
application entry point
```sh
npx nx g @nrwl/angular:lib shell --directory=[example] --tags=scope:[example],dtype:shell --routing --lazy --parent-module=[your application module path]
npx nx g component components/[example]-shell --project=[example]-shell
```
## feature
smart components
```sh
npx nx g @nrwl/angular:lib feature --directory=[example] --tags=scope:[example],dtype:feature
# ngrx
npx nx g ngrx [example]s --module=libs/[example]/feature/src/lib/[example]-feature.module.ts --facade --syntax=creators --directory=+state/[example]s
```
## ui
simple dumb components
```sh
npx nx g @nrwl/angular:lib ui --directory=[example] --tags=scope:[example],dtype:ui
```
## util
helper functions
```sh
npx nx g @nrwl/node:lib util --directory=[example] --tags=scope:[example],dtype:util
```
## data-access
backend access api
```sh
npx nx g @nrwl/angular:lib data-access --directory=[example] --tags=scope:[example],dtype:data-access
npx nx g service [example]/[example] --project=[example]-data-access
```
## mock
simply typescript library
```sh
npx nx g @nrwl/node:lib mock --directory=[example] --tags=scope:[example],dtype:mock
