# AngCore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# FAQ

## What is an NgModule?
See this accepted answer:
https://stackoverflow.com/questions/40393701/what-is-ngmodule-actually-in-angular

- In Angular, an NgModule allows you to bundle components, directives, pipes, and providers together into one re-usable module.
- An NgModule is analogous to a library DLL. It contains things that can be leveraged by other NgModules just by importing them. You can also make some things private to the NgModule so that noone can see them (except for components declared from the same NgModule) while other things can be made public.  This concept is called NgModule encapsulation.
- Components, directives, pipes are declared once (and only once) in an NgModule. A component/direcive/pipe cannot be declared in multiple modules.
- In component encapsulation, Components, directives, and pipes may be private to the NgModule (noone can see it except for components within the same module). Only exported components are visible to the client code using your module.
- Other NgModules can be imported by your NgModule to re-use its exported Modules/components.
- NgModules/component/directives/pipes can be exported by your module.  But only other NgModules can be imported into your module.
- An NgModule has 4 key properties: 
    - declarations
    - providers
    - imports
    - exports 
- Providers are different. They can be bundled with an NgModule, but they are not bound by the rules of component encapsulation.  These encapsulation rules only apply to components, directives, pipes, and other NgModules.
- Providers are registered with the closest injector (more on this later when we cover services)
