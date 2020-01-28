# Problem with current Sequelize

```ts
// sequelize.d.ts
declare module 'sequelize' {
    interface CreateOptions {
        newKey?: string;
    }
}


// call
TestModel.create({
    ...
}, {
    newKey: 'this is still broken'
});
```

This will result in this error:

```
index.ts:18:5 - error TS2345: Argument of type '{ newKey: string; }' is not assignable to parameter of type 'CreateOptions & { returning: false; }'.
  Object literal may only specify known properties, and 'newKey' does not exist in type 'CreateOptions & { returning: false; }'.

18     newKey: 'this is still broken'
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

# Steps to repeat
    npm install
    node_modules/.bin/tsc


# Fix

Fix is rather simple, because Typescript is unable to apply module augmentation on anything that is re-exported with a star, we just export and write all of them by hand.