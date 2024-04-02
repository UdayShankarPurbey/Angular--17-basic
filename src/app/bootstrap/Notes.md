# Installation of Bootstrap
* when you try to add Bootstrap
``` 
ng add @ng-bootstrap/ng-bootstrap
```
this will show error like 

## Error

``` 
npm ERR! ERESOLVE could not resolve
npm ERR! 
npm ERR! While resolving: basic-01@0.0.0
npm ERR! Found: @angular/compiler@17.3.0
npm ERR! node_modules/@angular/compiler
npm ERR!   @angular/compiler@"^17.2.0" from the root project
npm ERR!   peer @angular/compiler@"17.3.0" from @angular/compiler-cli@17.3.0
npm ERR!   node_modules/@angular/compiler-cli
npm ERR!     dev @angular/compiler-cli@"^17.2.0" from the root project
npm ERR!     peer @angular/compiler-cli@"^17.0.0" from @angular-devkit/build-angular@17.3.0
npm ERR!     node_modules/@angular-devkit/build-angular   
npm ERR!       dev @angular-devkit/build-angular@"^17.2.1" from the root project
npm ERR!     1 more (@ngtools/webpack)
npm ERR!   1 more (@angular/platform-browser-dynamic)     
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! dev @angular/localize@"^17.2.0" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: @angular/compiler@17.3.1
npm ERR! node_modules/@angular/compiler
npm ERR!   peer @angular/compiler@"17.3.1" from @angular/localize@17.3.1
npm ERR!   node_modules/@angular/localize
npm ERR!     dev @angular/localize@"^17.2.0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry   
npm ERR! this command with --force or --legacy-peer-deps  
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!
```
## solution 
```
npm install --save --legacy-peer-deps @ng-bootstrap/ng-bootstrap
```